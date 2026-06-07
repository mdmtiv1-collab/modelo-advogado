import { Scale, Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";
import { LAWYER_INFO, PRACTICE_AREAS } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-[#070708] text-white border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo Brand / Bio description */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="space-y-1">
              <span className="font-serif text-lg font-bold tracking-tight text-white flex items-center gap-2">
                <Scale size={18} className="text-[#C5A059]" />
                AUGUSTO ALMEIDA
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C5A059] font-semibold block">
                {LAWYER_INFO.oab}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-sans font-normal leading-relaxed">
              Atuação jurídica individualizada com foco em clareza, ética e segurança jurídica.
              Assessoria consultiva, preventiva e representação em contencioso de alta responsabilidade.
            </p>
          </div>

          {/* Quick Shortcuts Links */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-400">
              Menu Rápido
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#atuacao" className="text-slate-400 hover:text-white transition-colors">Atuar</a>
              </li>
              <li>
                <a href="#sobre" className="text-slate-400 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#atendimento" className="text-slate-400 hover:text-white transition-colors">Atendimento</a>
              </li>
              <li>
                <a href="#duvidas" className="text-slate-400 hover:text-white transition-colors">Dúvidas</a>
              </li>
            </ul>
          </div>

          {/* Specialties anchor highlights */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-400">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {PRACTICE_AREAS.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <a href="#atuacao" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                    <span>•</span> {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and address metadata */}
          <div className="lg:col-span-3 text-left space-y-4 text-xs font-normal">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-400">
              Contatos & Horário
            </h4>
            <ul className="space-y-3 text-slate-400 font-sans">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-gold-400" />
                <span>{LAWYER_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-gold-400" />
                <span>{LAWYER_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={13} className="text-gold-400" />
                <span>@{LAWYER_INFO.instagram}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-gold-400 mt-0.5 shrink-0" />
                <span>{LAWYER_INFO.officeAddress}, {LAWYER_INFO.addressDetails}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={13} className="text-gold-400" />
                <span>Segunda a Sexta — 09h às 18h</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Ethical disclaimer required by OAB regulations */}
          <div className="max-w-3xl text-left space-y-2">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest font-mono">
              AVISO JURÍDICO ÉTICO COMPLIANCE
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed font-sans font-normal">
              As informações dispostas neste website têm caráter puramente informativo e educacional, não
              constituindo aconselhamento jurídico formal ou consulta contratada. Qualquer opinião técnica ou
              procedimento citado não substitui uma análise profissional individualizada e direta de cada caso. A
              atuação profissional observa rigorosamente as normas éticas e estatutos da Ordem dos Advogados do
              Brasil (OAB) e não envolve sob nenhuma hipótese promessa ou garantia infundada de resultado.
            </p>
          </div>

          {/* Small Copyright line */}
          <div className="shrink-0 text-[11px] text-slate-500 font-mono text-left md:text-right">
            <p>© {currentYear} {LAWYER_INFO.name}.</p>
            <p>Todos os direitos reservados.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
