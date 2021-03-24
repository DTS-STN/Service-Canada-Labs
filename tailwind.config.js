module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Lato', 'system-ui', 'sans-serif'],
      body: ['Noto\\ sans', 'system-ui', 'sans-serif'],
    },
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
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
