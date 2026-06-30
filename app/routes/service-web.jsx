import WebDevDesignDetail from '../../src/pages/WebDevDesignDetail.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';

// Locale-aware meta for the bilingual Web Development & Design detail
// (/services/web-development and /es/servicios/desarrollo-web).
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/servicios/desarrollo-web');
  const enHref = absoluteUrl('/services/web-development');
  const canonical = locale === 'en' ? enHref : esHref;
  const m = getContent(locale).services.webMeta;

  return [
    { title: m.title },
    { name: 'description', content: m.description },
    { property: 'og:title', content: m.ogTitle },
    { property: 'og:description', content: m.ogDescription },
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
        areaServed: ['VE', 'US', 'ES'],
        provider: { '@type': 'Organization', name: 'Webraf' },
      },
    },
  ];
}

export default WebDevDesignDetail;
