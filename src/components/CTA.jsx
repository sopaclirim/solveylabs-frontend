import { useTranslation } from 'react-i18next'

export default function CTA(){
  const { t } = useTranslation('common')
  return (
    <section className="section-tech-gradient px-10 py-20 md:py-32 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lightest-slate mb-6 leading-tight">
          {t('cta.title')}
        </h3>
        <p className="text-lg md:text-xl text-light-slate mt-4 max-w-3xl mx-auto leading-relaxed">
          {t('cta.text')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="btn-primary px-8 py-4 text-base min-w-[200px]">{t('cta.quote')}</a>
          <a href="/blog" className="btn-ghost px-8 py-4 text-base min-w-[200px]">{t('cta.blog')}</a>
        </div>
      </div>
    </section>
  )
}