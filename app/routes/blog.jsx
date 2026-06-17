import Blog from '../../src/pages/Blog.jsx';

export function meta() {
  return [
    { title: 'Blog — Web Development, SEO & AI Insights | Digital Investments' },
    {
      name: 'description',
      content: 'Learn about web development, SEO strategies, AI chatbots, and digital marketing tips for your business.',
    },
    { property: 'og:title', content: 'Blog | Digital Investments' },
    {
      property: 'og:description',
      content: 'Web development, SEO, AI automation and digital marketing insights for growing businesses.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://yourdomain.com/blog' },
  ];
}

export default Blog;
