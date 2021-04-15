import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from "../public/locales/en/common.json"
import french from "../public/locales/fr/common.json"

i18n
  .use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    fallbackNS: "translations",
    resources: {
        en: {
            translations: english
        },
        fr: {
            translations: french
        }
    }
  })

export default i18n;