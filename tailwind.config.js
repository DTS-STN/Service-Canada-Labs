const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Lato"],
      body: ["Noto sans"],
    },
    fontSize: {
      xxs: ["13px", "16px"],
      xs: ["14px", "16px"],
      sm: ["16px", "22px"],
      base: ["18px", "28px"],
      p: ["20px", "30px"],
      h4: ["22px", "20px"],
      h3: ["24px", "24.3px"],
      h2: ["30px", "33.5px"],
      h1: ["34px", "42px"],
      "h1-xl": ["40px", "46px"],
    },
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "450px",
      md: "550px",
      lg: "768px",
      xl: "992px",
      xxl: "1200px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "banner-img": "url('../public/bg-banner.jpg')",
        "footer-parliament-image": "url(../public/landscape.png)",
      }),
      colors: {
        "custom-blue": {
          blue: "#1D5B90",
          light: "#1492B4",
          dark: "#26374a",
          link: "#0535d2",
          details: "#F7FAFC"
        },
        "details-button-gray": "#E7E8EA",
        "form-input-gray": "#555",
        "form-input-border-gray": "#ccc",
        "gray-light-200": "#f5f5f5",
        "gray-light-100": "#e0e0e0",
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        "gray-dark": "#444",
        "gray-dark-100": "#333",
        "text-gray": "#5c5c5c",
        "dk-blue": "#26374a",
        "hr-red-bar": "#AE3B43",
        "canada-ca-link-colour": "#7834BC",
        "canada-footer-font": "#284162",
        "canada-footer-hover-font-blue": "#0535d2",
        "footer-background-color": "#f8f8f8",
      },
      width: {
        "44px": "44px",
        "300px": "300px"
      },
      height: {
        "44px": "44px",
        "46px": "46px",
      },
      inset: {
        "-2px": "-2px",
      },
      zIndex: {
        1: "1",
      },
      padding: {
        "5px": "5px",
        "6px": "6px",
        "8px": "8px",
        "12px": "12px",
        "15px": "15px",
        "40px": "40px",
      },
      margin: {
        "5px": "5px",
        "10px": "10px",
      },

      minHeight: {
        "40px": "40px",
        "200px": "200px"
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["visited"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant, e }) {
      addVariant("before", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}::before`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("after", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}::after`;
        });
      });
    }),
  ],
};
