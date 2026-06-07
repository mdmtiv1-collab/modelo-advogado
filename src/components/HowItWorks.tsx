import { STEP_ITEMS } from "../data";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#0A0A0B] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section info */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#C5A059] mb-2">
            ETAPAS DE ATENDIMENTO TRANSPARENTE
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
            Como funciona o atendimento
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
          <p className="text-sm sm:text-base text-slate-400 font-normal font-sans">
            Conheça o passo a passo simplificado para receber orientação jurídica personalizada e segura.
          </p>
        </div>

        {/* Dynamic timeline connection */}
        <div className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-[43px] left-[12%] right-[12%] h-[1px] bg-gold-400/10 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEP_ITEMS.map((item) => (
              <div
                key={item.number}
                className="flex flex-col items-center text-center space-y-5 group bg-[#151518] hover:bg-[#1a1a1f] rounded-xl p-6 border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300 shadow-2xl"
              >
                {/* Step Circle indicator */}
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold-400/10 border-4 border-[#151518] text-gold-400 font-mono text-sm font-bold shadow-lg transition-transform duration-300 group-hover:scale-110">
                  0{item.number}
                  {/* Subtle outer amber outline indicator */}
                  <span className="absolute -inset-1.5 rounded-full border border-gold-400/20" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
