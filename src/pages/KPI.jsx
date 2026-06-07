import { useEffect } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import { updateMetaTags } from '../utils/seo';

const KPI = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'KPI & Analytics Dashboard | Digital Investments',
      description: 'Track your business performance with our advanced KPI and analytics dashboard.',
      keywords: 'kpi, analytics, dashboard, performance metrics, business intelligence',
      canonical: 'https://yourdomain.com/kpi'
    });
  }, []);

  return <UnderConstruction title="Key Performance Indicators (KPI)" />;
};

export default KPI;
