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
  },
  plugins: [],
}
