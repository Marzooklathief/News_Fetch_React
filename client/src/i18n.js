import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to the News Website",
      "headlines": "Top Headlines",
      // Add more English translations here
    },
  },
  hi: {
    translation: {
      "welcome": "समाचार वेबसाइट में आपका स्वागत है",
      "headlines": "मुख्य समाचार",
      // Add more Hindi translations here
    },
  },
  ta: {
    translation: {
      "welcome": "செய்தி வலைத்தளத்திற்கு வரவேற்கிறோம்",
      "headlines": "முக்கிய செய்திகள்",
      // Add more Tamil translations here
    },
  },
  te: {
    translation: {
      "welcome": "సమాచారం వెబ్‌సైట్‌కు స్వాగతం",
      "headlines": "ప్రధాన శీర్షికలు",
      // Add more Telugu translations here
    },
  },
};

i18n
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Use English if a translation is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
