import Seo from '../../src/pages/Seo.jsx';

export function meta() {
  return [
    { title: 'SEO & Digital Growth | Digital Investments' },
    {
      name: 'description',
      content:
        'Improve your Google visibility, attract qualified traffic, and grow organically with our SEO and digital growth services.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://yourdomain.com/seo' },
  ];
}

export default Seo;
