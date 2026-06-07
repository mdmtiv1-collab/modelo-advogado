import { Shield, Users, Clock, ArrowRight, MessageSquare } from "lucide-react";
import { LAWYER_INFO } from "../data";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${LAWYER_INFO.whatsapp}?text=${encodeURIComponent(
    "Olá, vim pelo site e gostaria de mais informações sobre atendimento jurídico."
  )}`;

  // Correct generated image reference
  const imagePath = "/src/assets/images/lawyer_augusto_1780842109621.png";

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 sm:pt-32 md:pt-36 pb-16 flex items-center overflow-hidden bg-[#0A0A0B]"
    >
      {/* Background soft lighting lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-gold-400/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-gold-400/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          
          {/* Column Left: Text Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            
            {/* Simple Ethics Badge Indicator */}
            <div className="inline-flex items-center gap-1.5 bg-[#151518] border border-gold-400/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 font-bold">
                Assessoria Jurídica Individualizada • {LAWYER_INFO.oab}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[45px] xl:text-[50px] font-medium text-white leading-[1.12] tracking-tight text-center lg:text-left">
              Assessoria jurídica personalizada para proteger seus direitos com{" "}
              <span className="text-[#C5A059] italic font-normal">
                clareza
              </span>{" "}
              e segurança.
            </h1>

            {/* Subheadline description */}
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl font-sans mx-auto lg:mx-0 text-center lg:text-left">
              Atendimento jurídico individualizado para quem busca orientação técnica,
              comunicação transparente e atuação responsável em cada etapa do processo.
            </p>

            {/* CTAs Button Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <a
                id="hero-cta-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#C5A059] hover:bg-gold-550 text-[#0A0A0B] text-xs sm:text-sm font-bold uppercase tracking-widest py-4 px-8 rounded-sm shadow-md hover:shadow-gold-400/10 transition-all duration-200"
              >
                <MessageSquare size={16} />
                <span>Falar com o advogado</span>
              </a>
              
              <a
                id="hero-cta-atuacao"
                href="#atuacao"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white text-xs sm:text-sm font-bold uppercase tracking-widest py-4 px-8 rounded-sm transition-all duration-150"
              >
                <span>Conhecer atuação</span>
                <ArrowRight size={14} className="text-slate-400" />
              </a>
            </div>

            {/* Badges and Subtexts wrapped in structural sub-bento row */}
            <div className="pt-6 sm:pt-8 border-t border-white/5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                  <div className="p-2 rounded bg-gold-400/10 text-gold-400 border border-gold-400/15 shrink-0">
                    <Shield size={14} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-semibold text-white">
                      Atendimento presencial & online
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Seguro e focado na sua conveniência
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                  <div className="p-2 rounded bg-gold-400/10 text-gold-400 border border-gold-400/15 shrink-0">
                    <Users size={14} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-semibold text-white">
                      Orientação jurídica dirigida
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Direto com o especialista indicado
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                  <div className="p-2 rounded bg-gold-400/10 text-gold-400 border border-gold-400/15 shrink-0">
                    <Clock size={14} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-semibold text-white">
                      Acompanhamento transparente
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Sem burocracias ou linguagem obscura
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Column Right: Elegant Portrait Mask aligned to Bento Spec */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[320px] sm:max-w-[360px] lg:max-w-none w-full">
              
              {/* Gold backing accent frame */}
              <div className="absolute inset-0 bg-gold-400/5 rounded-2xl transform translate-x-3 translate-y-3 -rotate-1 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 pointer-events-none" />
              
              {/* Masked Portrait Container styled exactly like a bento card */}
              <div 
                className="relative overflow-hidden bg-[#1c1c21] border border-gold-400/15 rounded-2xl shadow-2xl z-10 transition-transform duration-300 h-full w-full" 
                id="hero-avatar-container"
              >
                {/* Subtle dark gradient overlay to give cinematic contrast to background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent z-10 opacity-70" />

                <img
                  src={imagePath}
                  alt="Dr. Augusto Almeida - Advogado Autônomo"
                  className="w-full h-auto object-cover max-h-[460px] grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
                  id="hero-avatar"
                  referrerPolicy="no-referrer"
                  width={360}
                  height={460}
                  fetchPriority="high"
                  draggable="false"
                />
                
                {/* Floating Micro-badge for OAB validity inside dark container */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#151518]/90 backdrop-blur-md px-5 py-3.5 rounded-xl border border-gold-400/20 flex items-center justify-between z-20">
                  <div>
                    <p className="font-serif text-sm text-white font-medium">{LAWYER_INFO.name}</p>
                    <p className="text-[10px] text-gold-400 font-mono tracking-wider mt-0.5">{LAWYER_INFO.oab}</p>
                  </div>
                  <span className="font-mono text-[9px] text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/20 px-2 py-0.5 rounded-sm uppercase font-bold tracking-widest">
                    Regular
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
