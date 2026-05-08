import React from "react";
import { ArrowUpRight} from "lucide-react";

const destinations = [
  {
    name: "Galle",
    description: "Colonial charm meets coastal bliss",
    img: "/Eco_Love_Tours/Galle.jpg",
    link: "/eco-love-tour/destinations/galle",
    category: "Coastal Heritage"
  },
  {
    name: "Ella",
    description: "Lush hills and breathtaking views",
    img: "/Eco_Love_Tours/Ella.jpg",
    link: "/eco-love-tour/destinations/ella",
    category: "Mountain Escape"
  },
  {
    name: "Sigiriya",
    description: "The Lion Rock fortress of legends",
    img: "/Eco_Love_Tours/Sigiriya.jpg",
    link: "/eco-love-tour/destinations/sigiriya",
    category: "Ancient Wonders"
  },
  {
    name: "Kandy",
    description: "Temple of the Sacred Tooth & cultural soul",
    img: "/Eco_Love_Tours/Kandy.jpg",
    link: "/eco-love-tour/destinations/kandy",
    category: "Cultural Capital"
  },
  {
    name: "Anuradhapura",
    description: "The ancient heart of Sri Lanka",
    img: "/Eco_Love_Tours/Anuradhapura.jpg",
    link: "/eco-love-tour/destinations/anuradhapura",
    category: "Sacred City"
  },
  {
    name: "Nuwara Eliya",
    description: "Mist-covered hills and tea estates",
    img: "/Eco_Love_Tours/Nuwara-Eliya.jpg",
    link: "/eco-love-tour/destinations/nuwara-eliya",
    category: "Highland Retreat"
  },
];

const DestinationsShowcase: React.FC = () => {
  return (
    <section className="bg-[#FDFCFB] py-24 md:py-40 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 md:mb-32">
          <div className="space-y-6 max-w-2xl text-left">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-emerald-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
                Island Discovery
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 leading-tight">
              A land of places <br /> like no other.
            </h2>
            <p className="text-slate-500 text-sm uppercase tracking-widest leading-loose">
              Fortresses, forests, temples, and treasures — Magical destinations await.
            </p>
          </div>
          
          <a
            href="/eco-love-tour/destinations"
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/20 pb-2 hover:border-emerald-900 transition-all"
          >
            View All Destinations <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="group cursor-none"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 mb-8">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-emerald-900 shadow-sm">
                    {dest.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-3 px-2 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif italic text-slate-900">
                    {dest.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight size={12} className="text-slate-400" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium tracking-wide leading-relaxed">
                  {dest.description}
                </p>
                <div className="pt-2">
                  <a
                    href={dest.link}
                    className="text-[9px] font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-600 transition-colors flex items-center gap-2"
                  >
                    Explore Chapter <span className="h-[1px] w-4 bg-emerald-800/30" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsShowcase;