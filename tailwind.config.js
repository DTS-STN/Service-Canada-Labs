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
    "border-new-update-darker",
    "bg-new-update-lighter",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      header: ["var(--font-lato)", "font-serif"],
      display: ["var(--font-lato)"],
      body: ["var(--font-notoSans)"],
    },
    fontSize: {
      xxs: ["12px", "16px"],
      xs: ["14px", "16px"],
      sm: ["16px", "22px"],
      base: ["18px", "28px"],
      lg: ["20px", "32px"],
      p: ["20px", "33px"],
      h4: ["22px", "24px"],
      h3: ["24px", "26px"],
      h2: ["32px", "36px"],
      h2l: ["36px", "40px"],
      h1: ["34px", "38px"],
      h1l: ["38px", "42px"],
      h1xl: ["45px", "54px"],
      h1xxl: ["70px", "84px"],

      mobiledisplay: ["40px", "40px"],
      mobileh1: ["34px", "37px"],
      mobileh2: ["32px", "35px"],
      mobileh3: ["24px", "26px"],
      mobileh4: ["22px", "24px"],
      mobileh5: ["20px", "22px"],
      mobileh6: ["19px", "21px"],
      mobilebody: ["20px", "33px"],
      mobilebodybold: ["20px", "33px"],
      datepicker: ["15px", "24px"],

      browserdisplay: ["60px", "60px"],
      browserh1: ["38px", "42px"],
      browserh2: ["36px", "40px"],
      browserh3: ["24px", "26px"],
      browserh4: ["22px", "24px"],
      browserh5: ["20px", "22px"],
      browserh6: ["19px", "21px"],
      browserh7: ["14px", "20px"],
      browserh8: ["16px", "23px"],
      browserh9: ["17px", "26px"],
      browserbody: ["20px", "33px"],
      browserbodybold: ["20px", "33px"],

      btnother: ["20px", "23px"],
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
        "splash-img": "url('/splash-image.png')",
        "splash-img-mobile": "url('/splash-mobile.png')",
        "banner-img": "url('/bg-banner-v2.png')",
        "banner-img-mobile": "url('/bg-banner-mobile.png')",
        "footer-parliament-image": "url(/landscape.png)",
      }),
      colors: {
        current: "currentColor",
        multi: {
          neutrals: {
            black: "#000000",
            grey100: "#333333",
            grey90: "#555555",
            grey90a: "#5C5C5C",
            grey85: "#666666",
            grey85a: "#6F6F6F",
            grey70: "#ACACAC",
            grey70a: "#989DA6",
            grey60: "#BBBFC5",
            grey50: "#CCCCCC",
            grey50a: "#CFD1D5",
            grey50b: "#D4D6DA",
            grey40: "#DDDDDD",
            grey40a: "#DCDEE1",
            grey40b: "#E0E0E0",
            grey40c: "#E3E3E3",
            grey40d: "#E5E5E5",
            grey30: "#EEEEEE",
            grey30a: "#EAEBED",
            grey5: "#F5F5F5",
            white: "#FFFFFF",
          },
          blue: {
            blue90: "#091C2D",
            blue70: "#26374A",
            blue70a: "#38414D",
            blue70b: "#284162",
            blue70c: "#33465C",
            blue70d: "#334155",
            blue65: "#16446C",
            blue65a: "#083C6C",
            blue65b: "#6584A6",
            blue60a: "#2E5274",
            blue60b: "#335075",
            blue60c: "#2B4380",
            blue60d: "#295376",
            blue60e: "#31708F",
            blue60f: "#0E62C9",
            blue60g: "#1C578A",
            blue50a: "#2572B4",
            blue50b: "#0535D2",
            blue30: "#7B92B0",
            blue15: "#B0C1D7",
            blue5: "#DBE5F2",
            blue2: "#EBF2FC",
            blue1: "#F2F8FF",
          },
          red: {
            red50a: "#AF3C43",
            red30: "#D47076",
            red15: "#ECABAE",
            red5: "#F9DBDC",
            red1: "#FFF5F5",
          },
          green: {
            green30: "#65B234",
            green15: "#A3D881",
            green0: "#F9FFF5",
          },
        },
        specific: {
          red: {
            red100: "#3B100F",
            red100a: "#060202",
            red90: "#77201F",
            red90a: "#6B1D1C",
            red70: "#942826",
            red50: "#BC3331",
            red50b: "#D3080C",
            red2: "#F3E9E8",
          },
          green: {
            green90: "#102900",
            green90a: "#192F20",
            green70: "#1D4D00",
            green70a: "#305A3E",
            green50: "#318000",
            green50a: "#278400",
            green50b: "#458259",
            green5: "#D8EECA",
          },
          orange: {
            orange50: "#EE7100",
            orange5: "#F9F4D4",
          },
          cyan: {
            cyan50: "#269ABC",
            cyan10: "#D7FAFF",
            cyan5: "#E8F2F4",
          },
          purple: {
            purple50: "#7834BC",
          },
        },
        "new-update": {
          darker: "#269ABC",
          lighter: "#D7FAFF",
        },
        "custom-blue": {
          blue: "#1D5B90",
          lighter: "#E8F2F4",
          light: "#1C578A",
          dark: "#26374a",
          darker: "#083C6C",
          link: "#0535d2",
          text: "#335075",
          hover: "#083DCA",
          "experiment-blue": "#004986",
          "projects-link": "#2B4380",
          "projects-link-hover": "#0535d2",
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
          border: "#DDDDDD",
          text: "#555555",
          date: "#6F6F6F",
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
        "250px": "250px",
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
        heading1: "42px",
        heading3: "26px",
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
