import { useState } from 'react';
import { ArrowRight, Bot, CheckCircle2, MessageCircle, Mail, MapPin, ChevronRight, Code, TrendingUp, BarChart3, Gauge, MonitorSmartphone, SearchCheck, ListChecks, Goal, Headset } from 'lucide-react';
// Each heavy image ships as AVIF (scripts/gen-avif.mjs) with the WebP original
// as the <picture> fallback. NOTE: wrapping the eager hero in <picture>
// suppresses React 19's automatic SSR preload — app/routes/home.jsx emits the
// equivalent manual preload via its links() export.
import heroImg from '../assets/Hero2.webp';
import heroAvif from '../assets/Hero2.avif';
import webDevImg from '../assets/imagenwebdevelop.webp';
import webDevAvif from '../assets/imagenwebdevelop.avif';
import kpiHomeImg from '../assets/kpi-call-center.webp';
import kpiHomeAvif from '../assets/kpi-call-center.avif';
import seoDigitalImg from '../assets/seoimagendigital.webp';
import seoDigitalAvif from '../assets/seoimagendigital.avif';
import { Link } from 'react-router-dom';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { BlogCarousel } from '../components/BlogCarousel';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import { sendContactEmail, BUSINESS_WHATSAPP } from '../config/forms.js';

