import { useTranslation } from "react-i18next";

const langs = [
    { code: 'en', label: 'English'},
    { code: 'sq', label: 'Shqip'},
    { code: 'de', label: 'Deutsch'},
    { code: 'fr', label: 'Français'},
]

function LanguageSwitcher(){

    const { i18n } = useTranslation();

    const change = (e) => {
        const lng = e.target.value;
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
        document.documentElement.lang = lng;
    }

    return(
        <select 
            onChange={change} 
            value={i18n.resolvedLanguage} 
            className="px-0 py-1 font-light text-sm cursor-pointer"
        >
            {langs.map(l => <option className="text-dark-navy" key={l.code} value={l.code}>{l.label}</option>)}
        </select>
    )
}

export default LanguageSwitcher;