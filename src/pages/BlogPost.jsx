import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

const BlogPost = () => {
  const { slug } = useParams();
  const { locale, content } = useLocalizedContent();
  const t = content.blog;
  const post = blogPosts.find((p) => p.slug === slug);
  const blogIndex = getLocalizedPath('blog', locale);

  if (!post) {
    return (
      <div className="blog-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t.article.notFound.title}</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {t.article.notFound.copy}
          </p>
          <Link to={blogIndex} className="btn-secondary">
            ← {t.article.backToBlog}
          </Link>
        </div>
      </div>
    );
  }

  const lp = t.posts[post.slug];

  return (
    <div className="blog-page">
      {/* Hero Image */}
      <div className="blog-post-hero">
        <img src={post.image} alt={lp.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      </div>

      {/* Article Content */}
      <article className="blog-post-article">
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Back Button */}
          <Link to={blogIndex} className="blog-post-back">
            <ArrowLeft size={18} /> {t.article.backToBlog}
          </Link>

          {/* Category & Meta */}
          <div className="blog-post-meta-top">
            <span className="blog-category">{t.categories[post.category] || post.category}</span>
          </div>

          {/* Title */}
          <h1 className="blog-post-title">{lp.title}</h1>

          {/* Author & Date */}
          <div className="blog-post-info">
            <div className="meta-item">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="meta-item">
              <Calendar size={18} />
              <span>{lp.date}</span>
            </div>
          </div>

          {/* Content */}
          <div className="blog-post-content">
            {lp.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    {paragraph.replace('##', '').trim()}
                  </h2>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={idx} style={{ marginLeft: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                        {item.replace('-', '').trim()}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="blog-post-cta">
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.article.ctaHeading}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {t.article.ctaCopy}
            </p>
            <a href="https://wa.me/584144735431" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
              {t.article.ctaButton}
            </a>
          </div>

          {/* Back Button */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Link to={blogIndex} className="btn-secondary">
              ← {t.article.backToBlog}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
