import { MessageSquare, ShieldCheck, Layers, Award } from "lucide-react";
import { CONFIDENCE_BLOCKS } from "../data";

export default function TrustFactors() {
  const icons = [
    <MessageSquare className="text-gold-400" size={18} />,
    <ShieldCheck className="text-gold-400" size={18} />,
    <Layers className="text-gold-400" size={18} />,
    <Award className="text-gold-400" size={18} />
  ];

  return (
    <section id="confianca" className="py-16 sm:py-24 bg-[#0A0A0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-gold-400 mb-2">
            NOSSOS PRINCÍPIOS DE CONFIANÇA
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
            Um atendimento jurídico mais claro, próximo e responsável.
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
          <p className="text-sm sm:text-base text-slate-400 font-normal font-sans">
            O objetivo do atendimento é oferecer ao cliente uma visão clara sobre sua situação real,
            evitando termos excessivamente técnicos e explicando cada etapa com estrita objetividade.
          </p>
        </div>

        {/* 4 Pillars blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CONFIDENCE_BLOCKS.map((block, idx) => (
            <div
              key={idx}
              className="bg-[#151518] p-6 rounded-xl border border-gold-400/10 hover:border-gold-400/30 hover:bg-[#1a1a1f] transition-all duration-300 flex flex-col items-center text-center gap-5 shadow-2xl group"
            >
              <div className="p-3 rounded-lg bg-gold-400/5 border border-gold-400/10 shrink-0 mx-auto">
                {icons[idx] || icons[0]}
              </div>

              <div className="space-y-2 text-center">
                <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-400 transition-colors text-center">
                  {block.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal font-sans text-center">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
