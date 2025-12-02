// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site configuration for GitHub Pages
  // Update 'site' with your GitHub Pages URL or custom domain
  // Example: 'https://yourusername.github.io' or 'https://yourdomain.com'
  // site: 'https://yourusername.github.io',
  
  // If deploying to a subdirectory (e.g., username.github.io/personal-sites)
  // uncomment and set base path:
  // base: '/personal-sites',
  
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
