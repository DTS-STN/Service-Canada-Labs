import * as nextImage from "next/image";
import "../icomoon/style.css";
import "../styles/globals.css"
import "../styles/fonts.css";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <I18nextProvider i18n={i18n}>
      <Story/>
    </I18nextProvider>
  )
]