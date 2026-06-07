import React, { useState } from 'react';

// 1. Estructura de datos segura (sin librerías externas que rompan la app)
const servicesData = [
  {
    id: 'web',
    title: 'Web Development & Design',
    subtitle: 'Professional websites built for growth',
    icon: '💻', 
    items: [
      'We Create Your Professional Website',
      'Fast & Responsive Development',
      'Website Management & Maintenance',
      'Performance & Speed Optimization',
      'Technical Support'
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Digital Growth',
    subtitle: 'Rank higher and attract more customers',
    icon: '📈',
    items: [
      'Rank #1 on Google - Local SEO',
      'Analytics & Performance Tracking',
      'Content Strategy & Marketing',
      'Monthly Performance Reports',
      'Organic Traffic Growth'
    ]
  },
  {
    id: 'kpi',
    title: 'KPI & Performance Indicators',
    subtitle: 'Know exactly how your business is performing',
    icon: '📊',
    items: [
      'Sales & Revenue Indicators',
      'Understand Customer Behavior',
      'Business Growth Dashboard',
      'Productivity Indicators by Dept',
      'Business Intelligence Tools'
    ]
  },
  {
    id: 'ai',
    title: 'AI Automation & Chatbots',
    subtitle: '24/7 customer engagement solutions',
    icon: '🤖',
    items: [
      'AI Automation - Sell 24/7 on WhatsApp',
      'Process Automation & Workflows',
      'Custom AI Chatbot Training',
      'CRM Integration & Lead Capture',
      'Automated Customer Support'
    ]
  }
];

const ServicesMegaMenu = () => {
  // Estado para controlar qué pestaña está activa (por defecto la primera)
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  // Estado para mostrar/ocultar el menú al pasar el cursor sobre "Services"
  const [isOpen, setIsOpen] = useState(false);

  // Encontrar los datos de la pestaña activa de forma segura
  const activeContent = servicesData.find(tab => tab.id === activeTab) || servicesData[0];

  return (
    <div 
      className="mega-menu-wrapper"
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <style>{`
        .mega-menu-container {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 850px;
          background: rgba(10, 15, 25, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 229, 255, 0.15);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          display: flex;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 100;
          overflow: hidden;
          padding: 0;
        }
        
        .mega-menu-wrapper:hover .mega-menu-container {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(10px);
        }

        .tab-button {
          width: 100%;
          text-align: left;
          padding: 1.25rem 1.5rem;
          background: transparent;
          border: none;
          border-left: 3px solid transparent;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tab-button:hover {
          background: rgba(255,255,255,0.03);
        }

        .tab-button.active {
          background: rgba(0, 229, 255, 0.08);
          border-left: 3px solid #00e5ff;
        }

        .service-item {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: #a0aec0;
          transition: all 0.2s;
          cursor: pointer;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
        }

        .service-item::before {
          content: "→";
          margin-right: 8px;
          color: #00e5ff;
          opacity: 0;
          transform: translateX(-5px);
          transition: all 0.2s;
        }

        .service-item:hover {
          background: rgba(255,255,255,0.05);
          color: #fff;
        }

        .service-item:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      {/* El botón del Navbar */}
      <button style={{ 
        background: 'transparent', 
        border: 'none', 
        color: '#fff', 
        fontSize: '1rem', 
        fontWeight: '500', 
        cursor: 'pointer',
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}>
        Services
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* El Contenedor del Mega Menú */}
      <div className="mega-menu-container">
        
        {/* Columna Izquierda: Pestañas (35% ancho) */}
        <div style={{ width: '35%', background: 'rgba(0,0,0,0.4)', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '1rem 0' }}>
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveTab(tab.id)}
            >
              <span style={{ fontSize: '1.5rem' }}>{tab.icon}</span>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.95rem', color: activeTab === tab.id ? '#00e5ff' : '#fff' }}>
                  {tab.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', lineHeight: '1.2' }}>
                  {tab.subtitle}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Columna Derecha: Contenido de la pestaña activa (65% ancho) */}
        <div style={{ width: '65%', padding: '2rem' }}>
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#00e5ff' }}>{activeContent.icon}</span> {activeContent.title}
            </h3>
            <p style={{ color: '#a0aec0', fontSize: '0.85rem', margin: '4px 0 0 0' }}>{activeContent.subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
            {activeContent.items.map((item, index) => (
              <div key={index} className="service-item">
                {item}
              </div>
            ))}
          </div>

          {/* CTA Inferior opcional */}
          <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '8px', border: '1px dashed rgba(0, 229, 255, 0.2)' }}>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#a0aec0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Not sure what you need? 
              <span style={{ color: '#00e5ff', fontWeight: '600', cursor: 'pointer' }}>Get a Free Audit →</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesMegaMenu;