import { Link } from 'react-router-dom';
import { Globe, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';

const Footer = () => {
  const { content } = useLocalizedContent();
  const { nav, footer } = content.common;
  return (
    <footer className="footer" style={{ borderTop: '2px solid rgba(77, 148, 255, 0.1)', background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}>
      <div className="container">
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', padding: '0' }}>
          
          {/* Brand Col */}
          <div className="footer-col">
            <h2 style={{ fontSize: '1.8rem', letterSpacing: '-0.5px', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Inversiones<span className="text-gradient">Digitales</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '350px' }}>
              {footer.tagline}
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://wa.me/584144735431" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-card)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(77, 148, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='var(--bg-card)'}><MessageCircle size={20} /></a>
              <a href="mailto:inversionesdigitales@hotmail.es" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-card)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(77, 148, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='var(--bg-card)'}><Mail size={20} /></a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-card)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(77, 148, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='var(--bg-card)'}><Globe size={20} /></a>
            </div>
          </div>

          {/* Links Col */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', display: 'inline-block' }}>{footer.explore}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="footer-links">
                <Link to="/">{nav.home}</Link>
                <Link to="/services">{nav.services}</Link>
                <Link to="/pricing">{nav.pricing}</Link>
              </div>
              <div className="footer-links">
                <Link to="/our-clients">{footer.ourClients}</Link>
                <Link to="/faqs">{footer.faqs}</Link>
                <Link to="/contact">{nav.contact}</Link>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', display: 'inline-block' }}>{footer.directContact}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--accent-cyan)" />
                <span>inversionesdigitales@hotmail.es</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageCircle size={16} color="var(--accent-cyan)" />
                <span>+58 414 473 5431</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="var(--accent-cyan)" />
                <span>Maracay, Aragua, Venezuela</span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom-bar">
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Ied.</p>
          <span className="footer-separator">|</span>
          <p style={{ margin: 0, fontSize: '0.85rem', textAlign: 'center' }}>
            {footer.ceoLabel}{' '}
            <a href="https://portafolio-kpi-jv.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
              {footer.ceoName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
