import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Map, Utensils, Home } from 'lucide-react';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: "Eco Love Tours",
      category: "Adventures",
      icon: <Map size={14} />,
      image: "Eco_Love_Tours/safari.jpg",
      path: "/eco-love-tours",
      desc: "Bespoke journeys through Sri Lanka’s hidden emerald landscapes and sacred heritage sites."
    },
    {
      title: "Eco Love Kitchen",
      category: "Culinary",
      icon: <Utensils size={14} />,
      image: "Eco_Love_Kitchen/IMG_2302.JPG",
      path: "/eco-love-kitchen",
      desc: "A sensory masterclass in traditional spices, village recipes, and interactive cooking lessons."
    },
    {
      title: "The Lodge",
      category: "Stay",
      icon: <Home size={14} />,
      image: "Eco_Love_Lodge/IMG_7153.JPG",
      path: "/eco-love-lodge",
      desc: "Tranquil eco-lodging designed for deep relaxation, yoga, and a romantic connection with nature."
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      {/* Editorial Header Section */}
      <div className="max-w-5xl mx-auto mb-24 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-[1px] bg-green-300"></span>
          <h2 className="text-sm font-bold tracking-[0.4em] text-green-700 uppercase">
            Our Philosophy
          </h2>
          <span className="w-12 h-[1px] bg-green-300"></span>
        </div>
        <h1 className="text-6xl md:text-8xl font-extralight text-slate-950 leading-[1.1] tracking-tighter mb-12">
          A Symphony of <br />
          <span className="font-serif italic text-green-900">Nature & Culture.</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-light">
            Eco Love is more than a brand—it is a heartfelt commitment to the Sri Lankan spirit. 
            We meticulously blend <span className="text-green-800 font-medium border-b border-green-200">sustainable tourism</span> with authentic cultural immersion.
          </p>
          <div className="flex justify-center py-4">
              <div className="w-1 h-1 rounded-full bg-green-300 mx-1"></div>
              <div className="w-1 h-1 rounded-full bg-green-300 mx-1"></div>
              <div className="w-1 h-1 rounded-full bg-green-300 mx-1"></div>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Our goal is to redefine travel by creating meaningful connections. Choose a destination below to explore our world.
          </p>
        </div>
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-16">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            onClick={() => navigate(exp.path)}
            className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[1/1] flex flex-col shadow-2xl transition-all duration-700 ease-out hover:-translate-y-4"
          >
            {/* The Image Background */}
            <img
              src={exp.image}
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* NEW: Small Floating Title/Badge */}
            <div className="absolute top-6 left-6 z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                {exp.icon}
                {exp.category}
              </div>
            </div>

            {/* Content Pane */}
            <div className="absolute inset-x-6 bottom-6 p-6 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 text-white transform transition-all duration-500 group-hover:translate-y-[-0.5rem]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {exp.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Revealable Description */}
              <p className="text-white/80 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 transition-all duration-700 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2 font-light">
                {exp.desc}
              </p>
              
              {/* Subtle Visit Hint */}
              <div className="mt-2 text-[10px] font-bold uppercase tracking-tighter text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to visit site
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;