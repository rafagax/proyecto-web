import Contact from '../../src/pages/Contact.jsx';
import { absoluteUrl } from '../../src/config/site.js';

export function meta() {
  return [
    { title: 'Contact Us — Free Web Strategy Consultation | InversionesDigitales' },
    {
      name: 'description',
      content:
        'Ready to grow your business? Contact us for a free consultation. We usually respond within a few hours via WhatsApp, email, or phone.',
    },
    { property: 'og:title', content: 'Contact Us | InversionesDigitales' },
    {
      property: 'og:description',
      content: 'Book a free consultation and strategy session for your website, SEO, KPI dashboards, or AI automation.',
    },
    { tagName: 'link', rel: 'canonical', href: absoluteUrl('/contact') },
  ];
}

export default Contact;
