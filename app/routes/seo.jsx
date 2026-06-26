import Seo from '../../src/pages/Seo.jsx';
import { absoluteUrl } from '../../src/config/site.js';

export function meta() {
  return [
    { title: 'SEO & Digital Growth | Digital Investments' },
    {
      name: 'description',
      content:
        'Improve your Google visibility, attract qualified traffic, and grow organically with our SEO and digital growth services.',
    },
    { tagName: 'link', rel: 'canonical', href: absoluteUrl('/seo') },
  ];
}

export default Seo;
