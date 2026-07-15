import Home from '../../src/pages/Home.jsx';
import { SITE_URL, absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { ogTags } from '../og.js';
import heroAvif from '../../src/assets/Hero2.avif';

// The Home hero <img> is wrapped in <picture> (AVIF + WebP fallback), which
// suppresses React 19's automatic SSR preload for eager images — so the LCP
// preload is emitted manually here. `type` makes browsers without AVIF support
// skip it (they simply load the WebP <img> fallback, un-preloaded). This must
// stay the ONLY image preload on the page.
export const links = () => [
  { rel: 'preload', as: 'image', href: heroAvif, type: 'image/avif', fetchPriority: 'high' },
];

// Locale-aware SEO for the Home. English keeps the exact original copy; Spanish uses
// the approved Spanish copy (brand: Webraf). Canonical + hreflang are per-locale;
// og:url/og:type/og:locale/og:image come from ogTags() (app/og.js).
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/');
  const enHref = absoluteUrl('/');
  const canonical = locale === 'en' ? enHref : esHref;

  const seo =
    locale === 'en'
      ? {
          // Primary keyword (Semrush 2,900/mo, KD 22) leads the title.
          title: 'Web Design Services for Small Business | Webraf',
          description:
            'Web design services for small business owners: fast, conversion-focused websites with SEO and AI automation built in. Get your free audit today.',
          shareTitle: 'Web Development, AI Automation, SEO & KPI Dashboards',
          shareDescription:
            'Premium web development, AI automation, SEO, and KPI dashboards built to help growing businesses look professional, get found, and convert better.',
        }
      : {
          // Primary keyword (Semrush 720/mo, KD 8) leads the title.
          title: 'Diseño web para pymes: páginas web que venden | Webraf',
          description:
            'Diseño web para pymes: creamos tu página web profesional, mejoramos tu posicionamiento en Google y automatizamos tus ventas con IA. Pide tu presupuesto gratis.',
          shareTitle: 'Desarrollo web, IA, SEO y dashboards de KPI | Webraf',
          shareDescription:
            'Desarrollo web premium, automatización con IA, SEO y dashboards de KPI para atraer clientes, mejorar conversiones y acelerar tu crecimiento.',
        };

  return [
    { title: seo.title },
    { name: 'description', content: seo.description },
    { property: 'og:title', content: seo.shareTitle },
    { property: 'og:description', content: seo.shareDescription },
    ...ogTags({ canonical, locale }),
    { name: 'twitter:title', content: seo.shareTitle },
    { name: 'twitter:description', content: seo.shareDescription },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
    // WebSite structured data — one per language home, in that language's URL.
    // The publisher points at the single Organization defined in app/root.jsx.
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Webraf',
        url: canonical,
        inLanguage: locale,
        publisher: { '@id': `${SITE_URL}/#org` },
      },
    },
  ];
}

export default Home;
