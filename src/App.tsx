import { useState } from "react";
import { MessageSquare, ArrowUp, ArrowRight } from "lucide-react";
import { LAWYER_INFO } from "./data";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import Positioning from "./components/Positioning";
import PracticeAreas from "./components/PracticeAreas";
import About from "./components/About";
import WhenToSeek from "./components/WhenToSeek";
import Conscientization from "./components/Conscientization";
import HowItWorks from "./components/HowItWorks";
import LocationAndDelivery from "./components/LocationAndDelivery";
import TrustFactors from "./components/TrustFactors";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  const [selectedAreaId, setSelectedAreaId] = useState<string>("");

  const handleSelectArea = (areaId: string) => {
    setSelectedAreaId(areaId);
    // Smooth scroll down to the interactive contact builder section
    const element = document.getElementById("contato-planejado");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = `https://wa.me/${LAWYER_INFO.whatsapp}?text=${encodeURIComponent(
    "Olá, vim pelo site e gostaria de mais informações sobre atendimento jurídico."
  )}`;

  return (
    <div className="relative min-h-screen font-sans bg-stone-50/20 text-navy-950 overflow-x-hidden">
      
      {/* 1. Header Navigation Bar */}
      <Header />

      {/* Main Container */}
      <main className="relative">
        
        {/* 2. Hero Header Section */}
        <Hero />

        {/* 3. Positioning Integrity Section */}
        <Positioning />

        {/* 4. Technical Law Practice Areas with Active Callback selection */}
        <PracticeAreas onSelectArea={handleSelectArea} />

        {/* 5. Biography Profile Section */}
        <About />

        {/* 6. Education Seek Guidance Prompt */}
        <WhenToSeek />

        {/* 7. Real-world Risk Awareness Section */}
        <Conscientization />

        {/* 8. Sequential Step-by-Step Care Pipeline */}
        <HowItWorks />

        {/* 9. Video Conferencing / Central SP Office Layout */}
        <LocationAndDelivery />

        {/* 10. Core Trust Principles */}
        <TrustFactors />

        {/* 11. FAQ Search / Accordion Panel */}
        <FAQ />

        {/* 12. Final Call-to-Action with Interactive Briefing Widget */}
        <FinalCTA selectedAreaId={selectedAreaId} />

      </main>

      {/* 13. High-Discretion Regulatory Compliant Footer */}
      <Footer />

      {/* Floating Sticky Fixed WhatsApp Corner Button */}
      <a
        id="floating-whatsapp-trigger"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full md:rounded-full shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all group duration-200 border-2 border-white"
        aria-label="Atalho para falar via WhatsApp"
        title="Fale direto com o advogado no WhatsApp"
      >
        <MessageSquare size={22} className="animate-pulse" />
        <span className="hidden md:inline text-xs font-semibold tracking-wide font-mono uppercase bg-emerald-700/50 py-1 px-2.5 rounded-full">
          Dúvidas? Fale Conosco
        </span>
      </a>

      {/* Subtly animated back to top shortcut when scrolling */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 z-40 p-2.5 bg-white hover:bg-navy-50 text-navy-700 hover:text-navy-900 rounded-full border border-navy-150 shadow-md hover:scale-105 transition-all text-xs focus:outline-none"
        aria-label="Voltar para o topo"
        title="Voltar ao início"
      >
        <ArrowUp size={16} />
      </button>

    </div>
  );
}
