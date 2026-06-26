import KPI from '../../src/pages/KPI.jsx';
import { absoluteUrl } from '../../src/config/site.js';

export function meta() {
  return [
    { title: 'KPI & Analytics Dashboard | InversionesDigitales' },
    {
      name: 'description',
      content: 'Track your business performance with our advanced KPI and analytics dashboards.',
    },
    { tagName: 'link', rel: 'canonical', href: absoluteUrl('/kpi') },
  ];
}

export default KPI;
