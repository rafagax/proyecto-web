import AiAutomationChatbotsDetail from '../../src/pages/AiAutomationChatbotsDetail.jsx';
import { SITE_URL, absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';
import { ogTags } from '../og.js';

// (No hero image preload here: the AI page's visuals are CSS/vector mockups,
// there is no bitmap hero <img> on the page.)

// Breadcrumb labels (leaf name comes from the localized content).
const CRUMBS = {
  en: { home: 'Home', homePath: '/', services: 'Services', servicesPath: '/services' },
  es: { home: 'Inicio', homePath: '/es/', services: 'Servicios', servicesPath: '/es/servicios' },
};

// Locale-aware meta for /services/ai-automation and /es/servicios/automatizacion-ia.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/servicios/automatizacion-ia');
  const enHref = absoluteUrl('/services/ai-automation');
  const canonical = locale === 'en' ? enHref : esHref;
  const m = getContent(locale).serviceAi.meta;
  const c = CRUMBS[locale] || CRUMBS.en;

  return [
    { title: m.title },
    { name: 'description', content: m.description },
    { property: 'og:title', content: m.ogTitle },
    { property: 'og:description', content: m.description },
    ...ogTags({ canonical, locale }),
    { name: 'twitter:title', content: m.ogTitle },
    { name: 'twitter:description', content: m.description },
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

export default AiAutomationChatbotsDetail;
