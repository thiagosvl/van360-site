import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  integrations: [tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    domains: ['scxjzvblqnamfvasjaug.supabase.co', 'images.unsplash.com'],
  }
});
