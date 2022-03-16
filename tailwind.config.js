const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        sans: [
          'Poppins',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      screens: {
        'x2sm': '320px',
        // => @media (min-width: 320px) { ... }
        'xsm': '576px',
        // => @media (min-width: 576px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
}


// original custom breakpoints:
// 320px
// 576px
// 768px
// 992px
// 1200px
