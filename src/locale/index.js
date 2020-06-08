// ? Translations source
import AvailableLanguages from './availableLanguages.js';

// ? Translations utils
import { encodeJsonTranslation } from './i18nUtils';

const getAll = async () => {
  let finalTranslationsJSON = {};
  let totals = 0;
  for (let i = 0; i < AvailableLanguages.length; i++) {
    try {
      let idiom = await fetch(new URL('./translations/' + AvailableLanguages[i] + '/index.json', import.meta.url)); // import('./translations/' + AvailableLanguages[i] + '/index.js');
      idiom = await idiom.json();
      if (idiom.languageId === AvailableLanguages[i]) {
        finalTranslationsJSON[AvailableLanguages[i]] = encodeJsonTranslation(idiom);
      } else {
        console.warn(`The iso value of ${AvailableLanguages[i]} not match`);
      }
      if (i === AvailableLanguages.length - 1) {
        return finalTranslationsJSON;
      }
    } catch (e) {
      console.log(e);
      totals++;
      if (i === AvailableLanguages.length - 1) {
        return finalTranslationsJSON;
      }
      continue;
    }
  }
  if (totals === AvailableLanguages - 1) {
    console.log(finalTranslationsJSON);
    return finalTranslationsJSON;
  }
};

export default getAll;
