import OurClients from '../../src/pages/OurClients.jsx';

export function meta() {
  return [
    { title: 'Client Testimonials — Success Stories & Reviews | Digital Investments' },
    {
      name: 'description',
      content:
        'See what our clients say about our web development and digital services. Real results from real businesses.',
    },
    { property: 'og:title', content: 'Client Success Stories | Digital Investments' },
    {
      property: 'og:description',
      content: 'Real results from businesses we have helped with web development, SEO, and AI automation.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://yourdomain.com/our-clients' },
  ];
}

export default OurClients;
