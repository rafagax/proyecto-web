// Single source of truth for the bilingual route structure.
//   - English (primary) lives at the root:        /, /services, /contact, ...
//   - Spanish lives under /es/:                    /es/, /es/servicios, /es/contacto, ...
//
// Everything downstream derives from this manifest: the ES|EN language switcher,
// the prerender list, the sitemap, canonicals and hreflang. Keeping it in one
// place is what lets the switcher jump to the SAME page in the other language
// instead of always returning to the home page.
//
// Slugs marked "provisional" are pending Spanish keyword research and may change.

import { SITE_URL } from '../src/config/site.js';
export { SITE_URL };

export const LOCALES = ['es', 'en'];
export const DEFAULT_LOCALE = 'en';

// Paired pages — each exists in both languages. English (primary) is at the root,
// Spanish is prefixed under /es/.
export const routeManifest = [
  { key: 'home',     en: '/',                         es: '/es/',                             type: 'page',    sitemap: true },
  { key: 'services', en: '/services',                 es: '/es/servicios',                    type: 'page',    sitemap: true },
  { key: 'svc-web',  en: '/services/web-development',  es: '/es/servicios/desarrollo-web',    type: 'service', sitemap: true }, // slug ES provisional
  { key: 'svc-seo',  en: '/services/seo',             es: '/es/servicios/seo',                type: 'service', sitemap: true }, // targeting SEO pendiente
  { key: 'svc-kpi',  en: '/services/kpi-dashboards',  es: '/es/servicios/dashboards-kpi',     type: 'service', sitemap: true }, // targeting SEO pendiente
  { key: 'svc-ai',   en: '/services/ai-automation',   es: '/es/servicios/automatizacion-ia',  type: 'service', sitemap: true }, // targeting SEO pendiente
  { key: 'pricing',  en: '/pricing',                  es: '/es/precios',                      type: 'page',    sitemap: true },
  { key: 'contact',  en: '/contact',                  es: '/es/contacto',                     type: 'page',    sitemap: true },
  { key: 'clients',  en: '/clients',                  es: '/es/clientes',                     type: 'page',    sitemap: true },
  { key: 'faqs',     en: '/faqs',                     es: '/es/preguntas-frecuentes',         type: 'page',    sitemap: true },
  { key: 'blog',     en: '/blog',                     es: '/es/blog',                         type: 'page',    sitemap: true },
];

// Blog articles. Slugs are identical in both languages (approved decision): the same
// existing English slug lives at /blog/<slug> (en) and /es/blog/<slug> (es). Both
// languages are published, so every article has a full ES↔EN equivalent.
export const articles = [
  { key: 'why-website-2025', en: 'why-your-business-needs-website-2025',  es: 'why-your-business-needs-website-2025',  published: { en: true, es: true } },
  { key: 'local-seo',        en: 'local-seo-rank-number-one-city-google', es: 'local-seo-rank-number-one-city-google', published: { en: true, es: true } },
  { key: 'ai-chatbots',      en: 'ai-chatbots-24-7-sales-tool',           es: 'ai-chatbots-24-7-sales-tool',           published: { en: true, es: true } },
  { key: 'online-store-7d',  en: 'launch-online-store-7-days',            es: 'launch-online-store-7-days',            published: { en: true, es: true } },
  { key: 'core-web-vitals',  en: 'web-performance-core-web-vitals',       es: 'web-performance-core-web-vitals',       published: { en: true, es: true } },
  { key: 'mobile-first',     en: 'mobile-first-design-strategy',          es: 'mobile-first-design-strategy',          published: { en: true, es: true } },
];

// ── Helpers (pure; safe both at build time and in the browser) ──

const stripTrailingSlash = (p) => {
  const s = String(p).replace(/\/+$/, '');
  return s === '' ? '/' : s;
};

export const articlePath = (article, lang) =>
  lang === 'es' ? `/es/blog/${article.es}` : `/blog/${article.en}`;

/** Localized URL for a blog post by slug (slugs are identical across languages). */
export function blogPostPath(slug, lang) {
  return lang === 'es' ? `/es/blog/${slug}` : `/blog/${slug}`;
}

/**
 * Given any known path, return its equivalent in `toLang`, or `null` when there
 * is no published equivalent. Used by the ES|EN switcher so it lands on the SAME
 * page in the other language instead of returning home. When it returns `null`
 * (e.g. an article not yet translated), the UI should fall back to the blog
 * index of the target language.
 */
export function getEquivalentPath(path, toLang) {
  const target = stripTrailingSlash(path);

  for (const r of routeManifest) {
    if (stripTrailingSlash(r.es) === target || stripTrailingSlash(r.en) === target) {
      return r[toLang];
    }
  }

  for (const a of articles) {
    const esP = stripTrailingSlash(articlePath(a, 'es'));
    const enP = stripTrailingSlash(articlePath(a, 'en'));
    if (esP === target || enP === target) {
      return a.published[toLang] ? articlePath(a, toLang) : null;
    }
  }

  return null;
}

/**
 * Canonical path for a manifest key in a given language (or null if the key is
 * unknown). Lets components build locale-correct internal links from the manifest
 * (source of truth) instead of concatenating `/en` or translating slugs by hand.
 */
export function getLocalizedPath(key, lang) {
  const entry = routeManifest.find((r) => r.key === key);
  return entry ? entry[lang] : null;
}

/** Canonical, published URLs only — drives the prerender list and the sitemap. */
export function getPrerenderPaths() {
  const pages = routeManifest.flatMap((r) => [r.es, r.en]);
  const posts = articles.flatMap((a) =>
    LOCALES.filter((lang) => a.published[lang]).map((lang) => articlePath(a, lang))
  );
  return [...pages, ...posts];
}

/** [{ es, en }] pairs for hreflang / sitemap alternates (only fully-paired URLs). */
export function getTranslationPairs() {
  const pagePairs = routeManifest.map((r) => ({ es: r.es, en: r.en }));
  const articlePairs = articles
    .filter((a) => a.published.es && a.published.en)
    .map((a) => ({ es: articlePath(a, 'es'), en: articlePath(a, 'en') }));
  return [...pagePairs, ...articlePairs];
}
