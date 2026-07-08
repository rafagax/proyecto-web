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
  { key: 'jvportafolio', en: '/jvportafolio',         es: '/es/jvportafolio',                 type: 'page',    sitemap: true },
  { key: 'privacy',      en: '/privacy',              es: '/es/privacidad',                   type: 'legal',   sitemap: true },
];

// Blog articles. Slugs are localized per language: the English slug lives at
// /blog/<en> and the translated Spanish slug at /es/blog/<es>. Both languages are
// published, so every article has a full ES↔EN equivalent. public/.htaccess 301s
// the legacy English-slug Spanish URLs to the translated ones.
export const articles = [
  { key: 'why-website-2025', en: 'why-your-business-needs-a-website',     es: 'por-que-tu-negocio-necesita-un-sitio-web',      published: { en: true, es: true } },
  { key: 'local-seo',        en: 'local-seo-rank-number-one-city-google', es: 'seo-local-como-posicionar-tu-negocio-en-google', published: { en: true, es: true } },
  { key: 'ai-chatbots',      en: 'ai-chatbots-24-7-sales-tool',           es: 'chatbots-ia-ventas-automaticas-24-7',           published: { en: true, es: true } },
  { key: 'online-store-7d',  en: 'launch-online-store-7-days',            es: 'crear-tienda-online-en-7-dias',                 published: { en: true, es: true } },
  { key: 'core-web-vitals',  en: 'web-performance-core-web-vitals',       es: 'velocidad-web-core-web-vitals',                 published: { en: true, es: true } },
  { key: 'mobile-first',     en: 'mobile-first-design-strategy',          es: 'diseno-web-mobile-first',                       published: { en: true, es: true } },
];

// ── Helpers (pure; safe both at build time and in the browser) ──

const stripTrailingSlash = (p) => {
  const s = String(p).replace(/\/+$/, '');
  return s === '' ? '/' : s;
};

export const articlePath = (article, lang) =>
  lang === 'es' ? `/es/blog/${article.es}` : `/blog/${article.en}`;

/**
 * Slug of an article in `lang`, given its slug in either language. Slugs differ
 * per language, so lookups into locale content keyed by slug must go through
 * this mapping. Unknown slugs are returned unchanged.
 */
export function localizedSlug(slug, lang) {
  const article = articles.find((a) => a.en === slug || a.es === slug);
  return article ? article[lang] : slug;
}

/**
 * Localized URL for a blog post given its slug in either language. Resolves the
 * article through `articles` (single source of truth) because ES slugs are
 * translated; unknown slugs fall back to the raw slug so the URL stays stable.
 */
export function blogPostPath(slug, lang) {
  const article = articles.find((a) => a.en === slug || a.es === slug);
  if (article) return articlePath(article, lang);
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
