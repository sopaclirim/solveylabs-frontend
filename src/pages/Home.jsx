import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import StatBadge from '../components/StatBadge';
import LogoCloud from '../components/LogoCloud';
import CTA from '../components/CTA';
import TechMarquee from '../components/TechMarquee';

function IconCode(props){ return (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)}

function IconWeb(props){ return (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)}

function IconMobile(props){ return (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)}

export default function Home(){
  const { t } = useTranslation('common')

  return (
    <div className="">
      {/* HERO */}
      <section id="hero" className="min-h-[82vh] flex items-center justify-center text-center pt-16 pb-20 mb-16">
        <div className="max-w-5xl px-10">
          <p className="text-accent text-lg mb-3">{t('hero.hi')}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-lightest-slate mb-3">{t('hero.title')}</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate mb-6">{t('hero.subtitle')}</h2>
          <p className="max-w-2xl mx-auto text-lg text-light-slate">{t('hero.tagline')}</p>

          <div className="mt-8 flex items-center justify-center gap-3 px-4">
            <a href="/contact" className="btn-ghost text-base p-3">{t('hero.cta')}</a>
            <a href="#sherbimet" className="btn-primary text-base p-3 px-7 border-2 border-accent">{t('services.title')}</a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 px-4">
            <StatBadge value="15+"  label={t('stats.projects')} />
            <StatBadge value="99.9%" label={t('stats.uptime')} />
            <StatBadge value="~30%+" label={t('stats.speed')} />
            <StatBadge value="24/7" label={t('stats.support')} />
          </div>
        </div>
      </section>

      {/* <hr className="mt-16 border hr-soft mx-14 lg:mx-16 xl:mx-36" /> */}


      {/* SHËRBIMET */}
      <section id="sherbimet" className="px-10 lg:px-16 xl:px-36 py-28 bg-dark-navy border-t border-dark-navy shadow-[0_-16px_28px_rgba(4,13,18)]">
        <SectionHeading
          kicker={t('services.title')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <FeatureCard icon={IconCode} title={t('services.s1')}>
            {t('services.s1d')}
          </FeatureCard>
          <FeatureCard icon={IconWeb} title={t('services.s2')}>
            {t('services.s2d')}
          </FeatureCard>
          <FeatureCard icon={IconMobile} title={t('services.s3')}>
            {t('services.s3d')}
          </FeatureCard>
        </div>
      </section>

      {/* RRETH NESH */}
      <div className='px-10 lg:px-16 xl:px-36 bg-dark-navy pt-18 pb-18'>
          <section id="rreth-nesh" className="py-24 px-10 section-gradient rounded-2xl border border-lightest-navy/20">
            <SectionHeading
              title={t('about.title')}
              subtitle={t('about.text')}
            />
        </section>
      </div>

      {/* LOGO CLOUD */}
      <section className="pt-30 pb-46 px-10 bg-dark-navy">
        <SectionHeading
          title={t('clients.title')}
          subtitle={t('clients.text')}
        />
  
        <LogoCloud />
      </section>

      {/* KARRIERA (teaser) */}
      <section id="karriera" className="py-20 px-10 md:py-28 bg-dark-navy border-b border-dark-navy shadow-[0_16px_18px_rgba(4,13,18)]">
        <SectionHeading
          title={t('careers.teaserTitle')}
          subtitle={t('careers.teaserText')}
        />
        <div className="mt-8 text-center">
          <a href="/careers" className="btn-primary p-3">{t('careers.viewOpenings')}</a>
        </div>
      </section>

      {/* Tools & Technologies */}
      <div className='container-page pt-36 pb-0'>
          <SectionHeading
                kicker={t('technologies.title')}
                title={t('technologies.title')}
                subtitle={t('technologies.subtitle')}
          />
              
          <TechMarquee />
      </div>

      {/* KONTAKT – CTA */}
      <section id="kontakt" className="mt-24 md:mt-12 px-10 lg:px-16 xl:px-36 pb-16">
        <CTA />
      </section>
    </div>
  )
}