import FAQs from '../../src/pages/FAQs.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';
import { ogTags } from '../og.js';

// Breadcrumb labels per locale (paths match app/route-manifest.js).
const CRUMBS = {
  en: { home: 'Home', homePath: '/', page: 'FAQs' },
  es: { home: 'Inicio', homePath: '/es/', page: 'Preguntas frecuentes' },
};

// Locale-aware meta + FAQPage JSON-LD for /faqs and /es/preguntas-frecuentes.
// The structured data is built from the same localized content the page renders,
// so visible questions and the schema always match and never mix languages.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/preguntas-frecuentes');
  const enHref = absoluteUrl('/faqs');
  const canonical = locale === 'en' ? enHref : esHref;
  const faqs = getContent(locale).faqs;
  const c = CRUMBS[locale] || CRUMBS.en;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.categories
      .flatMap((cat) => cat.items)
      .map((item) => ({
        '@type': 'Question',
        name: item.question,
        // Answers may carry [text](url) inline links for the UI (src/pages/FAQs.jsx);
        // Google accepts <a href> inside FAQ answer text, so convert instead of strip.
        acceptedAnswer: {
          '@type': 'Answer',
          text: String(item.answer).replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            (m, label, url) => `<a href="${url.startsWith('/') ? absoluteUrl(url) : url}">${label}</a>`
          ),
        },
      })),
  };

  return [
    { title: faqs.meta.title },
    { name: 'description', content: faqs.meta.description },
    { property: 'og:title', content: faqs.meta.ogTitle },
    { property: 'og:description', content: faqs.meta.ogDescription },
    ...ogTags({ canonical, locale }),
    { name: 'twitter:title', content: faqs.meta.ogTitle },
    { name: 'twitter:description', content: faqs.meta.ogDescription },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
    { 'script:ld+json': faqSchema },
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

export default FAQs;
