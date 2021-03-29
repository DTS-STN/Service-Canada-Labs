module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    backgroundImage: theme => ({
      'banner-img' :"url('../../public/bg-banner.jpg')"
    }),      
    colors: {
        'custom-blue': {
          blue: '#2572B4',
          light: '#1492B4',
          dark: '#26374a',
        },
        "gray-light-100": "#e0e0e0",
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        "gray-dark": "#444",
        "text-gray": "#5c5c5c",
        'dk-blue': '#26374a',
        'hr-red-bar': '#AE3B43',
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
