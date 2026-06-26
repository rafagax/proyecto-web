import BlogPost from '../../src/pages/BlogPost.jsx';
import { absoluteUrl } from '../../src/config/site.js';
import { blogPosts } from '../../src/data/blogPosts.js';

export function meta({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return [{ title: 'Blog | Digital Investments' }];
  }
  return [
    { title: `${post.title} | Digital Investments` },
    { name: 'description', content: post.excerpt },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: post.title },
    { property: 'og:description', content: post.excerpt },
    { property: 'og:image', content: post.image },
    { tagName: 'link', rel: 'canonical', href: absoluteUrl(`/blog/${post.slug}`) },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        author: { '@type': 'Organization', name: 'Digital Investments' },
        publisher: { '@type': 'Organization', name: 'Digital Investments' },
        mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
      },
    },
  ];
}

export default BlogPost;
