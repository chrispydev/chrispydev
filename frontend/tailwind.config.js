/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pColor: '#e3d5ca',
        plColor: '#f5ebe0',
        sColor: '#e76f51',
        dColor: '#158247',
      },
      fontFamily: {
        sono: "'Sono', sans-serif;'",
      },
    },
  },
  plugins: [],
};
