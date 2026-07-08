import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials as testimonialPeople } from '../data/testimonials';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';

// Initials avatar (no external stock photos): first letters of the name + a stable
// colour derived from the name. Replaces the previous randomuser.me placeholder faces.
const initialsOf = (name = '') =>
  name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
const colorOf = (name = '') => {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return `hsl(${h}, 55%, 42%)`;
};

export const TestimonialsCarousel = () => {
  const { content } = useLocalizedContent();
  const { section, items } = content.testimonials;
  const testimonials = testimonialPeople.map((person, i) => ({ ...person, ...items[i] }));
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
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplayEnabled, isPaused, isInView, testimonials.length]);

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
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
    <section className="testimonials-carousel-section" ref={sectionRef}>
      <div className="container">
        <h2>{section.heading}</h2>
        <p>{section.subtitle}</p>

        <div className="testimonials-carousel-wrapper" {...pauseProps}>
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="carousel-nav-btn testimonials-prev"
            aria-label={section.prevLabel}
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

                    <div
                      className="testimonial-rating"
                      role="img"
                      aria-label={`${testimonial.rating} ${section.ratingLabel}`}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" />
                      ))}
                    </div>

                    <p className="tm-quote">{testimonial.quote}</p>

                    <div className="tm-person">
                      <div
                        className="tm-avatar"
                        style={{
                          background: colorOf(testimonial.name),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          letterSpacing: '0.5px',
                        }}
                        aria-hidden="true"
                      >
                        {initialsOf(testimonial.name)}
                      </div>
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
            aria-label={section.nextLabel}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators-testimonials" {...pauseProps}>
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
                onClick={() => {
                  stopAutoplay();
                  setCurrentIndex(idx);
                }}
                aria-label={`${section.indicatorLabel} ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
