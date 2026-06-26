import ServiceDetail from '../../src/pages/ServiceDetail.jsx';
import { serviceDetails, aliasMap } from '../../src/data/serviceDetails.js';

export function meta({ params }) {
  const requested = params.serviceId;
  const slug = aliasMap[requested] || requested;
  const known = Boolean(serviceDetails[slug]);
  const s = serviceDetails[slug] || serviceDetails['web-development-design'];
  const canonicalSlug = known ? slug : 'web-development-design';

  return [
    { title: s.metaTitle },
    { name: 'description', content: s.metaDescription },
    { property: 'og:title', content: s.h1 },
    { property: 'og:description', content: s.metaDescription },
    { tagName: 'link', rel: 'canonical', href: `https://yourdomain.com/services/${canonicalSlug}` },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: s.eyebrow,
        description: s.metaDescription,
        areaServed: ['VE', 'US', 'ES'],
        provider: { '@type': 'Organization', name: 'Digital Investments' },
      },
    },
  ];
}

export default ServiceDetail;