const Home = () => {
  const { locale, content } = useLocalizedContent();
  const { common, home } = content;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');       // main contact form
  const [waLink, setWaLink] = useState('');            // prefilled WhatsApp link, kept for the optional post-submit button

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Main contact form → send email via Web3Forms (WhatsApp offered as optional follow-up).
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.botcheck?.checked) return; // honeypot
    const { name, email, phone, message } = formData;
    // Snapshot the prefilled WhatsApp link before the form data is cleared.
    setWaLink(whatsappHref());
    setStatus('sending');
    try {
      // Email (Web3Forms) + Telegram (inside sendContactEmail).
      await sendContactEmail({ name, email, phone, message, page: 'Home' });
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const whatsappHref = () => {
    const { name, email, phone, message } = formData;
    const text =
      locale === 'en'
        ? `Hello, my name is ${name}. My email is ${email}. My phone is ${phone}. My message: ${message}`
        : `Hola, mi nombre es ${name}. Mi correo es ${email}. Mi teléfono es ${phone}. Mi mensaje: ${message}`;
    return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(text)}`;
  };

  const benefits = [
    { icon: Gauge, title: home.benefits.items.fast.title, text: home.benefits.items.fast.text },
    { icon: MonitorSmartphone, title: home.benefits.items.responsive.title, text: home.benefits.items.responsive.text, mobileHide: true },
    { icon: SearchCheck, title: home.benefits.items.seoReady.title, text: home.benefits.items.seoReady.text },
    { icon: ListChecks, title: home.benefits.items.deliveryProcess.title, text: home.benefits.items.deliveryProcess.text, mobileHide: true },
    { icon: Goal, title: home.benefits.items.conversion.title, text: home.benefits.items.conversion.text, mobileHide: true },
    { icon: Headset, title: home.benefits.items.support.title, text: home.benefits.items.support.text },
  ];

  const steps = [
    { number: '01', title: home.process.steps.discover.title, text: home.process.steps.discover.text },
    { number: '02', title: home.process.steps.build.title, text: home.process.steps.build.text },
    { number: '03', title: home.process.steps.launch.title, text: home.process.steps.launch.text },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero" >
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', paddingBottom: '4rem' }}>
          <div className="hero-content hero-content-responsive" style={{ flex: '1 1 400px', textAlign: 'left', margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '2rem', minHeight: '600px' }}>
            <h1 className="hero-title" style={{ lineHeight: 1.1, marginBottom: '2rem' }}>
              {home.hero.title.before}<br className="mobile-only-break" /><span className="text-gradient">{home.hero.title.accent1}</span>{home.hero.title.middle}<br className="mobile-only-break" /><span className="text-gradient">{home.hero.title.accent2}</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.1rem', maxWidth: '550px', marginLeft: 0, marginBottom: '2rem' }}>
              {home.hero.subtitle}
            </p >

            {/* Hero CTAs — one primary (contact) + one secondary (services), visually distinct (Desktop Only) */}
            <div className="hero-advisory-wrap desktop-only" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to={getLocalizedPath('contact', locale)} className="hero-advisory-btn" style={{ margin: 0 }}>
                <span className="hero-advisory-btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L19 6L15.45 11.13L22 12L15.45 12.87L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.55 12.87L2 12L8.55 11.13L5 6L10.91 8.26L12 2Z" fill="currentColor" />
                  </svg>
                </span>
                {home.cta.freeAudit}
                <ArrowRight size={17} />
              </Link>
              <Link to={getLocalizedPath('services', locale)} className="btn btn-secondary" style={{ padding: '14px 30px', fontSize: '1rem' }}>
                {home.hero.ctaSecondary}
              </Link>
            </div>

            {/* Mobile: Hero Image between subtitle and CTA */}
            {/*
            <div className="mobile-hero-img mobile-only">
              <img src={heroImg} alt={home.hero.imageAlt} className="mobile-hero-img-el" />
            </div>
            */}

            {/* Mobile Hero CTA Button (Mobile Only) — primary CTA to contact */}
            <div className="mobile-hero-cta mobile-only">
              <Link to={getLocalizedPath('contact', locale)} className="btn-mobile-audit">
                {home.cta.freeAudit}
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Mobile Hero Service Cards List (Mobile Only) */}
            <div className="mobile-hero-services mobile-only">
              <Link to={getLocalizedPath('svc-web', locale)} className="mobile-service-card">
                <div className="service-card-icon-box">
                  <Code size={18} />
                </div>
                <div className="service-card-text">
                  <h4>{common.services.web.title}</h4>
                  <p>{home.hero.cards.web.tagline}</p>
                </div>
                <ChevronRight size={18} className="service-card-arrow" />
              </Link>

              <Link to={getLocalizedPath('svc-seo', locale)} className="mobile-service-card">
                <div className="service-card-icon-box">
                  <TrendingUp size={18} />
                </div>
                <div className="service-card-text">
                  <h4>{common.services.seo.title}</h4>
                  <p>{home.hero.cards.seo.tagline}</p>
                </div>
                <ChevronRight size={18} className="service-card-arrow" />
              </Link>

              <Link to={getLocalizedPath('svc-kpi', locale)} className="mobile-service-card">
                <div className="service-card-icon-box">
                  <BarChart3 size={18} />
                </div>
                <div className="service-card-text">
                  <h4>{common.services.kpi.title}</h4>
                  <p>{home.hero.cards.kpi.tagline}</p>
                </div>
                <ChevronRight size={18} className="service-card-arrow" />
              </Link>

              <Link to={getLocalizedPath('svc-ai', locale)} className="mobile-service-card">
                <div className="service-card-icon-box">
                  <Bot size={18} />
                </div>
                <div className="service-card-text">
                  <h4>{common.services.ai.title}</h4>
                  <p>{home.hero.cards.ai.tagline}</p>
                </div>
                <ChevronRight size={18} className="service-card-arrow" />
              </Link>
            </div>

          </div>
          {/* Desktop hero image (LCP) — explicit intrinsic size so the browser reserves space before download */}
          <div className="hero-image desktop-only hero-img-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <picture>
              <source type="image/avif" srcSet={heroAvif} />
              <img src={heroImg} alt={home.hero.imageAlt} className="hero-float" width="1122" height="1402" fetchPriority="high" decoding="async" style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(77, 148, 255, 0.3))' }} />
            </picture>
          </div>
        </div>
      </section>

      {/* 2. Problem / Value Proposition */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              {home.value.title.before}<span className="text-gradient">{home.value.title.accent}</span>{home.value.title.after}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: '1.7' }}>
              {home.value.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Offering — Web Development & Design (most requested product, surfaced early) */}
      <section className="section wd-featured" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="feature-row">
            <div className="feature-text reveal-left">
              <span className="feature-eyebrow"><Code size={16} /> {common.services.web.title}</span>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1rem', lineHeight: 1.25, color: 'var(--text-primary)' }}>
                {home.featured.title.before}<span className="text-gradient">{home.featured.title.accent}</span>{home.featured.title.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {home.featured.description}
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} /> {home.featured.bullets[0]}</li>
                <li><CheckCircle2 size={18} /> {home.featured.bullets[1]}</li>
                <li><CheckCircle2 size={18} /> {home.featured.bullets[2]}</li>
              </ul>
              <Link to={getLocalizedPath('svc-web', locale)} className="hero-advisory-btn" style={{ margin: 0 }}>
                {home.featured.cta} <ArrowRight size={16} />
              </Link>
            </div>
            {/* Single visual copy: right column on desktop, repositioned between
                title and paragraph on phones via CSS (see the max-600px
                .feature-row rules in App.css) — no duplicated DOM/text. */}
            <div className="feature-visual feature-visual-image reveal-right">
              {/* Premium corporate website image */}
              <picture>
                <source type="image/avif" srcSet={webDevAvif} />
                <img
                  src={webDevImg}
                  alt={home.featured.imageAlt}
                  loading="lazy"
                  width="1672"
                  height="941"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </picture>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,5,10,0) 30%, rgba(5,5,10,0.92) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: '1.5rem', bottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>
                <Code size={16} style={{ color: 'var(--accent-cyan)' }} />
                {home.featured.imageCaption}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="section" id="services" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="services-grid reveal-group" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '2rem' }}>
            <Link to={getLocalizedPath('svc-web', locale)} className="service-card reveal-card" style={{ padding: '2.5rem 2rem', display: 'block', textDecoration: 'none' }}>
              <div className="service-icon" style={{ marginBottom: '1.5rem' }}><Code size={32} /></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{common.services.web.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {home.servicesGrid.web.description}
              </p>
              <div className="service-highlight">{home.servicesGrid.web.highlight}</div>
            </Link>

            <Link to={getLocalizedPath('svc-seo', locale)} className="service-card reveal-card" style={{ padding: '2.5rem 2rem', display: 'block', textDecoration: 'none' }}>
              <div className="service-icon" style={{ marginBottom: '1.5rem' }}><TrendingUp size={32} /></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{common.services.seo.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {home.servicesGrid.seo.description}
              </p>
              <div className="service-highlight">{home.servicesGrid.seo.highlight}</div>
            </Link>

            <Link to={getLocalizedPath('svc-kpi', locale)} className="service-card reveal-card" style={{ padding: '2.5rem 2rem', display: 'block', textDecoration: 'none' }}>
              <div className="service-icon" style={{ marginBottom: '1.5rem' }}><BarChart3 size={32} /></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{common.services.kpi.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {home.servicesGrid.kpi.description}
              </p>
              <div className="service-highlight">{home.servicesGrid.kpi.highlight}</div>
            </Link>

            <Link to={getLocalizedPath('svc-ai', locale)} className="service-card reveal-card" style={{ padding: '2.5rem 2rem', display: 'block', textDecoration: 'none' }}>
              <div className="service-icon" style={{ marginBottom: '1.5rem' }}><Bot size={32} /></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{common.services.ai.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {home.servicesGrid.ai.description}
              </p>
              <div className="service-highlight">{home.servicesGrid.ai.highlight}</div>
            </Link>
          </div>

          {/* Section CTA — explore all services */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link to={getLocalizedPath('services', locale)} className="hero-advisory-btn" style={{ margin: 0 }}>
              {home.servicesGrid.cta}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Differentiator: Digital Growth System */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
            <div className="reveal-left" style={{ flex: '1 1 450px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                {home.system.title.before}<br />
                <span className="text-gradient">{home.system.title.accent}</span>{home.system.title.after}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {home.system.description}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(home.whatsapp.system)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-advisory-btn"
                  style={{ margin: 0 }}
                >
                  {home.system.cta}
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
            
            <div className="reveal-right" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '380px' }}>
              {/* Visual System representation using CSS */}
              <div className="system-diagram-container">
                {/* Static Center Hub */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(120, 180, 255, 0.95) 0%, rgba(0, 92, 230, 0.95) 72%)',
                  border: '2px dashed var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(77, 148, 255, 0.3)',
                  zIndex: 10
                }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>{home.system.diagram.center}</span>
                </div>

                {/* Rotating Orbit Container */}
                <div className="orbit-container">
                  {/* Web Node */}
                  <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="orbiting-node" style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '30px',
                      background: 'var(--bg-card)',
                      border: '1px solid rgba(77, 148, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(0, 102, 255, 0.15)',
                      whiteSpace: 'nowrap'
                    }}>
                      <Code size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{home.system.diagram.web}</span>
                    </div>
                  </div>

                  {/* SEO Node */}
                  <div style={{ position: 'absolute', top: '50%', left: '100%', transform: 'translate(-50%, -50%)' }}>
                    <div className="orbiting-node" style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '30px',
                      background: 'var(--bg-card)',
                      border: '1px solid rgba(77, 148, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(0, 102, 255, 0.15)',
                      whiteSpace: 'nowrap'
                    }}>
                      <TrendingUp size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{home.system.diagram.seo}</span>
                    </div>
                  </div>

                  {/* KPI Node */}
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="orbiting-node" style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '30px',
                      background: 'var(--bg-card)',
                      border: '1px solid rgba(77, 148, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(0, 102, 255, 0.15)',
                      whiteSpace: 'nowrap'
                    }}>
                      <BarChart3 size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{home.system.diagram.kpi}</span>
                    </div>
                  </div>

                  {/* AI Node */}
                  <div style={{ position: 'absolute', top: '50%', left: '0', transform: 'translate(-50%, -50%)' }}>
                    <div className="orbiting-node" style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '30px',
                      background: 'var(--bg-card)',
                      border: '1px solid rgba(77, 148, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(0, 102, 255, 0.15)',
                      whiteSpace: 'nowrap'
                    }}>
                      <Bot size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{home.system.diagram.ai}</span>
                    </div>
                  </div>

                  {/* Animated Ring */}
                  <div className="system-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Offerings — What We Actually Build */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>{home.build.eyebrow}</span>
            <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
              {home.build.title.before}<span className="text-gradient">{home.build.title.accent}</span>{home.build.title.after}
            </h2>
          </div>

          {/* Offering 1 — SEO */}
          <div className="feature-row reverse">
            <div className="feature-text reveal-left">
              <span className="feature-eyebrow"><TrendingUp size={16} /> {common.services.seo.title}</span>
              <h3 style={{ fontSize: '1.9rem', marginBottom: '1rem', lineHeight: 1.25, color: 'var(--text-primary)' }}>
                {home.build.seo.title.before}<span className="text-gradient">{home.build.seo.title.accent}</span>{home.build.seo.title.after}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {home.build.seo.description}
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} /> {home.build.seo.bullets[0]}</li>
                <li><CheckCircle2 size={18} /> {home.build.seo.bullets[1]}</li>
                <li><CheckCircle2 size={18} /> {home.build.seo.bullets[2]}</li>
              </ul>
              <Link to={getLocalizedPath('svc-seo', locale)} className="hero-advisory-btn" style={{ margin: 0 }}>
                {home.build.seo.cta} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-visual reveal-right">
              {/* SEO & Digital Growth image */}
              <picture>
                <source type="image/avif" srcSet={seoDigitalAvif} />
                <img src={seoDigitalImg} alt={home.build.seo.imageAlt} loading="lazy" width="1672" height="941" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16, border: '1px solid var(--border-subtle)' }} />
              </picture>
            </div>
          </div>

          {/* Offering 2 — AI WhatsApp Agents */}
          <div className="feature-row">
            <div className="feature-text reveal-left">
              <span className="feature-eyebrow"><Bot size={16} /> {common.services.ai.title}</span>
              <h3 style={{ fontSize: '1.9rem', marginBottom: '1rem', lineHeight: 1.25, color: 'var(--text-primary)' }}>
                {home.build.ai.title.before}<span className="text-gradient">{home.build.ai.title.accent}</span>{home.build.ai.title.after}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {home.build.ai.description}
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} /> {home.build.ai.bullets[0]}</li>
                <li><CheckCircle2 size={18} /> {home.build.ai.bullets[1]}</li>
                <li><CheckCircle2 size={18} /> {home.build.ai.bullets[2]}</li>
              </ul>
              <Link to={getLocalizedPath('svc-ai', locale)} className="hero-advisory-btn" style={{ margin: 0 }}>
                {home.build.ai.cta} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-visual reveal-right">
              {/* WhatsApp-style chat mockup (classic green) */}
              <div role="img" aria-label={home.build.ai.mockupAria} style={{ width: '100%', maxWidth: 320, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: '0 18px 45px rgba(0,0,0,0.30)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 13px', background: '#075E54' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                    <Bot size={18} />
                  </div>
                  <div style={{ lineHeight: 1.2 }}>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>{home.build.ai.mockup.assistant}</div>
                    <div style={{ color: '#a7d7cf', fontSize: '0.68rem' }}>{home.build.ai.mockup.online}</div>
                  </div>
                </div>
                <div style={{ background: '#ECE5DD', padding: '14px 11px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ alignSelf: 'flex-start', maxWidth: '82%', padding: '6px 9px 16px', borderRadius: '10px 10px 10px 2px', background: '#fff', color: '#111B21', fontSize: '0.8rem', lineHeight: 1.4, position: 'relative', boxShadow: '0 1px 1px rgba(0,0,0,0.10)' }}>
                    {home.build.ai.mockup.msg1}
                    <span style={{ position: 'absolute', right: 8, bottom: 4, fontSize: '0.58rem', color: '#667781' }}>10:02</span>
                  </div>
                  <div style={{ alignSelf: 'flex-end', maxWidth: '82%', padding: '6px 9px 16px', borderRadius: '10px 10px 2px 10px', background: '#DCF8C6', color: '#111B21', fontSize: '0.8rem', lineHeight: 1.4, position: 'relative', boxShadow: '0 1px 1px rgba(0,0,0,0.10)' }}>
                    {home.build.ai.mockup.msg2}
                    <span style={{ position: 'absolute', right: 8, bottom: 4, fontSize: '0.58rem', color: '#667781' }}>10:02 <span style={{ color: '#34B7F1' }}>✓✓</span></span>
                  </div>
                  <div style={{ alignSelf: 'flex-end', maxWidth: '82%', padding: '6px 9px 16px', borderRadius: '10px 10px 2px 10px', background: '#DCF8C6', color: '#111B21', fontSize: '0.8rem', lineHeight: 1.4, position: 'relative', boxShadow: '0 1px 1px rgba(0,0,0,0.10)' }}>
                    {home.build.ai.mockup.msg3}
                    <span style={{ position: 'absolute', right: 8, bottom: 4, fontSize: '0.58rem', color: '#667781' }}>10:03 <span style={{ color: '#34B7F1' }}>✓✓</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Offering 3 — KPI Dashboards & Analytics */}
          <div className="feature-row reverse">
            <div className="feature-text reveal-left">
              <span className="feature-eyebrow"><BarChart3 size={16} /> {common.services.kpi.title}</span>
              <h3 style={{ fontSize: '1.9rem', marginBottom: '1rem', lineHeight: 1.25, color: 'var(--text-primary)' }}>
                {home.build.kpi.title.before}<span className="text-gradient">{home.build.kpi.title.accent}</span>{home.build.kpi.title.after}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {home.build.kpi.description}
              </p>
              <ul className="feature-bullets">
                <li><CheckCircle2 size={18} /> {home.build.kpi.bullets[0]}</li>
                <li><CheckCircle2 size={18} /> {home.build.kpi.bullets[1]}</li>
                <li><CheckCircle2 size={18} /> {home.build.kpi.bullets[2]}</li>
              </ul>
              <Link to={getLocalizedPath('svc-kpi', locale)} className="hero-advisory-btn" style={{ margin: 0 }}>
                {home.build.kpi.cta} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-visual reveal-right">
              {/* KPI dashboard image */}
              <picture>
                <source type="image/avif" srcSet={kpiHomeAvif} />
                <img src={kpiHomeImg} alt={home.build.kpi.imageAlt} loading="lazy" width="1639" height="960" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16, border: '1px solid var(--border-subtle)' }} />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How It Works — 3-Step Process */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>{home.process.eyebrow}</span>
            <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
              {home.process.title.before}<span className="text-gradient">{home.process.title.accent}</span>{home.process.title.after}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '640px', margin: '1rem auto 0', lineHeight: 1.7 }}>
              {home.process.subtitle}
            </p>
          </div>

          <div className="process-timeline-wrapper reveal-group" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', position: 'relative' }}>
            {steps.map((step) => (
              <div key={step.number} className="reveal-card" style={{ flex: '1 1 280px', position: 'relative', padding: '2.25rem 2rem', backgroundColor: 'var(--bg-card)', borderRadius: '14px', border: '1px solid rgba(77, 148, 255, 0.1)' }}>
                <div style={{ position: 'absolute', top: '-22px', left: '2rem', fontSize: '3rem', fontWeight: '900', color: 'rgba(77, 148, 255, 0.18)', fontStyle: 'italic', fontFamily: 'monospace' }}>{step.number}</div>
                <h3 style={{ fontSize: '1.35rem', marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Section CTA — start the project */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(home.whatsapp.project)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-advisory-btn"
              style={{ margin: 0 }}
            >
              {home.process.cta}
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us — Concrete Benefits */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>{home.benefits.eyebrow}</span>
            <h2 style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
              {home.benefits.title.before}<span className="text-gradient">{home.benefits.title.accent}</span>{home.benefits.title.after}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '640px', margin: '1rem auto 0', lineHeight: 1.7 }}>
              {home.benefits.subtitle}
            </p>
          </div>

          <div className="benefit-grid reveal-group">
            {benefits.map(({ icon: Icon, title, text, mobileHide }) => (
              <article key={title} className={`benefit-card reveal-card${mobileHide ? ' desktop-only' : ''}`}>
                <div className="benefit-card-head">
                  <span className="benefit-icon"><Icon size={22} strokeWidth={1.7} /></span>
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Final CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            {home.finalCta.title.before}<span className="text-gradient">{home.finalCta.title.accent}</span>{home.finalCta.title.after}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            {home.finalCta.description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(home.whatsapp.auditStrategy)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-advisory-btn"
            >
              <span className="hero-advisory-btn-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 6L15.45 11.13L22 12L15.45 12.87L19 18L13.09 15.74L12 22L10.91 15.74L5 18L8.55 12.87L2 12L8.55 11.13L5 6L10.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </span>
              {home.cta.freeAudit}
              <ArrowRight size={17} />
            </a>
          </div>
          
          <div className="home-contact-grid desktop-only" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="home-contact-card" style={{ padding: '2.5rem 2rem', backgroundColor: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--bg-card)' }}>
              <MessageCircle size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>{home.finalCta.contact.whatsappLabel}</h3>
              <a href={`https://wa.me/${BUSINESS_WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: '600' }}>
                +58 414 473 5431
              </a>
            </div>
            <div className="home-contact-card" style={{ padding: '2.5rem 2rem', backgroundColor: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--bg-card)' }}>
              <Mail size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>{home.finalCta.contact.emailLabel}</h3>
              <a href="mailto:contact@webraf.com" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: '600' }}>
                contact@webraf.com
              </a>
            </div>
            <div className="home-contact-card desktop-only" style={{ padding: '2.5rem 2rem', backgroundColor: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--bg-card)' }}>
              <MapPin size={32} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
              <h3>{home.finalCta.contact.locationLabel}</h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: '600', margin: 0 }}>
                {locale === 'en' ? 'Remote · Worldwide' : 'Remoto · Todo el mundo'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Teaser (light) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', padding: '3.5rem 2.5rem', borderRadius: '20px', border: '1px solid rgba(77, 148, 255, 0.15)', background: 'linear-gradient(180deg, rgba(77, 148, 255, 0.05), rgba(255, 255, 255, 0.01))' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>{home.pricing.eyebrow}</span>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              {home.pricing.title.before}<span className="text-gradient">{home.pricing.title.accent}</span>{home.pricing.title.after}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 2rem' }}>
              {home.pricing.description}
            </p>
            <Link to={getLocalizedPath('pricing', locale)} className="hero-advisory-btn" style={{ margin: 0 }}>
              {home.pricing.cta} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          {/* Persuasive lead-in */}
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="feature-eyebrow" style={{ justifyContent: 'center' }}>{home.contactForm.eyebrow}</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              {home.contactForm.title.before}<span className="text-gradient">{home.contactForm.title.accent}</span>{home.contactForm.title.after}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              {home.contactForm.description}
            </p>
          </div>
          <div className="reveal" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{home.contactForm.name.label}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={home.contactForm.name.placeholder}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{home.contactForm.email.label}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={home.contactForm.email.placeholder}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{home.contactForm.phone.label}</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={home.contactForm.phone.placeholder}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{home.contactForm.message.label}</label>
                <textarea
                  name="message"
                  placeholder={home.contactForm.message.placeholder}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />

              <button
                type="submit"
                className="hero-advisory-btn"
                disabled={status === 'sending'}
                style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}
              >
                {status === 'sending' ? home.contactForm.sending : home.contactForm.submit}
              </button>

              {/* Privacy-consent line (shared copy with the contact page forms) */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textAlign: 'center', margin: 0, lineHeight: 1.5 }}>
                {common.forms.consentBefore}
                <Link to={getLocalizedPath('privacy', locale)} style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>
                  {common.forms.consentLinkLabel}
                </Link>
                {common.forms.consentAfter}
              </p>

              {status === 'sent' && (
                <div className="form-status success">
                  {home.contactForm.success}{' '}
                  <a href={waLink || `https://wa.me/${BUSINESS_WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}>
                    {home.contactForm.whatsappButton}
                  </a>
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  {home.contactForm.error}{' '}
                  <a href={waLink || `https://wa.me/${BUSINESS_WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}>
                    {home.contactForm.whatsappButton}
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Blog Carousel Component — placed last so it doesn't interrupt the conversion flow; desktop only (full blog lives at /blog) */}
      <div className="desktop-only">
        <BlogCarousel />
      </div>
    </div>
  );
};

export default Home;
