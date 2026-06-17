import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

// React Router framework mode (SSG via prerender). The reactRouter() plugin
// handles React, routing, the document and the production build.
export default defineConfig({
  plugins: [reactRouter()],
});
