import { useState, useRef } from 'react';
import { Code, BarChart3, Bot, ChevronDown, ChevronRight } from 'lucide-react';
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
      {/* Services Button */}
      <button
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          fontSize: '0.92rem',
          fontWeight: '500',
          letterSpacing: '0.3px',
          cursor: 'pointer',
          padding: '10px 0',
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

      {/* Mega Menu */}
      {isOpen && (
        <div className="services-mega-menu-container">
          <div className="services-mega-menu-wrapper">
            {/* Left Column - Categories */}
            <div className="services-categories-column">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onMouseEnter={() => setActiveTab(category.id)}
                  className={`services-category-item ${activeTab === category.id ? 'active' : ''}`}
                >
                  <div className="services-category-header">
                    <span className="services-category-icon">{category.icon}</span>
                    <div className="services-category-text">
                      <h4>{category.title}</h4>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="services-category-arrow" />
                </button>
              ))}
            </div>

            {/* Right Column - Services List */}
            {activeCategory && (
              <div className="services-items-column">
                <div className="services-items-header">
                  <h3>{activeCategory.title}</h3>
                  <p>{activeCategory.description}</p>
                </div>
                <ul className="services-items-list">
                  {activeCategory.services.map((service, idx) => (
                    <li key={idx}>
                      <Link to={service.path} className="services-item-link">
                        <span className="services-item-dot"></span>
                        <span>{service.name}</span>
                        <ChevronRight size={16} className="services-item-arrow" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

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
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        /* Left Column - Categories */
        .services-categories-column {
          display: flex;
          flex-direction: column;
          width: 35%;
          background: rgba(0, 0, 0, 0.2);
          border-right: 1px solid rgba(0, 229, 255, 0.1);
          padding: 16px 0;
          gap: 0;
        }

        .services-category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 20px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          text-align: left;
          border-left: 3px solid transparent;
        }

        .services-category-item:hover {
          background: rgba(0, 229, 255, 0.05);
          color: #fff;
        }

        .services-category-item.active {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
          border-left-color: var(--accent-cyan);
        }

        .services-category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }

        .services-category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .services-category-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .services-category-text h4 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: inherit;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .services-category-text p {
          margin: 0;
          font-size: 0.75rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .services-category-arrow {
          color: var(--accent-cyan);
          flex-shrink: 0;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .services-category-item:hover .services-category-arrow,
        .services-category-item.active .services-category-arrow {
          opacity: 1;
        }

        /* Right Column - Services List */
        .services-items-column {
          flex: 1;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
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

        .services-items-header {
          margin-bottom: 8px;
        }

        .services-items-header h3 {
          margin: 0 0 8px 0;
          font-size: 1.3rem;
          color: #fff;
          font-weight: 700;
        }

        .services-items-header p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .services-items-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .services-item-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 229, 255, 0.1);
          border-radius: 10px;
          text-decoration: none;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .services-item-link:hover {
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

        .services-item-arrow {
          color: var(--accent-cyan);
          opacity: 0;
          margin-left: auto;
          flex-shrink: 0;
          transition: opacity 0.3s ease;
        }

        .services-item-link:hover .services-item-arrow {
          opacity: 1;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .services-mega-menu-wrapper {
            max-width: 900px;
          }

          .services-items-column {
            padding: 24px;
          }
        }

        @media (max-width: 768px) {
          .services-categories-column {
            display: none;
          }

          .services-items-column {
            width: 100%;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};
