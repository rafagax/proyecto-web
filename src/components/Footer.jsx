import { Link } from 'react-router-dom';
import { Globe, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" style={{ borderTop: '2px solid rgba(0, 229, 255, 0.1)', background: 'linear-gradient(to bottom, var(--bg-secondary), #000)' }}>
      <div className="container">
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', padding: '0' }}>
          
          {/* Brand Col */}
          <div className="footer-col">
            <h2 style={{ fontSize: '1.8rem', letterSpacing: '-0.5px', marginBottom: '1rem', color: '#fff' }}>
              Inversiones<span className="text-gradient">Digitales</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '350px' }}>
              We transform your vision into an extraordinary digital experience. Specialists in high-performance web design and development.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://wa.me/584144735431" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(0, 229, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.05)'}><MessageCircle size={20} /></a>
              <a href="mailto:inversionesdigitales@hotmail.es" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(0, 229, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.05)'}><Mail size={20} /></a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(0, 229, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.05)'}><Globe size={20} /></a>
            </div>
          </div>

          {/* Links Col */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', display: 'inline-block' }}>Explore</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/pricing">Pricing</Link>
              </div>
              <div className="footer-links">
                <Link to="/our-clients">Our Clients</Link>
                <Link to="/faqs">FAQs</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', display: 'inline-block' }}>Direct Contact</h3>
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
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Inversiones Digitales. All rights reserved.</p>
          <span className="footer-separator">|</span>
          <p style={{ margin: 0, fontSize: '0.85rem', textAlign: 'center' }}>
            CEO:{' '}
            <a href="https://portafolio-kpi-jv.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: '600' }}>
              Ing. Jesús Vásquez prueba footerr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
