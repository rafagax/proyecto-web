import Home from '../../src/pages/Home.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';

// NOTE: title/description/OG are still English for both locales — Spanish SEO copy
// for the Home is pending approval (reported, not invented here). Only the canonical
// and hreflang alternates are locale-aware in this commit.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/');
  const enHref = absoluteUrl('/en/');
  const canonical = locale === 'en' ? enHref : esHref;

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
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: esHref },
  ];
}

export default Home;
