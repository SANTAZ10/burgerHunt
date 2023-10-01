/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily:{
          Inter: ['Inter'],
          Crimson: ['Crimson Text'],
          Playfair: ['Playfair Display'],
          Roboto: ['Roboto']
        }
    },
    boxShadow: {
        'customShadow': '-1px -1px 2px rgba(0, 0, 0, 0.15), 3px 3px 10px rgba(0, 0, 0, 0.28)',
      }
  },
  plugins: [],
}
