import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import StatBadge from '../components/StatBadge';
import LogoCloud from '../components/LogoCloud';
import CTA from '../components/CTA';
import TechMarquee from '../components/TechMarquee';
import TeamCarousel from '../components/TeamCarousel';
import LatestPosts from '../components/LatestPosts';
import TechNewsCarousel from '../components/TechNewsCarousel';

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

          <div className="mt-8 flex items-center justify-center gap-3 px-2 ">
            <a href="/contact" className="btn-ghost text-base p-3">{t('hero.cta')}</a>
            <a href="#sherbimet" className="btn-primary text-base p-3 px-7 border-2 border-accent">{t('services.title')}</a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 px-1">
            <StatBadge value="15+"  label={t('stats.projects')} />
            <StatBadge value="99.9%" label={t('stats.uptime')} />
            <StatBadge value="~30%+" label={t('stats.speed')} />
            <StatBadge value="24/7" label={t('stats.support')} />
          </div>
        </div>
      </section>

      {/* SHËRBIMET */}
      <section id="sherbimet" className="relative px-10 lg:px-16 xl:px-36 py-28 border-t border-lightest-navy/10">
        <SectionHeading
          kicker={t('services.title')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
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
      <div className='px-10 lg:px-16 xl:px-36 pt-18 pb-18'>
        <section id="rreth-nesh" className="py-24 px-10 section-gradient border border-lightest-navy/20">
          <SectionHeading
            title={t('about.title')}
            subtitle={t('about.text')}
          />
        </section>
      </div>

      {/* SI PUNOJME – Process */}
      <section className="px-10 lg:px-16 xl:px-36 py-20">
        <SectionHeading
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="section-gradient rounded-2xl border border-lightest-navy/20 px-6 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">{t('process.step1.number')}</p>
            <h3 className="text-lg font-semibold text-lightest-slate mb-2">{t('process.step1.title')}</h3>
            <p className="text-sm text-light-slate">
              {t('process.step1.text')}
            </p>
          </div>
          <div className="section-gradient rounded-2xl border border-lightest-navy/20 px-6 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">{t('process.step2.number')}</p>
            <h3 className="text-lg font-semibold text-lightest-slate mb-2">{t('process.step2.title')}</h3>
            <p className="text-sm text-light-slate">
              {t('process.step2.text')}
            </p>
          </div>
          <div className="section-gradient rounded-2xl border border-lightest-navy/20 px-6 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">{t('process.step3.number')}</p>
            <h3 className="text-lg font-semibold text-lightest-slate mb-2">{t('process.step3.title')}</h3>
            <p className="text-sm text-light-slate">
              {t('process.step3.text')}
            </p>
          </div>
          <div className="section-gradient rounded-2xl border border-lightest-navy/20 px-6 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">{t('process.step4.number')}</p>
            <h3 className="text-lg font-semibold text-lightest-slate mb-2">{t('process.step4.title')}</h3>
            <p className="text-sm text-light-slate">
              {t('process.step4.text')}
            </p>
          </div>
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

      {/* LOGO CLOUD */}
      <section className="pt-30 pb-46 px-10">
        <SectionHeading
          title={t('clients.title')}
          subtitle={t('clients.text')}
        />
  
        <LogoCloud />
      </section>

      {/* Latest Posts */}
      <section id="latest-blogs" className='px-10 lg:px-16 xl:px-36 py-20'>
        <SectionHeading
            title={t('latestPosts.title')}
            subtitle={t('latestPosts.subtitle')}
        />
        
        <LatestPosts />

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a href="/blog" className="btn-ghost p-4">
            {t('latestPosts.viewAll')}
          </a>
        </div>
      </section>

      {/* Tech News Carousel */}
      <section className="px-10 lg:px-16 xl:px-36 py-20">
        <SectionHeading
          title={t('techNews.title')}
          subtitle={t('techNews.subtitle')}
        />
        <TechNewsCarousel />
      </section>

      {/* KARRIERA (teaser) */}
      <section id="karriera" className="py-20 px-10 lg:px-16 xl:px-36 md:py-28 border-b border-lightest-navy/10">
        <SectionHeading
          title={t('careers.teaserTitle')}
          subtitle={t('careers.teaserText')}
        />

        {/* Meet our team – carousel */}
        <TeamCarousel />

        <div className="mt-22 text-center">
          <a href="/careers" className="btn-ghost p-4">{t('careers.viewOpenings')}</a>
        </div>
      </section>

      {/* KONTAKT – CTA */}
      <section id="kontakt" className="my-24 md:mt-12 px-10 lg:px-16 xl:px-36 pb-16">
        <CTA />
      </section>
    </div>
  )
}