import * as nextImage from "next/image";
import "../icomoon/style.css";
import "../styles/globals.css"
import "../styles/fonts.css";
import i18n from './i18n.js';
import { I18nProviderWrapper } from "./i18nextProviderWrapper";

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: 'EN', title: 'English' },
        { value: 'fr', right: 'FR', title: 'Français' },
      ],
    },
  },
};

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
  (Story, { globals }) => {
    return (
      <I18nProviderWrapper i18n={i18n} locale={globals.locale}>
        <Story/>
      </I18nProviderWrapper>
    )
  }
]