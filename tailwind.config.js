/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-them': '#191c24',
        'dark-them-active': '#0f1015',
        'dark-them-light': '#2a2d3a'
      },
      colors: {
        'dark-them': '#6c7293'
      },
    },
  },
  plugins: [],
}