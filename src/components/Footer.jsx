import { Link } from 'react-router-dom';
import { Code2, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <Link to="/" className="navbar-logo" style={{ marginBottom: '1rem', display: 'flex' }}>
              <Code2 size={28} className="text-gradient" />
              <span>Web<span className="text-gradient">Nova</span></span>
            </Link>
            <p>
              Transformamos tu visión en una experiencia digital extraordinaria. Especialistas en diseño y desarrollo web de alto rendimiento.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><Linkedin size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}><Facebook size={20} /></a>
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
            <p>Email: hola@webnova.com</p>
            <p>Teléfono: +1 234 567 8900</p>
            <p>Dirección: Av. Tecnológica 123, Ciudad Digital</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WebNova Agencia Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
