// Centralized base URL for the site — single source of truth for canonicals,
// hreflang, Open Graph, JSON-LD and the sitemap generator.
//
// Resolution order:
//   1. import.meta.env.VITE_SITE_URL    → baked in by Vite at build time (server +
//      client bundles receive the SAME literal, so prerender and hydration stay in sync).
//   2. globalThis.process.env.SITE_URL  → for Node build scripts that run outside Vite
//      (e.g. the future sitemap / postbuild step).
//   3. Local fallback                   → provisional until the production domain is provided.
//
// Commit 1 is additive: nothing imports this file yet, so site behavior is unchanged.

const viteEnvUrl =
  typeof import.meta !== 'undefined' && import.meta.env
    ? import.meta.env.VITE_SITE_URL
    : undefined;

const nodeEnv =
  typeof globalThis !== 'undefined' && globalThis.process ? globalThis.process.env : undefined;
const nodeEnvUrl = nodeEnv ? nodeEnv.SITE_URL : undefined;

// Provisional local domain — replace by setting VITE_SITE_URL (and SITE_URL for the
// Node build scripts) once the production domain is confirmed.
const FALLBACK_URL = 'http://localhost:5173';

export const SITE_URL = (viteEnvUrl || nodeEnvUrl || FALLBACK_URL).replace(/\/+$/, '');

// Build an absolute URL from a path, using SITE_URL as the base. SITE_URL is
// already normalized without a trailing slash, so this never produces a double
// slash after the domain:
//   absoluteUrl('/')        -> `${SITE_URL}/`
//   absoluteUrl('/contact') -> `${SITE_URL}/contact`
//   absoluteUrl('contact')  -> `${SITE_URL}/contact`
//   absoluteUrl('/en/')     -> `${SITE_URL}/en/`
export const absoluteUrl = (path = '/') => {
  const normalizedPath = String(path || '/');
  return `${SITE_URL}${normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`}`;
};
