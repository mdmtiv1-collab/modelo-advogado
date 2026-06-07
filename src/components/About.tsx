import { Check } from "lucide-react";
import { LAWYER_INFO } from "../data";

export default function About() {
  const imagePath = "/src/assets/images/lawyer_augusto_1780842109621.png";

  const differentials = [
    "Atendimento individualizado (sem intermediários)",
    "Análise cuidadosa e parecer técnico de cada situação",
    "Linguagem clara e objetiva (zero juridiquês desnecessário)",
    "Atuação tanto preventiva quanto contenciosa",
    "Compromisso estrito com a ética e sigilo profissional",
    "Acompanhamento próximo com atualizações frequentes",
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          
          {/* Column Left: Visual Layer Frame with Secondary Portrait Details */}
          <div className="lg:col-span-5 order-last lg:order-first">
            <div className="relative max-w-[325px] sm:max-w-[360px] mx-auto lg:mx-0">
              {/* Back background shadow box */}
              <div className="absolute inset-x-0 bottom-0 h-[85%] bg-bento-card rounded-2xl border border-gold-400/10" />
              
              <div className="relative p-3 z-10 block">
                <img
                  src={imagePath}
                  alt={LAWYER_INFO.name}
                  className="rounded-xl object-cover shadow-2xl border border-gold-400/15 w-full h-auto aspect-square lg:aspect-auto lg:max-h-[420px] grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  width={360}
                  height={420}
                  loading="lazy"
                  draggable="false"
                />
                
                {/* Embedded Credential Card */}
                <div className="mt-4 bg-[#151518] p-4 rounded-lg border border-gold-400/15 shadow-sm">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-[#C5A059] block mb-1">
                    Credencial Oficial
                  </span>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-serif font-semibold text-white">Conselho Federal da OAB</span>
                    <span className="font-mono text-[11px] font-bold text-gold-400 bg-gold-400/10 border border-gold-400/20 px-2 py-0.5 rounded">
                      REG. {LAWYER_INFO.oab.split(" ")[1]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Muted background geometry lines */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#C5A059]/30" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#C5A059]/30" />
            </div>
          </div>

          {/* Column Right: Profile Bio copywriting */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start w-full">
              <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#C5A059] mb-2 font-bold">
                O PROFISSIONAL
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white animate-fade-in text-center lg:text-left">
                Sobre o advogado
              </h2>
              <div className="w-12 h-[2px] bg-gold-400 mt-4 mx-auto lg:mx-0" />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed font-sans text-center lg:text-left max-w-xl">
              <p>
                <strong>{LAWYER_INFO.name}</strong> atua com foco em oferecer uma advocacia próxima,
                técnica e altamente responsável. Seu trabalho é inteiramente pautado pelo rigor ético,
                pela escuta atenta das necessidades do cliente e pela comunicação clara.
              </p>
              <p>
                Seu objetivo primordial é guiar e orientar cada cliente de forma individualizada e
                segura. A atuação profissional valoriza a análise cuidadosa e prévia de cada situação,
                o respeito irrestrito ao sigilo e a transparência absoluta em todas as etapas
                do atendimento jurídico.
              </p>
            </div>

            {/* List of custom differentials */}
            <div className="pt-6 border-t border-white/5">
              <h3 className="font-serif text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Diferenciais da Atuação
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {differentials.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                    <div className="p-1 rounded bg-[#C5A059]/10 text-[#C5A059] mt-0.5 border border-[#C5A059]/20 shrink-0">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
