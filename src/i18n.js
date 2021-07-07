import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const esTranslations = require('./locales/es/translation.json')
const enTranslations = require('./locales/en/translation.json')

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      }
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;