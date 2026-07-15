import OurClients from '../../src/pages/OurClients.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';
import { ogTags } from '../og.js';

// Breadcrumb labels per locale (paths match app/route-manifest.js).
const CRUMBS = {
  en: { home: 'Home', homePath: '/', page: 'Clients' },
  es: { home: 'Inicio', homePath: '/es/', page: 'Clientes' },
};

// Locale-aware meta for /clients and /es/clientes (same module; locale from the URL).
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/clientes');
  const enHref = absoluteUrl('/clients');
  const canonical = locale === 'en' ? enHref : esHref;
  const m = getContent(locale).clients.meta;
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
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: c.home, item: absoluteUrl(c.homePath) },
          { '@type': 'ListItem', position: 2, name: c.page, item: canonical },
        ],
      },
    },
  ];
}

export default OurClients;
