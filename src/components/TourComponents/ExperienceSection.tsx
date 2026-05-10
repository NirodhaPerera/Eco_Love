import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";




const experiences = [
  {
    title: "From Flame to Finger",
    category: "Craftsmanship",
    image: "/Eco_Love_Tours/Jewellry/img31.jpg",
  },
  {
    title: "Spices, Stories & Sri Lankan Kitchen",
    category: "Culinary Heritage",
    image: "/Eco_Love_Tours/coockery/slider5.jpeg",
  },
  {
    title: "Carved By Hand, Shaped by Tradition",
    category: "Artisan Skills",
    image: "/Eco_Love_Tours/wood carving/image18.jpg",
  },
  {
    title: "Pedals, Path & Hidden Stories",
    category: "Active Exploration",
    image: "/Eco_Love_Tours/cycling/img5.jpg",
  },
  {
    title: "Walk, Stories & Hidden Corners",
    category: "Mindful Journeys",
    image: "/Eco_Love_Tours/Walking Tours Images/img4.jpg",
  },
  {
    title: "Slow Safaris & Wild Stories",
    category: "Nature",
    image: "/Eco_Love_Tours/safari/img8.jpg",
  },
  {
    title: "Handloom Factory",
    category: "Traditional Arts",
    image: "/Eco_Love_Tours/handloom/img16.jpg",
  },
];

const AuthenticExperiences: React.FC = () => {
  return (
    <section
      className="py-24 md:py-40 px-6 bg-[#FDFCFB]"
      id="authentic-experiences"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-emerald-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
                Local Immersion
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 leading-tight">
              Authentic Experiences.
            </h2>
            <p className="text-slate-500 text-sm uppercase tracking-widest leading-loose">
              Immerse yourself in Sri Lanka’s living traditions through handpicked, soulful encounters.
            </p>
          </div>

          <Link
            to="/eco-love-tours/experiences"
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/20 pb-2 hover:border-emerald-900 transition-all"
          >
            See All Experiences <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group cursor-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 mb-6">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="space-y-2 px-2">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-800">
                  {exp.category}
                </p>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif italic text-slate-900">
                    {exp.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={12} className="text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthenticExperiences;