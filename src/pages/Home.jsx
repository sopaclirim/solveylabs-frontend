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
import AnimatedText from '../components/AnimatedText';

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
      <section id="hero" className="section-tech-gradient min-h-[82vh] flex items-center justify-center text-center pt-24 pb-42">
        <div className="max-w-5xl px-10">
          <p className="text-accent text-lg mb-3">
            <AnimatedText text={t('hero.hi')} delay={0.1} delayPerLetter={0.02} />
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-lightest-slate mb-3">
            <AnimatedText text={t('hero.title')} delay={0.2} delayPerLetter={0.03} />
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate mb-6">
            <AnimatedText text={t('hero.subtitle')} delay={0.4} delayPerLetter={0.02} />
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-light-slate">
            <AnimatedText text={t('hero.tagline')} delay={0.6} delayPerLetter={0.015} />
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 px-2">
            <a href="/contact" className="btn-ghost text-base p-3">{t('hero.cta')}</a>
            <a href="#sherbimet" className="btn-primary text-base p-3 px-7 border-2 border-accent">{t('services.title')}</a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 px-1 items-stretch">
            <div className="stats-badge-animate stats-badge-delay-1 h-full">
              <StatBadge value="15+"  label={t('stats.projects')} />
            </div>
            <div className="stats-badge-animate stats-badge-delay-2 h-full">
              <StatBadge value="99.9%" label={t('stats.uptime')} />
            </div>
            <div className="stats-badge-animate stats-badge-delay-3 h-full">
              <StatBadge value="~30%+" label={t('stats.speed')} />
            </div>
            <div className="stats-badge-animate stats-badge-delay-4 h-full">
              <StatBadge value="24/7" label={t('stats.support')} />
            </div>
          </div>
        </div>
      </section>

      {/* SHËRBIMET */}
      <section id="sherbimet" className="section-white relative px-10 lg:px-16 xl:px-36 py-34">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            kicker={t('services.title')}
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* RRETH NESH */}
      <div className='px-10 lg:px-16 xl:px-36 py-34'>
        <section id="rreth-nesh" className="py-16 md:py-24 px-8 md:px-16 lg:px-20 section-tech-gradient">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title={t('about.title')}
              subtitle={t('about.text')}
            />
          </div>
        </section>
      </div>

      {/* Latest Posts */}
      <section id="latest-blogs" className='section-white px-10 lg:px-16 xl:px-36 py-34'>
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* Tech News Carousel */}
      <section className="section-tech-gradient px-10 lg:px-16 xl:px-36 py-34">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={t('techNews.title')}
            subtitle={t('techNews.subtitle')}
          />
          <TechNewsCarousel />
        </div>
      </section>

      {/* SI PUNOJME – Process */}
      <section className="section-white px-10 lg:px-16 xl:px-36 py-34">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={t('process.title')}
            subtitle={t('process.subtitle')}
          />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div 
            className="rounded-2xl border border-lightest-navy/20 px-6 py-8 shadow-sm"
            style={{
              background: 'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.22), transparent 50%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.18), transparent 45%), var(--color-light-navy)'
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-2">{t('process.step1.number')}</p>
            <h3 className="text-lg font-semibold text-white mb-2">{t('process.step1.title')}</h3>
            <p className="text-sm text-white/90">
              {t('process.step1.text')}
            </p>
          </div>
          <div 
            className="rounded-2xl border border-lightest-navy/20 px-6 py-8 shadow-sm"
            style={{
              background: 'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.22), transparent 50%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.18), transparent 45%), var(--color-light-navy)'
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-2">{t('process.step2.number')}</p>
            <h3 className="text-lg font-semibold text-white mb-2">{t('process.step2.title')}</h3>
            <p className="text-sm text-white/90">
              {t('process.step2.text')}
            </p>
          </div>
          <div 
            className="rounded-2xl border border-lightest-navy/20 px-6 py-8 shadow-sm"
            style={{
              background: 'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.22), transparent 50%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.18), transparent 45%), var(--color-light-navy)'
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-2">{t('process.step3.number')}</p>
            <h3 className="text-lg font-semibold text-white mb-2">{t('process.step3.title')}</h3>
            <p className="text-sm text-white/90">
              {t('process.step3.text')}
            </p>
          </div>
          <div 
            className="rounded-2xl border border-lightest-navy/20 px-6 py-8 shadow-sm"
            style={{
              background: 'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.22), transparent 50%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.18), transparent 45%), var(--color-light-navy)'
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-2">{t('process.step4.number')}</p>
            <h3 className="text-lg font-semibold text-white mb-2">{t('process.step4.title')}</h3>
            <p className="text-sm text-white/90">
              {t('process.step4.text')}
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <div className='section-tech-gradient container-page py-20'>
          <SectionHeading
                kicker={t('technologies.title')}
                title={t('technologies.title')}
                subtitle={t('technologies.subtitle')}
          />
              
          <TechMarquee />
      </div>

      {/* LOGO CLOUD */}
      <section className="section-white py-40 px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={t('clients.title')}
            subtitle={t('clients.text')}
          />
    
          <LogoCloud />
        </div>
      </section>

      {/* KARRIERA (teaser) */}
      <section id="karriera" className="section-tech-gradient py-20 px-10 lg:px-16 xl:px-36 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={t('careers.teaserTitle')}
            subtitle={t('careers.teaserText')}
          />

          {/* Meet our team – carousel */}
          <TeamCarousel />

          <div className="mt-22 text-center">
            <a href="/careers" className="btn-ghost p-4">{t('careers.viewOpenings')}</a>
          </div>
        </div>
      </section>

      {/* KONTAKT – CTA */}
      <section id="kontakt" className="px-10 lg:px-16 xl:px-36 py-20">
        <CTA />
      </section>
    </div>
  )
}