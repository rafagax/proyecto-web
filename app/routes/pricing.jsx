import Pricing from '../../src/pages/Pricing.jsx';
import { absoluteUrl } from '../../src/config/site.js';

export function meta() {
  return [
    { title: 'Plans & Pricing — Websites from $299 | Digital Investments' },
    {
      name: 'description',
      content:
        'Simple, transparent pricing for websites, SEO, KPI dashboards, and AI automation. Professional websites starting from $299, with no hidden fees.',
    },
    { property: 'og:title', content: 'Plans & Pricing | Digital Investments' },
    {
      property: 'og:description',
      content: 'Transparent pricing with no hidden fees. Websites from $299, plus monthly SEO, management, and AI services.',
    },
    { tagName: 'link', rel: 'canonical', href: absoluteUrl('/pricing') },
  ];
}

export default Pricing;
