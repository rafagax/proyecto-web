// Generates the Webraf favicon set from the square brand logo, replacing the
// template's generic lightning-bolt favicon.svg. Same art direction as
// apple-touch-icon: sq-dark logo composited on the brand navy so the mark stays
// legible on both light and dark browser chrome.
// Output: public/favicon-16.png, -32.png, -48.png and public/favicon.ico.
// Re-run with: node scripts/gen-favicons.mjs
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LOGO = join(ROOT, 'public', 'logos', 'webraf-sq-dark.webp');
const BG = '#0e1522'; // brand navy, matches apple-touch-icon

const SIZES = [16, 32, 48];
const pngPaths = [];

for (const size of SIZES) {
  // Logo occupies ~86% of the canvas so it doesn't touch the edges.
  const inner = Math.round(size * 0.86);
  const logo = await sharp(LOGO).resize(inner, inner, { fit: 'contain', background: BG }).png().toBuffer();
  const out = join(ROOT, 'public', `favicon-${size}.png`);
  await sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: logo, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  pngPaths.push(out);
  console.log(`favicon-${size}.png -> ${statSync(out).size} bytes`);
}

const ico = await pngToIco(pngPaths);
const icoPath = join(ROOT, 'public', 'favicon.ico');
writeFileSync(icoPath, ico);
console.log(`favicon.ico -> ${statSync(icoPath).size} bytes (16+32+48)`);
