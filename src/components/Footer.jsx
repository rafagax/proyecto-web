import { Link, useLocation } from 'react-router-dom';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { getLocalizedPath } from '../../app/route-manifest.js';
import './Footer.css';

const Footer = () => {
  const { locale, content } = useLocalizedContent();
  const { nav, footer } = content.common;
  // On Jesús's own author page the "CEO: …" credit is redundant with the page itself,
  // so hide just that one line there. Every other page is unaffected.
  const { pathname } = useLocation();
  const hideCeo = pathname === '/jvportafolio' || pathname === '/es/jvportafolio';
  return (
    <footer className="footer" style={{ borderTop: '2px solid rgba(77, 148, 255, 0.1)', background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}>
      <div className="container">
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', padding: '0' }}>
          
          {/* Brand Col */}
          <div className="footer-col">
            {/* Decorative wordmark — a div (not a heading) so it stays out of the page outline */}
            <div className="footer-brand-name" style={{ fontSize: '1.8rem', letterSpacing: '-0.5px', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Web<span className="text-gradient">raf</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '350px' }}>
              {footer.tagline}
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://wa.me/584144735431" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-card)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(77, 148, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='var(--bg-card)'}><MessageCircle size={20} /></a>
              <a href="mailto:contact@webraf.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-card)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(77, 148, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='var(--bg-card)'}><Mail size={20} /></a>
              {/* Third social icon removed: it was a dead href="#" link. Re-add it
                  only when a real social profile URL exists (e.g. in src/config/site.js). */}
            </div>
          </div>

          {/* Links Col */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="footer-col-title" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', display: 'inline-block' }}>{footer.explore}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="footer-links">
                <Link to={getLocalizedPath('home', locale)}>{nav.home}</Link>
                <Link to={getLocalizedPath('services', locale)}>{nav.services}</Link>
                <Link to={getLocalizedPath('pricing', locale)}>{nav.pricing}</Link>
              </div>
              <div className="footer-links">
                <Link to={getLocalizedPath('clients', locale)}>{footer.ourClients}</Link>
                <Link to={getLocalizedPath('faqs', locale)}>{footer.faqs}</Link>
                <Link to={getLocalizedPath('contact', locale)}>{nav.contact}</Link>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="footer-col-title" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', display: 'inline-block' }}>{footer.directContact}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--accent-cyan)" />
                <span>contact@webraf.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageCircle size={16} color="var(--accent-cyan)" />
                <span>+58 414 473 5431</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="var(--accent-cyan)" />
                <span>{locale === 'en' ? 'Remote · Worldwide' : 'Remoto · Todo el mundo'}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom-bar">
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Webraf</p>
          <span className="footer-separator">|</span>
          <Link to={getLocalizedPath('privacy', locale)} style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
            {footer.privacy}
          </Link>
          {!hideCeo && <span className="footer-separator">|</span>}
          {!hideCeo && (
            <p style={{ margin: 0, fontSize: '0.85rem', textAlign: 'center' }}>
              {footer.ceoLabel}{' '}
              <Link to={getLocalizedPath('jvportafolio', locale)} style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                {footer.ceoName}
              </Link>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
