import BlogPost from '../../src/pages/BlogPost.jsx';
import { SITE_URL, absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';
import { blogPosts } from '../../src/data/blogPosts.js';
import { articles, articlePath } from '../route-manifest.js';
import { ogTags } from '../og.js';

// Breadcrumb labels per locale (paths match app/route-manifest.js).
const CRUMBS = {
  en: { home: 'Home', homePath: '/', blog: 'Blog', blogPath: '/blog' },
  es: { home: 'Inicio', homePath: '/es/', blog: 'Blog', blogPath: '/es/blog' },
};

// Locale-aware meta + BlogPosting JSON-LD for each article. The article is resolved
// through the manifest so the lookup keeps working if the ES slugs diverge from the
// EN ones (the manifest is the single source of truth for both).
export function meta({ params, location }) {
  const locale = getLocaleFromPath(location.pathname);
  const content = getContent(locale);
  const article = articles.find((a) => a.en === params.slug || a.es === params.slug);
  const post = blogPosts.find((p) => p.slug === (article ? article.en : params.slug));

  if (!post) {
    return [{ title: content.blog.indexMeta.ogTitle }];
  }

  // Locale content is keyed by the localized slug (ES slugs are translated).
  const localized = content.blog.posts[article ? article[locale] : post.slug];
  const esHref = absoluteUrl(article ? articlePath(article, 'es') : `/es/blog/${post.slug}`);
  const enHref = absoluteUrl(article ? articlePath(article, 'en') : `/blog/${post.slug}`);
  const canonical = locale === 'en' ? enHref : esHref;
  // Open Graph requires absolute image URLs, and WhatsApp/LinkedIn scrapers do not
  // render webp — each post ships a pre-generated JPG cover (scripts/gen-blog-og.mjs).
  const shareImage = absoluteUrl(post.ogImage || post.image);
  const c = CRUMBS[locale] || CRUMBS.en;

  return [
    { title: `${localized.title} | Webraf` },
    { name: 'description', content: localized.excerpt },
    { property: 'og:title', content: localized.title },
    { property: 'og:description', content: localized.excerpt },
    ...ogTags({ canonical, locale, type: 'article', image: shareImage }),
    { name: 'twitter:title', content: localized.title },
    { name: 'twitter:description', content: localized.excerpt },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { tagName: 'link', rel: 'alternate', hrefLang: 'es', href: esHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: enHref },
    { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: enHref },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: localized.title,
        description: localized.excerpt,
        image: shareImage,
        inLanguage: locale,
        author: {
          '@type': 'Person',
          name: content.blog.article.authorName,
          url: absoluteUrl('/jvportafolio'),
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#org`,
          name: 'Webraf',
          logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') },
        },
        // ISO 8601 dates from src/data/blogPosts.js (the human-readable localized
        // date is UI-only). JSON.stringify drops them if the fields are missing.
        datePublished: post.dateISO,
        dateModified: post.dateModifiedISO,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      },
    },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: c.home, item: absoluteUrl(c.homePath) },
          { '@type': 'ListItem', position: 2, name: c.blog, item: absoluteUrl(c.blogPath) },
          { '@type': 'ListItem', position: 3, name: localized.title, item: canonical },
        ],
      },
    },
  ];
}

export default BlogPost;
