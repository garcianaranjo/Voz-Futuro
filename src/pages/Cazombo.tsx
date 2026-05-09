import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from '../components/SectionTitle';

export default function Cazombo() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col bg-brand-light text-slate-800 min-h-screen pt-12 md:pt-24 pb-32 overflow-hidden relative">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-24 items-stretch">
          <div className="flex flex-col justify-center">
            <span className="text-[16px] font-sans uppercase tracking-[0.2em] text-brand-primary font-black mb-4 block">{t.cazombo.geoTag}</span>
            <SectionTitle>{t.cazombo.title}</SectionTitle>
            <div className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border-4 border-brand-primary/20 shadow-xl transform rotate-[-1deg]">
              <p className="text-lg md:text-xl leading-relaxed font-sans font-bold pb-2 mb-6 text-slate-700">
                {t.cazombo.content}
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-sans font-bold pb-2">
                {t.cazombo.content2}
              </p>
            </div>
          </div>
          <div className="h-full min-h-[300px] rounded-[40px] md:rounded-[60px] overflow-hidden border-8 border-brand-tertiary group shadow-2xl transform md:rotate-[3deg] hover:rotate-0 transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800" 
              alt="Niñas africanas" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12">
          {[
            { label: t.cazombo.stats.outOfSchool, val: t.cazombo.stats.outOfSchool, sub: t.cazombo.stats.outOfSchoolSub, color: 'text-brand-primary', borderColor: 'border-brand-primary', rotate: 'rotate-2' },
            { label: t.cazombo.stats.illiteracy, val: t.cazombo.stats.illiteracy, sub: t.cazombo.stats.illiteracySub, color: 'text-brand-tertiary', borderColor: 'border-brand-tertiary', rotate: '-rotate-2' },
            { label: t.cazombo.stats.poverty, val: t.cazombo.stats.poverty, sub: t.cazombo.stats.povertySub, color: 'text-brand-secondary', borderColor: 'border-brand-secondary', rotate: 'rotate-1' },
          ].map((stat, idx) => (
            <div key={idx} className={`p-8 md:p-10 bg-white rounded-[32px] md:rounded-[40px] border-4 ${stat.borderColor} shadow-lg text-center transform hover:-translate-y-4 transition-transform duration-300 ${stat.rotate}`}>
              <div className={`text-6xl md:text-8xl font-display mb-4 drop-shadow-md ${stat.color}`}>{stat.val}</div>
              <div className="text-sm md:text-[16px] font-sans font-bold text-slate-600">{stat.sub}</div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
