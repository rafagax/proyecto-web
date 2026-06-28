// Standalone portfolio page for the CEO, Ing. Jesús Vásquez — linked from the site
// footer (opens in a new tab). Replicates the intro format of
// portafolio-kpi-jv.vercel.app: name → tagline → photo → greeting → Power BI
// specialization. The photo is the user's image dropped into /public/Rafagaxjv/
// (it replaces the source site's image). Dark theme to match the source + the site.
export default function JvPortfolio() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#05060a',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative blue/indigo glow at the top, like the source */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-180px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(70,90,255,0.45), rgba(70,90,255,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <main style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '96px 24px 90px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5.5vw, 3.1rem)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 1.25rem' }}>
          Ing. Jesús Vásquez <span style={{ color: '#5b7cff' }}>— Data Analyst</span>
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: '#c4c8d6',
            fontStyle: 'italic',
            maxWidth: '680px',
            margin: '0 0 3rem',
          }}
        >
          &ldquo;Front-End Developer &amp; Power BI Specialist. I build web apps and strategic dashboards that turn
          data into action. Experienced in React, JavaScript, Artificial Intelligence, and advanced data
          visualization to deliver impactful metrics.&rdquo;
        </p>

        {/* Profile photo — drop the image into /public/Rafagaxjv/ as jesus.webp to show it */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.25rem' }}>
          <div
            style={{
              position: 'relative',
              width: '240px',
              height: '300px',
              borderRadius: '18px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #182040, #0a0e22)',
              border: '1px solid rgba(91,124,255,0.35)',
              boxShadow: '0 24px 70px rgba(70,90,255,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ position: 'absolute', color: '#8890b5', fontSize: '0.85rem', textAlign: 'center', padding: '0 14px', lineHeight: 1.5 }}>
              📷 Foto de Jesús
              <br />
              (carpeta Rafagaxjv)
            </span>
            <img
              src="/Rafagaxjv/jesus.webp"
              alt="Ing. Jesús Vásquez"
              style={{ position: 'relative', width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Greeting */}
        <div style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }} aria-hidden="true">
          🤗 👋
        </div>

        {/* Power BI specialization */}
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#d4d8e6',
            maxWidth: '760px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          I specialize in building impactful dashboards with Power BI that help teams visualize performance, track
          goals, and uncover insights. By turning business data into clear, compelling narratives — from KPI tracking
          to executive-level reporting — I focus on creating tools that drive smart decisions.
        </p>
      </main>
    </div>
  );
}
