// Genera covers JPG 1200x630 para Open Graph de los posts (los scrapers de
// WhatsApp/LinkedIn no soportan webp) + recomprime public/logo.png a <60KB.
import sharp from 'sharp';
import { mkdirSync, statSync, unlinkSync, existsSync, renameSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'c:/Users/nombr/Documents/GitHub/proyecto-web';
const OUT = join(ROOT, 'public', 'blog-og');
mkdirSync(OUT, { recursive: true });

const MAP = [
  ['why-your-business-needs-a-website', 'blog-business-website.webp'],
  ['local-seo-rank-number-one-city-google', 'blog-local-seo-google.webp'],
  ['ai-chatbots-24-7-sales-tool', 'blog-ai-chatbots.webp'],
  ['launch-online-store-7-days', 'blog-online-store.webp'],
  ['web-performance-core-web-vitals', 'blog-web-performance.webp'],
  ['mobile-first-design-strategy', 'blog-mobile-first.webp'],
];

for (const [slug, file] of MAP) {
  const src = join(ROOT, 'src', 'assets', file);
  const dst = join(OUT, `${slug}.jpg`);
  await sharp(src).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 78, mozjpeg: true }).toFile(dst);
  console.log(`${slug}.jpg -> ${(statSync(dst).size / 1024).toFixed(1)}KB`);
}

// logo.png: 126KB -> objetivo <60KB (paleta + compresion maxima, mantiene 512px y transparencia)
const logo = join(ROOT, 'public', 'logo.png');
const tmp = logo + '.tmp';
await sharp(logo).png({ palette: true, quality: 80, compressionLevel: 9, effort: 10 }).toFile(tmp);
const before = statSync(logo).size, after = statSync(tmp).size;
if (after < before) { unlinkSync(logo); renameSync(tmp, logo); } else { unlinkSync(tmp); }
console.log(`logo.png: ${(before/1024).toFixed(1)}KB -> ${(statSync(logo).size/1024).toFixed(1)}KB`);

// og-image.webp huerfano: eliminar
const orphan = join(ROOT, 'public', 'og-image.webp');
if (existsSync(orphan)) { unlinkSync(orphan); console.log('og-image.webp eliminado (huerfano)'); }
