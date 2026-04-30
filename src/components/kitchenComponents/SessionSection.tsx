import React from 'react';
import { Link } from 'react-router-dom';
import {  ArrowRight, UtensilsCrossed } from 'lucide-react';

const SessionSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 bg-green-950 -z-10" />
      
      {/* Pattern Overlay - Referencing the textures in 8161094424593030096.jpeg */}
      <div className="absolute inset-0 opacity-5 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Subtle Tagline */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-green-400/50" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-400">
            A Journey of Senses
          </span>
          <div className="h-[1px] w-8 bg-green-400/50" />
        </div>

        {/* Hero Text */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white text-center mb-10 leading-[1.1]">
          Discover the Joy of <br /> Cooking with Us
        </h2>

        {/* Narrative Description */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mb-16">
          <p className="text-white/80 text-sm md:text-base leading-relaxed tracking-wide">
            Whether you're a beginner or a passionate foodie, our cooking sessions 
            offer an authentic taste of Sri Lankan culinary culture. Learn to 
            prepare traditional dishes using fresh, local ingredients — guided by 
            experienced local chefs in a warm environment.
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed tracking-wide border-l border-green-800/50 pl-8">
            Join us for an unforgettable experience filled with flavors, culture, 
            and connection. Every session is a tribute to the "Symphony of Nature 
            & Culture" that defines the soul of Sri Lanka.
          </p>
        </div>

        {/* Premium CTA Button */}
        <div className="group relative">
          <Link
            to="/eco-love-kitchen/session"
            className="relative z-10 bg-white text-green-950 font-black uppercase tracking-[0.2em] text-[11px] py-5 px-10 rounded-full hover:bg-green-50 transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95"
          >
            <UtensilsCrossed size={16} className="group-hover:rotate-12 transition-transform" />
            Book a Cooking Session
            <ArrowRight size={14} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
          
          {/* Subtle Glow Behind Button */}
          <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default SessionSection;