/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#203854',
      },
      fontFamily: {
        nunito: ['Nunito']
      },
      grayscale: {
        50: '50%',
      },
      brightness: {
        25: '.25',
        75: '.75',
      }
    },
  },
  plugins: [],
};
