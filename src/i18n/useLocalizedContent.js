import { useLocation } from 'react-router-dom';
import { getLocaleFromPath } from './locale.js';
import { getContent } from './content.js';

// Bridges the URL → locale → content bundle so components don't repeat the logic.
// Language is ALWAYS derived from the pathname (never from state, storage or the
// browser). No memoization needed: getLocaleFromPath is a tiny string op and
// getContent returns a stable, module-level bundle object per locale.
//
//   const { locale, content } = useLocalizedContent();
//   const { common, home } = content;
export function useLocalizedContent() {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const content = getContent(locale);

  return { locale, content };
}
