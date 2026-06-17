import BlogPost from '../../src/pages/BlogPost.jsx';
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
    { tagName: 'link', rel: 'canonical', href: `https://yourdomain.com/blog/${post.slug}` },
  ];
}

export default BlogPost;
