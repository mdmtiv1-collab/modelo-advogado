import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LAWYER_INFO } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${LAWYER_INFO.whatsapp}?text=${encodeURIComponent(
    "Olá, vim pelo site e gostaria de mais informações sobre atendimento jurídico."
  )}`;

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Sobre", href: "#sobre" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/95 backdrop-blur-md shadow-lg border-b border-gold-400/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            id="header-brand"
            href="#inicio"
            className="flex items-center gap-3 focus:ring-1 focus:ring-gold-400 p-1 rounded-sm"
          >
            <div className="w-8 h-8 flex items-center justify-center border border-gold-400 rounded-sm shrink-0">
              <span className="text-gold-400 font-serif text-base font-bold">A</span>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-md sm:text-lg font-bold tracking-tight text-white">
                Dr. Augusto Almeida
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-gold-400/80 font-medium">
                {LAWYER_INFO.oab}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] uppercase font-mono tracking-widest text-slate-300 hover:text-gold-400 transition-colors py-1 border-b border-transparent hover:border-gold-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Call Button */}
          <div className="hidden md:block">
            <a
              id="header-cta-desktop"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold-400 text-gold-400 text-xs uppercase tracking-widest font-mono font-bold hover:bg-gold-400 hover:text-[#0A0A0B] transition-all rounded-sm"
            >
              <Phone size={12} className="shrink-0" />
              <span>Falar com o advogado</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-gold-400 transition-colors focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={22} className="text-gold-400" /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Drawer */}
      <div
        id="mobile-drawer"
        className={`md:hidden fixed inset-x-0 top-[60px] bg-[#151518] border-b border-gold-400/15 shadow-2xl transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-5 py-6 space-y-4 bg-[#0A0A0B]/95">
          <nav className="flex flex-col gap-y-3.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase font-mono tracking-wider text-slate-300 hover:text-gold-400 py-2 transition-colors border-l-2 border-transparent hover:border-gold-400 pl-3"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/5">
            <a
              id="header-cta-mobile"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border border-gold-400 text-gold-400 text-xs py-3 uppercase tracking-wider font-mono font-bold hover:bg-gold-400 hover:text-black transition-all rounded-sm"
            >
              <Phone size={12} className="shrink-0" />
              <span>Falar com o advogado</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
