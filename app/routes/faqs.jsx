import FAQs, { faqCategories } from '../../src/pages/FAQs.jsx';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories
    .flatMap((c) => c.items)
    .map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
};

export function meta() {
  return [
    { title: 'Frequently Asked Questions — Web, SEO, KPI & AI | Digital Investments' },
    {
      name: 'description',
      content:
        'Answers to common questions about web development, SEO, KPI dashboards, AI automation, pricing, and our process.',
    },
    { property: 'og:title', content: 'FAQs | Digital Investments' },
    {
      property: 'og:description',
      content: 'Clear answers about our web development, SEO, KPI dashboards and AI automation services, plus pricing and process.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://yourdomain.com/faqs' },
    { 'script:ld+json': faqSchema },
  ];
}

export default FAQs;
