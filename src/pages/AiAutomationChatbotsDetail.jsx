import {
  ArrowRight,
  Check,
  Bot,
  MessageCircle,
  Target,
  CalendarClock,
  MessageSquare,
  Headset,
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

const panelStyle = {
  borderRadius: 20,
  border: '1px solid var(--border-subtle)',
  background: 'radial-gradient(circle at 30% 20%, rgba(77,148,255,0.12), var(--bg-card) 70%)',
  padding: '1.75rem',
};

const bubbleIn = {
  alignSelf: 'flex-start',
  maxWidth: '82%',
  padding: '11px 15px',
  borderRadius: '16px 16px 16px 4px',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-primary)',
  fontSize: '0.85rem',
  lineHeight: 1.45,
};

const bubbleOut = {
  alignSelf: 'flex-end',
  maxWidth: '82%',
  padding: '11px 15px',
  borderRadius: '16px 16px 4px 16px',
  background: 'linear-gradient(135deg, #4d94ff, #0066ff)',
  color: '#05050a',
  fontSize: '0.85rem',
  fontWeight: 500,
  lineHeight: 1.45,
};

// Dedicated landing page for "AI Automation & Chatbots" — same theme/structure
// as the other service pages, with AI-specific content and CSS chat mockups.
const AiAutomationChatbotsDetail = ({ otherServices = [] }) => {
  const fastPoints = [
    'Instant replies, 24/7',
    'Lead qualification',
    'Answers common questions',
    'Faster replies, more sales',
  ];

  const whatsappPoints = [
    'Automated WhatsApp replies',
    'Appointment booking',
    'FAQ handling',
    'Smart human handoff',
  ];

  const trainedPoints = [
    'Custom tone of voice',
    'Trained on your services',
    'Smart escalation to a human',
    'Continuous optimization',
  ];

  const capabilities = [
    { Icon: Bot, title: 'AI Chatbots', text: 'Smart assistants that answer questions and guide visitors toward action.' },
    { Icon: MessageCircle, title: 'WhatsApp Automation', text: 'Automated replies on the channel where your customers already are.' },
    { Icon: Target, title: 'Lead Qualification', text: 'The AI collects key info and qualifies leads before they reach you.' },
    { Icon: CalendarClock, title: 'Appointment Booking', text: 'Let customers book and confirm appointments without back-and-forth.' },
    { Icon: MessageSquare, title: 'FAQ Automation', text: 'Instant answers to your most common questions, day or night.' },
    { Icon: Headset, title: 'Human Handoff', text: 'When it matters, the conversation passes smoothly to a real person.' },
  ];

  const whyPoints = [
    'Custom AI trained on your business',
    'Replies in seconds, 24/7',
    'Qualifies leads automatically',
    'Human handoff when it matters',
    'Ongoing tuning and support',
  ];

  const process = [
    { n: '01', title: 'Strategy & Use Cases', text: 'We map where automation saves time and captures more leads.' },
    { n: '02', title: 'Flow & Script Design', text: 'We design the conversation flows and responses for your business.' },
    { n: '03', title: 'WhatsApp & Setup', text: 'We connect WhatsApp and the systems your assistant needs.' },
    { n: '04', title: 'Training & Testing', text: 'We train the AI on your services and tone, then test thoroughly.' },
    { n: '05', title: 'Launch & Optimization', text: 'We go live and keep improving replies based on real conversations.' },
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
                AI Automation &amp; <span className="text-gradient">Chatbots</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.12rem', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                We build AI chatbots and WhatsApp automation that answer instantly, qualify leads, and support your customers 24/7 — even while you sleep.
              </p>
            </div>

            {/* Hero visual — CSS chat mockup */}
            <div className="reveal-right wdd-hero-img" style={panelStyle}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={bubbleIn}>Hi! Do you have availability this week? 👋</div>
                <div style={bubbleOut}>Yes! I can book you for Thursday at 3pm. Shall I confirm it? ✅</div>
                <div style={bubbleOut}>Great — you're booked. Here's a quick price list meanwhile 📋</div>
                <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 8, marginTop: 4, fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  <Bot size={14} /> AI agent replied in 8 seconds
                </div>
              </div>
            </div>

            <div className="wdd-hero-cta">
              <a href={wa("Hello, I'd like to build an AI assistant for my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Build My AI Assistant <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Respond fast */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Never Lose a Lead Because You Replied <span className="text-gradient">Too Late</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Customers expect fast answers. AI automation replies instantly, handles common questions, and guides prospects to the next step — day or night.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {fastPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to respond to customers faster with AI.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Respond Faster, Sell More <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1100&q=80&fit=crop" alt="Customer messaging on a smartphone" loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WhatsApp automation */}
      <section className="section">
        <div className="container">
          <div className="wdd-two-col reverse" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                WhatsApp Automation That Works While You <span className="text-gradient">Sleep</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Most customers message on WhatsApp. We set up AI that replies, books appointments, and only passes the conversation to you when it really matters.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {whatsappPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like to automate my WhatsApp with AI.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Automate My WhatsApp <ArrowRight size={16} />
              </a>
            </div>
            {/* CSS chat snippet mockup */}
            <div className="reveal-right wdd-col-img" style={panelStyle}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={bubbleIn}>Do you open on Saturdays? 🙌</div>
                <div style={bubbleOut}>Yes! Saturdays 9am–2pm. Want me to reserve a slot for you?</div>
                <div style={bubbleIn}>Perfect, 10am please.</div>
                <div style={bubbleOut}>Done ✅ You're booked for Saturday at 10am. See you then!</div>
                <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 8, marginTop: 4, fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  <CalendarClock size={14} /> Appointment booked automatically
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trained on your business */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                Trained on Your Business, Speaking Your <span className="text-gradient">Voice</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Your AI assistant isn't generic. We train it on your services, prices, and tone so every reply feels like your brand — and escalates to a human when needed.
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {trainedPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa("Hello, I'd like an AI assistant trained on my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Train My AI Assistant <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal-right wdd-imgpanel wdd-col-img">
              <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1100&q=80&fit=crop" alt="AI assistant supporting a business conversation" loading="lazy" onError={onImgError} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }} className="reveal">
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Everything Your Business Needs to <span className="text-gradient">Automate</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              From instant replies to appointment booking — AI that works around the clock so you respond faster and convert more.
            </p>
          </div>

          <div className="wdd-feature-grid wdd-only-desktop reveal-group">
            {capabilities.map((c) => <FeatureCard key={c.title} {...c} reveal />)}
          </div>
          <MobileAutoCarousel>
            {capabilities.map((c) => <FeatureCard key={c.title} {...c} />)}
          </MobileAutoCarousel>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa("Hello, I'd like to automate my customer responses with AI.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
              Automate My Responses <ArrowRight size={16} />
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
                Why Work With Our <span className="text-gradient">AI Team?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We build AI that actually fits your business — trained on your services, connected to WhatsApp, and tuned over time. Fast replies, qualified leads, and a human handoff when it counts.
              </p>
              <a href={wa("Hello, I'd like to talk about automating my business with AI.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                Let's Talk About Automation <ArrowRight size={16} />
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
              Our Automation <span className="text-gradient">Process</span>
            </h2>
          </div>
          <div className="wdd-process wdd-only-desktop reveal-group">
            {process.map((p) => <ProcessCard key={p.n} {...p} reveal />)}
          </div>
          <MobileAutoCarousel speed={0.95}>
            {process.map((p) => <ProcessCard key={p.n} {...p} />)}
          </MobileAutoCarousel>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={wa("Hello, I'd like to start building my AI automation.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
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
                Ready to Respond Faster and <span className="text-gradient">Convert More?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                Let's build an AI assistant that answers instantly, qualifies leads, and supports your customers around the clock.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a href={wa("Hello, I'd like to build an AI assistant for my business.")} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
                  Build My AI Assistant <ArrowRight size={16} />
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

export default AiAutomationChatbotsDetail;
