import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Building2 } from 'lucide-react';
import logoOriginal from '../Logotipo horizontal original.png';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* About Section */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-tertiary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.img 
              src={logoOriginal}
              alt="Voz y Futuro"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-24 md:h-32 object-contain mb-12"
            />
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[14px] font-sans uppercase tracking-[0.2em] font-bold text-brand-primary mb-4 block"
            >
              {t.about.tag}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display text-brand-primary mb-8 drop-shadow-sm"
            >
              {t.about.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-700 font-sans leading-relaxed"
            >
              {t.about.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[14px] font-sans uppercase tracking-[0.2em] font-bold text-brand-primary mb-2 block">{t.initiatives.tag}</span>
            <h2 className="text-4xl md:text-5xl font-display text-slate-800 mb-6 drop-shadow-sm">{t.initiatives.title}</h2>
            <p className="text-xl text-slate-600 font-sans font-bold">
              {t.initiatives.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-primary/5 p-10 md:p-14 rounded-[40px] border-4 border-brand-primary/20 relative transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center mb-8 shadow-lg transform rotate-[-2deg]">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display text-brand-primary mb-4 drop-shadow-sm leading-tight">
                {t.initiatives.initiative1Title}
              </h3>
              <p className="text-lg text-slate-700 font-sans font-bold leading-relaxed">
                {t.initiatives.initiative1Desc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-tertiary/5 p-10 md:p-14 rounded-[40px] border-4 border-brand-tertiary/20 relative transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-brand-tertiary text-white rounded-full flex items-center justify-center mb-8 shadow-lg transform rotate-[2deg]">
                <Building2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display text-brand-tertiary mb-4 drop-shadow-sm leading-tight">
                {t.initiatives.initiative2Title}
              </h3>
              <p className="text-lg text-slate-700 font-sans font-bold leading-relaxed">
                {t.initiatives.initiative2Desc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
