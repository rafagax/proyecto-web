// Generates sitemap.xml and robots.txt into the final static output directory from a
// single source of truth: the route manifest (canonical bilingual pairs) + the shared
// SITE_URL resolver. Run as `postbuild` so it writes into the build output (gitignored),
// never into versioned public/ files. No new dependencies — native Node only.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
// Vercel serves the static site from build/client (see vercel.json outputDirectory),
// so /sitemap.xml and /robots.txt must live there.
const OUT_DIR = path.join(root, 'build', 'client');

// site.js's Node path reads process.env.SITE_URL; the build domain is configured via
// VITE_SITE_URL. Bridge it across BEFORE importing the shared resolver so we reuse the
// exact same precedence + validation instead of creating a parallel domain source.
if (!process.env.SITE_URL && process.env.VITE_SITE_URL) {
  process.env.SITE_URL = process.env.VITE_SITE_URL;
}

// Dynamic imports AFTER the bridge: site.js validates and throws on an invalid domain
// or on a deploy build (VERCEL / REQUIRE_SITE_URL=1) with no SITE_URL configured.
const { SITE_URL } = await import('../src/config/site.js');
const { getTranslationPairs } = await import('../app/route-manifest.js');

const pairs = getTranslationPairs();

// SITE_URL is already normalized without a trailing slash, so this never produces "//".
const abs = (p) => {
  const s = String(p);
  return `${SITE_URL}${s.startsWith('/') ? s : `/${s}`}`;
};

const xmlEscape = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// ── Validation (counts/expectations derived from the manifest, never hardcoded) ──
const LEGACY_EXACT = new Set(['/seo', '/kpi', '/pricing', '/contact', '/faqs', '/our-clients', '/clients']);
const isLegacy = (p) => LEGACY_EXACT.has(p) || p === '/services' || p.startsWith('/services/');

const problems = [];
const locs = [];
const seen = new Set();
for (const pair of pairs) {
  const { es, en } = pair;
  if (!es) problems.push(`pair missing es: ${JSON.stringify(pair)}`);
  if (!en) problems.push(`pair missing en: ${JSON.stringify(pair)}`);
  for (const p of [es, en]) {
    if (!p || !p.startsWith('/')) { problems.push(`path not absolute: ${JSON.stringify(p)}`); continue; }
    if (isLegacy(p)) problems.push(`legacy path in sitemap: ${p}`);
    const url = abs(p);
    if (url.replace(/^https?:\/\//, '').includes('//')) problems.push(`double slash: ${url}`);
    if (seen.has(url)) problems.push(`duplicate loc: ${url}`);
    seen.add(url);
    locs.push(url);
  }
}

// ── Build sitemap.xml: one <url> per canonical URL, each with es/en/x-default(=es) ──
const urlBlock = (loc, esUrl, enUrl) =>
  `  <url>\n` +
  `    <loc>${xmlEscape(loc)}</loc>\n` +
  `    <xhtml:link rel="alternate" hreflang="es" href="${xmlEscape(esUrl)}" />\n` +
  `    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(enUrl)}" />\n` +
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(esUrl)}" />\n` +
  `  </url>`;

const urlEntries = pairs.flatMap(({ es, en }) => {
  const esUrl = abs(es);
  const enUrl = abs(en);
  // Spanish first, then English (deterministic, follows manifest order).
  return [urlBlock(esUrl, esUrl, enUrl), urlBlock(enUrl, esUrl, enUrl)];
});

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  urlEntries.join('\n') +
  `\n</urlset>\n`;

// ── Build robots.txt (sitemap URL from the same SITE_URL) ──
const robots =
  `# Robots.txt for InversionesDigitales\n` +
  `User-agent: *\n` +
  `Allow: /\n` +
  `\n` +
  `Sitemap: ${abs('/sitemap.xml')}\n`;

// ── Final integrity checks on the generated text ──
for (const [name, text] of [['sitemap.xml', sitemap], ['robots.txt', robots]]) {
  if (text.includes('yourdomain.com')) problems.push(`${name} contains yourdomain.com`);
  if (text.includes('Digital Investments')) problems.push(`${name} contains "Digital Investments"`);
}
const urlCount = (sitemap.match(/<url>/g) || []).length;
const altCount = (sitemap.match(/hreflang="x-default"/g) || []).length;
if (urlCount !== pairs.length * 2) problems.push(`expected ${pairs.length * 2} <url>, got ${urlCount}`);
if (altCount !== urlCount) problems.push(`x-default count ${altCount} != <url> count ${urlCount}`);

if (problems.length) {
  console.error('SEO generation failed:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });
await writeFile(path.join(OUT_DIR, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(path.join(OUT_DIR, 'robots.txt'), robots, 'utf8');

console.log(
  `SEO files generated for ${SITE_URL}\n` +
  `  ${pairs.length} bilingual pairs -> ${urlCount} <loc> (${altCount} x-default alternates)\n` +
  `  wrote ${path.relative(root, OUT_DIR)}/sitemap.xml and robots.txt`
);
