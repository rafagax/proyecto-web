import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo sin fondo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'NOSOTROS', path: '/nosotros' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'CLIENTES', path: '/clientes' },
    { name: 'PRECIOS', path: '/precios' },
    { name: 'FAQS', path: '/faqs' },
    { name: 'CONTACTO', path: '/contacto' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-logo">
            <img src={logoImg} alt="Inversiones Digitales Logo" className="header-logo" />
          </Link>

          <nav className="navbar-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto" className="btn btn-primary" style={{ padding: '8px 20px', color: '#000000', fontWeight: '700' }}>
              Contáctanos
            </Link>
          </nav>

          <button className="menu-toggle" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
            <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
              <img src={logoImg} alt="Inversiones Digitales Logo" className="mobile-nav-logo" />
            </Link>
           <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
             <X size={32} />
           </button>
        </div>
        <nav className="mobile-menu-nav">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`mobile-menu-item ${index === 0 ? 'blue-bg' : 'cyan-bg'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
