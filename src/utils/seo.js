// SEO utilities for managing meta tags and structured data

// NOTE: The document head (title, description, og, canonical) is now managed by
// React Router's per-route `meta` exports in framework mode (SSG/prerender), so
// the head is correct in the prerendered HTML for crawlers and link-preview bots.
// This is kept as a no-op so existing page imports/calls don't break; managing the
// head imperatively here would fight React Router's <Meta> on the client.
export const updateMetaTags = () => {};

// Schema.org JSON-LD is now emitted directly in the prerendered HTML via React
// Router per-route `meta` exports (`script:ld+json`). These are kept as no-ops so
// existing page imports/calls don't break and we don't inject duplicate structured
// data on the client.
export const addServiceSchema = () => {};
export const addFAQSchema = () => {};
export const addArticleSchema = () => {};
