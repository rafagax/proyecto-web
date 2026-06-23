// One-off: remove the solid black background from the bot render and write a
// transparent, downscaled PNG. Uses edge flood-fill so interior dark areas
// (the screen face) are preserved, plus a brightness feather to kill the dark
// fringe. Pure JS (pngjs) — no native deps.
const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const SRC = process.argv[2] || 'src/assets/originalchatbot-imagen.png';
const OUT = process.argv[3] || 'src/assets/ia-bot-transparent.png';
const BG_T = 70;       // a pixel is "background" if max(r,g,b) < BG_T
const FEATHER_T = 115; // opaque edge pixels darker than this get reduced alpha
const TARGET = 460;    // max output dimension

const png = PNG.sync.read(fs.readFileSync(SRC));
const { width: w, height: h, data } = png;
const isBg = (i) => data[i] < BG_T && data[i + 1] < BG_T && data[i + 2] < BG_T;

// Flood fill from every border pixel through connected near-black regions.
const visited = new Uint8Array(w * h);
const stack = [];
for (let x = 0; x < w; x++) { stack.push(x, 0); stack.push(x, h - 1); }
for (let y = 0; y < h; y++) { stack.push(0, y); stack.push(w - 1, y); }
while (stack.length) {
  const y = stack.pop(); const x = stack.pop();
  if (x < 0 || y < 0 || x >= w || y >= h) continue;
  const p = y * w + x;
  if (visited[p]) continue;
  if (!isBg(p * 4)) continue;
  visited[p] = 1;
  stack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1);
}
// Cut the background.
for (let p = 0; p < w * h; p++) if (visited[p]) data[p * 4 + 3] = 0;
// Feather: opaque pixels touching a cut pixel get alpha scaled by brightness.
for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
  const p = y * w + x; if (visited[p]) continue;
  const i = p * 4; if (data[i + 3] === 0) continue;
  let nearCut = false;
  if (x + 1 < w && visited[p + 1]) nearCut = true;
  else if (x - 1 >= 0 && visited[p - 1]) nearCut = true;
  else if (y + 1 < h && visited[p + w]) nearCut = true;
  else if (y - 1 >= 0 && visited[p - w]) nearCut = true;
  if (nearCut) {
    const b = Math.max(data[i], data[i + 1], data[i + 2]);
    if (b < FEATHER_T) data[i + 3] = Math.round(255 * (b / FEATHER_T));
  }
}

// Premultiplied-alpha downscale (avoids dark halos) to keep the asset light.
const scale = Math.min(1, TARGET / Math.max(w, h));
const nw = Math.max(1, Math.round(w * scale));
const nh = Math.max(1, Math.round(h * scale));
const out = new PNG({ width: nw, height: nh });
for (let y = 0; y < nh; y++) for (let x = 0; x < nw; x++) {
  const sx0 = Math.floor(x / scale), sx1 = Math.max(sx0 + 1, Math.floor((x + 1) / scale));
  const sy0 = Math.floor(y / scale), sy1 = Math.max(sy0 + 1, Math.floor((y + 1) / scale));
  let r = 0, g = 0, b = 0, a = 0, n = 0;
  for (let sy = sy0; sy < Math.min(h, sy1); sy++) for (let sx = sx0; sx < Math.min(w, sx1); sx++) {
    const i = (sy * w + sx) * 4; const al = data[i + 3] / 255;
    r += data[i] * al; g += data[i + 1] * al; b += data[i + 2] * al; a += data[i + 3]; n++;
  }
  const oi = (y * nw + x) * 4; const oa = a / n;
  if (oa > 0.5) {
    const aw = a / 255;
    out.data[oi] = Math.round(r / aw);
    out.data[oi + 1] = Math.round(g / aw);
    out.data[oi + 2] = Math.round(b / aw);
    out.data[oi + 3] = Math.round(oa);
  } else { out.data[oi] = out.data[oi + 1] = out.data[oi + 2] = out.data[oi + 3] = 0; }
}
fs.writeFileSync(OUT, PNG.sync.write(out));
const cut = visited.reduce((s, v) => s + v, 0);
console.log(`OK -> ${OUT}  (${nw}x${nh}, removed ${(100 * cut / (w * h)).toFixed(1)}% as background)`);
