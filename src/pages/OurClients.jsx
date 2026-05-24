import { Link } from 'react-router-dom';

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

const OurClients = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            Real Results
          </span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Our <span className="text-gradient">Clients</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Businesses from Venezuela, the United States, and Spain trust us to build their digital presence. Here's what they have to say.
          </p>

          {/* Stats Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            {[
              { value: '4.9/5', label: 'Google Rating' },
              { value: '50+', label: 'Happy Clients' },
              { value: '3', label: 'Countries Served' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{stat.label}</div>
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
