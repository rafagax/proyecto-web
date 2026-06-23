import { useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { updateMetaTags } from '../utils/seo';

const Blog = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Web Development Tips & Digital Marketing Blog',
      description: 'Learn about web development, SEO strategies, AI chatbots, and digital marketing tips for your business.',
      keywords: 'web development blog, SEO tips, digital marketing, web design, AI chatbots',
    });
  }, []);

  return (
    <div className="blog-page">
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Digital Solutions <span className="text-gradient">Blog</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Tips, insights, and strategies for growing your business online.
          </p>
        </div>
      </section>
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-card-image" />
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
                <Link to={`/blog/${post.slug}`} className="read-more">
                  Read More <ArrowRight size={18} />
                </Link>
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
