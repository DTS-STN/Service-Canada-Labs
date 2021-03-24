module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner-img' :"url('../../public/bg-banner.jpg')"
      }),
      colors: {
        'dk-blue': '#0d304b',
        'hr-red-bar': '#BD6166'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
