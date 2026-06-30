import SeoDigitalGrowthDetail from '../../src/pages/SeoDigitalGrowthDetail.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';

// Locale-aware meta for /services/seo and /es/servicios/seo.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/servicios/seo');
  const enHref = absoluteUrl('/services/seo');
  const canonical = locale === 'en' ? enHref : esHref;
  const m = getContent(locale).serviceSeo.meta;

  return [
    { title: m.title },
    { name: 'description', content: m.description },
    { property: 'og:title', content: m.ogTitle },
    { property: 'og:description', content: m.description },
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
        areaServed: ['VE', 'US', 'ES'],
        provider: { '@type': 'Organization', name: 'Webraf' },
      },
    },
  ];
}

export default SeoDigitalGrowthDetail;
