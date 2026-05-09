import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from '../components/SectionTitle';

function FlipCard({ testimonial, idx }: { testimonial: any, idx: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const colors = ['var(--color-brand-primary)', 'var(--color-brand-secondary)', 'var(--color-brand-tertiary)'];
  const overlayColor = colors[idx % 3];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="relative group cursor-pointer aspect-[3/4] w-full"
      style={{ perspective: 1000 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full bg-slate-100 rounded-[40px] overflow-hidden border-4 shadow-xl transition-colors duration-300" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', borderColor: overlayColor }}>
          <div className="w-full h-full relative">
            <img src={testimonial.img} alt={testimonial.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white pointer-events-none z-10">
             <h3 className="text-4xl md:text-5xl font-display font-bold drop-shadow-md mb-2">{testimonial.name}</h3>
             {testimonial.title && <p className="text-sm md:text-base font-sans font-bold uppercase tracking-widest drop-shadow-md" style={{ color: overlayColor }}>{testimonial.title}</p>}
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-[40px] border-4 shadow-xl p-6 md:p-8 flex flex-col" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderColor: overlayColor }}>
           <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 md:mb-6 text-center shrink-0 drop-shadow-sm" style={{ color: overlayColor }}>{testimonial.name}</h3>
           <div className="overflow-y-auto flex-1 flex flex-col items-center custom-scrollbar">
             <div className="my-auto py-2">
               <p className="text-slate-600 font-bold leading-relaxed text-base md:text-lg text-center">"{testimonial.desc}"</p>
             </div>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Sponsorship() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-24 pb-32 bg-brand-light text-slate-800">
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col mb-12 md:mb-20">
          <SectionTitle>{t.sponsorship.title}</SectionTitle>
          <p className="mt-6 text-xl leading-relaxed text-slate-600 font-sans font-bold max-w-4xl">
            {t.sponsorship.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[32px] border-4 border-brand-primary shadow-xl">
               <h3 className="text-2xl font-display text-brand-primary mb-4 drop-shadow-sm">{t.sponsorship.food}</h3>
               <p className="text-slate-600 font-bold">{t.sponsorship.foodDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] border-4 border-brand-secondary shadow-xl transform lg:translate-y-4">
               <h3 className="text-2xl font-display text-brand-secondary mb-4 drop-shadow-sm">{t.sponsorship.education}</h3>
               <p className="text-slate-600 font-bold">{t.sponsorship.educationDesc}</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] border-4 border-brand-tertiary shadow-xl lg:translate-y-8">
               <h3 className="text-2xl font-display text-brand-tertiary mb-4 drop-shadow-sm">{t.sponsorship.health}</h3>
               <p className="text-slate-600 font-bold">{t.sponsorship.healthDesc}</p>
            </div>
        </div>

        <div className="mt-24 md:mt-32">
          <SectionTitle>{t.sponsorship.testimonialsTitle}</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {t.sponsorship.testimonials.map((testimonial, idx) => (
              <FlipCard key={idx} testimonial={testimonial} idx={idx} />
            ))}
          </div>
        </div>

        <div className="mt-24 md:mt-32">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-brand-primary/10 rounded-[40px] p-8 md:p-16 border-4 border-brand-primary flex flex-col items-center text-center"
            >
                <h3 className="text-3xl md:text-5xl font-display text-slate-800 mb-6 drop-shadow-sm">{t.sponsorship.joinTitle}</h3>
                <p className="text-lg md:text-xl text-slate-600 font-bold max-w-2xl mb-8">
                  {t.sponsorship.joinDesc}
                </p>
                <a href="/participar" className="bg-brand-primary text-white font-sans font-bold text-[16px] md:text-[18px] uppercase tracking-wider py-4 px-8 rounded-full hover:bg-brand-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {t.sponsorship.joinBtn}
                </a>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
