import { useTranslation } from 'react-i18next'

export default function CTA(){
  const { t } = useTranslation('common')
  return (
    <section className="section-gradient rounded-2xl border border-lightest-navy/20 p-10 md:p-14 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-lightest-slate">
        {t('cta.title')}
      </h3>
      <p className="text-light-slate mt-3 max-w-2xl mx-auto">
        {t('cta.text')}
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <a href="/contact" className="btn-primary p-2">{t('cta.quote')}</a>
        <a href="/blog" className="btn-ghost p-2">{t('cta.blog')}</a>
      </div>
    </section>
  )
}