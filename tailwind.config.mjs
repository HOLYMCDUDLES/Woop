/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'music-dark': '#0F0F0F',
        'music-accent': '#FF3366'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}