import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';

export const BlogCarousel = () => {
  const { content } = useLocalizedContent();
  const { section, categories, posts } = content.blog;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay carousel (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();

  // Always show 3 on desktop, with infinite loop
  const displayCount = visibleCount === 3 ? 3 : visibleCount;

  return (
    <section className="blog-carousel-section">
      <div className="container">
        <h2>{section.heading.before}<span className="text-gradient">{section.heading.accent}</span></h2>
        <p>{section.subtitle}</p>

        <div
          className="blog-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="carousel-nav-btn blog-carousel-prev"
            aria-label={section.prevLabel}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div className="blog-carousel-container">
            <div className="blog-carousel-track">
              {blogPosts.map((post, index) => {
                // Check if post should be visible (with infinite loop)
                let isVisible = false;
                let position = 0;
                for (let i = 0; i < displayCount; i++) {
                  if ((currentIndex + i) % blogPosts.length === index) {
                    isVisible = true;
                    position = i;
                    break;
                  }
                }

                const localized = posts[post.slug] || {};
                const title = localized.title || post.title;
                const excerpt = localized.excerpt || post.excerpt;

                return (
                  <div
                    key={post.id}
                    className={`blog-carousel-card-small ${isVisible ? 'visible' : ''}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                      transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transitionDelay: isVisible ? `${position * 0.08}s` : '0s',
                      display: isVisible ? 'flex' : 'none',
                    }}
                  >
                    <div className="blog-card-image-wrap">
                      <img
                        src={post.image}
                        alt={title}
                        className="blog-card-image-small"
                        loading="lazy"
                      />
                      <span className="blog-category-overlay">{categories[post.category] || post.category}</span>
                    </div>
                    <div className="blog-carousel-card-content-small">
                      <div className="blog-card-meta">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <h3>{title}</h3>
                      <p className="blog-excerpt">{excerpt}</p>
                      <Link to={`/blog/${post.slug}`} className="read-more">
                        {section.readMore} <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="carousel-nav-btn blog-carousel-next"
            aria-label={section.nextLabel}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators-blog">
          {blogPosts.map((_, idx) => {
            let isActive = false;
            for (let i = 0; i < displayCount; i++) {
              if ((currentIndex + i) % blogPosts.length === idx) {
                isActive = true;
                break;
              }
            }
            return (
              <button
                key={idx}
                className={`indicator ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`${section.indicatorLabel} ${idx + 1}`}
              />
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/blog" className="btn-secondary">
            {section.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};
