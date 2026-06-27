// Locale infrastructure — language is determined EXCLUSIVELY by the URL path.
// No window / document / navigator / cookies / IP / browser detection.
//
// IMPORTANT: every helper here receives a PATHNAME only (e.g. '/en/services'),
// never a full URL, query string or hash. Callers must strip origin/search/hash
// before calling (e.g. use `location.pathname`, not `location.href`).
//
// Commit 3 is additive: nothing imports this yet.

// Single source of truth for supported languages. English is the default and
// lives at the root (no prefix); Spanish lives under the `/es` first segment.
export const SUPPORTED_LOCALES = Object.freeze(['es', 'en']);
export const DEFAULT_LOCALE = 'en';

// Detect the locale from a pathname. A locale is recognized ONLY when the first
// path segment is EXACTLY one of SUPPORTED_LOCALES — never via substring match,
// so '/english' and '/enough' resolve to the default locale, not 'en'.
export function getLocaleFromPath(pathname) {
  const [first] = String(pathname || '/').split('/').filter(Boolean);
  return first && SUPPORTED_LOCALES.includes(first) ? first : DEFAULT_LOCALE;
}

// Return the pathname without its locale prefix. Strips ANY supported locale
// first segment (including 'es', even though the public Spanish version uses the
// root) so the helpers stay idempotent and never produce '/en/es/...'.
export function removeLocalePrefix(pathname) {
  const path = String(pathname || '/');
  const [first] = path.split('/').filter(Boolean);
  if (first && SUPPORTED_LOCALES.includes(first)) {
    const stripped = path.replace(new RegExp(`^/${first}(?=/|$)`), '');
    return stripped === '' ? '/' : stripped;
  }
  return path;
}

// Build the pathname for a target locale. Throws on an unsupported locale.
// Removes any existing supported prefix first, then adds '/es' only for Spanish
// (the default locale 'en' stays at the root, with no prefix).
//
// NOTE: this is a low-level PREFIX helper. It does NOT translate slugs
// (addLocaleToPath('/services', 'es') -> '/es/services', NOT '/es/servicios').
// Slug-correct equivalents live in app/route-manifest.js (getEquivalentPath).
export function addLocaleToPath(pathname, locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  const base = removeLocalePrefix(pathname);
  if (locale === DEFAULT_LOCALE) return base;
  return base === '/' ? `/${locale}/` : `/${locale}${base}`;
}
