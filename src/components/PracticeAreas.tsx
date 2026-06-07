import * as Icons from "lucide-react";
import { PRACTICE_AREAS } from "../data";

interface PracticeAreasProps {
  onSelectArea: (areaId: string) => void;
}

export default function PracticeAreas({ onSelectArea }: PracticeAreasProps) {
  return (
    <section id="atuacao" className="py-16 sm:py-24 bg-[#0A0A0B] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#C5A059] mb-2">
            ESPECIALIDADES TÉCNICAS
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white animate-fade-in">
            Áreas de Atuação
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed font-sans">
            Atendimento jurídico em diferentes áreas do Direito, sempre com foco em orientação
            responsável, análise técnica e segurança jurídica.
          </p>
        </div>

        {/* 6 Grid Practice Cards / Bento Grid Cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 hover:cursor-default">
          {PRACTICE_AREAS.map((area) => {
            // Dynamically load icon
            const IconComponent = (Icons as any)[area.iconName] || Icons.Scale;

            return (
              <div
                key={area.id}
                id={`area-card-${area.id}`}
                className="bg-[#151518] hover:bg-[#1a1a1f] rounded-xl border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl group"
              >
                <div>
                  {/* Top line Icon + Title */}
                  <div className="flex items-center gap-x-4 mb-5">
                    <div className="p-3 rounded-lg bg-gold-400/5 text-[#C5A059] border border-gold-400/10">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-white leading-tight group-hover:text-gold-400 transition-colors">
                      {area.title}
                    </h3>
                  </div>

                  {/* Summary context */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-6 font-sans">
                    {area.description}
                  </p>

                  {/* Topics points lists */}
                  <div className="border-t border-white/5 pt-5 mb-8">
                    <h4 className="text-[10px] uppercase tracking-wider font-semibold text-gold-400/60 mb-3 font-mono">
                      Demandas Frequentes:
                    </h4>
                    <ul className="space-y-2">
                      {area.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-x-2 text-xs text-slate-300 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Selective Trigger */}
                <div>
                  <button
                    onClick={() => onSelectArea(area.id)}
                    className="w-full text-center bg-transparent hover:bg-[#C5A059] hover:text-[#0A0A0B] border border-gold-400/20 hover:border-gold-400 text-xs text-gold-400 font-bold py-3 rounded-sm transition-all duration-350 uppercase tracking-widest font-mono cursor-pointer"
                  >
                    Solicitar orientação
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
