import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const sliderImages = Array.from({ length: 31 }, (_, i) => `/Landing_Page_Images/IMG_${i + 1}.JPG`);

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Slightly slower transition for a more relaxed feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      
      {/* 1. CINEMATIC SLIDER (Ken Burns Effect) */}
      <AnimatePresence mode="wait">
        {sliderImages.map((img, index) => (
          index === current && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={img}
                alt={`Eco Love Scene ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* 2. REFINED EDITORIAL CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Brand Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-10 bg-white/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/80">
              Eco Love Sri Lanka
            </span>
            <div className="h-[1px] w-10 bg-white/40" />
          </div>

          <h1 className="text-white text-5xl md:text-8xl font-serif italic mb-8 leading-tight">
            Where Travel Meets, <br />
            <span className="text-white/20">Love for Nature.</span>
          </h1>

          <p className="text-white/80 text-[10px] md:text-xs font-light tracking-[0.4em] max-w-2xl mx-auto leading-loose uppercase mb-12">
            Savor wholesome cooking, embrace mindful travel, and unwind in eco-conscious comfort.
          </p>

          {/* COMPACT PREMIUM BUTTON */}
          <button
            className="group relative inline-flex items-center gap-4 bg-white text-green-950 font-black uppercase tracking-[0.3em] text-[10px] py-3.5 px-10 rounded-full transition-all hover:bg-green-900 hover:text-white shadow-2xl active:scale-95"
            onClick={() => {
              const aboutSection = document.getElementById('about-us');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Begin the Journey</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* 3. MINIMALIST SCROLL INDICATOR */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-20">
        <span className="text-white/40 text-[9px] font-black uppercase tracking-[0.5em] rotate-0">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

    </div>
  );
};

export default Hero;