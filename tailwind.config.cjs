/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        'electric-cyan': '#00ffff',
        primary: '#00ffff', // electric cyan as primary
        secondary: '#1a1a1a', // slightly lighter than dark
        'dark-surface': '#1e1e1e', // for cards and elevated surfaces
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'], // Bold rounded sans font
      },
      borderRadius: {
        'xl': '1rem',
      }
    },
  },
  plugins: [],
}