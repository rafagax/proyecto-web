import Home from '../../src/pages/Home.jsx';
import { absoluteUrl } from '../../src/config/site.js';

export function meta() {
  return [
    { title: 'Web Development, AI Automation, SEO & KPI Dashboards | Digital Investments' },
    {
      name: 'description',
      content:
        'Premium web development, AI automation, SEO, and KPI dashboards for growing businesses. Build a fast, conversion-focused website and turn your digital presence into a growth system.',
    },
    { property: 'og:title', content: 'Web Development, AI Automation, SEO & KPI Dashboards' },
    {
      property: 'og:description',
      content:
        'Premium web development, AI automation, SEO, and KPI dashboards built to help growing businesses look professional, get found, and convert better.',
    },
    { tagName: 'link', rel: 'canonical', href: absoluteUrl('/') },
  ];
}

export default Home;
