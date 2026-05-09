import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from '../components/SectionTitle';
import { Church, Heart, Globe } from 'lucide-react';

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-24 pb-32 bg-white text-slate-800">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-brand-tertiary/20 rounded-full blur-2xl pointer-events-none" />

        <span className="text-[14px] font-sans uppercase tracking-[0.2em] font-bold text-brand-primary mb-2 block">{t.sponsors.communityTag}</span>
        <SectionTitle>{t.sponsors.title}</SectionTitle>
        <p className="text-lg md:text-xl text-slate-600 font-sans font-bold max-w-2xl mx-auto mb-12 md:mb-24 leading-relaxed">
          {t.sponsors.intro}
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start border-y-4 border-brand-primary/10 py-12 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-32 h-32 bg-brand-tertiary/20 rounded-[40px] transform rotate-[-2deg] flex items-center justify-center border-4 border-white shadow-sm">
              <Church className="w-12 h-12 text-brand-tertiary" />
            </div>
            <span className="font-bold text-brand-primary uppercase tracking-widest text-lg font-sans">{t.sponsors.churchesTitle}</span>
            <p className="font-sans font-bold text-slate-600 text-sm max-w-xs">{t.sponsors.churchesDesc}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-32 h-32 bg-brand-primary/20 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <Heart className="w-12 h-12 text-brand-primary" />
            </div>
            <span className="font-bold text-brand-secondary uppercase tracking-widest text-lg font-sans">{t.sponsors.privateTitle}</span>
            <p className="font-sans font-bold text-slate-600 text-sm max-w-xs">{t.sponsors.privateDesc}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
             <div className="w-32 h-32 bg-brand-secondary/20 rounded-[40px] transform rotate-[2deg] flex items-center justify-center border-4 border-white shadow-sm">
              <Globe className="w-12 h-12 text-brand-secondary" />
            </div>
            <span className="font-bold text-slate-800 uppercase tracking-widest text-lg font-sans">{t.sponsors.internationalTitle}</span>
            <p className="font-sans font-bold text-slate-600 text-sm max-w-xs">{t.sponsors.internationalDesc}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
