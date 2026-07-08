import { useRef, useState, useEffect } from "react";

const testimonials = [
  // Venezuela x4
  {
    name: "Rafael Martínez",
    location: "Valencia, Venezuela 🇻🇪",
    quote: "In 7 days I had my website up and running and receiving clients. The team was incredibly professional and handled everything I asked for.",
    initial: "R",
    service: "Landing Page",
    color: "#0066ff",
  },
  {
    name: "Daniela Suárez",
    location: "Maracay, Venezuela 🇻🇪",
    quote: "Thanks to the AI automation they implemented, I answer WhatsApp inquiries effortlessly. My sales went up 40% in the first month.",
    initial: "D",
    service: "AI Automation",
    color: "#4d94ff",
  },
  {
    name: "Miguel Ángel Torres",
    location: "Maturín, Venezuela 🇻🇪",
    quote: "The chatbot they integrated handles clients while I sleep. It's an investment that paid for itself in less than a month.",
    initial: "M",
    service: "AI Chatbot",
    color: "#0066ff",
  },
  {
    name: "Valentina Castro",
    location: "Los Teques, Venezuela 🇻🇪",
    quote: "I wasn't showing up on Google at all. Now I'm the top result in my city. The local SEO work they did was extraordinary.",
    initial: "V",
    service: "SEO + Web",
    color: "#4d94ff",
  },
  // USA x2
  {
    name: "James Rodríguez",
    location: "Miami, Florida 🇺🇸",
    quote: "I needed a bilingual website for my Hispanic audience and they delivered perfectly. The design is clean, fast and professional. Highly recommended!",
    initial: "J",
    service: "Bilingual Web",
    color: "#0066ff",
  },
  {
    name: "Sofia Mendez",
    location: "Houston, Texas 🇺🇸",
    quote: "My business visibility skyrocketed after their local SEO work. I went from being invisible online to getting 3–4 new clients per week.",
    initial: "S",
    service: "Local SEO",
    color: "#4d94ff",
  },
  // Spain x2
  {
    name: "Carlos Fernández",
    location: "Madrid, Spain 🇪🇸",
    quote: "I hired the service from Spain and the experience was flawless. They delivered ahead of schedule and the design exceeded my expectations.",
    initial: "C",
    service: "Professional Web",
    color: "#0066ff",
  },
  {
    name: "Lucía Herrera",
    location: "Barcelona, Spain 🇪🇸",
    quote: "I needed an online store and they set it up in record time. The post-sale support was also excellent. My business grew remarkably.",
    initial: "L",
    service: "E-Commerce",
    color: "#4d94ff",
  },
  // USA x3
  {
    name: "Carlos Pérez",
    location: "New York, NY 🇺🇸",
    quote: "They built my website in less than a week and the results were immediate. My restaurant started getting online reservations right away. Amazing team!",
    initial: "C",
    service: "Web + SEO",
    color: "#0066ff",
  },
];

const StarRating = () => (
  <div
    role="img"
    aria-label="5 out of 5 stars"
    style={{ display: "flex", gap: "2px", color: "#FFD700", marginBottom: "0.75rem" }}
  >
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ t }) => (
  <div
    className="testimonial-card"
    style={{ width: "300px", flexShrink: 0 }}
  >
    <StarRating />

    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", flex: 1, marginBottom: "1.5rem" }}>
      &ldquo;{t.quote}&rdquo;
    </p>

    <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
      <div
        style={{
          width: "48px", height: "48px", borderRadius: "50%",
          background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.2rem", fontWeight: "800", color: "#fff",
          flexShrink: 0, boxShadow: `0 0 12px ${t.color}55`,
        }}
      >
        {t.initial}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: "700", fontSize: "0.9rem", margin: 0 }}>{t.name}</p>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", margin: 0 }}>{t.location}</p>
      </div>
    </div>

    <span
      style={{
        marginTop: "1rem", display: "inline-block",
        padding: "4px 12px", borderRadius: "20px",
        background: `${t.color}22`, color: t.color,
        fontSize: "0.7rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em",
      }}
    >
      {t.service}
    </span>
  </div>
);

export function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Respect reduced motion: no marquee, manual scroll stays available.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrameId = 0;
    let running = false;
    const animateScroll = () => {
      if (!isInteracting) {
        el.scrollLeft += 1.2;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };
    const start = () => {
      if (!running) {
        running = true;
        animationFrameId = requestAnimationFrame(animateScroll);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
    };

    // Run the loop only while the carousel is actually in the viewport.
    let observer;
    if (typeof IntersectionObserver === 'undefined') {
      start();
    } else {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      });
      observer.observe(el);
    }

    return () => {
      stop();
      if (observer) observer.disconnect();
    };
  }, [isInteracting]);

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <div>
            <span className="testimonials-tag">Happy Clients</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 1.1, marginTop: "0.75rem" }}>
              Businesses already{" "}
              <span className="text-gradient">growing with us</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Carousel — shown on ALL screen sizes */}
      <div
        className="testimonials-carousel"
        ref={scrollRef}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        <div className="testimonials-track">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`a-${idx}`} t={t} />
          ))}
          {/* Duplicate copy for the seamless loop — hidden from assistive tech */}
          <div aria-hidden="true" style={{ display: "contents" }}>
            {testimonials.map((t, idx) => (
              <TestimonialCard key={`b-${idx}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
