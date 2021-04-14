import "@testing-library/jest-dom/extend-expect";
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

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

// Mock t function
export const t = (key, params) => {
  if (key === 'key.with.params') {
    return `key.with.params.${params.param}`
  }

  return key
}


// Mock react-i18next
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: {
      common: {}
    }
  }
})

// Mock i18n
// jest.mock('~/i18n', () => {
//   return {
//     useTranslation: () => {
//       return {
//         t,
//         i18n: {
//           language: 'en',
//           changeLanguage: jest
//             .fn()
//             .mockImplementation((lang) => console.log(lang))
//         }
//       }
//     },
//     withTranslation: () => (Component) => {
//       Component.defaultProps = { ...Component.defaultProps, t }
//       return Component
//     }
//   }
// })