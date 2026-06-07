import React from 'react';
import { useParams } from 'react-router-dom';
import UnderConstruction from '../components/UnderConstruction';

const serviceMap = {
  'custom-ux-ui': 'Custom UX/UI Design',
  'responsive-web': 'Responsive Web Development',
  'maintenance-updates': 'Maintenance & Core Updates',
  'performance-optimization': 'Performance Optimization',
  'technical-support': 'Technical Support',
  'whatsapp-ai-agents': 'WhatsApp AI Agents',
  'workflow-automation': 'Workflow Automation',
  'system-integration': 'System Integration (APIs)',
  'conversational-solutions': 'Conversational Solutions',
  'custom-chatbots': 'Custom Chatbots',
  'seo-positioning': 'SEO & Web Positioning',
  'traffic-analytics': 'Traffic & User Analytics',
  'kpi-dashboards': 'Live KPI Dashboards',
  'performance-reports': 'Weekly Performance Reports',
  'content-strategy': 'Content Strategy',
  'web-development': 'Web Development & Maintenance'
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const title = serviceMap[serviceId] || 'Service Detail';
  return <UnderConstruction title={title} />;
};

export default ServiceDetail;
