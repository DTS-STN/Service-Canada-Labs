module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          100: '#2572B4',
          200: '#1492B4'
        },
      },

      fontFamily: {}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
