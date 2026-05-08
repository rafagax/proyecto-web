import { ArrowRight, Cpu, Bot, Zap, Activity, CheckCircle2, MessageCircle, Mail, MapPin } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem'}}>
          <div className="hero-content" style={{flex: '1 1 400px', textAlign: 'left', margin: 0}}>
            <h1 className="hero-title" style={{lineHeight: 1.1, marginBottom: '2rem'}}>
              ¿Buscás una<br/>
              web inteligente<br/>
              <span className="text-gradient">con IA integrada?</span>
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.1rem', maxWidth: '550px', marginLeft: 0}}>
              Desarrollamos ecosistemas digitales ultrarrápidos, automatizados y optimizados para SEO. <strong>Impulsa tus ventas</strong> con tecnología de última generación.
            </p>
            <div className="hero-buttons" style={{marginTop: '3rem', justifyContent: 'flex-start'}}>
              <a href="#" className="btn-whatsapp-large">
                <div className="whatsapp-icon-bg">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.52 3.449C18.24 1.245 15.24 0 12 0C5.383 0 0 5.383 0 12C0 14.12 0.549 16.19 1.593 18.016L0 24L6.115 22.396C7.882 23.344 9.905 23.856 12 23.856C18.617 23.856 24 18.473 24 12C24 8.76 22.755 5.76 20.52 3.449ZM12 21.841C10.203 21.841 8.468 21.359 6.953 20.461L6.593 20.248L2.946 21.203L3.918 17.656L3.684 17.284C2.688 15.704 2.156 13.888 2.156 12C2.156 6.577 6.577 2.156 12 2.156C14.633 2.156 17.076 3.181 18.939 5.044C20.801 6.907 21.827 9.349 21.827 12C21.827 17.423 17.423 21.841 12 21.841ZM17.423 14.588C17.125 14.439 15.656 13.715 15.385 13.616C15.115 13.517 14.916 13.468 14.717 13.765C14.519 14.063 13.973 14.708 13.805 14.907C13.636 15.105 13.468 15.13 13.171 14.981C12.873 14.832 11.909 14.517 10.771 13.501C9.885 12.711 9.288 11.733 9.119 11.436C8.951 11.139 9.101 10.978 9.25 10.831C9.384 10.697 9.553 10.479 9.702 10.306C9.851 10.132 9.901 10.008 10 9.81C10.099 9.612 10.05 9.438 9.975 9.29C9.9 9.141 9.288 7.643 9.032 7.03C8.784 6.435 8.536 6.516 8.357 6.505C8.188 6.495 7.989 6.495 7.791 6.495C7.592 6.495 7.27 6.569 6.997 6.867C6.724 7.164 5.955 7.883 5.955 9.346C5.955 10.809 7.022 12.222 7.171 12.421C7.32 12.619 9.245 15.707 12.27 16.902C14.656 17.844 15.291 17.656 15.936 17.557C16.581 17.458 18.016 16.69 18.313 15.847C18.611 15.005 18.611 14.286 18.512 14.137C18.413 13.988 18.215 13.888 17.917 13.74Z" fill="white"/>
                   </svg>
                </div>
                Consultanos por WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-image" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
             <img src={heroImg} alt="Tecnología e IA" style={{maxWidth: '100%', maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(0, 229, 255, 0.3))'}} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="servicios">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Nuestros <span className="text-gradient">Servicios</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Soluciones digitales completas para hacer crecer tu marca en internet.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Cpu size={24} /></div>
              <h3>Desarrollo Web Ultra Rápido</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Arquitecturas modernas (React, Vite) sin dependencias pesadas, garantizando carga instantánea y máximo SEO.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Bot size={24} /></div>
              <h3>Automatización con IA</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Integramos chatbots inteligentes y flujos automáticos para que tu web trabaje por ti 24/7.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Zap size={24} /></div>
              <h3>Electrónica & IoT</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Conectamos tu software con hardware real. Paneles de control para monitoreo y sistemas electrónicos.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Activity size={24} /></div>
              <h3>Analítica Avanzada</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Sistemas de métricas precisos y ligeros para rastrear cada conversión sin sacrificar velocidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" id="precios" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Planes y <span className="text-gradient">Precios</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Elige el plan que mejor se adapte a las necesidades de tu negocio.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Básico</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Ideal para empezar</p>
              <div className="price-amount">$299</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> Landing Page de 1 sección</li>
                <li><CheckCircle2 size={18} /> Diseño Responsivo</li>
                <li><CheckCircle2 size={18} /> Botón de WhatsApp</li>
                <li><CheckCircle2 size={18} /> Formulario de Contacto</li>
                <li style={{ opacity: 0.5 }}><CheckCircle2 size={18} /> Dominio y Hosting (No incl.)</li>
              </ul>
              <Link to="/contacto" className="btn btn-secondary" style={{ width: '100%' }}>Elegir Plan</Link>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">Más Popular</div>
              <h3>Profesional</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Para negocios en crecimiento</p>
              <div className="price-amount text-gradient">$599</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> Web Multi-página (Hasta 5)</li>
                <li><CheckCircle2 size={18} /> Diseño Responsivo Premium</li>
                <li><CheckCircle2 size={18} /> Optimización SEO Básica</li>
                <li><CheckCircle2 size={18} /> Integración con Redes</li>
                <li><CheckCircle2 size={18} /> Dominio y Hosting por 1 año</li>
              </ul>
              <Link to="/contacto" className="btn btn-primary" style={{ width: '100%' }}>Elegir Plan</Link>
            </div>

            <div className="pricing-card">
              <h3>E-Commerce</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Vende tus productos online</p>
              <div className="price-amount">$999</div>
              <ul className="price-features">
                <li><CheckCircle2 size={18} /> Tienda Online Completa</li>
                <li><CheckCircle2 size={18} /> Pasarelas de Pago</li>
                <li><CheckCircle2 size={18} /> Panel de Administración</li>
                <li><CheckCircle2 size={18} /> Carga de primeros 20 productos</li>
                <li><CheckCircle2 size={18} /> Soporte Prioritario 1 mes</li>
              </ul>
              <Link to="/contacto" className="btn btn-secondary" style={{ width: '100%' }}>Elegir Plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contacto">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}><span className="text-gradient">Contáctanos</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              ¿Listo para empezar tu proyecto? Escríbenos y te responderemos lo antes posible.
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Hablemos de tu proyecto</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Nuestro equipo está listo para escuchar tus ideas y proponer la mejor solución tecnológica para tu negocio.
              </p>
              
              <div className="contact-item">
                <div className="contact-icon"><MessageCircle size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>WhatsApp</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+1 234 567 8900</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>hola@webnova.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Ubicación</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Ciudad Digital, Tech Hub 404</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input type="email" placeholder="tu@email.com" />
              </div>
              <div className="form-group">
                <label>Servicio de Interés</label>
                <input type="text" placeholder="Ej. Plan Profesional" />
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea rows="4" placeholder="Cuéntanos un poco sobre tu proyecto..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
