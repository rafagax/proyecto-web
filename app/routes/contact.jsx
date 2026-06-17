import Contact from '../../src/pages/Contact.jsx';

export function meta() {
  return [
    { title: 'Contact Us — Free Web Strategy Consultation | Digital Investments' },
    {
      name: 'description',
      content:
        'Ready to grow your business? Contact us for a free consultation. We usually respond within a few hours via WhatsApp, email, or phone.',
    },
    { property: 'og:title', content: 'Contact Us | Digital Investments' },
    {
      property: 'og:description',
      content: 'Book a free consultation and strategy session for your website, SEO, KPI dashboards, or AI automation.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://yourdomain.com/contact' },
  ];
}

export default Contact;
