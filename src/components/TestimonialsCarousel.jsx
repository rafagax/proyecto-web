import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Start at 3 to match the server/prerendered render, then adjust on the client
  // (avoids a hydration mismatch). Also keeps it responsive on resize.
  const [visibleCount, setVisibleCount] = useState(3);

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Determine how many cards to show based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const displayCount = visibleCount === 3 ? 3 : visibleCount;

  return (
    <section className="testimonials-carousel-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p>Real stories from businesses we've helped transform</p>

        <div className="testimonials-carousel-wrapper">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="carousel-nav-btn testimonials-prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div className="testimonials-carousel-container">
            <div className="testimonials-carousel-track">
              {testimonials.map((testimonial, index) => {
                // Check if testimonial should be visible (with infinite loop)
                let isVisible = false;
                for (let i = 0; i < displayCount; i++) {
                  if ((currentIndex + i) % testimonials.length === index) {
                    isVisible = true;
                    break;
                  }
                }

                return (
                  <div
                    key={testimonial.id}
                    className={`testimonial-card ${isVisible ? 'visible' : ''}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      display: isVisible ? 'flex' : 'none',
                    }}
                  >
                    <span className="tm-quote-mark" aria-hidden="true">&rdquo;</span>
                    <span className="tm-service-tag">{testimonial.service}</span>

                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" />
                      ))}
                    </div>

                    <p className="tm-quote">{testimonial.quote}</p>

                    <div className="tm-person">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="tm-avatar"
                        loading="lazy"
                      />
                      <div className="tm-person-info">
                        <p className="tm-name">{testimonial.name}</p>
                        <p className="tm-role">{testimonial.role}</p>
                        <p className="tm-location">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="carousel-nav-btn testimonials-next"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators-testimonials">
          {testimonials.map((_, idx) => {
            let isActive = false;
            for (let i = 0; i < displayCount; i++) {
              if ((currentIndex + i) % testimonials.length === idx) {
                isActive = true;
                break;
              }
            }
            return (
              <button
                key={idx}
                className={`indicator ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
