import React from 'react';
import { ArrowRight, Sprout, Users, Globe } from 'lucide-react';

const AboutKit: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left side: Artistic Image Composition */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10 group">
            <img
              src="/Eco_Love_Kitchen/about_all 2.jpg"
              alt="Guests cooking in kitchen"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Subtle Floating Label Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-slate-50">
               <p className="font-serif italic text-green-900 text-lg">Authentic Moments.</p>
               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mt-1">Galle, Sri Lanka</p>
            </div>
          </div>
          {/* Decorative Background Frame */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-50 rounded-full -z-10 blur-3xl opacity-60" />
        </div>

        {/* Right side: Editorial Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-green-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800">
              Our Philosophy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-slate-900 mb-8 leading-tight">
            Experience the <br /> Joy of Cooking
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed tracking-wide">
            <p className="text-lg font-medium text-slate-900">
              Eco Love Kitchen is a hands-on culinary experience rooted in Sri Lankan tradition and sustainability.
            </p>
            <p className="text-sm md:text-base">
              From picking herbs in our garden to preparing meals with local chefs, every step is a journey into flavor and culture. We celebrate local ingredients, eco-conscious methods, and the power of food to bring people together.
            </p>
            <p className="text-sm md:text-base italic font-serif">
              Join us in creating stories around the table — where nature, community, and culture meet in every dish.
            </p>
          </div>

          {/* Elegant Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mt-12 py-10 border-y border-slate-100">
            <StatItem icon={<Sprout size={16}/>} value="100%" label="Eco-Friendly" />
            <StatItem icon={<Globe size={16}/>} value="30+" label="Ingredients" />
            <StatItem icon={<Users size={16}/>} value="50+" label="Sessions" />
          </div>

          <button className="group mt-12 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-green-900 hover:text-green-700 transition-all">
            <span>Learn More About Our Story</span>
            <div className="w-10 h-10 rounded-full border border-green-100 flex items-center justify-center group-hover:bg-green-900 group-hover:text-white transition-all">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

// Sub-component for Stats to keep code clean
const StatItem = ({ icon, value, label }: { icon: any; value: string; label: string }) => (
  <div className="flex flex-col items-start">
    <div className="text-green-800 mb-2">{icon}</div>
    <p className="text-2xl font-bold text-slate-900 leading-none mb-1">{value}</p>
    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{label}</p>
  </div>
);

export default AboutKit;