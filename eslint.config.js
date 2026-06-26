import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Generated / build output — never lint these (minified bundles, RR types).
  globalIgnores(['dist', 'build', '.react-router']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  // React Router framework-mode route modules legitimately export route data
  // (meta/links/loader/...) next to the route component. Allow only those named
  // exports for these files — the rule stays fully active everywhere else.
  {
    files: ['app/root.jsx', 'app/routes/**/*.{js,jsx}'],
    rules: {
      'react-refresh/only-export-components': [
        'error',
        {
          allowExportNames: [
            'meta',
            'links',
            'loader',
            'action',
            'headers',
            'handle',
            'shouldRevalidate',
            'ErrorBoundary',
            'HydrateFallback',
          ],
        },
      ],
    },
  },
])
