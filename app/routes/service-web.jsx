import WebDevDesignDetail from '../../src/pages/WebDevDesignDetail.jsx';
import { SITE_URL, absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';
import { ogTags } from '../og.js';
import heroAvif from '../../src/assets/herodevelop12.avif';

// The hero <img> is wrapped in <picture> (AVIF + WebP fallback), which
// suppresses React 19's automatic SSR preload for eager images — so the LCP
// preload is emitted manually here (AVIF-capable browsers only, via `type`).
// This must stay the ONLY image preload on the page.
export const links = () => [
  { rel: 'preload', as: 'image', href: heroAvif, type: 'image/avif', fetchPriority: 'high' },
];

// Breadcrumb labels (leaf name comes from the localized content).
const CRUMBS = {
  en: { home: 'Home', homePath: '/', services: 'Services', servicesPath: '/services' },
  es: { home: 'Inicio', homePath: '/es/', services: 'Servicios', servicesPath: '/es/servicios' },
};

// Locale-aware meta for the bilingual Web Development & Design detail
// (/services/web-development and /es/servicios/desarrollo-web).
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/servicios/desarrollo-web');
  const enHref = absoluteUrl('/services/web-development');
  const canonical = locale === 'en' ? enHref : esHref;
  const m = getContent(locale).services.webMeta;
  const c = CRUMBS[locale] || CRUMBS.en;

  return [
    { title: m.title },
    { name: 'description', content: m.description },
    { property: 'og:title', content: m.ogTitle },
    { property: 'og:description', content: m.ogDescription },
    ...ogTags({ canonical, locale }),
    { name: 'twitter:title', content: m.ogTitle },
    { name: 'twitter:description', content: m.ogDescription },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: m.schemaName,
        description: m.description,
        areaServed: 'Worldwide',
        inLanguage: locale,
        // Reference (not duplicate) of the single Organization in app/root.jsx.
        provider: { '@id': `${SITE_URL}/#org` },
      },
    },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: c.home, item: absoluteUrl(c.homePath) },
          { '@type': 'ListItem', position: 2, name: c.services, item: absoluteUrl(c.servicesPath) },
          { '@type': 'ListItem', position: 3, name: m.schemaName, item: canonical },
        ],
      },
    },
  ];
}

export default WebDevDesignDetail;
