import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Camera, Plane, Sparkles, Quote } from "lucide-react";
import { destinations } from "../TourComponents/Destinations";
import type { Destination } from "../TourComponents/Destination";

const DestinationDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  
  const destination: Destination | undefined = destinations.find(
    (d) => d.name.toLowerCase().replace(/\s+/g, '-') === name
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  if (!destination) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4 bg-[#FDFCFB]">
        <div className="animate-bounce"><MapPin className="text-emerald-800 opacity-20" size={48} /></div>
        <p className="font-serif italic text-2xl text-slate-400">Destination lost in time...</p>
        <Link to="/eco-love-tours/destinations" className="text-[10px] font-black uppercase tracking-widest text-emerald-800 border-b border-emerald-800 pb-1">Return to Collection</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans pb-20 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. IMMERSIVE SPLIT HERO */}
      <div className="relative h-screen w-full flex flex-col justify-end">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={destination.img} 
            alt={destination.name} 
            className="w-full h-full object-cover scale-100 animate-subtle-zoom" 
          />
          {/* Subtle Grain Overlay for texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-20 max-w-7xl mx-auto w-full">
          
          
          <div className="max-w-4xl">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-white mb-6 backdrop-blur-md">
              {destination.category}
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif italic text-white leading-none -ml-1 md:-ml-2 drop-shadow-sm">
              {destination.name}
            </h1>
          </div>
        </div>
      </div>

      {/* 2. THE NARRATIVE & FLOATING ASIDE */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 -mt-10 relative z-20">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-12">
          <div className="bg-white p-8 md:p-16 rounded-[2rem] shadow-sm border border-slate-100">
            <Quote className="text-emerald-800/20 mb-6" size={40} />
            <h2 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight mb-8">
              A symphony of culture <br /> and untouched nature.
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-[2] text-justify">
              {destination.longDescription}
            </p>
            
            <div className="mt-12 pt-12 border-t border-slate-50 flex items-center gap-6">
               <button className="bg-emerald-900 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-emerald-900/20 hover:bg-emerald-800 hover:-translate-y-1 transition-all flex items-center gap-3 group">
                 Reserve Experience <Plane size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
               <span className="hidden md:block text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                 Tailored itineraries <br /> starting from $1,200
               </span>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Data */}
        <div className="lg:col-span-5 space-y-8">
          {/* Best Time Card */}
          <div className="bg-emerald-900 text-white p-10 rounded-[2rem] flex items-center justify-between overflow-hidden relative group">
            <Sparkles className="absolute -right-4 -top-4 text-emerald-800 group-hover:rotate-12 transition-transform" size={120} />
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Seasonal Window</span>
              <p className="text-3xl font-serif italic mt-2">{destination.bestTime}</p>
            </div>
            <Clock className="relative z-10 opacity-40" size={32} />
          </div>

          {/* Attractions List */}
          <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
             <div className="flex items-center gap-3 mb-8">
               <div className="h-[1px] w-8 bg-emerald-800" />
               <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Must-See Chapters</span>
             </div>
             <div className="space-y-6">
               {destination.attractions.map((item, idx) => (
                 <div key={item} className="flex justify-between items-center group cursor-default">
                   <div className="flex items-center gap-4">
                     <span className="text-[10px] font-black text-emerald-900/30">0{idx + 1}</span>
                     <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-900 transition-colors">{item}</span>
                   </div>
                   <div className="h-[1px] flex-grow mx-4 bg-slate-200 group-hover:bg-emerald-200 transition-colors" />
                   <ArrowLeft size={12} className="rotate-180 text-slate-300 group-hover:text-emerald-800 transition-colors" />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC BENTO GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <div className="flex items-center justify-between mb-12">
            <h3 className="text-5xl font-serif italic text-slate-900">The Gallery</h3>
            <div className="flex items-center gap-4 opacity-40">
                <Camera size={20} />
                <div className="h-[1px] w-20 bg-slate-900" />
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-4 h-[1000px] md:h-[700px]">
          <div className="md:col-span-7 md:row-span-2 overflow-hidden rounded-3xl relative group">
            <img src={destination.gallery[0]} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt="Experience" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="md:col-span-5 md:row-span-1 overflow-hidden rounded-3xl relative group">
            <img src={destination.gallery[1]} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="Landscape" />
          </div>
          <div className="md:col-span-5 md:row-span-1 overflow-hidden rounded-3xl relative group border-4 border-emerald-900/5">
            <img src={destination.gallery[2]} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt="Detail" />
          </div>
        </div>
      </section>

      {/* 4. MINIMALIST FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
           © 2024 Eco Love Tours
         </p>
         <div className="flex gap-8">
            {['Instagram', 'Pinterest', 'Contact'].map(link => (
              <a key={link} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-emerald-800 transition-colors">
                {link}
              </a>
            ))}
         </div>
      </footer>
    </div>
  );
};

export default DestinationDetail;