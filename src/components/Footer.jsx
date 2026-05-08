import { Link } from 'react-router-dom';
import { Globe, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" style={{ borderTop: '2px solid rgba(0, 229, 255, 0.1)', background: 'linear-gradient(to bottom, var(--bg-secondary), #000)' }}>
      <div className="container">
        <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', padding: '3rem 0' }}>
          
          {/* Brand Col */}
          <div className="footer-col">
            <h2 style={{ fontSize: '1.8rem', letterSpacing: '-0.5px', marginBottom: '1rem', color: '#fff' }}>
              Inversiones<span className="text-gradient">Digitales</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '350px' }}>
              Transformamos tu visión en una experiencia digital extraordinaria. Especialistas en diseño y desarrollo web de alto rendimiento.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://wa.me/584144735431" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(0, 229, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.05)'}><MessageCircle size={20} /></a>
              <a href="mailto:inversionesdigitales@hotmail.es" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(0, 229, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.05)'}><Mail size={20} /></a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--accent-cyan)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(0, 229, 255, 0.1)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.05)'}><Globe size={20} /></a>
            </div>
          </div>

          {/* Links Col */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', display: 'inline-block' }}>Explorar</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="footer-links">
                <Link to="/">Inicio</Link>
                <Link to="#servicios">Servicios</Link>
                <Link to="#precios">Precios</Link>
              </div>
              <div className="footer-links">
                <Link to="#contacto">Contacto</Link>
                <Link to="/faqs">Preguntas Frecuentes</Link>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', display: 'inline-block' }}>Contacto Directo</h3>
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

        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Inversiones Digitales. Todos los derechos reservados.</p>
          <span style={{ color: 'var(--text-secondary)' }}>|</span>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            CEO de Inversiones Digitales: {' '}
            <a href="https://portafolio-kpi-jv.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: '600' }}>
              Ing. Jesús Vásquez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
