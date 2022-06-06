const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      colors: {
        'fb-blue': '#1b75e4',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'fb': '1464px'
      },
      screens: {
        '3xl': '1800px'
      },
      spacing: {
        'nav': '3.5rem',
        'navIcon': '6.974rem',
        'navB': '0.188rem'
      }
    },
  },
  plugins: [],
}
