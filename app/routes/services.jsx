import Services from '../../src/pages/Services.jsx';
import { absoluteUrl } from '../../src/config/site.js';

export function meta() {
  return [
    { title: 'Our Services — Web, SEO, KPI & AI Automation | InversionesDigitales' },
    {
      name: 'description',
      content:
        'Explore our services: premium web development & design, SEO & digital growth, KPI dashboards & analytics, and AI automation & chatbots.',
    },
    { property: 'og:title', content: 'Our Services | InversionesDigitales' },
    {
      property: 'og:description',
      content: 'Premium web development, SEO, KPI dashboards, and AI automation for growing businesses.',
    },
    { tagName: 'link', rel: 'canonical', href: absoluteUrl('/services') },
  ];
}

export default Services;
