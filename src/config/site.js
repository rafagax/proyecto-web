// Centralized base URL for the site — single source of truth for canonicals,
// hreflang, Open Graph, JSON-LD and the sitemap generator.
//
// Resolution order:
//   1. import.meta.env.VITE_SITE_URL    → set at build time by Vite (server + client
//      bundles get the SAME literal, so prerender and hydration stay in sync).
//   2. globalThis.process.env.SITE_URL  → for Node build scripts that run outside Vite.
//   3. Local fallback                   → ONLY for local dev / local builds. A deployed
//      (Vercel or REQUIRE_SITE_URL=1) build with no domain configured FAILS instead of silently
//      emitting localhost canonicals. The vercel.app domain is never used automatically.
//
// Safe in every environment (Vite dev, React Router build, prerender, browser, Node):
// `import.meta.env` and `process` are read behind typeof/optional guards, so the browser
// never runs Node-only logic and Node never depends on browser globals.

const viteEnv =
  typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : undefined;
const nodeEnv =
  typeof globalThis !== 'undefined' && globalThis.process ? globalThis.process.env : undefined;

// Configured domain: the Vite-exposed value wins, then a Node-only SITE_URL.
const configuredUrl =
  (viteEnv && viteEnv.VITE_SITE_URL) || (nodeEnv && nodeEnv.SITE_URL) || '';

// A deploy build MUST use a real domain. Triggered ONLY by Vercel (VERCEL) or an
// explicit REQUIRE_SITE_URL=1. A generic CI run (e.g. CI=true to lint/build a PR) is
// NOT treated as a deploy and may fall back to localhost.
const isDeployBuild = Boolean(
  nodeEnv && (nodeEnv.VERCEL || nodeEnv.REQUIRE_SITE_URL === '1')
);

// Provisional local domain — used only for local dev / local builds.
const FALLBACK_URL = 'http://localhost:5173';

// An accepted SITE_URL must be an absolute http(s) URL with no embedded credentials.
// https is recommended in production; http is intended only for localhost.
function isValidSiteUrl(value) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
  if (parsed.username || parsed.password) return false;
  return true;
}

function resolveSiteUrl() {
  if (configuredUrl) {
    if (!isValidSiteUrl(configuredUrl)) {
      throw new Error(
        `Invalid SITE_URL: ${JSON.stringify(configuredUrl)}.\n` +
          'It must be an absolute http(s) URL without credentials, e.g. https://example.com.'
      );
    }
    return configuredUrl;
  }
  if (isDeployBuild) {
    throw new Error(
      'SITE_URL is required for production builds.\n' +
        'Set VITE_SITE_URL to the final public domain.'
    );
  }
  return FALLBACK_URL;
}

// Normalized without a trailing slash so absoluteUrl() never produces "//".
export const SITE_URL = resolveSiteUrl().replace(/\/+$/, '');

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
