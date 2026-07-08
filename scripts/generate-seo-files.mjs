// Generates sitemap.xml and robots.txt into the final static output directory from a
// single source of truth: the route manifest (canonical bilingual pairs) + the shared
// SITE_URL resolver. Run as `postbuild` so it writes into the build output (gitignored),
// never into versioned public/ files. No new dependencies — native Node only.
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
// The site is deployed by uploading build/client to Apache/cPanel document root,
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

// ── Per-post <lastmod> dates ──
// src/data/blogPosts.js imports .webp assets, so plain Node cannot import it.
// Extract dateISO / dateModifiedISO from the source text instead: each `slug:`
// anchors one post object, and its dates live before the next `slug:`.
const blogSource = await readFile(path.join(root, 'src', 'data', 'blogPosts.js'), 'utf8');
const postDates = new Map(); // en slug -> ISO date (dateModifiedISO wins over dateISO)
const slugMatches = [...blogSource.matchAll(/\bslug:\s*['"]([^'"]+)['"]/g)];
slugMatches.forEach((m, i) => {
  const end = i + 1 < slugMatches.length ? slugMatches[i + 1].index : blogSource.length;
  const segment = blogSource.slice(m.index, end);
  const modified = segment.match(/\bdateModifiedISO:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
  const published = segment.match(/\bdateISO:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
  const iso = (modified && modified[1]) || (published && published[1]);
  if (iso) postDates.set(m[1], iso);
});

// Pages use the build date; posts use their own dates when available.
// Local date (not UTC): an evening build in a UTC-negative timezone must not
// stamp tomorrow's date into <lastmod>.
const BUILD_DATE = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 10);
const lastmodFor = ({ en }) => {
  if (en.startsWith('/blog/')) {
    const slug = en.slice('/blog/'.length);
    const iso = postDates.get(slug);
    if (iso) return iso;
    console.warn(`  ! no dateISO/dateModifiedISO for blog post "${slug}" — using build date`);
  }
  return BUILD_DATE;
};

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
const problems = [];
const locs = [];
const seen = new Set();
for (const pair of pairs) {
  const { es, en } = pair;
  if (!es) problems.push(`pair missing es: ${JSON.stringify(pair)}`);
  if (!en) problems.push(`pair missing en: ${JSON.stringify(pair)}`);
  for (const p of [es, en]) {
    if (!p || !p.startsWith('/')) { problems.push(`path not absolute: ${JSON.stringify(p)}`); continue; }
    const url = abs(p);
    if (url.replace(/^https?:\/\//, '').includes('//')) problems.push(`double slash: ${url}`);
    if (seen.has(url)) problems.push(`duplicate loc: ${url}`);
    seen.add(url);
    locs.push(url);
  }
}

// ── Build sitemap.xml: one <url> per canonical URL, each with es/en/x-default(=en) ──
const urlBlock = (loc, esUrl, enUrl, lastmod) =>
  `  <url>\n` +
  `    <loc>${xmlEscape(loc)}</loc>\n` +
  `    <lastmod>${xmlEscape(lastmod)}</lastmod>\n` +
  `    <xhtml:link rel="alternate" hreflang="es" href="${xmlEscape(esUrl)}" />\n` +
  `    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(enUrl)}" />\n` +
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(enUrl)}" />\n` +
  `  </url>`;

const urlEntries = pairs.flatMap((pair) => {
  const esUrl = abs(pair.es);
  const enUrl = abs(pair.en);
  const lastmod = lastmodFor(pair);
  // Spanish first, then English (deterministic, follows manifest order).
  return [urlBlock(esUrl, esUrl, enUrl, lastmod), urlBlock(enUrl, esUrl, enUrl, lastmod)];
});

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  urlEntries.join('\n') +
  `\n</urlset>\n`;

// ── Build robots.txt (sitemap URL from the same SITE_URL) ──
const robots =
  `# Robots.txt for Webraf\n` +
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
const lastmodCount = (sitemap.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) || []).length;
if (urlCount !== pairs.length * 2) problems.push(`expected ${pairs.length * 2} <url>, got ${urlCount}`);
if (altCount !== urlCount) problems.push(`x-default count ${altCount} != <url> count ${urlCount}`);
if (lastmodCount !== urlCount) problems.push(`lastmod count ${lastmodCount} != <url> count ${urlCount}`);

if (problems.length) {
  console.error('SEO generation failed:');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });
await writeFile(path.join(OUT_DIR, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(path.join(OUT_DIR, 'robots.txt'), robots, 'utf8');

// ── Post-process the static output for Apache/cPanel ──

// EN 404: public/.htaccess points ErrorDocument at /404.html, but React Router
// prerenders the route as /404/index.html — publish a flat copy next to it.
const notFoundSrc = path.join(OUT_DIR, '404', 'index.html');
if (existsSync(notFoundSrc)) {
  await copyFile(notFoundSrc, path.join(OUT_DIR, '404.html'));
  console.log('  copied 404/index.html -> 404.html (ErrorDocument target)');
} else {
  console.warn('  ! build/client/404/index.html missing — /404.html ErrorDocument will not work');
}

// ES 404: Apache inherits ErrorDocument per directory, so a small .htaccess
// inside /es/ makes broken Spanish URLs show the Spanish 404 page.
const es404 = path.join(OUT_DIR, 'es', '404', 'index.html');
if (existsSync(es404)) {
  await writeFile(
    path.join(OUT_DIR, 'es', '.htaccess'),
    '# Generated by scripts/generate-seo-files.mjs -- Spanish 404 for /es/* URLs.\n' +
    'ErrorDocument 404 /es/404/index.html\n',
    'utf8'
  );
  console.log('  wrote es/.htaccess (Spanish ErrorDocument 404)');
} else {
  console.warn('  ! build/client/es/404/index.html missing — skipped es/.htaccess (Spanish 404)');
}

// The SPA shell React Router emits next to the prerendered pages ships without a
// <title> or robots meta; it is orphaned but publicly reachable, so make it
// explicitly non-indexable and give it a title.
const spaFallbackPath = path.join(OUT_DIR, '__spa-fallback.html');
if (existsSync(spaFallbackPath)) {
  let spaHtml = await readFile(spaFallbackPath, 'utf8');
  const inject = [];
  if (!/<title[\s>]/i.test(spaHtml)) inject.push('<title>Webraf</title>');
  if (!/<meta[^>]+name=["']robots["']/i.test(spaHtml)) inject.push('<meta name="robots" content="noindex"/>');
  if (inject.length) {
    const headOpen = spaHtml.match(/<head[^>]*>/i);
    if (headOpen) {
      spaHtml = spaHtml.replace(headOpen[0], headOpen[0] + inject.join(''));
      await writeFile(spaFallbackPath, spaHtml, 'utf8');
      console.log('  patched __spa-fallback.html (' + inject.length + ' tag(s): title/noindex)');
    } else {
      console.warn('  ! __spa-fallback.html has no <head> — skipped title/noindex injection');
    }
  }
}

console.log(
  `SEO files generated for ${SITE_URL}\n` +
  `  ${pairs.length} bilingual pairs -> ${urlCount} <loc> (${altCount} x-default alternates, ${lastmodCount} lastmod)\n` +
  `  wrote ${path.relative(root, OUT_DIR)}/sitemap.xml and robots.txt`
);
