import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';
import logo from '../Logotipo.png';
import logoNaranja from '../Logotipo horizontal naranja.png';

export default function Layout() {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const NavItem = ({ to, label }: { to: string, label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to}
        className={`${isActive ? 'text-brand-primary bg-brand-primary/10' : 'text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5'} font-sans font-bold text-[14px] uppercase tracking-wide px-4 py-2 rounded-full transition-all cursor-pointer`}
      >
        {label}
      </Link>
    );
  };

  const MobileNavItem = ({ to, label }: { to: string, label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to}
        className={`${isActive ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'} font-display text-4xl tracking-wide transition-colors cursor-pointer`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-tertiary/30 flex flex-col pt-[100px] lg:pt-[160px] overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b-2 border-brand-primary/10 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Voz y Futuro" className={`${scrolled ? 'h-[75px] lg:h-[120px]' : 'h-[105px] lg:h-[210px]'} -my-4 lg:-my-10 object-contain transition-all duration-300 transform hover:scale-105`} />
          </Link>

          <div className="hidden lg:flex items-center gap-2 text-slate-800">
            <NavItem to="/florencia" label={t.nav.florencia} />
            <NavItem to="/cazombo" label={t.nav.cazombo} />
            <NavItem to="/complejo" label={t.nav.complex} />
            <NavItem to="/apadrinamiento" label={t.nav.sponsorship} />
            <NavItem to="/patrocinadores" label={t.nav.sponsors} />
            <NavItem to="/participar" label={t.nav.join} />
            
            <div className="flex items-center gap-2 ml-4 pl-6 border-l-2 border-brand-primary/20 text-[12px] font-sans font-bold">
              {(['es', 'pt', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`uppercase tracking-widest px-3 py-1 rounded-full transition-all ${lang === l ? 'bg-brand-tertiary text-white' : 'text-slate-400 hover:text-brand-primary'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <button className="lg:hidden text-brand-primary p-2 bg-white rounded-full shadow-sm border border-brand-primary/10" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6 text-brand-primary p-2 bg-brand-light rounded-full" onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <MobileNavItem to="/florencia" label={t.nav.florencia} />
            <MobileNavItem to="/cazombo" label={t.nav.cazombo} />
            <MobileNavItem to="/complejo" label={t.nav.complex} />
            <MobileNavItem to="/apadrinamiento" label={t.nav.sponsorship} />
            <MobileNavItem to="/patrocinadores" label={t.nav.sponsors} />
            <MobileNavItem to="/participar" label={t.nav.join} />
            
            <div className="flex items-center gap-4 mt-8 text-[14px]">
              {(['es', 'pt', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`uppercase px-4 py-2 font-bold rounded-full tracking-widest transition-all ${lang === l ? 'bg-brand-tertiary text-white' : 'text-slate-400'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-brand-primary text-white py-16 px-6 lg:px-12 overflow-hidden relative mt-auto border-t-[12px] border-brand-tertiary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 font-sans font-bold">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <img src={logoNaranja} alt="Voz y Futuro" className="h-[60px] object-contain mb-2" />
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-right">
            <span className="text-white/80">{t.footer.copy}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
