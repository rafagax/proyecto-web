import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { blogPostPath, localizedSlug } from '../../app/route-manifest.js';

const Blog = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.blog;

  return (
    <div className="blog-page">
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            {t.index.eyebrow}
          </span>
          <h1 className="hero-title page-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {t.index.title.before}<span className="text-gradient">{t.index.title.accent}</span>{t.index.title.after}
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            {t.index.subtitle}
          </p>
        </div>
      </section>
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => {
              // Locale content is keyed by that locale's own slug (ES slugs are translated).
              const lp = t.posts[localizedSlug(post.slug, locale)];
              const postUrl = blogPostPath(post.slug, locale);
              return (
                <article key={post.id} className="blog-card">
                  {/* Image link is a duplicate of the title link → hidden from AT/tab order. */}
                  <Link to={postUrl} aria-hidden="true" tabIndex={-1}>
                    <img src={post.image} alt={lp.imageAlt || `${t.article.imageAltPrefix} ${lp.title}`} className="blog-card-image" />
                  </Link>
                  <div className="blog-category">{t.categories[post.category] || post.category}</div>
                  {/* Title is the main link: descriptive anchor text for the post. */}
                  <h2>
                    <Link to={postUrl} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {lp.title}
                    </Link>
                  </h2>
                  <p className="blog-excerpt">{lp.excerpt}</p>
                  <div className="blog-meta">
                    <div className="meta-item">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{lp.date}</span>
                    </div>
                  </div>
                  <Link to={postUrl} className="read-more">
                    {t.section.readMore} <ArrowRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="newsletter-section">
        <div className="container">
          <h2>{t.index.newsletter.heading}</h2>
          <p>{t.index.newsletter.copy}</p>
          <form className="newsletter-form">
            <input type="email" placeholder={t.index.newsletter.placeholder} required />
            <button type="submit" className="btn btn-primary">
              {t.index.newsletter.button}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
