module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Lato', 'system-ui', 'sans-serif'],
      body: ['Noto\\ sans', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      sm: ["16px", "22px"],
      base: ["20px", "30px"],
      p: ["20px", "30px"],
      h3: ["24px", "24.3px"],
      h2: ["30px", "33.5px"],
      h1: ["34px", "42px"],
    },
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "450px",
      md: "550px",
      lg: "768px",
      xl: "1024px",
    },
    extend: {
    backgroundImage: theme => ({
      'banner-img' :"url('../../public/bg-banner.jpg')"
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
        'hr-red-bar': '#AE3B43'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
