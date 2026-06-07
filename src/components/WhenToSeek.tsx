import { HelpCircle, ArrowUpRight } from "lucide-react";
import { WHEN_TO_SEEK } from "../data";

export default function WhenToSeek() {
  return (
    <section id="prevencao-quando" className="py-16 sm:py-24 bg-[#0A0A0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content centered and optimized */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
          <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#C5A059] mb-2 font-bold">
            PAPEL DA PREVENÇÃO JURÍDICA
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white text-center">
            {WHEN_TO_SEEK.title}
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A059] my-4 mx-auto" />
          <p className="text-xs sm:text-sm md:text-base text-slate-400 font-normal leading-relaxed font-sans text-center">
            {WHEN_TO_SEEK.description}
          </p>
        </div>

        {/* Dynamic Items Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHEN_TO_SEEK.items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#151518] hover:bg-[#1a1a1f] p-5 sm:p-6 rounded-xl border border-gold-400/10 hover:border-gold-400/30 transition-all duration-305 flex items-start gap-4 shadow-xl"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded bg-gold-400/10 text-gold-400 border border-gold-400/15 font-mono text-xs font-bold shrink-0 mt-0.5">
                0{idx + 1}
              </div>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug font-sans">
                  {item.text}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-gold-400 font-medium font-mono uppercase tracking-wider">
                  <span className="hover:underline">Análise recomendada</span>
                  <ArrowUpRight size={10} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
