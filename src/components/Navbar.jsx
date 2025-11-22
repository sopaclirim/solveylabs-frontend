import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LanguageFlag from './LanguageFlag';

// Import logo SOLVEY SVG
import logoImage from '../assets/Asset 1.svg';

const showAdminLogin = import.meta.env.VITE_SHOW_ADMIN_LOGIN === 'true'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('common');


  const navClass = ({ isActive }) =>
    `transition-colors hover:text-[var(--color-accent)] ml-0.5 ${isActive ? 'text-lightest-slate font-semibold' : ''
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-dark-navy/95 border-b border-lightest-navy/20 shadow-[0_4px_22px_rgba(0,0,0,0.5)]">
      <nav className="flex items-center justify-between py-6 px-4 lg:px-16 xl:px-36">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img 
            src={logoImage} 
            alt={t('common.logoAlt')} 
            className="h-10 sm:h-11 md:h-12 lg:h-12 xl:h-14 w-auto object-contain transition-opacity hover:opacity-90"
            style={{ 
              imageRendering: 'crisp-edges',
              mixBlendMode: 'normal'
            }}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5 text-lightest-slate">
          <NavLink to="/" className={navClass} end>{t('nav.home')}</NavLink>
          <NavLink to="/blog" className={navClass}>{t('nav.blog')}</NavLink>
          <NavLink to="/careers" className={navClass}>{t('nav.careers')}</NavLink>
          <NavLink to="/contact" className={navClass}>{t('nav.contact')}</NavLink>

          <div className='flex items-center gap-2.5 ml-4'>
            <LanguageFlag className="h-5 w-6 shadow" />
            <LanguageSwitcher class="ml-0" />
          </div>

        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-lightest-slate cursor-pointer"
          aria-label={t('common.menu')}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(s => !s)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
            }
          </svg>
        </button>
      </nav>

      <div id="mobile-menu" className={`md:hidden border-t border-lightest-navy/20 mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content px-6 pt-4 pb-4 flex flex-col gap-3 text-lightest-slate bg-dark-navy/95 backdrop-blur-sm">
          <NavLink to="/" className={`${navClass} pt-2`} end onClick={() => setOpen(false)}>{t('nav.home')}</NavLink>
          <NavLink to="/blog" className={navClass} onClick={() => setOpen(false)}>{t('nav.blog')}</NavLink>
          <NavLink to="/careers" className={navClass} onClick={() => setOpen(false)}>{t('nav.careers')}</NavLink>
          <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>{t('nav.contact')}</NavLink>


          <div className="pt-0 pb-10 flex items-center gap-2">
            <LanguageFlag className="h-4 w-6 shadow order-2" />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}