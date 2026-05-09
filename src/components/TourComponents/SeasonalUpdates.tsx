import React, { useState, useEffect } from "react";
import { X, Sun, ArrowRight, Zap } from "lucide-react";

const SeasonalUpdates: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenSeasonalPopup");
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenSeasonalPopup", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-emerald-950/60 backdrop-blur-md animate-in fade-in duration-500" 
        onClick={closePopup}
      />

      {/* Ad Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500 max-h-[90vh] overflow-y-auto md:overflow-visible">
        
        {/* --- MOBILE CLOSE ICON --- */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 z-[110] p-3 bg-black/20 backdrop-blur-xl text-white rounded-full transition-all active:scale-90 md:hover:bg-white/20"
          aria-label="Close"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* Visual Side */}
        <div className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-auto shrink-0">
          <img 
            src="/Eco_Love_Tours/01.jpg" 
            alt="East Coast Summer" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <Zap className="text-yellow-400 fill-yellow-400" size={14} />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Trending Now</span>
            </div>
            <p className="text-2xl md:text-3xl font-serif italic leading-tight">Arugam Bay <br className="hidden md:block" /> is calling.</p>
          </div>
        </div>

        {/* Copy Side */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-6 md:space-y-8 bg-white">
          <header className="space-y-3 md:space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest">
                Seasonal Intelligence
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">May 2026 Update</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-slate-900 leading-tight">
              The Golden Window <br className="hidden md:block" /> is officially open.
            </h2>
          </header>

          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light">
            Dry season has arrived on the East Coast. Experience 100% sunshine, crystal waters, and peak wildlife sightings in Trincomalee and Arugam Bay. 
          </p>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="flex items-center gap-3 text-emerald-900 font-bold text-[10px] md:text-xs uppercase tracking-widest">
              <div className="p-1.5 bg-emerald-50 rounded-lg">
                <Sun size={14} className="animate-spin-slow" />
              </div>
              0% Rain Probability (East)
            </div>
            <div className="flex items-center gap-3 text-emerald-900 font-bold text-[10px] md:text-xs uppercase tracking-widest">
              <div className="p-1.5 bg-emerald-50 rounded-lg">
                <Sun size={14} className="animate-spin-slow" />
              </div>
              Whales & Dolphins Active
            </div>
          </div>

          <div className="pt-2 md:pt-4 space-y-4">
            <a 
              href="/eco-love-tours/tours"
              onClick={closePopup}
              className="w-full inline-flex items-center justify-center gap-3 py-4 md:py-5 bg-emerald-900 text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-950 transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
            >
              Book Summer Journey <ArrowRight size={14} />
            </a>
            <button 
              onClick={closePopup}
              className="w-full text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-300 hover:text-slate-500 transition-colors py-2"
            >
              Dismiss Update
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SeasonalUpdates;