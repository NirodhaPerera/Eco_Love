import React, { useEffect, useState } from "react";
import { BedDouble, ShowerHead, Wifi, Utensils, MapPin, DollarSign, Clock, ArrowDown } from "lucide-react";
import StayBookingForm from "./StayBookingForm";

const sliderImages = [
  '/Eco_Love_Lodge/IMG_7153.JPG',
  '/Eco_Love_Lodge/IMG_7140.JPG',
  '/Eco_Love_Lodge/IMG_7141.JPG',
  '/Eco_Love_Lodge/IMG_7144.JPG',
  '/Eco_Love_Lodge/IMG_7142.JPG'
];

const StaysPage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* CINEMATIC HERO SLIDER */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Lodge View ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          />
        ))}
        
        {/* Subtle Brand Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#064e3b]/40 z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-[1px] w-12 bg-white/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/90">
              Private Sanctuary
            </span>
            <div className="h-[1px] w-12 bg-white/60" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-tight mb-8 drop-shadow-2xl">
            The Lodge by <br /> Eco Love
          </h1>
          
          <p className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] max-w-xl leading-relaxed mb-12">
            Experience the peace of Galle in our cozy eco-lodge. 
            Designed for the conscious traveler.
          </p>

          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
            className="text-white/60 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={32} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* REFINED ABOUT SECTION - LETTER-PRESS GRID */}
      <section className="max-w-6xl mx-auto -mt-20 z-30 relative px-8 py-16 bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800 mb-4">
            Guest Amenities
          </h2>
          <p className="font-serif italic text-3xl text-slate-900">Soulful Comforts.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          <AmenityItem icon={<BedDouble size={24}/>} title="Private Lodge" detail="Sleeps 2 Guests" />
          <AmenityItem icon={<ShowerHead size={24}/>} title="Bathroom" detail="Hot & Cold Water" />
          <AmenityItem icon={<Wifi size={24}/>} title="Connectivity" detail="High-Speed WiFi" />
          <AmenityItem icon={<Utensils size={24}/>} title="Dining" detail="Breakfast Included" />
          <AmenityItem icon={<MapPin size={24}/>} title="Location" detail="Quiet Galle District" />
          <AmenityItem icon={<DollarSign size={24}/>} title="Pricing" detail="$50 / Night for 2" />
          <AmenityItem icon={<Clock size={24}/>} title="Check-in" detail="02:00 PM Arrival" />
          <AmenityItem icon={<Clock size={24}/>} title="Check-out" detail="11:00 AM Departure" />
        </div>
      </section>

      {/* BOOKING SECTION */}
      <div className="py-24 bg-[#FDFCFB]">
        <div className="max-w-4xl mx-auto text-center mb-12 px-6">
           <h2 className="text-4xl font-serif italic text-slate-900 mb-4">Reserve Your Getaway</h2>
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
             Complete the request below to begin your journey.
           </p>
        </div>
        <StayBookingForm />
      </div>
    </div>
  );
};

// Reusable Amenity Sub-component
const AmenityItem = ({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="text-emerald-800 mb-6 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">
      {title}
    </p>
    <p className="text-[11px] text-slate-400 font-medium tracking-wide">
      {detail}
    </p>
  </div>
);

export default StaysPage;