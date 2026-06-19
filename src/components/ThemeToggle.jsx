import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

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
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
