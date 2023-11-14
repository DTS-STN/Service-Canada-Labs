import "../styles/globals.css";
import "../styles/forms.css";
import "../styles/menu.css";
import "./fonts.css";

import i18n from "./i18n.js";
import { I18nProviderWrapper } from "./i18nextProviderWrapper";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "EN", title: "English" },
        { value: "fr", right: "FR", title: "Français" },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story, { globals }) => {
    return (
      <I18nProviderWrapper i18n={i18n} locale={globals.locale}>
        <Story />
      </I18nProviderWrapper>
    );
  },
];
