import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Code, Zap, Search, MessageSquare } from 'lucide-react';
import { updateMetaTags } from '../utils/seo';

const articles = [
  {
    id: 1,
    title: 'Why Your Business Needs a Website in 2025',
    excerpt: 'Learn why having a professional online presence is no longer optional but essential for business growth.',
    category: 'Business Strategy',
    icon: <TrendingUp size={24} />,
    readTime: '5 min read',
    color: '#00e5ff',
    date: 'Jan 15, 2025',
  },
  {
    id: 2,
    title: 'SEO Basics: How to Get Found on Google',
    excerpt: 'Discover the fundamentals of SEO and how to optimize your website to rank higher in search results.',
    category: 'SEO',
    icon: <Search size={24} />,
    readTime: '8 min read',
    color: '#0066ff',
    date: 'Jan 12, 2025',
  },
  {
    id: 3,
    title: 'AI Chatbots: Automate Customer Service 24/7',
    excerpt: 'Explore how AI-powered chatbots can transform your customer service and increase sales conversions.',
    category: 'AI & Automation',
    icon: <MessageSquare size={24} />,
    readTime: '7 min read',
    color: '#00e5ff',
    date: 'Jan 10, 2025',
  },
  {
    id: 4,
    title: 'Web Performance: Why Speed Matters for Sales',
    excerpt: 'Understand how website speed impacts user experience and why it\'s critical for your bottom line.',
    category: 'Web Development',
    icon: <Zap size={24} />,
    readTime: '6 min read',
    color: '#0066ff',
    date: 'Jan 8, 2025',
  },
  {
    id: 5,
    title: 'Mobile-First Design: Building for Smartphones',
    excerpt: 'Learn why designing for mobile first is the modern approach to web development and user engagement.',
    category: 'Web Design',
    icon: <Code size={24} />,
    readTime: '6 min read',
    color: '#00e5ff',
    date: 'Jan 5, 2025',
  },
  {
    id: 6,
    title: 'Local SEO: Dominating Your Local Market',
    excerpt: 'Master local SEO strategies to attract customers in your geographic area and beat your competition.',
    category: 'Local SEO',
    icon: <Search size={24} />,
    readTime: '9 min read',
    color: '#0066ff',
    date: 'Jan 2, 2025',
  },
];

const ArticleCard = ({ article }) => (
  <div
    style={{
      background: 'linear-gradient(135deg, rgba(10, 10, 16, 0.8) 0%, rgba(5, 5, 8, 0.8) 100%)',
      border: '1px solid rgba(0, 229, 255, 0.1)',
      borderRadius: 'var(--border-radius-lg)',
      padding: '2rem',
      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      cursor: 'pointer',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      backdropFilter: 'blur(10px)',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
      e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.4)';
      e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 102, 255, 0.15), 0 0 40px rgba(0, 229, 255, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.1)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: `linear-gradient(135deg, ${article.color}15 0%, ${article.color}08 100%)`,
          border: `1px solid ${article.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: article.color,
        }}
      >
        {article.icon}
      </div>
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: '700',
          color: article.color,
          background: `${article.color}15`,
          padding: '4px 12px',
          borderRadius: '20px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {article.category}
      </span>
    </div>

    <h3 style={{ fontSize: '1.3rem', color: 'white', margin: '0.5rem 0', lineHeight: '1.4' }}>
      {article.title}
    </h3>

    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
      {article.excerpt}
    </p>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        {article.date} · {article.readTime}
      </span>
      <span style={{ color: article.color, fontSize: '1.2rem' }}>→</span>
    </div>
  </div>
);

const Blog = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Web Development & Digital Marketing Blog | Industry Insights',
      description: 'Learn about web development, SEO, digital marketing, and business automation. Read expert articles and insights to grow your online presence.',
      keywords: 'web development blog, SEO tips, digital marketing, web design trends, business automation, e-commerce guides',
      canonical: 'https://yourdomain.com/blog'
    });
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '45vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            Digital Insights
          </span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Blog & <span className="text-gradient">Insights</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Stay ahead of the curve with our latest articles on web development, digital marketing, SEO, and business automation.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)', padding: '4rem var(--spacing-md)' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Get Web <span className="text-gradient">Insights Weekly</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
            Subscribe to our newsletter and receive the latest tips on web development, digital marketing, and business growth delivered to your inbox every week.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: '16px 20px',
                background: 'var(--bg-tertiary)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--border-radius-sm)',
                color: 'white',
                fontFamily: 'inherit',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 229, 255, 0.4)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
            />
            <button
              className="btn btn-primary"
              style={{ padding: '16px 32px', fontWeight: '700' }}
              onClick={() => alert('Subscribe feature coming soon!')}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: '4rem var(--spacing-md)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Ready to transform your <span className="text-gradient">digital presence?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Don't just read about growth — let's build it together. Contact our team for a free consultation.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
