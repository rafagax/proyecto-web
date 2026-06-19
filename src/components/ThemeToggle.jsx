import { useState, useEffect } from 'react';

// Custom sun: solid disc + tapered rays, soft yellow.
const SunIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4.6" fill="#f5b301" />
    <g stroke="#f5b301" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="2" x2="12" y2="4.3" />
      <line x1="12" y1="19.7" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4.3" y2="12" />
      <line x1="19.7" y1="12" x2="22" y2="12" />
      <line x1="4.8" y1="4.8" x2="6.4" y2="6.4" />
      <line x1="17.6" y1="17.6" x2="19.2" y2="19.2" />
      <line x1="4.8" y1="19.2" x2="6.4" y2="17.6" />
      <line x1="17.6" y1="6.4" x2="19.2" y2="4.8" />
    </g>
  </svg>
);

// Custom moon: clean filled crescent.
const MoonIcon = ({ size = 18, fill = '#566072' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 14.8A8.6 8.6 0 1 1 9.2 3.5a6.7 6.7 0 0 0 11.3 11.3z" fill={fill} />
  </svg>
);

// Dark is the default (no data-theme attribute). Light sets data-theme="light".
// The pre-paint script in root.jsx already applied the saved theme before render,
// so here we just sync the icon on mount and flip on click.
const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const current =
      document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* localStorage unavailable — ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'light' ? '#ffffff' : '#000000');
    setTheme(next);
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  );
};

export default ThemeToggle;
