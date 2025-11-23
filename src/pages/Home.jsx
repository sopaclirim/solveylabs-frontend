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
import HeroSlider from '../components/HeroSlider';

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
      {/* HERO SLIDER */}
      <section id="hero" className="relative min-h-screen h-[120vh] md:h-[110vh] lg:h-screen -mt-20">
        {/* Slider Background */}
        <div className="absolute inset-0 z-0">
          <HeroSlider />
        </div>
        
        {/* Hero Content Overlay - mbi slider */}
        <div className="relative z-10 h-full flex items-center justify-center pointer-events-none pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center">
            {/* "Hello, we are" text */}
            <p className="text-accent text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-0.5 xs:mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3 tracking-wide drop-shadow-lg">
              <AnimatedText text={t('hero.hi')} delay={0.1} delayPerLetter={0.02} />
            </p>
            
            {/* "Solvey Labs" main title */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-0.5 xs:mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3 leading-tight drop-shadow-2xl px-1 sm:px-2">
              <AnimatedText text={t('hero.title')} delay={0.2} delayPerLetter={0.03} />
            </h1>
            
            {/* "We build the digital future" subtitle */}
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-lightest-slate mb-1.5 xs:mb-2 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-4 2xl:mb-6 leading-tight drop-shadow-lg px-1 sm:px-2">
              <AnimatedText text={t('hero.subtitle')} delay={0.4} delayPerLetter={0.02} />
            </h2>
            
            {/* Tagline paragraph */}
            <p className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-light-slate leading-relaxed drop-shadow-md px-2 sm:px-3 md:px-4 lg:px-6 mb-0">
              <AnimatedText text={t('hero.tagline')} delay={0.6} delayPerLetter={0.015} />
            </p>

            {/* Buttons */}
            <div className="mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 px-2 pointer-events-auto">
              <a href="/contact" className="btn-primary text-xs xs:text-sm sm:text-base md:text-lg px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 w-full sm:w-auto min-w-[120px] xs:min-w-[140px] sm:min-w-[150px] md:min-w-[170px] lg:min-w-[190px] xl:min-w-[200px] shadow-xl">
                {t('hero.cta')}
              </a>
              <a href="#sherbimet" className="btn-ghost text-xs xs:text-sm sm:text-base md:text-lg px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 w-full sm:w-auto min-w-[120px] xs:min-w-[140px] sm:min-w-[150px] md:min-w-[170px] lg:min-w-[190px] xl:min-w-[200px] bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 shadow-xl">
                {t('services.title')}
              </a>
            </div>

            {/* Stats Badges */}
            <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-12 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16 2xl:mb-20 grid grid-cols-2 md:grid-cols-4 gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-6 px-1 sm:px-1.5 md:px-2 items-stretch max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto pointer-events-auto">
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
        </div>
      </section>

      {/* SHËRBIMET */}
      <section id="sherbimet" className="section-white relative px-10 lg:px-16 xl:px-36 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            kicker={t('services.title')}
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
      <div className='px-10 lg:px-16 xl:px-36 py-20 md:py-32'>
        <section id="rreth-nesh" className="py-16 md:py-24 px-8 md:px-16 lg:px-20 section-tech-gradient rounded-3xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <SectionHeading
              title={t('about.title')}
              subtitle={t('about.text')}
            />
          </div>
        </section>
      </div>

      {/* Latest Posts */}
      <section id="latest-blogs" className='section-white px-10 lg:px-16 xl:px-36 py-20 md:py-32'>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
              title={t('latestPosts.title')}
              subtitle={t('latestPosts.subtitle')}
          />
          
          <div className="mt-16">
            <LatestPosts />
          </div>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <a href="/blog" className="btn-ghost px-8 py-4 text-base">
              {t('latestPosts.viewAll')}
            </a>
          </div>
        </div>
      </section>

      {/* Tech News Carousel */}
      <section className="section-white px-10 lg:px-16 xl:px-36 pt-20 md:pt-32 pb-20 md:pb-32 relative">
        {/* SVG Wave Decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#112240" fillOpacity="1" d="M0,288L80,288C160,288,320,288,480,272C640,256,800,224,960,202.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            title={t('techNews.title')}
            subtitle={t('techNews.subtitle')}
          />
          <div className="mt-16">
            <TechNewsCarousel />
          </div>
        </div>
      </section>

      {/* SI PUNOJME – Process */}
      <section className="section-white px-10 lg:px-16 xl:px-36 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={t('process.title')}
            subtitle={t('process.subtitle')}
          />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div 
            className="process-card rounded-2xl border border-lightest-navy/20 px-6 py-8 md:px-8 md:py-10 shadow-lg"
            style={{
              background: 'radial-gradient(circle at 15% 20%, rgba(44, 116, 179, 0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 154, 225, 0.2), transparent 45%), var(--color-light-navy)'
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-bright mb-3">{t('process.step1.number')}</p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{t('process.step1.title')}</h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {t('process.step1.text')}
            </p>
          </div>
          <div 
            className="process-card rounded-2xl border border-lightest-navy/20 px-6 py-8 md:px-8 md:py-10 shadow-lg"
            style={{
              background: 'radial-gradient(circle at 15% 20%, rgba(44, 116, 179, 0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 154, 225, 0.2), transparent 45%), var(--color-light-navy)'
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-bright mb-3">{t('process.step2.number')}</p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{t('process.step2.title')}</h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {t('process.step2.text')}
            </p>
          </div>
          <div 
            className="process-card rounded-2xl border border-lightest-navy/20 px-6 py-8 md:px-8 md:py-10 shadow-lg"
            style={{
              background: 'radial-gradient(circle at 15% 20%, rgba(44, 116, 179, 0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 154, 225, 0.2), transparent 45%), var(--color-light-navy)'
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-bright mb-3">{t('process.step3.number')}</p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{t('process.step3.title')}</h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {t('process.step3.text')}
            </p>
          </div>
          <div 
            className="process-card rounded-2xl border border-lightest-navy/20 px-6 py-8 md:px-8 md:py-10 shadow-lg"
            style={{
              background: 'radial-gradient(circle at 15% 20%, rgba(44, 116, 179, 0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 154, 225, 0.2), transparent 45%), var(--color-light-navy)'
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-bright mb-3">{t('process.step4.number')}</p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{t('process.step4.title')}</h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              {t('process.step4.text')}
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <div className='section-tech-gradient relative overflow-hidden'>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl"></div>
        </div>
        <div className='container-page py-20 md:py-32 relative z-10'>
            <SectionHeading
                  kicker={t('technologies.title')}
                  title={t('technologies.title')}
                  subtitle={t('technologies.subtitle')}
            />
            <div className="mt-16">
              <TechMarquee />
            </div>
        </div>
      </div>

      {/* LOGO CLOUD */}
      <section className="section-white py-20 md:py-32 px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={t('clients.title')}
            subtitle={t('clients.text')}
          />
          <div className="mt-16">
            <LogoCloud />
          </div>
        </div>
      </section>

      {/* KARRIERA (teaser) */}
      <section id="karriera" className="section-tech-gradient py-20 md:py-32 px-10 lg:px-16 xl:px-36 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-light/8 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            title={t('careers.teaserTitle')}
            subtitle={t('careers.teaserText')}
          />

          {/* Meet our team – carousel */}
          <div className="mt-16">
            <TeamCarousel />
          </div>

          <div className="mt-16 text-center">
            <a href="/careers" className="btn-ghost px-8 py-4 text-base">{t('careers.viewOpenings')}</a>
          </div>
        </div>
      </section>

      {/* KONTAKT – CTA */}
      <section id="kontakt" className="px-10 lg:px-16 xl:px-36 py-20 md:py-32">
        <CTA />
      </section>
    </div>
  )
}