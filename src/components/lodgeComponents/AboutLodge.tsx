import React from "react";
import { Leaf, Home, Utensils, Bike, Star, ArrowRight } from "lucide-react";

const AboutLodge: React.FC = () => {
  return (
    <section id="about-lodge" className="relative overflow-hidden bg-[#FDFCFB] py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        
        
        <div className="grid grid-cols-12 gap-4 auto-rows-[100px] md:auto-rows-[120px]">
          <div className="col-span-12 row-span-2 overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/Eco_Love_Lodge/IMG_7153.JPG"
              alt="Lodge main view"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="col-span-6 row-span-2 overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/Eco_Love_Lodge/img_3.JPG"
              alt="Local breakfast"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
          
          <div className="col-span-6 row-span-2 overflow-hidden rounded-3xl shadow-xl translate-y-8">
            <img
              src="/Eco_Love_Lodge/IMG_7973.jpg"
              alt="Bicycles"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
          <div className="col-span-12 row-span-2 mt-8 overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/Eco_Love_Lodge/IMG_7140.JPG"
              alt="Interior design"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>

        
        <div className="w-full space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-emerald-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
                The Sanctuary
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-[1.1] mb-8">
              Escape. Relax. <br /> Reconnect.
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed tracking-wide max-w-xl">
              Tucked away in the lush landscapes of Sri Lanka’s southern coast, 
              <span className="text-slate-900 font-medium"> Eco Love Lodge </span> 
              invites you to unwind in style. Designed for the conscious traveler, 
              our lodge blends rustic charm with modern sustainability.
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 border-t border-slate-100 pt-10">
            <FeatureItem icon={<Home size={18} />} title="Private Cabins" desc="Eco-designed local style" />
            <FeatureItem icon={<Leaf size={18} />} title="Sustainable" desc="Natural materials & practices" />
            <FeatureItem icon={<Utensils size={18} />} title="Breakfast" desc="Sri Lankan & English options" />
            <FeatureItem icon={<Bike size={18} />} title="Cycles" desc="Complimentary exploration" />
            <FeatureItem icon={<Star size={18} />} title="Reviews" desc="Global 5-star feedback" />
          </div>

          
          <div className="pt-6">
          <a
            href="/eco-love-lodge/stays"
            className="group relative inline-flex items-center gap-3 bg-[#064e3b] text-white font-black uppercase tracking-[0.2em] text-[9px] py-3 px-8 rounded-full transition-all hover:bg-[#14532d] shadow-lg active:scale-95"
          >
            <span>Book Your Stay</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-500" />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for clean organization
const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex items-start gap-4 group">
    <div className="text-emerald-800 mt-1 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-1">{title}</p>
      <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default AboutLodge;