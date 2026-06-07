import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateMetaTags } from '../utils/seo';

const clients = [
  {
    name: "Rafael Martínez",
    business: "Tech Services Valencia",
    location: "Valencia, Venezuela 🇻🇪",
    quote: "In 7 days I had my website up and running and receiving clients. The team was incredibly professional and handled everything I asked for.",
    initial: "R",
    service: "Landing Page",
    result: "+60% more inquiries in the first month",
    color: "#0066ff",
  },
  {
    name: "Daniela Suárez",
    business: "Beauty Studio Maracay",
    location: "Maracay, Venezuela 🇻🇪",
    quote: "Thanks to the AI automation they implemented, I answer WhatsApp inquiries effortlessly. My sales went up 40% in the first month.",
    initial: "D",
    service: "AI Automation",
    result: "+40% sales in month 1",
    color: "#00e5ff",
  },
  {
    name: "James Rodríguez",
    business: "JR Consulting Group",
    location: "Miami, Florida 🇺🇸",
    quote: "I needed a bilingual website for my Hispanic audience and they delivered perfectly. The design is clean, fast and professional. Highly recommended!",
    initial: "J",
    service: "Bilingual Web",
    result: "Doubled online client reach",
    color: "#0066ff",
  },
  {
    name: "Sofia Mendez",
    business: "Sofia's Legal Services",
    location: "Houston, Texas 🇺🇸",
    quote: "My business visibility skyrocketed after their local SEO work. I went from being invisible online to getting 3–4 new clients per week.",
    initial: "S",
    service: "Local SEO",
    result: "3–4 new clients/week",
    color: "#00e5ff",
  },
  {
    name: "Carlos Fernández",
    business: "CF Digital Agency",
    location: "Madrid, Spain 🇪🇸",
    quote: "I hired the service from Spain and the experience was flawless. They delivered ahead of schedule and the design exceeded my expectations.",
    initial: "C",
    service: "Professional Web",
    result: "Delivered 2 days ahead of schedule",
    color: "#0066ff",
  },
  {
    name: "Lucía Herrera",
    business: "Lucía's Boutique Online",
    location: "Barcelona, Spain 🇪🇸",
    quote: "I needed an online store and they set it up in record time. The post-sale support was also excellent. My business grew remarkably.",
    initial: "L",
    service: "E-Commerce",
    result: "Online store live in 10 days",
    color: "#00e5ff",
  },
  {
    name: "Miguel Ángel Torres",
    business: "Torres Auto Parts",
    location: "Maturín, Venezuela 🇻🇪",
    quote: "The chatbot they integrated handles clients while I sleep. It's an investment that paid for itself in less than a month.",
    initial: "M",
    service: "AI Chatbot",
    result: "ROI achieved in under 30 days",
    color: "#0066ff",
  },
  {
    name: "Valentina Castro",
    business: "Valentina's Bakery",
    location: "Los Teques, Venezuela 🇻🇪",
    quote: "I wasn't showing up on Google at all. Now I'm the top result in my city. The local SEO work they did was extraordinary.",
    initial: "V",
    service: "SEO + Web",
    result: "#1 Google ranking in her city",
    color: "#00e5ff",
  },
  {
    name: "Carlos Pérez",
    business: "La Casa Restaurant",
    location: "New York, NY 🇺🇸",
    quote: "They built my website in less than a week and the results were immediate. My restaurant started getting online reservations right away. Amazing team!",
    initial: "C",
    service: "Web + SEO",
    result: "Online reservations from day 1",
    color: "#0066ff",
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

/* ---- Rating bar widths ---- */
const ratingCategories = [
  { label: 'Quality',          pct: 98 },
  { label: 'Schedule',         pct: 96 },
  { label: 'Cost',             pct: 94 },
  { label: 'Willing to Refer', pct: 99 },
];

const RatingBar = ({ label, pct }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <span style={{ minWidth: '110px', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'right' }}>{label}</span>
    <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
      <div
        style={{
          width: `${pct}%`,
          height: '100%',
          borderRadius: '4px',
          background: 'var(--accent-gradient)',
          boxShadow: '0 0 8px rgba(0,229,255,0.4)',
        }}
      />
    </div>
    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-cyan)', minWidth: '36px' }}>
      {(pct / 20).toFixed(1)}
    </span>
  </div>
);

const OurClients = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Client Testimonials | Success Stories & Reviews',
      description: 'See what our 50+ satisfied clients say about our web development and digital services. Real results from real businesses.',
      keywords: 'testimonials, client reviews, success stories, web development reviews, digital agency reviews',
      canonical: 'https://yourdomain.com/our-clients'
    });
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container">

          {/* ── Review Summary Card ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(0,229,255,0.12)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            backdropFilter: 'blur(12px)',
            marginBottom: '4rem',
          }}>

            {/* Left — Title */}
            <div>
              <span style={{
                display: 'inline-block',
                padding: '6px 18px',
                borderRadius: '30px',
                border: '1px solid rgba(0,229,255,0.25)',
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}>
                Testimonials
              </span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '0.75rem' }}>
                What Others Said<br />
                <span className="text-gradient">About Us</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '340px' }}>
                Businesses from Venezuela, the USA &amp; Spain trust us to build their digital presence.
              </p>
            </div>

            {/* Right — Score + bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Overall score */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Overall Review Rating</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ fontSize: '3.5rem', fontWeight: '900', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>4.9</span>
                  </div>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '3px', marginTop: '6px' }}>
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i <= 5 ? '#00e5ff' : 'rgba(255,255,255,0.2)'}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {ratingCategories.map((cat) => (
                  <RatingBar key={cat.label} {...cat} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Stats Strip ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px',
            padding: '2rem',
          }}>
            {[
              { value: '4.9/5', label: 'Google Rating' },
              { value: '50+',   label: 'Happy Clients' },
              { value: '3',     label: 'Countries Served' },
              { value: '100%',  label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '900', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1 }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.4rem', letterSpacing: '0.02em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="testimonial-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Verified Review
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>Google</span>
                </div>

                <StarRating />

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                  &ldquo;{client.quote}&rdquo;
                </p>

                {/* Result badge */}
                <div style={{ background: `${client.color}15`, border: `1px solid ${client.color}40`, borderRadius: '8px', padding: '8px 14px', fontSize: '0.85rem', color: client.color, fontWeight: '600' }}>
                  ✓ {client.result}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${client.color}, ${client.color}88)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', fontWeight: '800', color: '#fff', flexShrink: 0,
                    boxShadow: `0 0 12px ${client.color}55`,
                  }}>
                    {client.initial}
                  </div>
                  <div>
                    <p style={{ fontWeight: '700', fontSize: '0.9rem', margin: 0 }}>{client.name}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: 0 }}>{client.business}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', margin: 0, opacity: 0.7 }}>{client.location}</p>
                  </div>
                </div>

                <span style={{
                  display: 'inline-block', padding: '4px 12px', borderRadius: '20px',
                  background: `${client.color}22`, color: client.color,
                  fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>
                  {client.service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Be our next <span className="text-gradient">success story</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Join 50+ businesses that have already transformed their digital presence with us.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
