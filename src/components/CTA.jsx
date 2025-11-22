import { useTranslation } from 'react-i18next'

export default function CTA(){
  const { t } = useTranslation('common')
  return (
    <section className="section-tech-gradient px-10 py-26 text-center relative">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-lightest-slate">
          {t('cta.title')}
        </h3>
        <p className="text-light-slate mt-3 max-w-2xl mx-auto">
          {t('cta.text')}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/contact" className="btn-primary p-3">{t('cta.quote')}</a>
          <a href="/blog" className="btn-primary p-3">{t('cta.blog')}</a>
        </div>
      </div>
    </section>
  )
}