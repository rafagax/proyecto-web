import {
  ArrowRight,
  Check,
  Target,
  BarChart3,
  TrendingUp,
  LayoutDashboard,
  Database,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileAutoCarousel from '../components/MobileAutoCarousel';

const WHATSAPP_PHONE = '584144735431';
const wa = (msg) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

const onImgError = (e) => {
  e.currentTarget.style.display = 'none';
};

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

// Reusable panel styling for the CSS mockups.
const panelStyle = {
  borderRadius: 20,
  border: '1px solid var(--border-subtle)',
  background: 'radial-gradient(circle at 30% 20%, rgba(77,148,255,0.12), var(--bg-card) 70%)',
  padding: '1.75rem',
};

const statTile = {
  flex: 1,
  padding: '14px 16px',
  borderRadius: 12,
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
};

// Dedicated landing page for "KPI Dashboards & Analytics" — same theme/structure
// as the other service pages, with KPI-specific content and CSS dashboard mockups.
const KpiDashboardsDetail = ({ otherServices = [] }) => {
  const clarityPoints = [
    'Lead & sales tracking',
    'Conversion rate visibility',
    'Marketing performance',
    'Clear monthly reports',
  ];

  const oneViewPoints = [
    'Custom KPI setup',
    'Multiple data sources',
    'Real-time visibility',
    'Easy-to-read visuals',
  ];

  const decisionPoints = [
    'Spot trends early',
    'Identify what works',
    'Cut wasted spend',
    'Forecast your growth',
  ];

  const capabilities = [
    { Icon: Target, title: 'Lead & Sales Tracking', text: 'See where your leads and sales come from, and which channels actually perform.' },
    { Icon: BarChart3, title: 'Marketing Analytics', text: 'Track campaigns, traffic, and spend so you know what is worth the investment.' },
    { Icon: TrendingUp, title: 'Conversion Metrics', text: 'Measure conversion rates across your funnel and find where to improve.' },
    { Icon: LayoutDashboard, title: 'Custom Dashboards', text: 'One clean dashboard built around the numbers that matter to your business.' },
    { Icon: Database, title: 'Data Integrations', text: 'We connect your website, ads, and tools so everything lives in one place.' },
    { Icon: FileText, title: 'Monthly Reporting', text: 'Clear, jargon-free reports that show progress and guide your next move.' },
  ];

  const whyPoints = [
    'Dashboards tailored to your business',
    'Only the metrics that actually matter',
    'Clear reporting, no jargon',
    'Connected to your real data sources',
    'Ongoing support and improvements',
  ];

  const process = [
    { n: '01', title: 'Define Your KPIs', text: 'We identify the metrics that truly reflect your business goals.' },
    { n: '02', title: 'Connect Data Sources', text: 'We integrate your website, ads, CRM, and tools into one place.' },
    { n: '03', title: 'Dashboard Design', text: 'We build a clean, easy-to-read dashboard tailored to you.' },
    { n: '04', title: 'Review & Training', text: 'We walk you through it so you can read your numbers with confidence.' },
    { n: '05', title: 'Ongoing Reporting', text: 'We keep it updated and refine it as your business grows.' },
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
                KPI Dashboards &amp; <span className="text-gradient">Analytics</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.12rem', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                We turn your scattered data into clear dashboards, so you always know what's working, where your leads come from, and where to grow.
              </p>
            </div>

            {/* Hero visual — CSS dashboard mockup */}
            <div className="reveal-right wdd-hero-img" style={panelStyle}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={statTile}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: 6 }}>Leads</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>248</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, marginTop: 6 }}>▲ 18% this month</div>
                  </div>
                  <div style={statTile}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: 6 }}>Conversion</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>6.4%</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, marginTop: 6 }}>▲ 1.2 pts</div>
                  </div>
                </div>
                <div style={{ padding: 16, borderRadius: 12, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Leads by month</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700 }}><TrendingUp size={13} /> Trending up</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 90 }}>
                    {[42, 55, 48, 66, 72, 100].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '5px 5px 0 0', background: i === 5 ? 'var(--accent-gradient)' : 'var(--border-subtle)' }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="wdd-hero-cta">
              <a href={wa("Hello, I'd like to plan a KPI dashboard for my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Plan My KPI Dashboard <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clarity */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Know What's Working Before You <span className="text-gradient">Spend More</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Growth without tracking is guesswork. A clear dashboard gives you visibility into leads, sales, campaigns, and conversions — so you decide with confidence.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {clarityPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like clarity on my business numbers.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Get Clarity on Your Numbers <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1100&q=80&fit=crop" alt="Business analytics dashboard on a laptop" loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. One view */}
      <section className="section">
        <div className="container">
          <div className="wdd-two-col reverse" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                All Your Metrics in One Clear <span className="text-gradient">Dashboard</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                No more jumping between tools and spreadsheets. We bring your key numbers together into one custom dashboard that's easy to read at a glance.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {oneViewPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like a custom dashboard for my metrics.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Build My Dashboard <ArrowRight size={16} />
              </a>
            </div>
            {/* CSS KPI tiles mockup */}
            <div className="reveal-right wdd-col-img" style={panelStyle}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { label: 'Traffic', value: '12.4k', delta: '▲ 32%' },
                  { label: 'Leads', value: '248', delta: '▲ 18%' },
                  { label: 'Revenue', value: '$9.1k', delta: '▲ 21%' },
                  { label: 'Conversion', value: '6.4%', delta: '▲ 1.2 pts' },
                ].map((t) => (
                  <div key={t.label} style={statTile}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: 6 }}>{t.label}</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{t.value}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 700, marginTop: 6 }}>{t.delta}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Decisions */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Make Decisions Backed by <span className="text-gradient">Data</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                When you can see your numbers clearly, you stop guessing. Spot trends early, double down on what works, and cut the spend that isn't paying off.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {decisionPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to start tracking the metrics that matter.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Start Tracking What Matters <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&q=80&fit=crop" alt="Performance charts and growth metrics" loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }} className="reveal">
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Everything You Need to Track and <span className="text-gradient">Grow</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              From lead tracking to clear reporting — the metrics, dashboards, and insights that turn data into better decisions.
            </p>
          </div>

          <div className="wdd-feature-grid wdd-only-desktop reveal-group">
            {capabilities.map((c) => <FeatureCard key={c.title} {...c} reveal />)}
          </div>
          <MobileAutoCarousel>
            {capabilities.map((c) => <FeatureCard key={c.title} {...c} />)}
          </MobileAutoCarousel>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa("Hello, I'd like a dashboard to track and grow my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              Track What Drives Growth <ArrowRight size={16} />
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
                Why Work With Our <span className="text-gradient">Analytics Team?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We don't drown you in numbers. We build clear, focused dashboards around your goals — connected to your real data, explained in plain language, and improved over time.
              </p>
              <a href={wa("Hello, I'd like to talk about tracking my business performance.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Let's Talk About Your Metrics <ArrowRight size={16} />
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
              Our Dashboard <span className="text-gradient">Process</span>
            </h2>
          </div>
          <div className="wdd-process wdd-only-desktop reveal-group">
            {process.map((p) => <ProcessCard key={p.n} {...p} reveal />)}
          </div>
          <MobileAutoCarousel speed={0.95}>
            {process.map((p) => <ProcessCard key={p.n} {...p} />)}
          </MobileAutoCarousel>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa("Hello, I'd like to start building my KPI dashboard.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
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
                Ready to See Your Business <span className="text-gradient">Clearly?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                Let's build a dashboard that turns your data into better decisions, less wasted spend, and faster growth.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a href={wa("Hello, I'd like to plan a KPI dashboard for my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                  Plan My KPI Dashboard <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore other services */}
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

export default KpiDashboardsDetail;
