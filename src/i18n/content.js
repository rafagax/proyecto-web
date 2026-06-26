// Locale content bundles. Static imports only (no async/dynamic import, no
// window/document/navigator) so this is safe during prerender and in the browser.
//
// Commit 3 is additive: nothing imports this yet, and the bundles hold only a
// minimal placeholder (languageName) — no real translated content.

import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './locale.js';
import esCommon from '../content/es/common.js';
import enCommon from '../content/en/common.js';

const BUNDLES = {
  es: { common: esCommon },
  en: { common: enCommon },
};

// Return the content bundle for a locale. Unknown/undefined locales fall back to
// the default locale's bundle.
export function getContent(locale) {
  const key = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  return BUNDLES[key];
}
