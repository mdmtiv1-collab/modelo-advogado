import * as Icons from "lucide-react";
import { CONSCIENTIZATION_CARDS } from "../data";

export default function Conscientization() {
  return (
    <section id="conscientizacao" className="py-16 sm:py-24 bg-[#0A0A0B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Column alignment - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
          <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#C5A059] mb-2 font-bold">
            CONTRAPARTIDA CORRETIVA • RISCOS
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white animate-fade-in text-center">
            A falta de orientação jurídica pode gerar prejuízos evitáveis.
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A059] my-4 mx-auto" />
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed font-sans text-center">
            Decisões tomadas sem análise técnica podem causar severas perdas financeiras, conflitos familiares ou societários prolongados, riscos processuais irrecuperáveis e insegurança patrimonial diária. Um acompanhamento jurídico adequado permite pré-avaliar cenários reais, compreender alternativas e agir com clareza.
          </p>
        </div>

        {/* 3 cards of warning layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {CONSCIENTIZATION_CARDS.map((card) => {
            const IconComponent = (Icons as any)[card.iconName] || Icons.ShieldAlert;

            return (
              <div
                key={card.id}
                className="bg-[#151518] hover:bg-[#1a1a1f] p-6 sm:p-8 rounded-xl border border-[#C5A059]/10 hover:border-red-500/30 transition-all duration-300 relative group shadow-2xl"
              >
                {/* Visual Alert bar on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-transparent group-hover:bg-red-500/80 rounded-t-xl transition-colors" />

                <div className="p-3 bg-red-500/10 text-rose-450 rounded-lg w-11 h-11 flex items-center justify-center mb-5 border border-red-500/20">
                  <IconComponent size={18} className="text-red-400" />
                </div>

                <h3 className="font-serif text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal font-sans">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner subtle */}
        <div className="p-6 md:p-8 rounded-xl bg-[#151518] border border-gold-400/20 text-center space-y-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8 shadow-2xl">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-base text-white font-medium">
              Deseja evitar esses cenários na sua vida prática?
            </h4>
            <p className="text-xs text-slate-400 font-sans">
              Converse com Dr. Augusto e compreenda o melhor caminho com absoluta segurança.
            </p>
          </div>
          <a
            href="#contato-planejado"
            className="shrink-0 bg-[#C5A059] hover:bg-gold-500 text-[#0A0A0B] text-xs font-mono uppercase tracking-widest font-bold px-6 py-3.5 rounded-sm transition-all shadow-md hover:shadow-gold-400/10"
          >
            Fale com o advogado
          </a>
        </div>

      </div>
    </section>
  );
}
