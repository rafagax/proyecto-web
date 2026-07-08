// Optimize the static images that ship with every page and generate the social/
// iOS assets required by app/root.jsx (apple-touch-icon.png, og-image.jpg).
//
// Re-runnable: each step skips work when the file already meets its size target,
// so running it twice does not degrade quality through repeated recompression.
//
// Rendered sizes (source of truth, checked in the repo at the time of writing):
//   - Navbar horizontal logos (.navbar-logo .logo-h, src/App.css): 54px tall on
//     desktop. The logos are ~3:1, so 480px wide = 160px tall ≈ 3x retina.
//   - Navbar square logos (.navbar-logo .logo-sq, src/App.css): 40px tall on
//     mobile. 240px = 6x — generous headroom for high-DPR phones.
//   - Chatbot avatar (#ka-chatbot-toggle, src/components/Chatbot.css): 60px
//     button, image at 100%. 120px = 2x.
//
// Usage: node scripts/optimize-images.mjs

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const p = (...segs) => path.join(ROOT, ...segs);
const kb = (n) => `${(n / 1024).toFixed(1)} KB`;

/**
 * Run `transform` (buffer -> sharp pipeline) over `file` and overwrite it in
 * place. Skipped when the file is already at or under `maxBytes` AND its width
 * is at or under `maxWidth` (idempotency guard for re-runs).
 */
async function optimizeInPlace(file, { maxBytes, maxWidth, transform }) {
  const input = await readFile(file);
  const meta = await sharp(input).metadata();
  if (input.length <= maxBytes && meta.width <= maxWidth) {
    console.log(`skip  ${path.relative(ROOT, file)} — already ${kb(input.length)}, ${meta.width}px wide`);
    return;
  }
  const output = await transform(sharp(input));
  await writeFile(file, output);
  console.log(
    `write ${path.relative(ROOT, file)} — ${kb(input.length)} (${meta.width}x${meta.height}) -> ${kb(output.length)}`
  );
}

/** Post-write sanity check: file must be readable by sharp and non-empty. */
async function verify(file, label) {
  const buf = await readFile(file);
  const meta = await sharp(buf).metadata();
  if (!buf.length || !meta.width || !meta.height) {
    throw new Error(`Corrupt output: ${label} (${buf.length} bytes)`);
  }
  console.log(`ok    ${label}: ${meta.width}x${meta.height} ${meta.format}, ${kb(buf.length)}`);
}

// ---------------------------------------------------------------------------
// 1. Navbar logos (public/logos/webraf-*.webp) — downscale + recompress.
// ---------------------------------------------------------------------------
const H_LOGO_WIDTH = 480; // rendered 54px tall (~162px wide); 480px ≈ 3x retina
const SQ_LOGO_WIDTH = 240; // rendered 40px tall; 240px = 6x

for (const name of ['webraf-h-dark.webp', 'webraf-h-light.webp']) {
  await optimizeInPlace(p('public', 'logos', name), {
    maxBytes: 30 * 1024,
    maxWidth: H_LOGO_WIDTH,
    transform: (img) =>
      img
        .resize({ width: H_LOGO_WIDTH, withoutEnlargement: true })
        .webp({ quality: 82, alphaQuality: 90, effort: 6 })
        .toBuffer(),
  });
}

for (const name of ['webraf-sq-dark.webp', 'webraf-sq-light.webp']) {
  await optimizeInPlace(p('public', 'logos', name), {
    maxBytes: 30 * 1024,
    maxWidth: SQ_LOGO_WIDTH,
    transform: (img) =>
      img
        .resize({ width: SQ_LOGO_WIDTH, withoutEnlargement: true })
        .webp({ quality: 82, alphaQuality: 90, effort: 6 })
        .toBuffer(),
  });
}

// ---------------------------------------------------------------------------
// 2. Chatbot avatar (src/assets/ia-bot-transparent.png) — keep transparency,
//    2x the 60px render size.
// ---------------------------------------------------------------------------
await optimizeInPlace(p('src', 'assets', 'ia-bot-transparent.png'), {
  maxBytes: 30 * 1024,
  maxWidth: 120,
  transform: (img) =>
    img
      .resize({ width: 120, height: 120, fit: 'inside', withoutEnlargement: true })
      .png({ palette: true, quality: 90, compressionLevel: 9 })
      .toBuffer(),
});

// ---------------------------------------------------------------------------
// 3. public/logo.png — JSON-LD Organization logo; 512px max, recompressed.
// ---------------------------------------------------------------------------
await optimizeInPlace(p('public', 'logo.png'), {
  maxBytes: 60 * 1024,
  maxWidth: 512,
  transform: (img) =>
    img
      .resize({ width: 512, height: 512, fit: 'inside', withoutEnlargement: true })
      .png({ palette: true, quality: 90, compressionLevel: 9 })
      .toBuffer(),
});

// ---------------------------------------------------------------------------
// 4. public/apple-touch-icon.png — 180x180, solid background (iOS renders
//    transparency as black). webraf-sq-dark is the variant designed for dark
//    surfaces, so it sits on the site's dark navy (#0e1522).
// ---------------------------------------------------------------------------
{
  const BG = { r: 0x0e, g: 0x15, b: 0x22 };
  const logo = await readFile(p('public', 'logos', 'webraf-sq-dark.webp'));
  // Logo scaled into a 148px box, then padded to 180x180 so it doesn't touch
  // the icon edges once iOS rounds the corners.
  const inner = await sharp(logo)
    .resize({ width: 148, height: 148, fit: 'inside', withoutEnlargement: true })
    .toBuffer();
  const icon = await sharp({
    create: { width: 180, height: 180, channels: 3, background: BG },
  })
    .composite([{ input: inner, gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(p('public', 'apple-touch-icon.png'), icon);
  console.log(`write public/apple-touch-icon.png — ${kb(icon.length)}`);
}

// ---------------------------------------------------------------------------
// 5. public/og-image.jpg — 1200x630 JPEG for scrapers that don't take WebP
//    (LinkedIn et al.). Center-cropped from the portrait og-image.webp; the
//    source keeps the key artwork in the middle band. The .webp stays put.
// ---------------------------------------------------------------------------
{
  const src = await readFile(p('public', 'og-image.webp'));
  const jpg = await sharp(src)
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toBuffer();
  await writeFile(p('public', 'og-image.jpg'), jpg);
  console.log(`write public/og-image.jpg — ${kb(jpg.length)}`);
}

// ---------------------------------------------------------------------------
// Verify every touched file is readable and non-empty.
// ---------------------------------------------------------------------------
console.log('\n--- verify ---');
for (const [file, label] of [
  [p('public', 'logos', 'webraf-h-dark.webp'), 'public/logos/webraf-h-dark.webp'],
  [p('public', 'logos', 'webraf-h-light.webp'), 'public/logos/webraf-h-light.webp'],
  [p('public', 'logos', 'webraf-sq-dark.webp'), 'public/logos/webraf-sq-dark.webp'],
  [p('public', 'logos', 'webraf-sq-light.webp'), 'public/logos/webraf-sq-light.webp'],
  [p('src', 'assets', 'ia-bot-transparent.png'), 'src/assets/ia-bot-transparent.png'],
  [p('public', 'logo.png'), 'public/logo.png'],
  [p('public', 'apple-touch-icon.png'), 'public/apple-touch-icon.png'],
  [p('public', 'og-image.jpg'), 'public/og-image.jpg'],
]) {
  await verify(file, label);
}
console.log('done');
