import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

const WHATSAPP_PHONE = '584144735431';

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div
    style={{
      background: 'var(--bg-secondary)',
      border: `1px solid ${isOpen ? 'rgba(77, 148, 255, 0.3)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--border-radius-md)',
      overflow: 'hidden',
      transition: 'border-color 0.3s ease',
    }}
  >
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        background: 'transparent',
        color: 'var(--text-primary)',
        textAlign: 'left',
        cursor: 'pointer',
        gap: '1rem',
        fontSize: '1rem',
        fontWeight: '600',
        fontFamily: 'inherit',
      }}
    >
      <span>{faq.question}</span>
      <span style={{ color: 'var(--accent-cyan)', flexShrink: 0 }}>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </span>
    </button>
    <div
      style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}
    >
      <p style={{ color: 'var(--text-secondary)', padding: '0 2rem 1.75rem', lineHeight: '1.7', fontSize: '0.98rem' }}>
        {faq.answer}
      </p>
    </div>
  </div>
);

const FAQs = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.faqs;
  const [openKey, setOpenKey] = useState(null);

  const handleToggle = (key) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '180px', paddingBottom: '4rem' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            {t.hero.eyebrow}
          </span>
          <h1 className="hero-title page-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {t.hero.title.before}<span className="text-gradient">{t.hero.title.accent}</span>{t.hero.title.after}
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          {t.categories.map((group, ci) => (
            <div key={group.category} style={{ marginBottom: ci === t.categories.length - 1 ? 0 : '3.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{group.category}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {group.items.map((faq, qi) => {
                  const key = `${ci}-${qi}`;
                  return (
                    <FAQItem
                      key={key}
                      faq={faq}
                      isOpen={openKey === key}
                      onClick={() => handleToggle(key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            {t.cta.heading.before}<span className="text-gradient">{t.cta.heading.accent}</span>{t.cta.heading.after}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            {t.cta.copy}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(t.cta.waQuote)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '16px 40px', fontSize: '1.05rem' }}
            >
              {t.cta.whatsapp}
            </a>
            <Link to={getLocalizedPath('contact', locale)} className="btn btn-secondary" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
              {t.cta.sendMessage}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
