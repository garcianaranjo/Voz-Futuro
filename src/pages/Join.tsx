import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from '../components/SectionTitle';

export default function Join() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-24 pb-32">
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <span className="text-[14px] font-sans uppercase tracking-[0.2em] text-brand-primary font-bold mb-6 block">{t.participation.entryTag}</span>
            <SectionTitle>{t.participation.title}</SectionTitle>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-sans font-bold mb-12">
              {t.participation.intro}
            </p>

            <div className="space-y-12">
              {[
                { label: t.participation.donate, desc: t.participation.donateDesc, color: 'brand-primary' },
                { label: t.participation.sponsorshipTitle, desc: t.participation.sponsorshipDesc, color: 'brand-secondary' },
                { label: t.participation.volunteer, desc: t.participation.volunteerDesc, color: 'brand-tertiary' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 md:gap-8 group items-start">
                  <div className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-${item.color} rounded-full flex items-center justify-center font-display text-2xl md:text-3xl text-white shadow-sm transform group-hover:scale-110 group-hover:rotate-[15deg] transition-all`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className={`text-xl md:text-2xl font-display mb-2 text-${item.color}`}>{item.label}</h4>
                    <p className="font-sans font-bold text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-4 border-brand-primary/20 p-6 md:p-12 bg-white rounded-[32px] md:rounded-[40px] relative shadow-lg transform md:rotate-[1deg] mt-12 lg:mt-0">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-tertiary/20 -z-10 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-primary/20 -z-10 rounded-full blur-xl" />
            <h3 className="text-3xl md:text-4xl font-display mb-8 text-center text-brand-primary drop-shadow-sm">{t.participation.contactTitle}</h3>
            <p className="text-center font-sans font-bold text-slate-500 text-xs md:text-sm mb-8">{t.participation.bankInfo}</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] md:text-[12px] font-sans font-bold uppercase tracking-widest mb-2 text-brand-secondary">{t.participation.formName}</label>
                <input type="text" className="w-full py-3 md:py-4 px-6 border-2 border-slate-200 rounded-full focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20 outline-none bg-slate-50 font-sans font-bold text-base md:text-lg text-slate-800 transition-all" />
              </div>
              <div>
                <label className="block text-[10px] md:text-[12px] font-sans font-bold uppercase tracking-widest mb-2 text-brand-secondary">{t.participation.formEmail}</label>
                <input type="email" className="w-full py-3 md:py-4 px-6 border-2 border-slate-200 rounded-full focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20 outline-none bg-slate-50 font-sans font-bold text-base md:text-lg text-slate-800 transition-all" />
              </div>
              <div>
                <label className="block text-[10px] md:text-[12px] font-sans font-bold uppercase tracking-widest mb-2 text-brand-secondary">{t.participation.formMessage}</label>
                <textarea rows={3} className="w-full py-3 md:py-4 px-6 border-2 border-slate-200 rounded-2xl md:rounded-3xl focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20 outline-none bg-slate-50 font-sans font-bold text-base md:text-lg text-slate-800 transition-all resize-none" />
              </div>
              <button className="mt-8 bg-brand-tertiary text-white font-sans font-bold text-[14px] md:text-[16px] uppercase tracking-wider py-4 px-8 rounded-full hover:bg-brand-primary hover:scale-105 transition-all w-full shadow-md">
                {t.participation.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
