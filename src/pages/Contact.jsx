import { useState } from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { sendContactEmail, BUSINESS_WHATSAPP } from '../config/forms.js';

const Contact = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.botcheck?.checked) return; // honeypot: silently drop bots
    const { name, email, phone, message } = formData;
    // 1) Open WhatsApp right away — must be synchronous inside the click handler
    //    or the browser's popup blocker will swallow it.
    window.open(whatsappHref(), '_blank');
    setStatus('sending');
    try {
      // 2 + 3) Email (Web3Forms) + Telegram notification (inside sendContactEmail).
      await sendContactEmail({ name, email, phone, message, page: 'Contacto' });
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  // WhatsApp fallback link built from the same fields the visitor typed.
  const whatsappHref = () => {
    const { name, email, phone, message } = formData;
    const text = t.form.waTemplate
      .replace('{name}', name)
      .replace('{email}', email)
      .replace('{phone}', phone)
      .replace('{message}', message);
    return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '20vh', paddingTop: '50px', paddingBottom: '0rem', marginTop: '40px' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            {t.hero.eyebrow}
          </span>
          <h1 className="hero-title page-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {t.hero.title.before}<span className="text-gradient">{t.hero.title.accent}</span>{t.hero.title.after}
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h3 style={{ fontSize: '1.8rem', lineHeight: '1.2' }}>{t.info.heading.before}<span className="text-gradient">{t.info.heading.accent}</span>{t.info.heading.after}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
                {t.info.copy}
              </p>

              <div className="contact-item">
                <div className="contact-icon"><MessageCircle size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>{t.info.whatsappLabel}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+58 414 473 5431</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>{t.info.emailLabel}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>contact@webraf.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>{t.info.locationLabel}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{locale === 'en' ? 'Remote · Worldwide' : 'Remoto · Todo el mundo'}</p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(77, 148, 255, 0.08) 100%)', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(77, 148, 255,0.2)' }}>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t.info.fastResponseTitle}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {t.info.fastResponseBefore}<strong style={{ color: 'var(--text-primary)' }}>{t.info.fastResponseStrong}</strong>{t.info.fastResponseAfter}
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t.form.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.form.namePlaceholder}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.form.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.form.emailPlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.form.phoneLabel}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.form.phonePlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.form.messageLabel}</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.form.messagePlaceholder}
                  required
                ></textarea>
              </div>
              {/* Honeypot — hidden from users, catches bots */}
              <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{ marginTop: '1.5rem', padding: '18px', fontSize: '1.1rem', fontWeight: '700', width: '100%', boxShadow: '0 10px 25px rgba(77, 148, 255, 0.4)', letterSpacing: '0.5px', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}
              >
                {status === 'sending' ? t.form.sending : t.form.submit}
              </button>

              {status === 'sent' && <div className="form-status success">{t.form.success}</div>}
              {status === 'error' && <div className="form-status error">{t.form.error}</div>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
