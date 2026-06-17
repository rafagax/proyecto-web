import FAQs from '../../src/pages/FAQs.jsx';

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
  ];
}

export default FAQs;
