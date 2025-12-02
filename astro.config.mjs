// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site configuration for GitHub Pages
  site: 'https://lung-yu.github.io',
  base: '/personal-sites',
  
  // Output static files for GitHub Pages
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-tw'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
