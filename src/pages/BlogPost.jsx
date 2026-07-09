import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath, articles } from '../../app/route-manifest.js';
import { BUSINESS_WHATSAPP } from '../config/forms.js';

// Minimal inline-markdown support for article bodies: [text](url). Internal URLs
// (starting with "/") become client-side <Link>s; external ones open in a new tab.
const renderInline = (text) =>
  text.split(/(\[[^\]]+\]\([^()\s]+\))/g).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^()\s]+)\)$/);
    if (!match) return part;
    const [, label, url] = match;
    return url.startsWith('/') ? (
      <Link key={i} to={url}>{label}</Link>
    ) : (
      <a key={i} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
    );
  });

const BlogPost = () => {
  const { slug } = useParams();
  const { locale, content } = useLocalizedContent();
  const t = content.blog;
  // Slugs are localized (EN at /blog/<en>, ES at /es/blog/<es>): resolve the
  // article through the manifest so either slug maps back to the shared data entry.
  const article = articles.find((a) => a.en === slug || a.es === slug);
  const post = blogPosts.find((p) => p.slug === (article ? article.en : slug));
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

  // Locale content is keyed by that locale's own slug (ES keys are the ES slugs).
  const lp = t.posts[article ? article[locale] : post.slug];

  return (
    <div className="blog-page">
      {/* Hero Image — sized via .blog-post-hero-img (App.css) so the height can
          shrink on phones; an inline height can't be overridden by media queries. */}
      <div className="blog-post-hero">
        <img src={post.image} alt={lp.imageAlt || `${t.article.imageAltPrefix} ${lp.title}`} className="blog-post-hero-img" />
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
                // Indent comes from .blog-post-content ul (App.css): 2rem on
                // desktop, reduced on phones — do not hardcode it inline.
                return (
                  <ul key={idx} style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                        {renderInline(item.replace('-', '').trim())}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                  {renderInline(paragraph)}
                </p>
              );
            })}
          </div>

          {/* Author bio (E-E-A-T) */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '2.5rem', padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>
            <div aria-hidden="true" style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--accent-cyan)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>
              {t.article.authorName.split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>{t.article.authorName}</p>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{t.article.authorBio}</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="blog-post-cta">
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.article.ctaHeading}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {t.article.ctaCopy}
            </p>
            <a href={`https://wa.me/${BUSINESS_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
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
