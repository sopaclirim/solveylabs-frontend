import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LanguageFlag from './LanguageFlag';
import { useTheme } from '../ThemeContext';

const showAdminLogin = import.meta.env.VITE_SHOW_ADMIN_LOGIN === 'true'

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation('common');
  const { theme, toggleTheme } = useTheme();


  const navClass = ({ isActive }) =>
  `transition-colors hover:text-[var(--color-accent)] ml-0.5 ${
    isActive ? 'text-lightest-slate font-semibold' : ''
  }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm shadow-lg shadow-black/10 sl-dark:bg-dark-navy/95 sl-light:bg-[rgba(244,246,251,0.94)]">
      <nav className="flex items-center justify-between py-8 px-4 lg:px-16 xl:px-36">
        <Link to="/" className="flex items-center gap-2" onClick={()=>setOpen(false)}>
          <div className="h-9 w-9 rounded-xl bg-accent text-dark-navy grid place-items-center font-bold">S</div>
          <span className="text-3xl font-semibold text-lightest-slate">{t('brand')}</span>
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

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-lightest-navy/40 bg-light-navy/40 text-lightest-slate hover:border-accent hover:text-accent transition"
              aria-label="Ndrysho temën"
            >
              {theme === 'dark' ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M18.364 5.636l-1.59 1.59M21 12h-2.25M18.364 18.364l-1.59-1.59M12 18.75V21M7.227 16.773l-1.59 1.59M5.25 12H3M7.227 7.227l-1.59-1.59M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>
          
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-lightest-slate cursor-pointer"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={ () => setOpen( s => !s ) }
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
            }
          </svg>
        </button>
      </nav>

      <div id="mobile-menu" className={`md:hidden border-t border-lightest-navy/20 ${open?'block':'hidden'}`}>
        <div className="px-6 py-8 flex flex-col gap-3 text-lightest-slate sl-dark:bg-light-navy sl-light:bg-[rgba(255,255,255,0.98)]">
          <NavLink to="/" className={navClass} end onClick={()=>setOpen(false)}>{t('nav.home')}</NavLink>
          <NavLink to="/blog" className={navClass} onClick={()=>setOpen(false)}>{t('nav.blog')}</NavLink>
          <NavLink to="/careers" className={navClass} onClick={()=>setOpen(false)}>{t('nav.careers')}</NavLink>
          <NavLink to="/contact" className={navClass} onClick={()=>setOpen(false)}>{t('nav.contact')}</NavLink>

          <div className="pt-1 flex items-center gap-2">
            <LanguageFlag className="h-5 w-6 shadow order-2" />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}