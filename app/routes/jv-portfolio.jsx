import JvPortfolio from '../../src/pages/JvPortfolio.jsx';

// Standalone CEO portfolio page (/jvportafolio), linked from the footer and opened in a
// new tab. Not part of the bilingual site SEO: noindex, no canonical/hreflang/sitemap.
export function meta() {
  return [
    { title: 'Ing. Jesús Vásquez — Data Analyst & Power BI Specialist' },
    {
      name: 'description',
      content:
        'Front-End Developer & Power BI Specialist. Web apps and strategic dashboards that turn data into action.',
    },
    { name: 'robots', content: 'noindex, nofollow' },
  ];
}

export default JvPortfolio;
