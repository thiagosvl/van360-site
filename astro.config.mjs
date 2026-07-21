import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://van360.com.br',
  redirects: {
    '/login': 'https://app.van360.com.br/login',
    '/cadastro': 'https://app.van360.com.br/cadastro',
  },
  integrations: [tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    domains: ['scxjzvblqnamfvasjaug.supabase.co', 'images.unsplash.com'],
  }
});
