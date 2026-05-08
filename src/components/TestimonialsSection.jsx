import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rafael Martínez",
    location: "Valencia, Venezuela",
    quote: "En 7 días tenía mi web funcionando y recibiendo clientes. El equipo fue increíblemente profesional y resolvió todo lo que pedí.",
    initial: "R",
    service: "Landing Page",
    color: "#0066ff",
  },
  {
    name: "Daniela Suárez",
    location: "Maracay, Aragua",
    quote: "Gracias a la automatización que implementaron, respondo consultas de WhatsApp sin esfuerzo. Mis ventas subieron un 40% el primer mes.",
    initial: "D",
    service: "Automatización IA",
    color: "#00e5ff",
  },
  {
    name: "José Hernández",
    location: "Caracas, Venezuela",
    quote: "Increíble el posicionamiento SEO local. Ahora mis clientes de la zona me encuentran fácilmente en Google. 100% recomendados.",
    initial: "J",
    service: "SEO Local",
    color: "#0066ff",
  },
  {
    name: "Luisa Peña",
    location: "Barquisimeto, Venezuela",
    quote: "Mi tienda online quedó espectacular. Carga rapidísimo y mis clientes me felicitan por lo fácil que es comprar. Excelente trabajo.",
    initial: "L",
    service: "E-Commerce",
    color: "#00e5ff",
  },
  {
    name: "Andrés Blanco",
    location: "Maracaibo, Venezuela",
    quote: "Cumplieron con el plazo prometido y el resultado superó todas mis expectativas. La comunicación durante el proyecto fue impecable.",
    initial: "A",
    service: "Web Profesional",
    color: "#0066ff",
  },
  {
    name: "Camila Rojas",
    location: "Puerto Ordaz, Venezuela",
    quote: "Tenía miedo de no entender nada de tecnología, pero me explicaron todo paso a paso. Ahora manejo mi web sin problemas.",
    initial: "C",
    service: "Landing Page",
    color: "#00e5ff",
  },
  {
    name: "Miguel Ángel Torres",
    location: "Maturín, Venezuela",
    quote: "El chatbot que me integraron atiende clientes mientras duermo. Es una inversión que se pagó sola en menos de un mes.",
    initial: "M",
    service: "Chatbot IA",
    color: "#0066ff",
  },
  {
    name: "Valentina Castro",
    location: "Los Teques, Venezuela",
    quote: "Antes no aparecía en Google. Ahora soy la primera opción en mi ciudad. El trabajo de SEO local que hicieron fue extraordinario.",
    initial: "V",
    service: "SEO + Web",
    color: "#00e5ff",
  },
];

const StarRating = () => (
  <div style={{ display: "flex", gap: "2px", color: "#FFD700", marginBottom: "0.75rem" }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
      <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        Opinión verificada
      </span>
      <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--accent-cyan)" }}>Google</span>
    </div>

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
    let animationFrameId;
    const animateScroll = () => {
      if (scrollRef.current && !isInteracting) {
        scrollRef.current.scrollLeft += 1.2;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };
    animationFrameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting]);

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <div>
            <span className="testimonials-tag">Clientes satisfechos</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 1.1, marginTop: "0.75rem" }}>
              Negocios que ya{" "}
              <span className="text-gradient">crecen con nosotros</span>
            </h2>
          </div>
          <div className="testimonials-rating-badge">
            <span style={{ fontWeight: "700", color: "#fff" }}>4.9 / 5</span>
            <span style={{ color: "var(--text-secondary)" }}> · Google Reseñas</span>
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
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`b-${idx}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
