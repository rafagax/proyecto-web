import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { blogPostPath, getLocalizedPath, localizedSlug } from '../../app/route-manifest.js';

export const BlogCarousel = () => {
  const { locale, content } = useLocalizedContent();
  const { section, categories, posts } = content.blog;
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  // Autoplay never starts under prefers-reduced-motion and stops permanently
  // after any manual navigation (WCAG 2.2.2 Pause, Stop, Hide).
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  // Start at 3 to match the server/prerendered render, then adjust on the client
  // (avoids a hydration mismatch). Also keeps it responsive on resize.
  const [visibleCount, setVisibleCount] = useState(3);

  // Only autoplay while the section is actually on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay carousel (pauses on hover/focus, stops after manual navigation).
  // Never starts under prefers-reduced-motion (WCAG 2.2.2 Pause, Stop, Hide).
  useEffect(() => {
    if (!autoplayEnabled || isPaused || !isInView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplayEnabled, isPaused, isInView]);

  // Determine how many cards to show based on screen size (client-only)
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setVisibleCount(width < 768 ? 1 : width < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const stopAutoplay = () => setAutoplayEnabled(false);

  const handlePrevious = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const displayCount = visibleCount;

  const pauseProps = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onFocus: () => setIsPaused(true),
    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) setIsPaused(false);
    },
  };

  return (
    <section className="blog-carousel-section" ref={sectionRef}>
      <div className="container">
        <h2>{section.heading.before}<span className="text-gradient">{section.heading.accent}</span></h2>
        <p>{section.subtitle}</p>

        <div className="blog-carousel-wrapper" {...pauseProps}>
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

                // Locale content is keyed by the localized slug (ES slugs are translated).
                const localized = posts[localizedSlug(post.slug, locale)] || {};
                const title = localized.title || post.title;
                const excerpt = localized.excerpt || post.excerpt;
                const date = localized.date || post.date;

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
                        <span>{date}</span>
                      </div>
                      <h3>{title}</h3>
                      <p className="blog-excerpt">{excerpt}</p>
                      {/* Visible text stays "Read More"; aria-label makes the link name descriptive. */}
                      <Link to={blogPostPath(post.slug, locale)} className="read-more" aria-label={`${section.readMore}: ${title}`}>
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
        <div className="carousel-indicators-blog" {...pauseProps}>
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
                onClick={() => {
                  stopAutoplay();
                  setCurrentIndex(idx);
                }}
                aria-label={`${section.indicatorLabel} ${idx + 1}`}
              />
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to={getLocalizedPath('blog', locale)} className="btn-secondary">
            {section.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};
