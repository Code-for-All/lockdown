// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

import translationEN from './translations/en/index.js';
import translationES from './translations/es/index.js';

export default {
  "en": translationEN,
  "es": translationES
}

// the translations
// const translationEN = () =>{
//   const response = await fetch('./translations/en/index.json');
//   const data = response.json();
//   return data;
// }

// const translationES = () =>{
//   const response = await fetch('./translations/es/index.json');
//   const data = response.json();
//   return data;
// }

// const resources = {
//   en: {
//     translation: translationEN
//   },
//   es:{
//     translation: translationES
//   }
// };

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: "en",

//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

//   export default i18n;