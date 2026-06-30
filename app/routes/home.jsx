import Home from '../../src/pages/Home.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';

// Locale-aware SEO for the Home. English keeps the exact original copy; Spanish uses
// the approved Spanish copy (brand: Webraf). Canonical + hreflang are
// per-locale; the global og:image/twitter:image live in app/root.jsx.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/');
  const enHref = absoluteUrl('/');
  const canonical = locale === 'en' ? enHref : esHref;

  const seo =
    locale === 'en'
      ? {
          title: 'Web Development, AI Automation, SEO & KPI Dashboards | Webraf — Web Development',
          description:
            'Premium web development, AI automation, SEO, and KPI dashboards for growing businesses. Build a fast, conversion-focused website and turn your digital presence into a growth system.',
          shareTitle: 'Web Development, AI Automation, SEO & KPI Dashboards',
          shareDescription:
            'Premium web development, AI automation, SEO, and KPI dashboards built to help growing businesses look professional, get found, and convert better.',
        }
      : {
          title: 'Desarrollo web, IA, SEO y KPI | Webraf — Web Development',
          description:
            'Desarrollo web premium, automatización con IA, SEO y dashboards de KPI para atraer clientes, mejorar conversiones y acelerar tu crecimiento.',
          shareTitle: 'Desarrollo web, IA, SEO y dashboards de KPI | Webraf — Web Development',
          shareDescription:
            'Desarrollo web premium, automatización con IA, SEO y dashboards de KPI para atraer clientes, mejorar conversiones y acelerar tu crecimiento.',
        };

  return [
    { title: seo.title },
    { name: 'description', content: seo.description },
    { property: 'og:title', content: seo.shareTitle },
    { property: 'og:description', content: seo.shareDescription },
    { name: 'twitter:title', content: seo.shareTitle },
    { name: 'twitter:description', content: seo.shareDescription },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
  ];
}

export default Home;
