// Konfigurimi i i18n


// 1) Importojme:
import i18n from 'i18next'; // motorin e perkthimeve
import { initReactI18next } from 'react-i18next'; // adapterin qe react me bashkvepru me motorin
import LanguageDetector from 'i18next-browser-languagedetector'; // detektuesi i gjuhes

// 2) Importimi i skedareve per secilen gjuhe
import sq from './locales/sq/common.json';
import en from './locales/en/common.json';
import de from './locales/de/common.json';
import fr from './locales/fr/common.json';


// 3) I themi i18next qe me perdore:
i18n
    .use(LanguageDetector) // - LanguageDetector: me gjet automatikisht gjuhen
    .use(initReactI18next).init({ // - initReactI18next: me u lidh me React(hooks,context, etj.)
    resources: {
        sq: { common: sq },
        en: { common: en },
        de: { common: de },
        fr: { common: fr},
    },
    fallbackLng: 'en', // nese se gjen gjuhen, kthehu tek anglishtja
    supportedLngs: ['sq','en','de','fr'], // lista e gjuheve te mbeshtetura

    load: 'languageOnly',
    
    // Perdorim vetem namespace 'common'
    ns: ['common'],
    defaultNS: 'common',

    // Si detektohet gjuha dhe ku ruhet
    detection: {
        order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'], // ruaj gjuhen ne localStorage
    },
    interpolation: { escapeValue : false }, //React already escapes

})

export default i18n;



// i18next: motori kryesor i përkthimeve (ruan dhe kthen tekstet sipas gjuhës)

// react-i18next: lidh i18next me React (hooks si useTranslation, re-render kur ndryshon gjuha)

// i18next-browser-languagedetector: zbulon automatikisht gjuhën nga browser-i/cookies/url