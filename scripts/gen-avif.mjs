// scripts/gen-avif.mjs — AVIF companions + web-manifest icons. Re-runnable.
//
//   node scripts/gen-avif.mjs           # skips outputs already newer than their source
//   node scripts/gen-avif.mjs --force   # regenerates everything
//
// 1) AVIF: for every WebP listed below (the heaviest images — >45KB — used by the
//    Home hero/sections and the four service-detail pages), writes a sibling
//    `.avif` in src/assets. The pages consume them through
//    `<picture><source type="image/avif" srcSet={theAvif}/><img src={theWebp}.../></picture>`,
//    importing the .avif exactly like any Vite asset
//    (e.g. `import heroAvif from '../assets/Hero2.avif'`), so Vite fingerprints
//    them into /assets/ with the same pipeline as the .webp originals.
//    IMPORTANT: the source .webp files stay untouched — they are the <img> fallback.
//
// 2) Icons: renders public/icon-192.png and public/icon-512.png for
//    public/manifest.webmanifest from the square brand logo
//    (public/logos/webraf-sq-dark.webp, 240×240) composited on the brand
//    background #0e1522 (the logo has an alpha channel; manifest icons should
//    be opaque).
//
// AVIF encode settings: quality ladder 55 -> 50 -> 45 (effort 5). Most images
// beat their WebP at q55; a couple of dense dashboard screenshots only win at
// a lower quality, so the encoder steps down until the AVIF is meaningfully
// smaller than the WebP fallback (q45 AVIF is still visually solid).

import { existsSync, statSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = path.join(ROOT, 'src', 'assets');
const PUBLIC = path.join(ROOT, 'public');
const FORCE = process.argv.includes('--force');

// Heaviest (>45KB) WebP images referenced by pages this repo serves above the
// fold or in content sections. Grouped by consuming page for maintainability.
const WEBP_SOURCES = [
  // Home (src/pages/Home.jsx)
  'Hero2.webp',              // hero (LCP)
  'imagenwebdevelop.webp',   // featured web-dev section
  'seoimagendigital.webp',   // SEO offering section
  'kpi-call-center.webp',    // KPI offering section
  // Web Development & Design (src/pages/WebDevDesignDetail.jsx)
  'herodevelop12.webp',      // hero (LCP)
  'web-dev-custom.webp',
  'developwebhero.webp',
  'tiendachica.webp',
  // SEO & Digital Growth (src/pages/SeoDigitalGrowthDetail.jsx)
  'seoimagen.webp',          // hero (LCP)
  'seo imagen setion.webp',
  'seoimagen3.webp',
  'servicioseoimagenes.webp',
  // KPI Dashboards (src/pages/KpiDashboardsDetail.jsx)
  'kpidasboard.webp',        // hero (LCP)
  'kpi financiero.webp',
  'kpidasboardhome.webp',
  'kpi operational.webp',
  // (AI Automation page has no bitmap images — CSS/vector mockups only.)
];

// Tried best-quality-first; an AVIF must be at least MIN_SAVINGS smaller than
// its WebP source to be accepted, otherwise the next (lower) quality is tried.
const AVIF_QUALITY_LADDER = [55, 50, 45];
const AVIF_EFFORT = 5;
const MIN_SAVINGS = 0.03; // 3%

// Manifest icons: square logo on the opaque brand background.
const ICON_SOURCE = path.join(PUBLIC, 'logos', 'webraf-sq-dark.webp');
const ICON_BG = '#0e1522';
const ICON_SIZES = [192, 512];

const kb = (bytes) => `${(bytes / 1024).toFixed(1)}KB`;

// True when `out` already exists and is at least as new as `src` (skip work).
const upToDate = (src, out) =>
  !FORCE && existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs;

async function genAvif() {
  console.log('— AVIF companions (src/assets) —');
  for (const name of WEBP_SOURCES) {
    const src = path.join(ASSETS, name);
    const out = src.replace(/\.webp$/i, '.avif');
    if (!existsSync(src)) {
      console.warn(`  SKIP (missing source!): ${name}`);
      process.exitCode = 1;
      continue;
    }
    if (upToDate(src, out)) {
      console.log(`  up-to-date: ${path.basename(out)}`);
      continue;
    }
    const before = statSync(src).size;
    let buffer = null;
    let usedQuality = null;
    for (const quality of AVIF_QUALITY_LADDER) {
      buffer = await sharp(src).avif({ quality, effort: AVIF_EFFORT }).toBuffer();
      usedQuality = quality;
      if (buffer.length <= before * (1 - MIN_SAVINGS)) break;
    }
    // Even if the ladder bottomed out, write the file: page code imports the
    // .avif unconditionally, so it must exist. Warn so the list can be pruned.
    await writeFile(out, buffer);
    const after = buffer.length;
    const delta = ((1 - after / before) * 100).toFixed(0);
    console.log(`  ${name}  ${kb(before)} -> ${kb(after)} avif  (q${usedQuality}, ${delta}% smaller)`);
    if (after >= before) {
      console.warn(`  WARNING: ${path.basename(out)} is not smaller than its WebP source even at q${usedQuality}.`);
    }
  }
}

async function genIcons() {
  console.log('— Manifest icons (public/icon-*.png) —');
  if (!existsSync(ICON_SOURCE)) {
    console.error(`  Missing icon source: ${ICON_SOURCE}`);
    process.exitCode = 1;
    return;
  }
  for (const size of ICON_SIZES) {
    const out = path.join(PUBLIC, `icon-${size}.png`);
    if (upToDate(ICON_SOURCE, out)) {
      console.log(`  up-to-date: icon-${size}.png`);
      continue;
    }
    // Logo scaled to ~84% of the canvas (breathing room, launcher-friendly),
    // centered on the opaque brand background. The 240px source is upscaled
    // for 512 — acceptable for a launcher icon.
    const inner = Math.round(size * 0.84);
    const logo = await sharp(ICON_SOURCE).resize(inner, inner, { fit: 'contain' }).png().toBuffer();
    await sharp({
      create: { width: size, height: size, channels: 4, background: ICON_BG },
    })
      .composite([{ input: logo, gravity: 'center' }])
      .png()
      .toFile(out);
    console.log(`  icon-${size}.png  (${kb(statSync(out).size)})`);
  }
}

await genAvif();
await genIcons();
console.log('Done.');
