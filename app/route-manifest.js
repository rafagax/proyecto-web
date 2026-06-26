// Single source of truth for the bilingual route structure.
//   - Spanish (neutral) lives at the root:        /, /servicios, /contacto, ...
//   - English lives under /en/:                   /en/, /en/services, /en/contact, ...
//
// Everything downstream derives from this manifest: the ES|EN language switcher,
// the prerender list, the sitemap, canonicals and hreflang. Keeping it in one
// place is what lets the switcher jump to the SAME page in the other language
// instead of always returning to the home page.
//
// Commit 1 is additive: nothing imports this file yet, so site behavior is
// unchanged. Slugs marked "provisional" are pending Spanish keyword research and
// may change before launch.

import { SITE_URL } from '../src/config/site.js';
export { SITE_URL };

export const LOCALES = ['es', 'en'];
export const DEFAULT_LOCALE = 'es';

// Paired pages — each exists in both languages (es ↔ en).
export const routeManifest = [
  { key: 'home',     es: '/',                            en: '/en/',                          type: 'page',    sitemap: true },
  { key: 'services', es: '/servicios',                   en: '/en/services',                  type: 'page',    sitemap: true },
  { key: 'svc-web',  es: '/servicios/desarrollo-web',    en: '/en/services/web-development',  type: 'service', sitemap: true }, // slug ES provisional
  { key: 'svc-seo',  es: '/servicios/seo',               en: '/en/services/seo',              type: 'service', sitemap: true }, // targeting SEO pendiente
  { key: 'svc-kpi',  es: '/servicios/dashboards-kpi',    en: '/en/services/kpi-dashboards',   type: 'service', sitemap: true }, // targeting SEO pendiente
  { key: 'svc-ai',   es: '/servicios/automatizacion-ia', en: '/en/services/ai-automation',    type: 'service', sitemap: true }, // targeting SEO pendiente
  { key: 'pricing',  es: '/precios',                     en: '/en/pricing',                   type: 'page',    sitemap: true },
  { key: 'contact',  es: '/contacto',                    en: '/en/contact',                   type: 'page',    sitemap: true },
  { key: 'clients',  es: '/clientes',                    en: '/en/our-clients',               type: 'page',    sitemap: true },
  { key: 'faqs',     es: '/preguntas-frecuentes',        en: '/en/faqs',                      type: 'page',    sitemap: true },
  { key: 'blog',     es: '/blog',                        en: '/en/blog',                      type: 'page',    sitemap: true },
];

// Blog articles — translated per post. `published[lang]` controls prerender,
// sitemap inclusion and whether the switcher offers the equivalent in that
// language. ES slugs are provisional. Today only the English posts exist.
export const articles = [
  { key: 'why-website-2025', en: 'why-your-business-needs-website-2025',  es: 'por-que-tu-negocio-necesita-pagina-web', published: { en: true, es: false } },
  { key: 'local-seo',        en: 'local-seo-rank-number-one-city-google', es: 'seo-local-aparecer-primero-en-google',   published: { en: true, es: false } },
  { key: 'ai-chatbots',      en: 'ai-chatbots-24-7-sales-tool',           es: 'chatbots-ia-vender-24-7',                published: { en: true, es: false } },
  { key: 'online-store-7d',  en: 'launch-online-store-7-days',            es: 'lanzar-tienda-online-en-7-dias',         published: { en: true, es: false } },
  { key: 'core-web-vitals',  en: 'web-performance-core-web-vitals',       es: 'rendimiento-web-core-web-vitals',        published: { en: true, es: false } },
  { key: 'mobile-first',     en: 'mobile-first-design-strategy',          es: 'estrategia-diseno-mobile-first',         published: { en: true, es: false } },
];

// ── Helpers (pure; safe both at build time and in the browser) ──

const stripTrailingSlash = (p) => {
  const s = String(p).replace(/\/+$/, '');
  return s === '' ? '/' : s;
};

export const articlePath = (article, lang) =>
  lang === 'en' ? `/en/blog/${article.en}` : `/blog/${article.es}`;

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
