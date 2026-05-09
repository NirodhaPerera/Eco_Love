

import React, { useEffect, useState } from "react";
import { X, Maximize2 } from "lucide-react";

const sliderImages = [
  '/Eco_Love_Tours/Tour_Images/img136.jpg',
  '/Eco_Love_Tours/Tour_Images/img119.jpg',
  '/Eco_Love_Tours/Tour_Images/img120.jpg',
  '/Eco_Love_Tours/Tour_Images/img7.jpg',
  '/Eco_Love_Tours/Tour_Images/img136.jpg',
  '/Eco_Love_Tours/Tour_Images/img119.jpg',
  '/Eco_Love_Tours/Tour_Images/img120.jpg',
  '/Eco_Love_Tours/Tour_Images/img175.jpg',
  '/Eco_Love_Tours/Tour_Images/img176.jpg',
];

const galleryImages = Array.from({ length: 100 }, (_, i) => `/Eco_Love_Tours/Tour_Images/img${i + 1}.jpg`);

const GalleryPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-[1px] w-12 bg-white/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/90">
              Visual Journey
            </span>
            <div className="h-[1px] w-12 bg-white/60" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight mb-8 drop-shadow-2xl">
            Moments at <br /> Eco Love Lodge
          </h1>
          
          <p className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] max-w-xl leading-relaxed">
            Experience the soul of Galle through our lens.
          </p>
        </div>
      </div>

      {/* EDITORIAL GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-emerald-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
              The Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 leading-[1.1] mb-8">
            A sanctuary captured <br /> in light and shadow.
          </h2>
        </div>

        {/* MASONRY COLUMNS */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="break-inside-avoid relative overflow-hidden rounded-3xl bg-slate-100 group cursor-none"
            >
              <img
                src={img}
                alt={`Gallery detail ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Custom Hover Cursor Overlay */}
              <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                  <Maximize2 size={20} className="text-emerald-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MINIMALIST IMAGE MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-slate-950/95 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300" 
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl transition-all duration-500 scale-95 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
               Eco Love Lodge · Gallery
             </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;