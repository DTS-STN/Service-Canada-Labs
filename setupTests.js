import "@testing-library/jest-dom/extend-expect";
import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "jest-canvas-mock";

// next useRouter() mock
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

// next/link mock
jest.mock("next/link", () => {
  return ({ children, href, locale, ...rest }) => {
    if (React.Children.count(children) === 1 && React.isValidElement(children) && children.type === 'a') {
       return React.cloneElement(children, { href, ...rest });
    }
    return <a href={href} {...rest}>{children}</a>;
  };
});

// Mock t function
export const t = (key, params) => {
  if (key === "key.with.params") {
    return `key.with.params.${params.param}`;
  }

  return key;
};

// Mock react-i18next
i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  resources: {
    en: {
      common: {},
    },
  },
});
