import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Sparkles, Map } from "lucide-react";

const sliderImages = [
  "/Eco_Love_Tours/Tour_Images/image26.jpg",
  "/Eco_Love_Tours/Tour_Images/image34.jpg",
  "/Eco_Love_Tours/Tour_Images/image7.jpg",
  "/Eco_Love_Tours/Tour_Images/image175.jpg",
];

const experiences = [
  {
    title: "Traditional Jewelry Workshop",
    image: "/Eco_Love_Tours/Jewellry /image31.jpg",
    slug: "jewelry-workshop",
    category: "Craftsmanship",
    description: "Craft your own unique jewelry with local artisans using traditional Sri Lankan methods.",
  },
  {
    title: "Traditional Cookery Session",
    image: "/Eco_Love_Tours/coockery/slider5.jpeg",
    slug: "cookery-session",
    category: "Culinary Arts",
    description: "Learn to cook authentic Sri Lankan dishes with hands-on guidance from local chefs.",
  },
  {
    title: "Wood Carving",
    image: "/Eco_Love_Tours/wood carving/image18.jpg",
    slug: "wood-carving",
    category: "Heritage",
    description: "Explore the ancient art of wood carving with master craftsmen in a serene setting.",
  },
  {
    title: "Cycling Tours",
    image: "/Eco_Love_Tours/cycling/image5.jpg",
    slug: "cycling-tours",
    category: "Adventure",
    description: "Ride through scenic routes and local villages on guided eco-friendly cycling tours.",
  },
  {
    title: "Walking Tours",
    image: "/Eco_Love_Tours/Walking Tours Images/image4.jpg",
    slug: "walking-tours",
    category: "Nature",
    description: "Join a relaxed walking tour through culturally rich towns and natural landscapes.",
  },
  {
    title: "Wildlife Safari",
    image: "/Eco_Love_Tours/safari/image8.jpg",
    slug: "wildlife-safari",
    category: "Wildlife",
    description: "Embark on an unforgettable safari adventure to witness Sri Lanka's incredible wildlife.",
  },
  {
    title: "Traditional Handloom Factory",
    image: "/Eco_Love_Tours/handloom/image16.jpg",
    slug: "traditional-handloom-factory",
    category: "Textiles",
    description: "Experience the intricate process of handloom weaving and create your own masterpiece.",
  },
];

const ExperiencePage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover scale-110 animate-slow-zoom"
            />
          </div>
        ))}
        
        {/* Overlays */}
       
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="flex items-center gap-3 mb-6 opacity-80">
            <div className="h-[1px] w-8 bg-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Curated Journeys</span>
            <div className="h-[1px] w-8 bg-white" />
          </div>
          <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-8 drop-shadow-2xl max-w-5xl leading-tight">
            The Soul of Sri Lanka
          </h1>
          <p className="text-white/90 text-sm md:text-lg font-light tracking-wide max-w-xl leading-relaxed">
            Beyond the sightseeing. Dive into the crafts, flavors, and rhythms of local life through our hand-picked cultural immersions.
          </p>
          
          <div className="mt-12 animate-bounce">
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 text-emerald-800 mb-6">
          <Sparkles size={18} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Authentic & Local</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 mb-8">
          Crafting Memories, <br /> Not Just Itineraries.
        </h2>
        <div className="w-24 h-[1px] bg-emerald-900/20 mx-auto" />
      </section>

      {/* 3. EXPERIENCE MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {experiences.map((exp, index) => (
            <Link 
              to={`/eco-love-tours/experiences/${exp.slug}`} 
              key={index} 
              className={`group relative flex flex-col ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-50">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full">
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900">
                        {exp.category}
                    </span>
                </div>

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Content */}
              <div className="mt-8 space-y-4 px-2">
                <div className="flex items-center gap-3">
                    <div className="h-[1px] w-6 bg-emerald-800 group-hover:w-12 transition-all duration-500" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-800/60">Explore</span>
                </div>
                <h3 className="text-3xl font-serif italic text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {exp.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2">
                    {exp.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-800 transition-colors">
                  View Experience <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}

          {/* Custom Adventure CTA Card */}
          <div className="lg:col-span-1 flex flex-col justify-center items-center bg-emerald-900 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden group md:mt-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <Map className="mb-6 opacity-40 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="text-3xl font-serif italic mb-6">Want a custom adventure?</h3>
            <p className="text-white/70 text-sm font-light mb-8">
              Let us tailor a unique local experience just for you.
            </p>
            <button className="w-full py-4 bg-white text-emerald-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-50 transition-colors">
                Contact Experts
            </button>
          </div>
        </div>
      </section>

      {/* 4. FOOTER NOTE */}
      <footer className="py-20 text-center border-t border-slate-100">
         <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-emerald-50 rounded-full text-emerald-900">
                <Compass size={24} className="animate-spin-slow" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
              Eco Love Tours — Authentic Local Experiences
            </p>
         </div>
      </footer>

      {/* Keyframe animations for Tailwind */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ExperiencePage;