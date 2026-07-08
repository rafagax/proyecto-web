import { absoluteUrl } from '../src/config/site.js';

// Shared Open Graph plumbing for the route meta() functions.
//
// app/root.jsx deliberately emits NO og:type / og:image / og:url / og:locale of its
// own (only og:site_name + twitter:card), so each route appends these tags exactly
// once by spreading ogTags() into its meta array. Routes with their own share image
// or type (blog articles, the author profile) pass overrides; everyone else gets
// the site-wide defaults. This guarantees every prerendered document contains
// exactly one og:type, one og:image and one og:url.

// Site-wide social share image — 1200×630 JPG (JPG instead of WebP because LinkedIn
// and some messaging scrapers still don't render WebP og:images reliably).
export const OG_IMAGE = { path: '/og-image.jpg', width: '1200', height: '630' };

/**
 * Build the per-page Open Graph tags.
 *
 * @param {object} opts
 * @param {string} opts.canonical    Absolute canonical URL of the page (og:url).
 * @param {string} opts.locale       'en' | 'es' — drives og:locale / og:locale:alternate.
 * @param {string} [opts.type]       og:type (default 'website'; e.g. 'article', 'profile').
 * @param {string} [opts.image]      Absolute URL of a page-specific share image.
 * @param {string} [opts.imageWidth] Width of the custom image, if known.
 * @param {string} [opts.imageHeight] Height of the custom image, if known.
 */
export function ogTags({ canonical, locale, type = 'website', image, imageWidth, imageHeight } = {}) {
  const isEs = locale === 'es';
  // Only claim dimensions we actually know: the defaults for the site-wide image,
  // or the caller-provided ones for a custom image.
  const img = image || absoluteUrl(OG_IMAGE.path);
  const width = image ? imageWidth : OG_IMAGE.width;
  const height = image ? imageHeight : OG_IMAGE.height;

  const tags = [
    { property: 'og:url', content: canonical },
    { property: 'og:type', content: type },
    { property: 'og:locale', content: isEs ? 'es_ES' : 'en_US' },
    { property: 'og:locale:alternate', content: isEs ? 'en_US' : 'es_ES' },
    { property: 'og:image', content: img },
  ];
  if (width && height) {
    tags.push({ property: 'og:image:width', content: width });
    tags.push({ property: 'og:image:height', content: height });
  }
  tags.push({ name: 'twitter:image', content: img });
  return tags;
}
