/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        'dark-cyan': '#25564b',
        'dark-blue': '#19536b',
        'dark-moderate-cyan': '#458c7e',
        'footer-cyan': '#90D4C5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

