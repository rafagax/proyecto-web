import { Link } from 'react-router-dom';
import { Globe, Mail, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo sin fondo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <Link to="/" className="navbar-logo" style={{ marginBottom: '1rem', display: 'flex' }}>
              <img src={logoImg} alt="WebNova Logo" style={{ height: '45px' }} />
            </Link>
            <p>
              Transformamos tu visión en una experiencia digital extraordinaria. Especialistas en diseño y desarrollo web de alto rendimiento.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><Globe size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><Mail size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Enlaces Rápidos</h3>
            <div className="footer-links">
              <Link to="/">Inicio</Link>
              <Link to="/nosotros">Sobre Nosotros</Link>
              <Link to="/servicios">Servicios</Link>
              <Link to="/clientes">Nuestros Clientes</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>Soporte</h3>
            <div className="footer-links">
              <Link to="/precios">Precios y Planes</Link>
              <Link to="/faqs">Preguntas Frecuentes</Link>
              <Link to="/contacto">Contáctanos</Link>
              <Link to="#">Términos y Condiciones</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contacto</h3>
            <p>Email: inversionesdigitales@hotmail.es</p>
            <p>Teléfono: +58 414 473 5431</p>
            <p>Dirección: Maracay, Aragua, Venezuela</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          <div className="footer-developer" style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            <p>Sitio web desarrollado por: {' '}
              <a href="https://portafolio-kpi-jv.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>
                Ing. Jesús Vásquez
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
