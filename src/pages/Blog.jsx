import { useEffect } from 'react';
import { updateMetaTags } from '../utils/seo';

const Blog = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Blog - Inversiones Digitales',
      description: 'Read our latest articles about web development, digital marketing, and business growth.'
    });
  }, []);

  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Blog</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
            Coming soon. Stay tuned for insights on web development, digital strategy, and business growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
