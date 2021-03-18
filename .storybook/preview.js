import * as nextImage from "next/image";
import "tailwindcss/tailwind.css";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}