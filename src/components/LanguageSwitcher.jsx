import { useTranslation } from "react-i18next";

const langs = [
    { code: 'en', label: 'English'},
    { code: 'sq', label: 'Shqip XK'},
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
            className="border border-light-slate rounded px-0.5 py-0.5"
        >
            {langs.map(l => <option className="text-dark-navy" key={l.code} value={l.code}>{l.label}</option>)}
        </select>
    )
}

export default LanguageSwitcher;