import * as Icons from "lucide-react";
import { MOODS_AND_POSITIONING, POSITION_CARDS } from "../data";

export default function Positioning() {
  return (
    <section id="posicionamento" className="py-16 sm:py-24 bg-[#0A0A0B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading Wrapper */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
          <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-gold-400 mb-2">
            NOSSOS COMPROMISSOS DE CONDUTA
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4 animate-fade-in">
            {MOODS_AND_POSITIONING.title}
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A059] my-4" />
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans font-normal text-center">
            {MOODS_AND_POSITIONING.subtitle}
          </p>
        </div>

        {/* 3 Grid positioning cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {POSITION_CARDS.map((card, idx) => {
            // Dynamically resolve icon if it exists, default to Shield
            const IconComponent = (Icons as any)[card.iconName] || Icons.Shield;

            return (
              <div
                key={card.id}
                id={`pos-card-${card.id}`}
                className="group relative flex flex-col p-6 sm:p-8 bg-[#151518] hover:bg-[#1a1a1f] border border-gold-400/10 hover:border-gold-400/30 rounded-xl transition-all duration-300 shadow-2xl"
              >
                {/* Accent subtle bar top */}
                <span className="absolute top-0 inset-x-0 h-[2px] bg-transparent group-hover:bg-[#C5A059] rounded-t-xl transition-all" />
                
                {/* Number Badge in mono */}
                <span className="font-mono text-xs text-[#C5A059] font-bold mb-4 block">
                  0{idx + 1}
                </span>

                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gold-400/5 text-[#C5A059] w-11 h-11 mb-5 border border-gold-400/10 group-hover:border-gold-400/30 transition-all">
                  <IconComponent size={18} className="group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-serif text-lg font-semibold text-white mb-2.5 transition-colors group-hover:text-gold-400">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-normal">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
