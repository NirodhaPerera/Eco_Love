import React from "react";
import {
  Globe,
  Mountain,
  HeartHandshake,
  Compass,
  ArrowRight,
} from "lucide-react";

const AboutTour: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDFCFB] py-24 md:py-40 px-6 sm:px-12 lg:px-24">
      {/* Subtle Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-start gap-16 lg:gap-24">
        
        {/* Text Content: 7 Columns */}
        <div className="lg:col-span-7 space-y-12">
          <header className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-emerald-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
                Soulful Journeys
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-[1.1]">
              Discover. Connect. <br /> Explore.
            </h2>
          </header>

          <div className="space-y-6 max-w-2xl">
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              At <span className="font-semibold text-emerald-900 italic">Eco Love Tours</span>, we offer more than just trips — we create meaningful journeys that celebrate nature, culture, and connection.
              Whether you're chasing waterfalls, trekking through rainforests, or engaging in traditional Sri Lankan cooking, every tour is a doorway into the island’s soul.
            </p>
            <p className="text-slate-500 text-sm uppercase tracking-widest leading-loose">
              Our curated experiences are designed for mindful travelers seeking authenticity and adventure. Join us to travel gently and support local communities.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 pt-8 border-t border-slate-100">
            <Feature icon={<Compass size={20} />} title="Smart Itineraries" desc="AI-powered, personalized travel routes" />
            <Feature icon={<HeartHandshake size={20} />} title="Local Artisans" desc="Guided by passionate Sri Lankan craftspeople" />
            <Feature icon={<Mountain size={20} />} title="Nature & Wildlife" desc="Eco-conscious treks and coastal safaris" />
            <Feature icon={<Globe size={20} />} title="Mindful Travel" desc="Leave only footprints, take only memories" />
          </div>

          <div className="pt-8">
            <a
              href="/eco-love-tours/tours"
              className="inline-flex items-center gap-4 px-10 py-5 bg-emerald-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-emerald-900/20 hover:bg-emerald-950 transition-all active:scale-95"
            >
              Explore Our Tours <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Editorial Image Collage: 5 Columns */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <img
              src="/Eco_Love_Tours/Tour_Images/image136.jpg"
              alt="Adventure"
              className="w-full aspect-[3/4] object-cover rounded-3xl shadow-lg"
            />
            <img
              src="/Eco_Love_Tours/Tour_Images/image119.jpg"
              alt="Nature"
              className="w-full aspect-square object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="space-y-4 pt-12">
            <img
              src="/Eco_Love_Tours/about_all 2.jpg"
              alt="Cultural experience"
              className="w-full aspect-square object-cover rounded-3xl shadow-lg"
            />
            <img
              src="/Eco_Love_Tours/Tour_Images/image7.jpg"
              alt="Happy travelers"
              className="w-full aspect-[3/4] object-cover rounded-3xl shadow-lg"
            />
          </div>
          {/* Floating Branding Detail */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900">Galle, Sri Lanka</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex items-start gap-4 group">
    <div className="mt-1 p-2 bg-emerald-50 text-emerald-900 rounded-lg group-hover:bg-emerald-900 group-hover:text-white transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-1">{title}</p>
      <p className="text-[11px] text-slate-400 font-medium tracking-tight">{desc}</p>
    </div>
  </div>
);

export default AboutTour;