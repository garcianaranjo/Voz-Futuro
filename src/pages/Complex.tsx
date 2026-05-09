import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from '../components/SectionTitle';

export default function Complex() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-24 pb-32 bg-brand-light text-slate-800">
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-12 md:mb-20 gap-8">
          <SectionTitle>{t.project.title}</SectionTitle>
          <p className="text-xl md:text-2xl text-brand-secondary font-display max-w-sm drop-shadow-sm rotate-[-2deg]">{t.florencia.quote2}</p>
        </div>

        <div className="mb-24">
           <p className="text-xl leading-relaxed text-slate-600 font-sans font-bold mb-8 max-w-4xl" dangerouslySetInnerHTML={{ __html: t.project.intro }} />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-32">
          {[
            { title: t.project.internado, desc: t.project.internadoDesc, colors: 'col-span-12 lg:col-span-6 border-brand-primary bg-white focus-within:ring-2' },
            { title: t.project.colegio, desc: t.project.colegioDesc, colors: 'col-span-12 lg:col-span-6 border-brand-tertiary bg-white' },
            { title: t.project.farmacia, desc: t.project.farmaciaDesc, colors: 'col-span-12 lg:col-span-6 border-brand-secondary bg-white' },
            { title: t.project.sustainability, desc: t.project.sustainabilityDesc, colors: 'col-span-12 lg:col-span-6 border-brand-primary bg-white' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className={`${item.colors} group overflow-hidden border-4 rounded-[40px] shadow-xl p-8 md:p-10 transform transition-transform hover:-translate-y-2`}
            >
              <h3 className="text-2xl md:text-3xl font-display text-brand-primary mb-4 flex items-center justify-between drop-shadow-sm">
                {item.title}
              </h3>
              <p className="font-sans font-bold text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Budget Study Section */}
        <div className="border-t-4 border-brand-primary/20 pt-24">
           <SectionTitle>{t.project.budgetTitle}</SectionTitle>
           <p className="text-lg text-slate-600 mb-12 max-w-3xl font-sans font-bold">{t.project.budgetDesc}</p>

           <div className="grid lg:grid-cols-3 gap-8">
              <div className="p-6 md:p-8 border-4 border-brand-primary rounded-[24px] md:rounded-[3xl] bg-white shadow-sm transform md:rotate-[-1deg]">
                 <h4 className="text-[14px] font-sans uppercase tracking-widest font-bold mb-4 text-brand-tertiary">{t.project.stage1Title}</h4>
                 <p className="font-display text-3xl md:text-4xl text-slate-800 mb-4 drop-shadow-sm">{t.project.stage1Subtitle}</p>
                 <p className="text-slate-600 mb-6 flex-grow font-sans font-bold text-sm md:text-base">{t.project.stage1Desc}</p>
                 <div className="pt-6 border-t-2 border-brand-primary/20 font-display text-2xl md:text-3xl text-brand-primary">1.050.000 €</div>
              </div>
              <div className="p-6 md:p-8 border-4 border-brand-secondary rounded-[24px] md:rounded-[3xl] bg-white shadow-sm transform md:rotate-[1deg]">
                 <h4 className="text-[14px] font-sans uppercase tracking-widest font-bold mb-4 text-brand-tertiary">{t.project.stage2Title}</h4>
                 <p className="font-display text-3xl md:text-4xl text-slate-800 mb-4 drop-shadow-sm">{t.project.stage2Subtitle}</p>
                 <p className="text-slate-600 mb-6 flex-grow font-sans font-bold text-sm md:text-base">{t.project.stage2Desc}</p>
                 <div className="pt-6 border-t-2 border-brand-secondary/20 font-display text-2xl md:text-3xl text-brand-secondary">195.000 €</div>
              </div>
              <div className="p-6 md:p-8 border-4 border-brand-tertiary rounded-[24px] md:rounded-[3xl] bg-white shadow-sm transform md:rotate-[-1deg]">
                 <h4 className="text-[14px] font-sans uppercase tracking-widest font-bold mb-4 text-brand-primary">{t.project.stage3Title}</h4>
                 <p className="font-display text-3xl md:text-4xl text-slate-800 mb-4 drop-shadow-sm">{t.project.stage3Subtitle}</p>
                 <p className="text-slate-600 mb-6 flex-grow font-sans font-bold text-sm md:text-base">{t.project.stage3Desc}</p>
                 <div className="pt-6 border-t-2 border-brand-tertiary/20 font-display text-2xl md:text-3xl text-brand-tertiary">247.000 €</div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
