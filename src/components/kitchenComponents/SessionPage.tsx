import  { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import { Sprout, Clock, Utensils, Coffee, Candy, Gift, CircleDollarSign } from "lucide-react";

const sliderImages = [
  '/Eco_Love_Kitchen/slider1.jpeg', 
  '/Eco_Love_Kitchen/slider2.jpeg', 
  '/Eco_Love_Kitchen/slider3.jpeg',
  '/Eco_Love_Kitchen/gallery/img_11.JPG',
  '/Eco_Love_Kitchen/gallery/img_10.JPG'
];

const SessionPage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* Cinematic Hero Slider */}
      <div className="relative w-full h-[85vh] overflow-hidden bg-slate-900">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <img
              src={img}
              alt={`Eco Love Cooking Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Editorial Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </div>
        ))}
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-white/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/80">
              Eco Love Kitchen
            </span>
            <div className="h-[1px] w-12 bg-white/40" />
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-serif italic mb-8 max-w-4xl leading-tight drop-shadow-2xl">
            Reserve Your Place at <br/> the Table
          </h1>
          <p className="text-white/90 text-xs md:text-sm font-light tracking-[0.3em] max-w-xl mb-12 leading-loose uppercase">
            A Hands-on Sri Lankan culinary adventure confirmed via WhatsApp & Email.
          </p>
        </div>
      </div>

      {/* Session Details - Editorial Grid */}
      <section className="max-w-6xl mx-auto -mt-20 z-30 relative px-8 py-16 bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-50">
        <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800 block mb-4">The Experience</span>
            <h2 className="text-4xl font-serif italic text-slate-900">Session Highlights</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10">
          <DetailItem icon={<Sprout size={20}/>} title="Local Soul" sub="Hands-on adventure" />
          <DetailItem icon={<Clock size={20}/>} title="2–3 Hours" sub="Duration" />
          <DetailItem icon={<Utensils size={20}/>} title="7 Curries" sub="Meat & Fish" />
          <DetailItem icon={<Coffee size={20}/>} title="Welcome" sub="Drink included" />
          <DetailItem icon={<Candy size={20}/>} title="Sweets" sub="Traditional treats" />
          <DetailItem icon={<Gift size={20}/>} title="Take Home" sub="Curry Powder" />
          <DetailItem icon={<CircleDollarSign size={20}/>} title="$25 / Guest" sub="All inclusive" />
        </div>
      </section>

      {/* Booking Form Section */}
      <div className="py-24">
        <BookingForm />
      </div>
    </div>
  );
};

// Sub-component for individual Detail Items
const DetailItem = ({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) => (
  <div className="group flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-emerald-700 group-hover:text-white group-hover:-translate-y-1">
      {icon}
    </div>
    <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-1">{title}</span>
    <span className="text-[9px] font-medium uppercase tracking-widest text-slate-400">{sub}</span>
  </div>
);

export default SessionPage;