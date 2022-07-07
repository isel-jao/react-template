import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Edit <1>src/App.js</1> and save to reload.",
            part2: "Learn React",
          },
          home: "Home",
          about: "About",
          component: "Component",
        },
      },
      fr: {
        translation: {
          description: {
            part1: "Editez <1>src/App.js</1> et sauvegardez pour recharger.",
            part2: "Apprendre React",
          },
          home: "Accueil",
          about: "À propos",
          component: "Composant",
        },
      },
    },
  });

export default i18n;
