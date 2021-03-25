module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    backgroundImage: theme => ({
      'banner-img' :"url('../../public/bg-banner.jpg')"
    }),      
    colors: {
        //Colors styling for buttons
        'custom-blue': {
          blue: '#2572B4',
          light: '#1492B4',
          dark: '#4C5E7F',
        },
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        'dk-blue': '#26374a',
        'hr-red-bar': '#AE3B43',
        //Search bar colors
        "search-text-gray": "#5c5c5c",
        "search-button-gray": "#444",
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
