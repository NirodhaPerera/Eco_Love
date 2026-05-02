import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Leaf, Sunrise, Star, ArrowRight } from 'lucide-react';

const StaySection: React.FC = () => {
  return (
    <section className="bg-[#FDFCFB] py-24 md:py-40 px-6 md:px-12 lg:px-24 border-t border-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-12 bg-emerald-800" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
            Accommodation
          </span>
          <div className="h-[1px] w-12 bg-emerald-800" />
        </div>

        {/* Serif Heading */}
        <h2 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-[1.1] mb-10">
          Your Peaceful <br /> Getaway Awaits.
        </h2>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto mb-20 uppercase font-light">
          Experience tranquil stays in the heart of Sri Lanka’s lush southern coast. Eco Love Lodge offers a perfect balance of comfort, sustainability, and soulful nature.
        </p>

        {/* Minimalist Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 mb-24">
          <StayFeature icon={<BedDouble size={20} />} title="Cozy Stays" desc="Handcrafted cabins" />
          <StayFeature icon={<Leaf size={20} />} title="Eco Friendly" desc="Sustainable living" />
          <StayFeature icon={<Sunrise size={20} />} title="Scenic Views" desc="Tropical soundscapes" />
          <StayFeature icon={<Star size={20} />} title="Top Rated" desc="5-star hospitality" />
        </div>

        {/* Refined Premium CTA */}
        <div className="flex justify-center">
          <Link
            to="/eco-love-lodge/stays"
            className="group relative inline-flex items-center gap-3 bg-[#064e3b] text-white font-black uppercase tracking-[0.2em] text-[9px] py-3.5 px-10 rounded-full transition-all hover:bg-[#14532d] shadow-xl active:scale-95"
          >
            <span>Book Your Stay</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Sub-component for a clean, letter-press look
const StayFeature = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex flex-col items-center group">
    <div className="text-emerald-800 mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">{title}</h4>
    <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{desc}</p>
  </div>
);

export default StaySection;