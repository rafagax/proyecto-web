import {
  ArrowRight,
  Check,
  Search,
  FileText,
  Gauge,
  MapPin,
  PenLine,
  BarChart3,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileAutoCarousel from '../components/MobileAutoCarousel';

const WHATSAPP_PHONE = '584144735431';
const wa = (msg) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

// Branded fallback if a stock image fails to load — degrade to a clean panel
// instead of a broken-image icon.
const onImgError = (e) => {
  e.currentTarget.style.display = 'none';
};

// Capability card — `reveal` adds the scroll-reveal animation (used in the
// desktop grid; omitted in the mobile carousel so cards never stay hidden).
const FeatureCard = ({ Icon, title, text, reveal = false }) => (
  <div className={`wdd-feature-card${reveal ? ' reveal-card' : ''}`}>
    <div className="wdd-feature-icon"><Icon size={22} strokeWidth={1.7} /></div>
    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{text}</p>
  </div>
);

const ProcessCard = ({ n, title, text, reveal = false }) => (
  <div className={`wdd-process-card${reveal ? ' reveal-card' : ''}`}>
    <div className="wdd-process-n">{n}</div>
    <h3 style={{ fontSize: '1.15rem', margin: '0.75rem 0 0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{text}</p>
  </div>
);

// Dedicated landing page for "SEO & Digital Growth" — same theme/structure as
// the Web Development page, with SEO-specific content and visuals.
const SeoDigitalGrowthDetail = ({ otherServices = [] }) => {
  const foundPoints = [
    'Keyword & competitor research',
    'On-page SEO optimization',
    'Content built to rank',
    'Higher visibility on Google',
  ];

  const technicalPoints = [
    'Site speed optimization',
    'Clean, crawlable structure',
    'Metadata & schema markup',
    'Mobile-first indexing',
  ];

  const localPoints = [
    'Google Business Profile optimization',
    'Local keyword targeting',
    'Maps & local pack ranking',
    'Reviews & reputation signals',
    'Location-based content',
  ];

  const capabilities = [
    { Icon: Search, title: 'Keyword Research', text: 'We find the terms your customers actually search so you target real demand.' },
    { Icon: FileText, title: 'On-Page SEO', text: 'Optimized titles, headings, content, and internal links built to rank.' },
    { Icon: Gauge, title: 'Technical SEO', text: 'Fast, crawlable, well-structured pages that search engines reward.' },
    { Icon: MapPin, title: 'Local SEO', text: 'Show up on Google Maps and the local pack for customers near you.' },
    { Icon: PenLine, title: 'Content Strategy', text: 'A content plan that attracts qualified traffic and builds authority.' },
    { Icon: BarChart3, title: 'Analytics & Tracking', text: 'Clear reporting so you see rankings, traffic, and results over time.' },
  ];

  const whyPoints = [
    'Personalized strategy from audit to results',
    'White-hat, sustainable SEO methods',
    'Clear, transparent reporting',
    'Focus on traffic that actually converts',
    'Built for long-term organic growth',
  ];

  const process = [
    { n: '01', title: 'SEO Audit', text: 'We analyze your site, competitors, and current visibility to find opportunities.' },
    { n: '02', title: 'Keyword Research', text: 'We map the search terms and intent that bring qualified customers.' },
    { n: '03', title: 'On-Page & Technical', text: 'We optimize content, structure, speed, and metadata to rank.' },
    { n: '04', title: 'Local & Content', text: 'We strengthen local presence and publish content that attracts traffic.' },
    { n: '05', title: 'Track & Report', text: 'We measure rankings, traffic, and leads — and keep improving.' },
  ];

  return (
    <div className="animate-fade-in wdd-page">
      {/* 1. Hero */}
      <section className="hero wdd-hero-section" style={{ paddingTop: '170px', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="wdd-hero">
            <div className="reveal-left wdd-hero-text">
              <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.12, marginBottom: '1.5rem' }}>
                SEO &amp; Digital <span className="text-gradient">Growth</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.12rem', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                We help your business rank higher on Google, attract qualified traffic, and turn search intent into real customers.
              </p>
            </div>

            {/* Hero image — between subtitle and CTA on mobile, on the right on desktop */}
            <div
              className="reveal-right wdd-hero-img"
              style={{ borderRadius: 22, overflow: 'hidden', background: 'radial-gradient(circle at 30% 20%, rgba(77,148,255,0.18), var(--bg-card) 70%)' }}
            >
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fit=crop" alt="SEO analytics dashboard showing search growth" fetchPriority="high" decoding="async" onError={onImgError} />
            </div>

            <div className="wdd-hero-cta">
              <a href={wa("Hello, I'd like to get a free SEO audit for my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Get a Free SEO Audit <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Get Found */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Get Found by the People Already <span className="text-gradient">Searching</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                The best traffic comes from people already looking for what you offer. We optimize your website and content so the right customers find you first on Google.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {foundPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to start ranking higher on Google.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Start Ranking Higher <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1100&q=80&fit=crop" alt="Search analytics and keyword research on a laptop" loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical SEO */}
      <section className="section">
        <div className="container">
          <div className="wdd-two-col reverse" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Technical SEO That's Fast and Built to <span className="text-gradient">Rank</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Search engines reward fast, well-structured sites. We fix the technical foundations so your pages load quickly, get indexed, and climb the rankings.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {technicalPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to improve my technical SEO and rankings.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Improve My Rankings <ArrowRight size={16} />
              </a>
            </div>
            {/* Search-ranking mockup (CSS) — on-theme and always renders */}
            <div
              className="reveal-right wdd-col-img"
              style={{ borderRadius: 20, border: '1px solid var(--border-subtle)', background: 'radial-gradient(circle at 30% 20%, rgba(77,148,255,0.12), var(--bg-card) 70%)', padding: '2.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ width: '100%', maxWidth: 320 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 16px', borderRadius: 30, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', marginBottom: 28 }}>
                  <Search size={16} style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>best [your service] near me</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 130 }}>
                  {[40, 58, 74, 100].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '6px 6px 0 0', background: i === 3 ? 'var(--accent-gradient)' : 'var(--border-subtle)', position: 'relative' }}>
                      {i === 3 && <span style={{ position: 'absolute', top: -26, left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>#1</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local SEO */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Dominate Local Search in <span className="text-gradient">Your Area</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                If your customers are nearby, local SEO puts your business on the map. We optimize your local presence so you show up when people search for services near them.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {localPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to boost my local SEO.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Boost My Local SEO <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&q=80&fit=crop" alt="Local search growth and performance analytics" loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }} className="reveal">
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Everything Your SEO Needs to <span className="text-gradient">Grow</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Strategy, content, and technical expertise working together to grow your visibility, traffic, and qualified leads.
            </p>
          </div>

          {/* Desktop: unified grid */}
          <div className="wdd-feature-grid wdd-only-desktop reveal-group">
            {capabilities.map((c) => <FeatureCard key={c.title} {...c} reveal />)}
          </div>
          {/* Mobile: swipeable auto-scrolling carousel */}
          <MobileAutoCarousel>
            {capabilities.map((c) => <FeatureCard key={c.title} {...c} />)}
          </MobileAutoCarousel>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa("Hello, I'd like to grow my organic traffic with SEO.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              Grow My Organic Traffic <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Why Work With Our <span className="text-gradient">SEO Team?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We combine strategy, technical expertise, and content to grow your visibility — focused on real results: more traffic, more leads, more sales. Our process is transparent and built around your goals.
              </p>
              <a href={wa("Hello, I'd like to talk about growing my business with SEO.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Let's Talk About Your Growth <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right">
              <div className="wdd-why-card">
                {whyPoints.map((p) => (
                  <div key={p} className="wdd-why-row">
                    <span className="wdd-check"><Check size={16} /></span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="reveal">
            <h2 style={{ fontSize: '2.3rem', lineHeight: 1.2 }}>
              Our <span className="text-gradient">SEO Process</span>
            </h2>
          </div>
          {/* Desktop: grid */}
          <div className="wdd-process wdd-only-desktop reveal-group">
            {process.map((p) => <ProcessCard key={p.n} {...p} reveal />)}
          </div>
          {/* Mobile: swipeable auto-scrolling carousel */}
          <MobileAutoCarousel speed={0.95}>
            {process.map((p) => <ProcessCard key={p.n} {...p} />)}
          </MobileAutoCarousel>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa("Hello, I'd like to start the SEO process for my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              Start the Process <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-cta reveal">
            <div className="wdd-cta-grid"></div>
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Ready to Rank Higher and <span className="text-gradient">Grow Your Traffic?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                Let's build an SEO strategy that gets your business found, drives qualified traffic, and turns searches into customers.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a href={wa("Hello, I'd like to get a free SEO audit for my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                  Get a Free SEO Audit <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore other services — internal linking (SEO) */}
      {otherServices.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
              Explore Our Other <span className="text-gradient">Services</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {otherServices.map((other) => {
                const OtherIcon = other.Icon;
                return (
                  <Link key={other.slug} to={`/services/${other.slug}`} className="service-card" style={{ padding: '2rem 1.75rem', display: 'block', textDecoration: 'none' }}>
                    <div className="service-icon" style={{ marginBottom: '1.25rem', width: '50px', height: '50px' }}>
                      <OtherIcon size={26} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{other.eyebrow}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>{other.short}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
                      Learn more <ArrowRight size={15} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SeoDigitalGrowthDetail;
