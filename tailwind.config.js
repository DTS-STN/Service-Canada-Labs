module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner-img' :"url('../../public/bg-banner.jpg')"
      }),
      colors: {
        'dk-blue': '#26374a',
        'hr-red-bar': '#AE3B43'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
