import { Link } from 'react-router-dom';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';

// Localized 404 page. Reuses the existing hero/button classes (no new CSS). The
// Navbar/Footer come from the global layout. Links resolve via the manifest.
const NotFound = () => {
  const { locale, content } = useLocalizedContent();
  const t = content.notFound;

  return (
    <div className="animate-fade-in">
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '180px', paddingBottom: '4rem', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg-glow"></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '1rem' }}>
            {t.eyebrow}
          </span>
          <h1 className="hero-title page-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            {t.title}
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            {t.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={getLocalizedPath('home', locale)} className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
              {t.primaryButton}
            </Link>
            <Link to={getLocalizedPath('services', locale)} className="btn btn-secondary" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
              {t.secondaryButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
