import {
  ArrowRight,
  Check,
  CheckCheck,
  Bot,
  MessageCircle,
  Target,
  CalendarClock,
  MessageSquare,
  Headset,
  Phone,
  Video,
  LayoutGrid,
  DollarSign,
  Volume2,
  Code,
  TrendingUp,
  BarChart3,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

const WHATSAPP_PHONE = '584144735431';
const wa = (msg) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

// Discreet secondary-channel link shown under the hero CTA.
const altCtaStyle = { color: 'var(--text-secondary)', fontSize: '0.92rem', textDecoration: 'underline', textUnderlineOffset: 4 };

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

// Classic WhatsApp-style chat mockup (green theme). Rendered as a vector/CSS
// "phone screen" so it looks identical in light or dark site themes. `aria-label`
// provides the accessible/SEO description. `assistantName`/`online` and the message
// text come from localized content; bubble direction (out) and times are structural.
const WaChat = ({ messages, label, assistantName, online }) => (
  <div
    role="img"
    aria-label={label}
    style={{
      width: '100%',
      maxWidth: 380,
      margin: '0 auto',
      borderRadius: 18,
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: '0 18px 45px rgba(0,0,0,0.30)',
    }}
  >
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', background: '#075E54' }}>
      <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
        <Bot size={20} />
      </div>
      <div style={{ lineHeight: 1.25 }}>
        <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{assistantName}</div>
        <div style={{ color: '#a7d7cf', fontSize: '0.72rem' }}>{online}</div>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, color: '#cfe9e3' }}>
        <Video size={16} />
        <Phone size={16} />
      </div>
    </div>

    {/* Conversation */}
    <div style={{ background: '#ECE5DD', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {messages.map((m, i) => (
        <div
          key={i}
          style={{
            alignSelf: m.out ? 'flex-end' : 'flex-start',
            maxWidth: '82%',
            padding: '6px 9px 17px',
            borderRadius: m.out ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
            background: m.out ? '#DCF8C6' : '#FFFFFF',
            color: '#111B21',
            fontSize: '0.82rem',
            lineHeight: 1.4,
            position: 'relative',
            boxShadow: '0 1px 1px rgba(0,0,0,0.10)',
          }}
        >
          {m.text}
          <span style={{ position: 'absolute', right: 9, bottom: 4, fontSize: '0.6rem', color: '#667781', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
            {m.time}
            {m.out && <CheckCheck size={13} color="#34B7F1" />}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const trainItemIcons = [LayoutGrid, DollarSign, MessageSquare, Volume2, Headset];

// "Trained on your business" panel — a config-style card showing the sources the
// assistant is trained on. Icons are structural; labels come from content.
const TrainPanel = ({ label, title, subtitle, items }) => (
  <div role="img" aria-label={label} style={panelStyle}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
        <Bot size={22} />
      </div>
      <div style={{ lineHeight: 1.25 }}>
        <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{title}</div>
        <div style={{ fontSize: '0.74rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{subtitle}</div>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((label, i) => {
        const Icon = trainItemIcons[i];
        return (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 13px', borderRadius: 12, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ display: 'inline-flex', color: 'var(--accent-cyan)', flexShrink: 0 }}><Icon size={18} /></span>
            <span style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: 500 }}>{label}</span>
            <span style={{ marginLeft: 'auto', display: 'inline-flex', color: '#25D366', flexShrink: 0 }}><Check size={16} /></span>
          </div>
        );
      })}
    </div>
  </div>
);

const capabilityIcons = [Bot, MessageCircle, Target, CalendarClock, MessageSquare, Headset];
const otherDefs = [
  { Icon: Code, key: 'svc-web' },
  { Icon: TrendingUp, key: 'svc-seo' },
  { Icon: BarChart3, key: 'svc-kpi' },
];

// Message direction (out) and times are structural; text comes from content.
const CHAT_META = [
  [{ time: '10:02' }, { time: '10:02', out: true }, { time: '10:03' }, { time: '10:03', out: true }],
  [{ time: '18:41' }, { time: '18:41', out: true }, { time: '18:42' }, { time: '18:42', out: true }],
  [{ time: '09:15' }, { time: '09:15', out: true }, { time: '09:16' }, { time: '09:16', out: true }],
];
const buildMsgs = (idx, texts) => CHAT_META[idx].map((m, i) => ({ ...m, text: texts[i] }));

// Dedicated landing page for "AI Automation & Chatbots" — content-driven from the
// locale bundle, with WhatsApp-style chat mockups.
const AiAutomationChatbotsDetail = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.serviceAi;
  const contactPath = getLocalizedPath('contact', locale);
  // Deep link to the localized contact form with this service preselected (contract C2).
  const contactHref = `${contactPath}?service=ai-automation`;
  const isEs = locale === 'es';
  const others = otherDefs.map((d, i) => ({ ...d, ...t.others[i] }));
  const s0 = t.sections[0];
  const s1 = t.sections[1];
  const s2 = t.sections[2];

  // Market-aware CTAs: English visitors (US/UK primary market) get the contact
  // form as the primary action with WhatsApp as a secondary option; Spanish
  // visitors keep WhatsApp primary with the form as the alternative.
  const primaryCta = (label, waQuote) =>
    isEs ? (
      <a href={wa(waQuote)} target="_blank" rel="noopener noreferrer" className="hero-advisory-btn" style={{ margin: 0 }}>
        {label} <ArrowRight size={16} />
      </a>
    ) : (
      <Link to={contactHref} className="hero-advisory-btn" style={{ margin: 0 }}>
        {label} <ArrowRight size={16} />
      </Link>
    );
  const altCta = (waQuote) =>
    isEs ? (
      <Link to={contactHref} style={altCtaStyle}>{t.ctaAlt.form}</Link>
    ) : (
      <a href={wa(waQuote)} target="_blank" rel="noopener noreferrer" style={altCtaStyle}>{t.ctaAlt.whatsapp}</a>
    );

  return (
    <div className="animate-fade-in wdd-page">
      {/* 1. Hero */}
      <section className="hero wdd-hero-section" style={{ paddingTop: '170px', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="wdd-hero">
            <div className="reveal-left wdd-hero-text">
              <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.12, marginBottom: '1.5rem' }}>
                {t.hero.title.before}<span className="text-gradient">{t.hero.title.accent}</span>{t.hero.title.after}
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.12rem', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                {t.hero.subtitle}
              </p>
            </div>

            <div className="reveal-right wdd-hero-img">
              <WaChat label={t.hero.chat.label} assistantName={t.assistantName} online={t.online} messages={buildMsgs(0, t.hero.chat.messages)} />
            </div>

            <div className="wdd-hero-cta">
              {primaryCta(t.hero.cta, t.hero.waQuote)}
              <div style={{ marginTop: '0.9rem' }}>{altCta(t.hero.waQuote)}</div>
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
                {s0.heading.before}<span className="text-gradient">{s0.heading.accent}</span>{s0.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {s0.copy}
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {s0.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {primaryCta(s0.cta, s0.waQuote)}
            </div>
            <div className="reveal-right wdd-col-img">
              <WaChat label={s0.chat.label} assistantName={t.assistantName} online={t.online} messages={buildMsgs(1, s0.chat.messages)} />
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
                {s1.heading.before}<span className="text-gradient">{s1.heading.accent}</span>{s1.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {s1.copy}
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {s1.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {primaryCta(s1.cta, s1.waQuote)}
            </div>
            <div className="reveal-right wdd-col-img">
              <WaChat label={s1.chat.label} assistantName={t.assistantName} online={t.online} messages={buildMsgs(2, s1.chat.messages)} />
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
                {s2.heading.before}<span className="text-gradient">{s2.heading.accent}</span>{s2.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {s2.copy}
              </p>
              <ul className="wdd-list wdd-list-good" style={{ marginBottom: '2rem' }}>
                {s2.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {primaryCta(s2.cta, s2.waQuote)}
            </div>
            <div className="reveal-right wdd-col-img">
              <TrainPanel label={s2.train.label} title={s2.train.title} subtitle={s2.train.subtitle} items={s2.train.items} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }} className="reveal">
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              {t.capabilities.heading.before}<span className="text-gradient">{t.capabilities.heading.accent}</span>{t.capabilities.heading.after}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              {t.capabilities.copy}
            </p>
          </div>

          {/* Single grid — desktop grid, horizontal scroll-snap carousel on mobile (CSS only, no duplicated DOM) */}
          <div className="wdd-feature-grid reveal-group">
            {t.capabilities.items.map((c, i) => <FeatureCard key={c.title} Icon={capabilityIcons[i]} title={c.title} text={c.text} reveal />)}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            {primaryCta(t.capabilities.cta, t.capabilities.waQuote)}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="wdd-two-col" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                {t.why.heading.before}<span className="text-gradient">{t.why.heading.accent}</span>{t.why.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                {t.why.copy}
              </p>
              {primaryCta(t.why.cta, t.why.waQuote)}
            </div>
            <div className="reveal-right">
              <div className="wdd-why-card">
                {t.why.points.map((p) => (
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
              {t.process.heading.before}<span className="text-gradient">{t.process.heading.accent}</span>{t.process.heading.after}
            </h2>
          </div>
          {/* Single grid — desktop grid, horizontal scroll-snap carousel on mobile (CSS only, no duplicated DOM) */}
          <div className="wdd-process reveal-group">
            {t.process.steps.map((p, i) => <ProcessCard key={p.title} n={String(i + 1).padStart(2, '0')} title={p.title} text={p.text} reveal />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            {primaryCta(t.process.cta, t.process.waQuote)}
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
                {t.finalCta.heading.before}<span className="text-gradient">{t.finalCta.heading.accent}</span>{t.finalCta.heading.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                {t.finalCta.copy}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                {primaryCta(t.finalCta.primary, t.finalCta.primaryWaQuote)}
                {isEs ? (
                  <Link to={contactHref} className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                    {t.finalCta.secondary}
                  </Link>
                ) : (
                  <a href={wa(t.finalCta.primaryWaQuote)} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '14px 34px', fontSize: '1rem' }}>
                    {t.ctaAlt.whatsapp}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore other services */}
      {others.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
              {t.otherHeading.before}<span className="text-gradient">{t.otherHeading.accent}</span>{t.otherHeading.after}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {others.map((other) => {
                const OtherIcon = other.Icon;
                return (
                  <Link key={other.key} to={getLocalizedPath(other.key, locale)} className="service-card" style={{ padding: '2rem 1.75rem', display: 'block', textDecoration: 'none' }}>
                    <div className="service-icon" style={{ marginBottom: '1.25rem', width: '50px', height: '50px' }}>
                      <OtherIcon size={26} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{other.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>{other.short}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
                      {t.otherLearnMore} <ArrowRight size={15} />
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
