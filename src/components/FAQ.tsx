import { useState } from "react";
import { Search, ChevronDown, ChevronUp, AlertCircle, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Derive unique categories including "Todos"
  const categories = ["Todos", "Geral", "Atendimento", "Honorários", "Ética"];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter items matching query and category
  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "Todos" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-[#0A0A0B] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#C5A059] mb-2">
            ESCLARECIMENTOS PRELIMINARES
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white animate-fade-in">
            Dúvidas frequentes
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
          <p className="text-sm text-slate-400 font-normal font-sans">
            Encontre respostas diretas sobre o funcionamento do atendimento, ética profissional,
            contratações e procedimentos processuais.
          </p>
        </div>

        {/* Dynamic Search & Filters Tool Belt */}
        <div className="mb-10 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Digite uma palavra-chave para buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-[#151518] hover:bg-[#1a1a1f] focus:bg-[#151518] text-xs sm:text-sm border border-gold-400/10 focus:border-gold-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-slate-500 text-slate-100 font-sans"
            />
          </div>

          {/* Category Filter Pills / Bento Pill buttons */}
          <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setExpandedId(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all border uppercase cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#C5A059] text-[#0A0A0B] border-[#C5A059] font-bold"
                    : "bg-[#151518] text-slate-300 border-gold-400/10 hover:bg-[#1a1a1f] hover:border-gold-400/25"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion output */}
        {filteredItems.length > 0 ? (
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const isOpen = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`border rounded-lg transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-gold-400/40 bg-[#151518] shadow-2xl"
                      : "border-gold-400/10 bg-[#151518] hover:border-gold-400/25"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif text-sm sm:text-base font-semibold text-white pr-4 flex items-center gap-2">
                      <HelpCircle size={15} className="text-gold-400 shrink-0 opacity-80" />
                      {item.question}
                    </span>
                    <span className="shrink-0 text-slate-400">
                      {isOpen ? <ChevronUp size={16} className="text-[#C5A059]" /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-[#151518] font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#151518] rounded-xl border border-dashed border-gold-400/15 space-y-3">
            <AlertCircle size={24} className="text-gold-400/50 mx-auto" />
            <p className="text-sm font-medium text-slate-300 font-sans">Nenhuma pergunta encontrada para sua busca.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Todos");
              }}
              className="text-xs text-[#C5A059] font-semibold underline hover:text-gold-500 cursor-pointer font-sans"
            >
              Limpar filtros e buscar novamente
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
