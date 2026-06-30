import BlogPost from '../../src/pages/BlogPost.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { getLocaleFromPath } from '../../src/i18n/locale.js';
import { getContent } from '../../src/i18n/content.js';
import { blogPosts } from '../../src/data/blogPosts.js';
import { blogPostPath } from '../route-manifest.js';

// Locale-aware meta + BlogPosting JSON-LD for each article. Slugs are identical in
// both languages, so the EN/ES pair shares the slug at /blog/<slug> and /es/blog/<slug>.
export function meta({ params, location }) {
  const locale = getLocaleFromPath(location.pathname);
  const content = getContent(locale);
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return [{ title: content.blog.indexMeta.ogTitle }];
  }

  const localized = content.blog.posts[post.slug];
  const esHref = absoluteUrl(blogPostPath(post.slug, 'es'));
  const enHref = absoluteUrl(blogPostPath(post.slug, 'en'));
  const canonical = locale === 'en' ? enHref : esHref;

  return [
    { title: `${localized.title} | Webraf — Web Development` },
    { name: 'description', content: localized.excerpt },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: localized.title },
    { property: 'og:description', content: localized.excerpt },
    { property: 'og:image', content: post.image },
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
        image: post.image,
        inLanguage: locale,
        author: { '@type': 'Organization', name: 'Webraf' },
        publisher: { '@type': 'Organization', name: 'Webraf' },
        mainEntityOfPage: canonical,
      },
    },
  ];
}

export default BlogPost;
