module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    backgroundImage: theme => ({
      'banner-img' :"url('../../public/bg-banner.jpg')",
      "footer-parliament-image": "url(../../public/landscape.png)"
    }),      
    colors: {
        //Colors styling for buttons
        'custom-blue': {
          blue: '#2572B4',
          light: '#1492B4',
          dark: '#096684',
        },
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        'dk-blue': '#26374a',
        'hr-red-bar': '#AE3B43',
        "canada-ca-link-colour": "#7834BC",
        "footer-blue": "#26374a",
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
