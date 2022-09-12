const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "border-custom-blue-experiment-blue",
    "border-gray-experiment",
    "bg-custom-blue-experiment-blue",
    "bg-gray-experiment",
    "opacity-70",
    "opacity-80",
    "opacity-90",
    "opacity-100",
    "bg-custom-blue-lighter",
    "bg-custom-blue-darker",
    "bg-custom-red-lighter",
    "bg-custom-red-darker",
    "bg-custom-green-lighter",
    "bg-custom-green-darker",
    "bg-custom-gray-lighter",
    "bg-custom-gray-darker",
    "border-custom-blue-lighter",
    "border-custom-blue-darker",
    "border-custom-red-lighter",
    "border-custom-red-darker",
    "border-custom-green-lighter",
    "border-custom-green-darker",
    "border-custom-gray-lighter",
    "border-custom-gray-darker",
  ],
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
      lg: ["20px", "32px"],
      p: ["20px", "30px"],
      h4: ["22px", "20px"],
      h3: ["24px", "24.3px"],
      h2: ["30px", "33.5px"],
      h1: ["36px", "42px"],
      h1l: ["38px", "42px"],
      h1xl: ["45px", "54px"],
      h1xxl: ["70px", "84px"],
    },
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "450px",
      md: "550px",
      lg: "768px",
      xl: "992px",
      xxl: "1200px",
      "v-xxs": { raw: "(min-height: 300px)" },
    },
    extend: {
      backgroundImage: (theme) => ({
        "splash-img": "url('../public/splash-image.png')",
        "splash-img-mobile": "url('../public/splash-mobile.png')",
        "banner-img": "url('../public/bg-banner-v2.png')",
        "banner-img-mobile": "url('../public/bg-banner-mobile.png')",
        "footer-parliament-image": "url(../public/landscape.png)",
      }),
      colors: {
        current: "currentColor",
        "custom-blue": {
          blue: "#1D5B90",
          lighter: "#E8F2F4",
          light: "#1F809A",
          dark: "#26374a",
          darker: "#083C6C",
          link: "#0535d2",
          text: "#335075",
          hover: "#083DCA",
          "experiment-blue": "#004986",
          "projects-link": "#2B4380",
        },
        "custom-green": {
          lighter: "#D8EECA",
          darker: "#278400",
          hover: "#237600",
        },
        "custom-red": {
          lighter: "#F3E9E8",
          darker: "#D3080C",
        },
        "custom-gray": {
          lighter: "#EEEEEE",
          darker: "#ACACAC",
          index: "#F8F8F8",
        },
        "error-border-red": "#D3080C",
        "error-background-red": "#F3E9E8",
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
        "gray-breadcrumb": "#474747",
        "text-gray": "#5c5c5c",
        "hr-red-bar": "#AE3B43",
        "canada-ca-link-colour": "#7834BC",
        "circle-color": "#083C6C",
        "canada-footer-font": "#284162",
        "canada-footer-hover-font-blue": "#0535d2",
        "footer-background-color": "#f8f8f8",
        "splash-page-bottom": "#e1e4e7",
        vc: {
          "blue-md": "#3d96c1",
          "blue-lt": "#4FB7DC",
        },
      },
      width: {
        "40px": "40px",
        "44px": "44px",
        "68px": "68px",
        "80px": "80px",
        "100px": "100px",
        "138px": "138px",
        "160px": "160px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "7.5rem": "7.5rem",
      },
      height: {
        "40px": "40px",
        "44px": "44px",
        "46px": "46px",
        "100px": "100px",
        "128px": "128px",
        "187px": "187px",
        "250px": "250px",
        "400px": "400px",
        "500px": "500px",
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
        "4.5rem": "4.5rem",
      },

      maxWidth: {
        "350px": "350px",
        "450px": "450px",
        "600px": "600px",
        "750px": "750px",
        "5rem": "5rem",
      },

      minWidth: {
        "300px": "300px",
      },

      minHeight: {
        "40px": "40px",
        "200px": "200px",
        "250px": "250px",
      },

      maxHeight: {
        "40px": "40px",
      },

      boxShadow: {
        "experiment-shadow": "0px 2px 8px rgba(0, 0, 0, 0.25)",
      },

      lineHeight: {
        "30px": "30px",
      },
      outline: {
        "black-solid": ["2px solid #000", "1px"],
        "dark-goldenrod": ["2px solid #c78100"],
        "white-solid": ["2px solid #ffffff"],
      },
      borderWidth: {
        6: "6px",
      },
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
