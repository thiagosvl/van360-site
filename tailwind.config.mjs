/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1a3a5c',
          'blue-hover': '#152e4a',
        }
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'diff-shadow': '0 20px 40px -15px rgba(26, 58, 92, 0.05), 0 15px 25px -10px rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [typography],
}
