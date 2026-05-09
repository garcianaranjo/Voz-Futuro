import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from '../components/SectionTitle';

export default function Florencia() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col mb-32 pt-12 md:pt-32">
      <section className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-[14px] font-sans uppercase tracking-[0.2em] font-bold text-brand-primary mb-2 block">{t.florencia.founderTag}</span>
            <SectionTitle>{t.florencia.title}</SectionTitle>
            <div className="h-2 w-24 bg-brand-tertiary rounded-full mb-8" />
            <p className="text-2xl md:text-3xl font-display text-brand-secondary leading-snug mb-8 drop-shadow-sm rotate-[-1deg]">
              {t.florencia.quote}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-sans font-bold">
              {t.florencia.content}
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10 font-sans">
              {t.florencia.content2}
            </p>
            
            <div className="space-y-4 font-sans text-[14px] uppercase tracking-widest font-bold text-brand-primary">
              <div className="flex items-center gap-4 py-4 border-b-2 border-brand-primary/10">
                <span className="w-4 h-4 bg-brand-tertiary rounded-full shadow-sm" /> {t.florencia.eduTag}
              </div>
              <div className="flex items-center gap-4 py-4 border-b-2 border-brand-primary/10">
                <span className="w-4 h-4 bg-brand-secondary rounded-full shadow-sm" /> {t.florencia.healthTag}
              </div>
              <div className="flex items-center gap-4 py-4">
                <span className="w-4 h-4 bg-brand-primary rounded-full shadow-sm" /> {t.florencia.voiceTag}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-brand-tertiary/20 rounded-[40px] md:rounded-[80px] rotate-[4deg] scale-105 -z-10" />
            <div className="absolute inset-0 bg-brand-primary/20 rounded-[40px] md:rounded-[80px] rotate-[-2deg] scale-105 -z-10" />
            <div className="aspect-[4/5] overflow-hidden rounded-[40px] md:rounded-[80px] border-4 md:border-8 border-white shadow-xl">
              <img src="/Florencia01.jpeg" alt="Florencia Casquete" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
