import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

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
            <span style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
               <div style={{width: 12, height: 12, borderRadius: '50%', background: 'var(--accent-pink)'}}></div>
               <div style={{width: 16, height: 16, borderRadius: '50%', background: 'var(--accent-purple)'}}></div>
               <div style={{width: 12, height: 12, borderRadius: '50%', background: 'var(--accent-pink)'}}></div>
            </span>
            <span style={{ marginLeft: '8px', letterSpacing: '2px', fontWeight: 900 }}>NOAH<span style={{fontWeight: 400}}>WEB</span></span>
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
            <Link to="/contacto" className="btn btn-primary" style={{ padding: '8px 20px' }}>
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
              <span style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                 <div style={{width: 12, height: 12, borderRadius: '50%', background: 'var(--accent-pink)'}}></div>
                 <div style={{width: 16, height: 16, borderRadius: '50%', background: 'var(--accent-purple)'}}></div>
                 <div style={{width: 12, height: 12, borderRadius: '50%', background: 'var(--accent-pink)'}}></div>
              </span>
              <span style={{ marginLeft: '8px', letterSpacing: '2px', fontWeight: 900 }}>NOAH<span style={{fontWeight: 400}}>WEB</span></span>
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
              className={`mobile-menu-item ${index === 0 ? 'pink-bg' : 'purple-bg'}`}
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
