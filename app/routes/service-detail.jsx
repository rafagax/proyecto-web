import ServiceDetail, { serviceDetails, aliasMap } from '../../src/pages/ServiceDetail.jsx';

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
  ];
}

export default ServiceDetail;
