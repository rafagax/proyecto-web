import JvPortfolio from '../../src/pages/JvPortfolio.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import jvContent, { AUTHOR_LINKS, AUTHOR_PHOTO } from '../../src/content/jvPortfolio.js';

// Author page for Jesús Vásquez (the expert behind Webraf). Indexable (E-E-A-T), bilingual
// at /jvportafolio (EN) and /es/jvportafolio (ES) with canonical + hreflang. The Person
// JSON-LD is shared (one entity, EN-canonical URLs) so blog articles can reference
// #person as their author.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${absoluteUrl('/jvportafolio')}#person`,
  name: 'Jesús Vásquez',
  url: absoluteUrl('/jvportafolio'),
  image: absoluteUrl(AUTHOR_PHOTO),
  jobTitle: 'Front-End Developer & Technical SEO Specialist',
  worksFor: { '@type': 'Organization', name: 'Webraf', url: absoluteUrl('/') },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Politécnico Santiago Mariño' },
  knowsAbout: [
    'Technical SEO',
    'Front-End Development',
    'React',
    'JavaScript',
    'Core Web Vitals',
    'Power BI',
    'KPI Dashboards',
    'Web Performance Optimization',
  ],
  knowsLanguage: ['es', 'en'],
  email: 'mailto:contact@webraf.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Maracay', addressCountry: 'VE' },
  sameAs: [AUTHOR_LINKS.linkedin, AUTHOR_LINKS.github, AUTHOR_LINKS.portfolio],
};

export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const t = jvContent[locale] || jvContent.en;
  const enHref = absoluteUrl('/jvportafolio');
  const esHref = absoluteUrl('/es/jvportafolio');
  const canonical = locale === 'es' ? esHref : enHref;
  return [
    { title: t.meta.title },
    { name: 'description', content: t.meta.description },
    { property: 'og:type', content: 'profile' },
    { property: 'og:title', content: t.meta.title },
    { property: 'og:description', content: t.meta.description },
    { property: 'og:image', content: absoluteUrl(AUTHOR_PHOTO) },
    { name: 'twitter:title', content: t.meta.title },
    { name: 'twitter:description', content: t.meta.description },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
    { 'script:ld+json': personSchema },
  ];
}

export default JvPortfolio;
