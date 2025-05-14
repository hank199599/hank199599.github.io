import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// 匯入各語系檔案
import { en } from './locales/en/index';
import { zh } from './locales/zh/index';

const resources = {
  en,
  zh,
};

i18n
  .use(LanguageDetector) // 自動偵測瀏覽器語系
  .use(initReactI18next) // React Hooks 支援
  .init({
    resources,
    fallbackLng: 'zh', // 找不到時預設中文
    interpolation: { escapeValue: false },
  });

export default i18n; 