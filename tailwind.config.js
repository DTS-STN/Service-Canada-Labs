const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        "border-custom-blue-experiment-blue",
        "border-gray-experiment",
        "bg-custom-blue-experiment-blue",
        "bg-gray-experiment",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Lato"],
      body: ["Noto sans"],
    },
    fontSize: {
      xxs: ["12px", "16px"],
      xs: ["14px", "16px"],
      sm: ["16px", "22px"],
      base: ["18px", "28px"],
      p: ["20px", "30px"],
      h4: ["22px", "20px"],
      h3: ["24px", "24.3px"],
      h2: ["30px", "33.5px"],
      h1: ["36px", "42px"],
      h1l: ["38px", "42px"],
      h1xl: ["45px", "54px"],
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
          "experiment-blue": "#004986",
        },
        "details-button-gray": "#E7E8EA",
        "details-button-active-gray": "#cfd1d5",
        "details-button-hover-gray": "#bbbfc5",
        "details-border-gray": "#e3e3e3",
        "form-input-gray": "#555",
        "form-input-border-gray": "#ccc",
        "gray-light-200": "#f5f5f5",
        "gray-light-100": "#e0e0e0",
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        "gray-dark": "#444",
        "gray-dark-100": "#333",
        "gray-experiment": "#575757",
        "text-gray": "#5c5c5c",
        "dk-blue": "#26374a",
        "hr-red-bar": "#AE3B43",
        "canada-ca-link-colour": "#7834BC",
        "circle-color": "#083C6C",
        "canada-footer-font": "#284162",
        "canada-footer-hover-font-blue": "#0535d2",
        "footer-background-color": "#f8f8f8",
        "splash-page-bottom": "#e1e4e7",
      },
      width: {
        "40px": "40px",
        "44px": "44px",
        "138px": "138px",
        "300px": "300px",
        "500px": "500px",
        "7.5rem": "7.5rem",
      },
      height: {
        "40px": "40px",
        "44px": "44px",
        "46px": "46px",
        "187px": "187px",
        "400px": "400px",
      },
      inset: {
        "-2px": "-2px",
      },
      zIndex: {
        1: "1",
      },
      padding: {
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "8px": "8px",
        "12px": "12px",
        "15px": "15px",
        "40px": "40px",
      },
      margin: {
        "5px": "5px",
        "15px": "15px",
        "10px": "10px",
        "20px": "20px",
      },

      maxWidth: {
        "350px": "350px",
        "5rem": "5rem",
      },

      minWidth: {
        "300px": "300px",
      },

      minHeight: {
        "40px": "40px",
        "200px": "200px",
      },

      maxHeight: {
        "40px": "40px",
      },

      boxShadow: {
        "experiment-shadow": "0px 2px 8px rgba(0, 0, 0, 0.25)",
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
