import { useState, useEffect } from "react";
import { MessageSquare, Shield, Check, Copy, ExternalLink, RefreshCw } from "lucide-react";
import { LAWYER_INFO, PRACTICE_AREAS } from "../data";

interface FinalCTAProps {
  selectedAreaId: string;
}

export default function FinalCTA({ selectedAreaId }: FinalCTAProps) {
  const [area, setArea] = useState("area-civil");
  const [subtopic, setSubtopic] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientBrief, setClientBrief] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync state if selectedAreaId changes from the parent click ("Solicitar orientação")
  useEffect(() => {
    if (selectedAreaId) {
      setArea(selectedAreaId);
      const matched = PRACTICE_AREAS.find(a => a.id === selectedAreaId);
      if (matched && matched.topics.length > 0) {
        setSubtopic(matched.topics[0]);
      }
    }
  }, [selectedAreaId]);

  // Look up topics of current active area
  const currentAreaObject = PRACTICE_AREAS.find((a) => a.id === area) || PRACTICE_AREAS[0];
  const topicsList = currentAreaObject.topics;

  // Sync subtopic if active area changes
  useEffect(() => {
    if (topicsList && topicsList.length > 0 && !topicsList.includes(subtopic)) {
      setSubtopic(topicsList[0]);
    }
  }, [area, topicsList]);

  // Auto-generate preview text dynamically based on variables
  useEffect(() => {
    const space = " ";
    const areaName = currentAreaObject.title;
    const greeting = clientName ? `Prezado Dr. Augusto, me chamo ${clientName}.` : "Prezado Dr. Augusto,";
    const context = clientBrief.trim()
      ? `\n\nResumo da minha situação:\n"${clientBrief.trim()}"`
      : "";
    
    const text = `${greeting} Gostaria de solicitar uma orientação técnica inicial na área de **${areaName}** (tema específico: ${subtopic || "consulta geral"}).${context}\n\nPor gentileza, gostaria de entender a viabilidade de agendamento e quais documentos preliminares devo providenciar para uma avaliação.`;
    
    setGeneratedText(text);
  }, [area, subtopic, clientName, clientBrief, currentAreaObject]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText.replace(/\*\*/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cleanWhatsappText = encodeURIComponent(generatedText.replace(/\*\*/g, ""));
  const whatsappUrl = `https://wa.me/${LAWYER_INFO.whatsapp}?text=${cleanWhatsappText}`;

  const handleReset = () => {
    setArea("area-civil");
    setClientName("");
    setClientBrief("");
    if (PRACTICE_AREAS[0].topics.length > 0) {
      setSubtopic(PRACTICE_AREAS[0].topics[0]);
    }
  };

  return (
    <section
      id="contato-planejado"
      className="py-16 sm:py-24 bg-[#0A0A0B] text-white relative overflow-hidden border-t border-white/5"
    >
      {/* Elegance gold halo backgrounds */}
      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-25%] left-[-15%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div id="cta-main-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left: High-fidelity visual copy */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6 sm:space-y-8 lg:sticky lg:top-24 flex flex-col items-center lg:items-start">
            <div className="space-y-3 flex flex-col items-center lg:items-start w-full">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">
                ATENDIMENTO DIRETO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-center lg:text-left">
                Precisa de orientação jurídica?
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans font-normal">
              Entre em contato para receber uma análise técnica preliminar da sua situation e entender
              cuidadosamente quais caminhos jurídicos legítimos podem ser avaliados com total segurança.
            </p>

            {/* Ethically reassuring indicators */}
            <div className="space-y-3 pt-6 border-t border-white/5 w-full">
              <div className="flex gap-x-3 items-center justify-center lg:justify-start text-xs text-slate-300 text-center lg:text-left">
                <Check className="text-gold-400 shrink-0" size={15} />
                <span>Atendimento resguardado por sigilo profissional perpétuo</span>
              </div>
              <div className="flex gap-x-3 items-center justify-center lg:justify-start text-xs text-slate-300 text-center lg:text-left">
                <Check className="text-gold-400 shrink-0" size={15} />
                <span>Análise de viabilidade objetiva de acordo com a lei</span>
              </div>
              <div className="flex gap-x-3 items-center justify-center lg:justify-start text-xs text-slate-300 text-center lg:text-left">
                <Check className="text-gold-400 shrink-0" size={15} />
                <span>Observância estrita ao Código de Ética e Disciplina da OAB</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 italic text-center lg:text-left w-full">
              *As informações compartilhadas têm caráter reservado e são protegidas por leis de sigilo advogado-cliente.
            </div>
          </div>

          {/* Column Right: Dynamic consultation planner widget */}
          <div className="lg:col-span-7 bg-[#151518] border border-gold-400/20 p-6 sm:p-8 rounded-2xl shadow-2xl relative">
            <div className="space-y-6">
              
              {/* Header inside planner */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Shield size={16} className="text-gold-400" />
                    Planejador de Consulta
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Prepare previamente o formato da sua demanda
                  </p>
                </div>
                
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-[#C5A059] text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  title="Limpar formulário"
                >
                  <RefreshCw size={10} />
                  Limpar
                </button>
              </div>

              {/* Form Grid elements */}
              <div id="planner-form-body" className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                
                {/* Full name input */}
                <div className="sm:col-span-2 space-y-1.5 text-left">
                  <label htmlFor="client-name" className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider font-mono">
                    Seu Nome Completo (Opcional):
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Carlos Silva"
                    className="w-full bg-[#0A0A0B] border border-gold-400/15 focus:border-gold-400 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all text-xs text-white"
                  />
                </div>

                {/* Main area selective */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="field-area" className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider font-mono">
                    Área do Direito:
                  </label>
                  <select
                    id="field-area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-[#0A0A0B] border border-gold-400/15 focus:border-gold-400 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all text-xs text-white cursor-pointer"
                  >
                    {PRACTICE_AREAS.map((a) => (
                      <option key={a.id} value={a.id} className="bg-[#151518] text-white">
                        {a.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subtopic topics selective */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="field-subtopic" className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider font-mono">
                    Tema do conflito/dúvida:
                  </label>
                  <select
                    id="field-subtopic"
                    value={subtopic}
                    onChange={(e) => setSubtopic(e.target.value)}
                    className="w-full bg-[#0A0A0B] border border-gold-400/15 focus:border-gold-400 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all text-xs text-white cursor-pointer"
                  >
                    {topicsList.map((t) => (
                      <option key={t} value={t} className="bg-[#151518] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional briefing input summary */}
                <div className="sm:col-span-2 space-y-1.5 text-left">
                  <label htmlFor="client-brief" className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider font-mono">
                    Descreva brevemente em 1 ou 2 frases (opcional):
                  </label>
                  <textarea
                    id="client-brief"
                    rows={2}
                    maxLength={150}
                    value={clientBrief}
                    onChange={(e) => setClientBrief(e.target.value)}
                    placeholder="Ex: Preciso revisar cláusulas de um contrato de aluguel residencial que recebi."
                    className="w-full bg-[#0A0A0B] border border-gold-400/15 focus:border-gold-400 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all text-xs text-white resize-none font-sans"
                  />
                  <div className="text-right text-[10px] text-slate-500 font-mono">
                    {clientBrief.length}/150 caracteres
                  </div>
                </div>

              </div>

              {/* Message Auto-Preview screen container */}
              <div className="bg-[#0A0A0B] p-4 rounded-lg border border-gold-400/15 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-[#C5A059]">
                    Texto que será enviado pelo WhatsApp:
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-[10px] text-[#C5A059] hover:text-gold-400 flex items-center gap-1 transition-colors cursor-pointer"
                    title="Copiar texto para área de transferência"
                  >
                    {copied ? (
                      <>
                        <Check size={11} className="text-emerald-400" />
                        <span className="text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>Copiar mensagem</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Dynamic Message panel */}
                <div className="text-[11px] sm:text-xs text-slate-200 leading-relaxed font-sans bg-[#0A0A0B] italic p-1 select-all border-l-2 border-gold-400/50 pl-3 whitespace-pre-wrap text-left">
                  {generatedText}
                </div>
              </div>

              {/* Action trigger button */}
              <div className="space-y-4">
                <a
                  id="planner-redirect-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#C5A059] hover:bg-gold-500 text-[#0A0A0B] font-bold text-xs py-4 rounded-sm transition-all uppercase tracking-widest font-mono shadow-md hover:shadow-gold-400/10"
                >
                  <MessageSquare size={14} />
                  <span>Enviar pelo WhatsApp Oficial</span>
                  <ExternalLink size={11} className="opacity-70" />
                </a>

                <p className="text-[10px] text-slate-500 text-center">
                  Atendimento com confidencialidade, ética e responsabilidade profissional.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
