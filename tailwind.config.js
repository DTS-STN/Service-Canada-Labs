module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //Colors styling for buttons
        'custom-blue': {
          blue: '#2572B4',
          light: '#1492B4',
          dark: '#096684',
        },
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
      },

      fontFamily: {}
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
