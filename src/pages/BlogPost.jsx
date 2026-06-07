import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { updateMetaTags } from '../utils/seo';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      updateMetaTags({
        title: post.title,
        description: post.excerpt,
        keywords: `${post.category}, ${post.title.toLowerCase()}`,
        ogTitle: post.title,
        ogDescription: post.excerpt,
      });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="blog-page" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Post Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Sorry, we couldn't find the article you're looking for.
          </p>
          <Link to="/blog" className="btn-secondary">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      {/* Hero Image */}
      <div className="blog-post-hero">
        <img src={post.image} alt={post.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      </div>

      {/* Article Content */}
      <article className="blog-post-article">
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Back Button */}
          <Link to="/blog" className="blog-post-back">
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          {/* Category & Meta */}
          <div className="blog-post-meta-top">
            <span className="blog-category">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="blog-post-title">{post.title}</h1>

          {/* Author & Date */}
          <div className="blog-post-info">
            <div className="meta-item">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="meta-item">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Content */}
          <div className="blog-post-content">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: '#fff' }}>
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#fff' }}>
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
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to take your business online?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Get a professional website built in just 7 days. Let's transform your digital presence.
            </p>
            <a href="https://wa.me/584144735431" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-large">
              Get Started Now
            </a>
          </div>

          {/* Back Button */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Link to="/blog" className="btn-secondary">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
