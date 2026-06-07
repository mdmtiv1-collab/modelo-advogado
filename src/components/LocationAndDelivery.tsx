import { Globe, MapPin, Calendar, Users, EyeOff } from "lucide-react";
import { ATENDIMENTO_MODALIDADE, LAWYER_INFO } from "../data";

export default function LocationAndDelivery() {
  const bullets = ATENDIMENTO_MODALIDADE.bullets;

  // Render correct icon per item
  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("online")) return <Globe className="text-gold-400 shrink-0" size={18} />;
    if (t.includes("presencial")) return <MapPin className="text-gold-400 shrink-0" size={18} />;
    if (t.includes("horário")) return <Calendar className="text-gold-400 shrink-0" size={18} />;
    if (t.includes("humanizado")) return <Users className="text-gold-400 shrink-0" size={18} />;
    return <EyeOff className="text-gold-400 shrink-0" size={18} />;
  };

  return (
    <section id="atendimento" className="py-16 sm:py-24 bg-[#0A0A0B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: Visual location display */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#151518] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden border border-gold-400/20">
              
              {/* Background ambient shape decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl" />

              <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 font-bold block">
                  ESCRITÓRIO CENTRAL COMERCIAL
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
                  Atendimento em {LAWYER_INFO.city}
                </h3>
              </div>

              {/* Physical location details */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex gap-x-3.5">
                  <MapPin className="text-gold-400 shrink-0 mt-1" size={18} />
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-semibold text-white">{LAWYER_INFO.officeAddress}</p>
                    <p className="text-xs text-slate-400 leading-snug font-sans">{LAWYER_INFO.addressDetails}</p>
                  </div>
                </div>

                <div className="flex gap-x-3.5">
                  <Calendar className="text-gold-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs sm:text-sm text-slate-300 font-sans">
                    Atendimento presencial sob agendamento prévio.
                  </p>
                </div>
              </div>

              {/* Secure visual seal */}
              <div className="bg-[#0A0A0B] border border-gold-400/10 p-4 rounded-lg flex items-center gap-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <p className="text-[11px] text-slate-400 font-sans leading-snug">
                  Infraestrutura de videoconferência em total conformidade com o sigilo profissional da OAB.
                </p>
              </div>

            </div>
          </div>

          {/* Column Right: Copy and Bullet details */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start w-full">
              <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#C5A059] mb-2 font-bold">
                FLEXIBILIDADE DE FORMATO
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white animate-fade-in text-center lg:text-left">
                {ATENDIMENTO_MODALIDADE.title}
              </h2>
              <div className="w-12 h-[2px] bg-gold-400 mt-4 mx-auto lg:mx-0" />
            </div>

            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed font-sans text-center lg:text-left">
              {ATENDIMENTO_MODALIDADE.description}
            </p>

            {/* List columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex gap-x-3 items-start bg-[#151518] hover:bg-[#1a1a1f] p-4 rounded-xl border border-gold-400/10 hover:border-[#C5A059]/30 transition-all duration-300 group">
                  {getIcon(b.title)}
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-sm font-bold text-white group-hover:text-gold-400 transition-colors">
                      {b.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-snug font-sans">
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
