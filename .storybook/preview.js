import * as nextImage from "next/image";
import "tailwindcss/tailwind.css";
import "../icomoon/style.css";
import "../styles/globals.css"
import "../styles/fonts.css";


Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}