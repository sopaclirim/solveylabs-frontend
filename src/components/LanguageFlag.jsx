// src/components/LanguageFlag.jsx
import { useTranslation } from 'react-i18next'
import * as Flags from 'country-flag-icons/react/3x2'

export default function LanguageFlag({
    className = 'h-5 w-7 shadow',
    preferKosovo = true,
}) {
    const { i18n } = useTranslation()
    const lng = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]

    // Zgjedh kodi i flamurit sipas gjuhës
    const langToCountry = {
        en: 'GB',
        de: 'DE',
        fr: 'FR',
        sq: preferKosovo ? 'XK' : 'AL',
    }

    const code = langToCountry[lng] || 'GB'
    const Flag = Flags[code] || Flags.GB

    return <Flag className={className} title={code} />
}
