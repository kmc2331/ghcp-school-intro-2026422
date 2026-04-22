/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bark: '#3F2E1E',
        moss: '#5C7A4E',
        sand: '#E8DFCF',
        mist: '#F5F2EB',
        stone: '#7A7466',
        moss2: '#3E5A33',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', '"Noto Serif JP"', 'serif'],
      },
      borderRadius: {
        organic: '24px',
      },
      maxWidth: {
        prose2: '70ch',
      },
    },
  },
  plugins: [],
};
