import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import { sendContactEmail, BUSINESS_WHATSAPP } from '../config/forms.js';
import './Contact.css';

// Service slugs accepted in the ?service= query param — contract with the pricing
// and service pages that link here. Each maps to a title in content.common.services.
const SERVICE_OPTIONS = [
  { value: 'web-development', contentKey: 'web' },
  { value: 'seo', contentKey: 'seo' },
  { value: 'kpi-dashboards', contentKey: 'kpi' },
  { value: 'ai-automation', contentKey: 'ai' },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.contact;
  const common = content.common;
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [plan, setPlan] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  // Prefilled WhatsApp link captured at submit time, so the OPTIONAL "continue on
  // WhatsApp" button still works after the fields are cleared on success.
  const [sentWaHref, setSentWaHref] = useState('');

  // Preselect service/plan from ?service= & ?plan= AFTER hydration: the prerendered
  // HTML is built without query params, so reading them during the first render
  // would cause a hydration mismatch. The synchronous setState is intentional here
  // (one-time sync from the URL, an external system, right after hydration).
  useEffect(() => {
    const service = searchParams.get('service');
    const planParam = searchParams.get('plan');
    if (SERVICE_OPTIONS.some((o) => o.value === service)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((fd) => ({ ...fd, service }));
    }
    if (planParam) setPlan(planParam);
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  // Client-side validation (the form is noValidate so errors render inline and
  // are announced via aria-invalid + aria-describedby). Phone is optional.
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = t.form.errors.name;
    if (!EMAIL_RE.test(formData.email.trim())) errs.email = t.form.errors.email;
    if (!formData.message.trim()) errs.message = t.form.errors.message;
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.botcheck?.checked) return; // honeypot: silently drop bots
    const errs = validate();
    if (Object.values(errs).some(Boolean)) {
      setErrors(errs);
      const firstInvalid = ['name', 'email', 'message'].find((field) => errs[field]);
      e.target.elements[firstInvalid]?.focus();
      return;
    }
    setErrors({});
    const { name, email, phone, service, message } = formData;
    setStatus('sending');
    try {
      // Email (Web3Forms) + Telegram notification (inside sendContactEmail).
      await sendContactEmail({ name, email, phone, service, plan, message, page: 'Contacto' });
      setSentWaHref(whatsappHref());
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  // WhatsApp link built from the same fields the visitor typed. Only opened if the
  // visitor explicitly clicks the button shown after submitting — never automatically.
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

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name">{t.form.nameLabel}</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.form.namePlaceholder}
                  required
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && <p className="field-error" id="contact-name-error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">{t.form.emailLabel}</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.form.emailPlaceholder}
                  required
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email && <p className="field-error" id="contact-email-error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">{t.form.phoneLabel}</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.form.phonePlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-service">{t.form.serviceLabel}</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">{t.form.servicePlaceholder}</option>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{common.services[o.contentKey].title}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">{t.form.messageLabel}</label>
                <textarea
                  rows="4"
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.form.messagePlaceholder}
                  required
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                ></textarea>
                {errors.message && <p className="field-error" id="contact-message-error">{errors.message}</p>}
              </div>
              {/* Plan carried over from the pricing page (?plan=...) — sent with the form */}
              {plan && <input type="hidden" name="plan" value={plan} />}
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

              <p className="form-consent">
                {common.forms.consentBefore}
                <Link to={getLocalizedPath('privacy', locale)}>{common.forms.consentLinkLabel}</Link>
                {common.forms.consentAfter}
              </p>

              {status === 'sent' && <div className="form-status success" role="status">{t.form.success}</div>}
              {status === 'error' && <div className="form-status error" role="alert">{t.form.error}</div>}
              {(status === 'sent' || status === 'error') && (
                <a
                  className="btn-whatsapp-secondary"
                  href={status === 'sent' ? sentWaHref : whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} /> {t.form.continueWhatsapp}
                </a>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
