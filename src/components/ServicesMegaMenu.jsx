import { useState, useRef } from 'react';
import { Code, BarChart3, Bot, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    id: 'web-development',
    title: 'Web Development & Design',
    description: 'Professional websites built for growth',
    icon: <Code size={20} />,
    services: [
      { name: 'We Create Your Professional Website', path: '/services/custom-ux-ui' },
      { name: 'Fast & Responsive Development', path: '/services/responsive-web' },
      { name: 'Website Management & Maintenance', path: '/services/maintenance-updates' },
      { name: 'Performance & Speed Optimization', path: '/services/performance-optimization' },
      { name: 'Technical Support', path: '/services/technical-support' },
    ]
  },
  {
    id: 'seo-growth',
    title: 'SEO & Digital Growth',
    description: 'Rank higher and attract more customers',
    icon: <BarChart3 size={20} />,
    services: [
      { name: 'Rank #1 on Google - Local SEO', path: '/services/seo-positioning' },
      { name: 'Analytics & Performance Tracking', path: '/services/traffic-analytics' },
      { name: 'Content Strategy & Marketing', path: '/services/content-strategy' },
      { name: 'Monthly Performance Reports', path: '/services/performance-reports' },
      { name: 'Organic Traffic Growth', path: '/services/traffic-analytics' },
    ]
  },
  {
    id: 'kpi-indicators',
    title: 'KPI & Performance Indicators',
    description: 'Know exactly how your business is performing',
    icon: <BarChart3 size={20} />,
    services: [
      { name: 'Productivity Indicators by Department', path: '/services/traffic-analytics' },
      { name: 'Understand Customer Behavior', path: '/services/traffic-analytics' },
      { name: 'Business Growth Dashboard', path: '/services/performance-reports' },
      { name: 'Sales & Revenue Indicators', path: '/services/kpi-dashboards' },
      { name: 'Business Intelligence Tools', path: '/services/kpi-dashboards' },
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Chatbots',
    description: '24/7 customer engagement solutions',
    icon: <Bot size={20} />,
    services: [
      { name: 'AI Automation - Sell 24/7 on WhatsApp', path: '/services/whatsapp-ai-agents' },
      { name: 'Process Automation & Workflows', path: '/services/workflow-automation' },
      { name: 'API Integration & Systems', path: '/services/system-integration' },
      { name: 'Lead Capture Automation', path: '/services/conversational-solutions' },
      { name: 'WhatsApp Integration', path: '/services/custom-chatbots' },
    ]
  }
];

export const ServicesMegaMenu = () => {
  const [activeTab, setActiveTab] = useState('web-development');
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Botón Services visible en el navbar */}
      <button
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          fontWeight: '600',
          cursor: 'pointer',
          padding: '8px 0',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 0.3s ease',
          position: 'relative',
        }}
        className="services-trigger"
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--text-secondary)';
        }}
      >
        Services
        <ChevronDown size={14} style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      {/* Mega Menu - aparece al hover */}
      {isOpen && (
      <div className="services-mega-menu-container">
      <div className="services-mega-menu-wrapper">
        {/* Left Column - Tabs */}
        <div className="services-tabs-column">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onMouseEnter={() => setActiveTab(category.id)}
              className={`services-tab-item ${activeTab === category.id ? 'active' : ''}`}
            >
              <span className="services-tab-icon">{category.icon}</span>
              <div className="services-tab-content">
                <h4>{category.title}</h4>
                <p>{category.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column - Content */}
        <div className="services-content-column">
          {activeCategory && (
            <div className="services-content-panel">
              <div className="services-content-header">
                <h3>{activeCategory.title}</h3>
                <p>{activeCategory.description}</p>
              </div>

              <div className="services-grid">
                {activeCategory.services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="services-grid-item"
                  >
                    <div className="services-item-inner">
                      <span className="services-item-dot"></span>
                      <span className="services-item-text">{service.name}</span>
                      <ArrowRight size={16} className="services-item-arrow" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .services-mega-menu-container {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 12px;
          z-index: 9999;
          display: flex;
          justify-content: center;
          padding: 0 20px;
          width: 100vw;
          pointer-events: auto;
        }

        .services-mega-menu-wrapper {
          display: flex;
          width: 100%;
          max-width: 1100px;
          background: rgba(10, 10, 12, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 229, 255, 0.15);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Left Column - Tabs */
        .services-tabs-column {
          display: flex;
          flex-direction: column;
          width: 30%;
          background: rgba(0, 0, 0, 0.3);
          border-right: 1px solid rgba(0, 229, 255, 0.1);
          padding: 16px 0;
        }

        .services-tab-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          text-align: left;
        }

        .services-tab-item:hover {
          background: rgba(0, 229, 255, 0.05);
          color: #fff;
        }

        .services-tab-item.active {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
        }

        .services-tab-item.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-cyan), rgba(0, 229, 255, 0.3));
        }

        .services-tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .services-tab-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .services-tab-content h4 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .services-tab-content p {
          margin: 0;
          font-size: 0.75rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Right Column - Content */
        .services-content-column {
          flex: 1;
          padding: 32px;
          min-width: 0;
        }

        .services-content-panel {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .services-content-header {
          margin-bottom: 28px;
        }

        .services-content-header h3 {
          margin: 0 0 8px 0;
          font-size: 1.4rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .services-content-header p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .services-grid-item {
          text-decoration: none;
          color: inherit;
        }

        .services-item-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 229, 255, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .services-grid-item:hover .services-item-inner {
          background: rgba(0, 229, 255, 0.08);
          border-color: rgba(0, 229, 255, 0.3);
          transform: translateX(4px);
        }

        .services-item-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          flex-shrink: 0;
        }

        .services-item-text {
          flex: 1;
          font-size: 0.9rem;
          font-weight: 500;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .services-item-arrow {
          color: var(--accent-cyan);
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .services-grid-item:hover .services-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .services-mega-menu-wrapper {
            max-width: 900px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .services-content-column {
            padding: 24px;
          }
        }

        @media (max-width: 768px) {
          .services-tabs-column {
            display: none;
          }

          .services-content-column {
            padding: 20px;
            width: 100%;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .services-item-inner {
            padding: 12px 14px;
            font-size: 0.85rem;
          }
        }
      `}</style>
      </div>
      )}
    </div>
  );
};
