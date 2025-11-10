import { useTranslation } from "react-i18next";

const langs = [
    { code: 'sq', label: 'Shqip'},
    { code: 'en', label: 'English'},
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
            className="border rounded-md px-2 py-1"
        >
            {langs.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
    )
}

export default LanguageSwitcher;