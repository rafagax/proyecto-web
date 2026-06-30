import KpiDashboardsDetail from '../../src/pages/KpiDashboardsDetail.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';

// Locale-aware meta for /services/kpi-dashboards and /es/servicios/dashboards-kpi.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/servicios/dashboards-kpi');
  const enHref = absoluteUrl('/services/kpi-dashboards');
  const canonical = locale === 'en' ? enHref : esHref;
  const m = getContent(locale).serviceKpi.meta;

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

export default KpiDashboardsDetail;
