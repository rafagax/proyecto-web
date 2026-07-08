import NotFound from '../../src/pages/NotFound.jsx';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';

// Catch-all (splat) route for unknown URLs. Locale comes from the URL. The page is
// intentionally NOT canonical/indexable: it emits a localized title + robots noindex
// and NO canonical/hreflang/x-default/Open Graph/JSON-LD. The real HTTP 404 status is
// served by Apache (ErrorDocument in public/.htaccess) from the prerendered /404 (EN)
// and /es/404 (ES) documents.
export function meta({ location }) {
  const locale = getLocaleFromPath(location.pathname);
  const m = getContent(locale).notFound;

  return [
    { title: m.metaTitle },
    { name: 'description', content: m.metaDescription },
    { name: 'robots', content: 'noindex, nofollow' },
  ];
}

export default NotFound;
