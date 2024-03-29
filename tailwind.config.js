/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        dark_slate_grey: 'hsl(234, 29%, 20%)',
        charcoal_grey: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)',
        dark: '#1E1E1E',
        dark_navy: '#242742',
        rosa: '#FF527B'
      },
      screens: {
        'md-lg': {'min': '541px', 'max': '1023px'},
        'xlg': {'min': '1439px'}
      },
    },
  },
  plugins: [],
}

