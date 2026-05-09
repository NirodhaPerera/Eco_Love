import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Import your centralized data and type
import { destinations } from "../TourComponents/Destinations";
import type { Destination } from "../TourComponents/Destination";

// Optimized images for the slider
const sliderImages = [
  '/Eco_Love_Tours/Tour_Images/image136.jpg',
  '/Eco_Love_Tours/Tour_Images/image119.jpg',
  '/Eco_Love_Tours/Tour_Images/image120.jpg',
  '/Eco_Love_Tours/Tour_Images/image7.jpg',
  '/Eco_Love_Tours/Tour_Images/image175.jpg',
  '/Eco_Love_Tours/Tour_Images/image176.jpg',
];

const DestinationPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Logic for pagination using the imported 'destinations' array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = destinations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans">
      {/* CINEMATIC HERO SLIDER */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Lodge Scene ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-white/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/90">
              Island Discovery
            </span>
            <div className="h-[1px] w-12 bg-white/60" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight mb-8 drop-shadow-2xl">
            Diverse Destinations.
          </h1>
          
          <p className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] max-w-xl leading-relaxed">
            From mist-covered hills to golden shores, find your soulful escape.
          </p>
        </div>
      </div>

      {/* DESTINATION COLLECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="max-w-3xl mb-24 text-left">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-emerald-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
              The Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 leading-[1.1] mb-8">
            A new treasure awaits <br /> wherever you roam.
          </h2>
          <p className="text-slate-500 text-sm uppercase tracking-widest leading-loose">
            Fortresses, forests, temples, and treasures — Magical destinations await.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {currentItems.map((dest: Destination, index: number) => (
            <Link 
              key={index} 
              to={dest.link} // Now using the link defined in your data file
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 mb-8">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-emerald-900 shadow-sm">
                    {dest.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3 px-2 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif italic text-slate-900">{dest.name}</h3>
                  <ArrowRight size={18} className="text-slate-300 group-hover:text-emerald-800 group-hover:translate-x-2 transition-all" />
                </div>
                <p className="text-xs text-slate-500 font-medium tracking-wide leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ELEGANT PAGINATION */}
        <div className="mt-32 flex flex-col items-center gap-8 border-t border-slate-100 pt-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-full border border-slate-100 hover:bg-emerald-900 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-full text-[10px] font-black tracking-widest transition-all ${
                    currentPage === i + 1
                      ? "bg-emerald-900 text-white"
                      : "text-slate-400 hover:text-emerald-900"
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-full border border-slate-100 hover:bg-emerald-900 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
            Page {currentPage} of {totalPages} — Eco Love Tours
          </p>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;