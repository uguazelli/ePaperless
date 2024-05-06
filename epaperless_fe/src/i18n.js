import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n

  // to detect user language
  .use(LanguageDetector)

  // to pass the i18n instance to react-i18next.
  .use(initReactI18next)

  // init i18next
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          dropzoneMessage: "Click or drop the files here ❤️",
        },
      },
      es: {
        translation: {
          dropzoneMessage: "Haz clic o arrastra los archivos aquí ❤️",
        },
      },
    },
  });

export default i18n;
