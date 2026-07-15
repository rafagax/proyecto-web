import Contact from '../../src/pages/Contact.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';
import { ogTags } from '../og.js';

// Locale-aware meta for /contact and /es/contacto (same module; locale from the URL).
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const esHref = absoluteUrl('/es/contacto');
  const enHref = absoluteUrl('/contact');
  const canonical = locale === 'en' ? enHref : esHref;
  const m = getContent(locale).contact.meta;

  return [
    { title: m.title },
    { name: 'description', content: m.description },
    { property: 'og:title', content: m.ogTitle },
    { property: 'og:description', content: m.ogDescription },
    ...ogTags({ canonical, locale }),
    { name: 'twitter:title', content: m.ogTitle },
    { name: 'twitter:description', content: m.ogDescription },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
  ];
}

export default Contact;
