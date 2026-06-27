import FAQs from '../../src/pages/FAQs.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';

// Locale-aware meta + FAQPage JSON-LD for /faqs and /es/preguntas-frecuentes.
// The structured data is built from the same localized content the page renders,
// so visible questions and the schema always match and never mix languages.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/preguntas-frecuentes');
  const enHref = absoluteUrl('/faqs');
  const canonical = locale === 'en' ? enHref : esHref;
  const faqs = getContent(locale).faqs;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.categories
      .flatMap((c) => c.items)
      .map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
  };

  return [
    { title: faqs.meta.title },
    { name: 'description', content: faqs.meta.description },
    { property: 'og:title', content: faqs.meta.ogTitle },
    { property: 'og:description', content: faqs.meta.ogDescription },
    { name: 'twitter:title', content: faqs.meta.ogTitle },
    { name: 'twitter:description', content: faqs.meta.ogDescription },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
    { 'script:ld+json': faqSchema },
  ];
}

export default FAQs;
