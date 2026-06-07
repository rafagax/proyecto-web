import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        <h2>From Our <span className="text-gradient">Blog</span></h2>
        <p>Learn industry insights, strategies, and tips to grow your business online.</p>

        <div className="blog-carousel-wrapper">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="carousel-nav-btn blog-carousel-prev"
            aria-label="Previous article"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div className="blog-carousel-container">
            <div className="blog-carousel-track">
              {blogPosts.map((post, index) => {
                // Check if post should be visible (with infinite loop)
                let isVisible = false;
                for (let i = 0; i < displayCount; i++) {
                  if ((currentIndex + i) % blogPosts.length === index) {
                    isVisible = true;
                    break;
                  }
                }

                return (
                  <div
                    key={post.id}
                    className={`blog-carousel-card-small ${isVisible ? 'visible' : ''}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      display: isVisible ? 'flex' : 'none',
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-card-image-small"
                    />
                    <div className="blog-carousel-card-content-small">
                      <div className="blog-category">{post.category}</div>
                      <h3>{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <Link to={`/blog/${post.slug}`} className="read-more">
                        Read More <ArrowRight size={18} />
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
            aria-label="Next article"
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
                aria-label={`Go to article ${idx + 1}`}
              />
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/blog" className="btn-secondary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};
