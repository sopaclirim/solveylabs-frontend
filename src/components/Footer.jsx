import { useTranslation } from "react-i18next";

export default function Footer(){
    const { t } = useTranslation('common');

    return (
        <footer className="bg-light-navy border-t border-lightest-navy/20">
        <div className="container-page py-8 text-center text-slate">
            <p>
            &copy; {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}
            </p>
        </div>
        </footer>
    );
}