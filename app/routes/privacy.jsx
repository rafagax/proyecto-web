import PrivacyPolicy from '../../src/pages/PrivacyPolicy.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import privacyContent from '../../src/content/privacy.js';
import { ogTags } from '../og.js';

// Locale-aware meta for the bilingual Privacy Policy. Same module renders both
// /privacy (en) and /es/privacidad (es); the locale is derived from the URL.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const t = (privacyContent[locale] || privacyContent.en).meta;
  const enHref = absoluteUrl('/privacy');
  const esHref = absoluteUrl('/es/privacidad');
  const canonical = locale === 'es' ? esHref : enHref;

  return [
    { title: t.title },
    { name: 'description', content: t.description },
    { property: 'og:title', content: t.title },
    { property: 'og:description', content: t.description },
    ...ogTags({ canonical, locale }),
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
  ];
}

export default PrivacyPolicy;
