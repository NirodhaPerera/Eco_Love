import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";

const GallerySection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-800 animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Live from the Kitchen
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif italic text-slate-900 leading-none">
              Captured <br /> <span className="text-green-900/20">Essence.</span>
            </h2>
          </div>
          
          <p className="max-w-[280px] text-[10px] md:text-[11px] leading-relaxed uppercase tracking-widest text-slate-500 font-medium">
            A documentation of nature and culture unfolding in every dish.
          </p>
        </div>

        {/* --- GRID COMPOSITION --- */}
        {/* 
            Mobile: Stacked Vertical Storyboard 
            Desktop: High-Impact Cinematic Grid 
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[850px]">
          
          {/* Main Feature: Scene 01 */}
          <div className="md:col-span-8 md:row-span-1 h-[300px] md:h-auto group relative overflow-hidden rounded-2xl">
            <img
              src='/Eco_Love_Kitchen/slider2.jpeg'
              alt="Cooking Session"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 translate-y-0 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700">
               <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-1 md:mb-2">Scene 01</p>
               <h4 className="text-xl md:text-2xl font-serif italic text-white">The Communal Fire</h4>
            </div>
          </div>

          {/* Vertical Detail: Earth's Harvest */}
          <div className="md:col-span-4 md:row-span-2 h-[450px] md:h-auto group relative overflow-hidden rounded-2xl bg-slate-50">
            <img
              src='/Eco_Love_Kitchen/slider1.jpeg'
              alt="Fresh ingredients"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
               <Plus size={18} />
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
               <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white shadow-sm">Earth's Harvest</p>
            </div>
          </div>

          {/* Secondary Feature: Technique */}
          <div className="md:col-span-4 md:row-span-1 h-[250px] md:h-auto group relative overflow-hidden rounded-2xl shadow-sm">
            <img
              src='/Eco_Love_Kitchen/slider3.jpeg'
              alt="Traditional Dish"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Third Feature: Process */}
          <div className="md:col-span-4 md:row-span-1 h-[250px] md:h-auto group relative overflow-hidden rounded-2xl shadow-sm">
            <img
              src='/Eco_Love_Kitchen/slider4.jpeg'
              alt="Chef in action"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Link
            to="/eco-love-kitchen/gallery"
            className="group relative flex items-center justify-center py-5 md:py-6 px-10 md:px-16 bg-green-950 text-white rounded-full overflow-hidden transition-all active:scale-95 w-full md:w-auto"
          >
            <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em]">
              Enter the Gallery
            </span>
            <div className="absolute inset-0 bg-green-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <ArrowRight size={16} className="relative z-10 ml-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;