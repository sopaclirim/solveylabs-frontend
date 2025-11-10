import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LanguageFlag from './LanguageFlag';

const showAdminLogin = import.meta.env.VITE_SHOW_ADMIN_LOGIN === 'true'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation('common');


  const navClass = ({ isActive }) =>
    `hover:underline ${isActive ? 'text-lightest-slate font-semibold' : ''}`

  return (
    <header className="sticky top-0 z-50 bg-dark-navy/80 backdrop-blur-sm shadow-lg shadow-black/20">
      <nav className="container-page py-8 flex items-center justify-between">
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

          <div className='flex items-center gap-2.5'>
            <LanguageFlag className="h-5 w-7 shadow ml-4" />
            <LanguageSwitcher class="ml-0" />
          </div>
          
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-lightest-slate"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={()=>setOpen( s => !s )}
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
        <div className="bg-light-navy px-6 py-8 flex flex-col gap-3 text-lightest-slate">
          <NavLink to="/" className={navClass} end onClick={()=>setOpen(false)}>{t('nav.home')}</NavLink>
          <NavLink to="/blog" className={navClass} onClick={()=>setOpen(false)}>{t('nav.blog')}</NavLink>
          <NavLink to="/careers" className={navClass} onClick={()=>setOpen(false)}>{t('nav.careers')}</NavLink>
          <NavLink to="/contact" className={navClass} onClick={()=>setOpen(false)}>{t('nav.contact')}</NavLink>

          <div className="pt-1 flex flex-row-reverse">
            <LanguageFlag className="h-5 w-8 shadow" />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}