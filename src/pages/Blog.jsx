import { useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { updateMetaTags } from '../utils/seo';

const Blog = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Web Development Tips & Digital Marketing Blog',
      description: 'Learn about web development, SEO strategies, AI chatbots, and digital marketing tips for your business.',
      keywords: 'web development blog, SEO tips, digital marketing, web design, AI chatbots',
    });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Web Development Agency',
      excerpt: 'Learn the key factors to consider when selecting a web development partner for your business.',
      author: 'Digital Solutions Pro',
      date: 'June 2024',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'SEO Best Practices for Local Businesses',
      excerpt: 'Discover proven strategies to improve your local SEO and attract customers in your area.',
      author: 'Digital Solutions Pro',
      date: 'May 2024',
      category: 'SEO',
    },
    {
      id: 3,
      title: 'Why Your Business Needs an AI Chatbot',
      excerpt: 'Explore the benefits of AI chatbots for customer engagement and lead generation.',
      author: 'Digital Solutions Pro',
      date: 'April 2024',
      category: 'AI & Automation',
    },
  ];

  return (
    <div className="blog-page">
      <section className="blog-header">
        <div className="container">
          <h1>Digital Solutions Blog</h1>
          <p>Tips, insights, and strategies for growing your business online.</p>
        </div>
      </section>
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-category">{post.category}</div>
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <div className="meta-item">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className="read-more">
                  Read More <ArrowRight size={18} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="newsletter-section">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest web development tips and digital marketing strategies.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
