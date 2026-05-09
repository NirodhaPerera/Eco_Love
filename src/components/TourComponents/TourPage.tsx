 import React, { useEffect, useRef, useState } from "react";
import { 
  
  Sparkles, 
  Send, 
  Map, 
  Clock, 
  ChevronDown, 
  
} from "lucide-react";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

// --- CONSTANTS ---
const sliderImages = [
  "/Eco_Love_Tours/Tour_Images/img136.jpg",
  "/Eco_Love_Tours/Tour_Images/img119.jpg",
  "/Eco_Love_Tours/Tour_Images/img7.jpg",
  "/Eco_Love_Tours/Tour_Images/img175.jpg",
];

// Updated Itinerary Data Structure
const itineraries = [
  {
    title: "21-Day Grand Island Odyssey",
    days: 21,
    category: "Full Immersive",
    image: "/Eco_Love_Tours/Adventure.png",
    details: [
      { day: "01", title: "Arrival", activity: "Barberyn Lighthouse Sunset at Bentota" },
      { day: "02", title: "Culture", activity: "Galle Fort Culinary Session & Hikkaduwa" },
      { day: "03", title: "Nature", activity: "Kanneliya Rainforest Expedition" },
      { day: "07", title: "Wildlife", activity: "Udawalawe Safari & Ella Highlands" },
      { day: "15", title: "Heritage", activity: "Sigiriya Sunrise at Pidurangala" },
    ],
  },
  {
    title: "8-Day Southern Discovery",
    days: 8,
    category: "Coastal & Wildlife",
    image: "/Eco_Love_Tours/Img-t.png",
    details: [
      { day: "01", title: "Nature", activity: "Madu River & Turtle Conservation" },
      { day: "03", title: "Heritage", activity: "Southern Folk Culture & Udawalawe" },
      { day: "05", title: "Iconic", activity: "Legendary Blue Train Journey to Ella" },
      { day: "08", title: "City", activity: "Colombo Tour & Final Departure" },
    ],
  },
  {
    title: "6-Day Nature Escape",
    days: 6,
    category: "Quick Getaway",
    image: "/Eco_Love_Tours/Img-tm.png",
    details: [
      { day: "01", title: "Ancient", activity: "Habarana Lake & Sigiriya Rock" },
      { day: "03", title: "Highlands", activity: "Ella Rock & Little Adams Peak" },
      { day: "05", title: "Wildlife", activity: "National Park Safari Experience" },
    ],
  },
];

const TourPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [days, setDays] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData.entries());
    
    // Formatting Daily Plans for WhatsApp
    

const whatsappMessage = `Hello Eco Love! 🌿

*Reservation Inquiry: Eco Love Tours*
_______________________________

👤 *GUEST DETAILS*
• Name: ${data.title} ${data.name}
• WhatsApp: ${data.whatsapp}
• Email: ${data.email}

🗺️ *TRIP OVERVIEW*
• Duration: ${data.days} Days
• Travelers: ${data.people} People
• Start Date: ${data.start_date}
• Regions: ${data.places}

📝 *ADDITIONAL NOTES*
"${data.message || 'No additional notes provided.'}"
_______________________________
_Sent via Eco Love Tours Web Builder_`;

    window.open(`https://wa.me/94774191148?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-20">
      
      {/* 1. CINEMATIC HERO */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === current ? "opacity-90 scale-105" : "opacity-0 scale-100"
            }`}
            alt="Hero"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#2b2b2b]" />
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="flex items-center gap-3 mb-6 opacity-80">
            <div className="h-[1px] w-8 bg-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Bespoke Travel</span>
            <div className="h-[1px] w-8 bg-white" />
          </div>
          <h1 className="text-5xl md:text-8xl font-serif italic text-white drop-shadow-2xl max-w-5xl leading-tight">
            Design Your <br /> Sri Lankan Narrative.
          </h1>
          <p className="mt-8 text-white/90 text-sm md:text-lg font-light tracking-wide max-w-xl leading-relaxed">
            Choose a curated journey or draft your own. We handle the logistics, you handle the discovery.
          </p>
        </div>
      </div>

      {/* 2. POPULAR ITINERARIES GRID */}
      <section className="bg-[#FDFCFB] py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-emerald-800" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
                  Curated Routes
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 leading-tight">
                Smart Itineraries.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {itineraries.map((tour, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-700 h-fit"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-emerald-900">
                        {tour.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-10 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-serif italic text-slate-900">{tour.title}</h3>
                        <div className="flex gap-4 items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <span className="flex items-center gap-1.5"><Clock size={12}/> {tour.days} Days</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleToggle(index)}
                        className={`w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center transition-all ${isOpen ? 'bg-emerald-900 text-white' : 'hover:bg-slate-50'}`}
                      >
                        <ChevronDown size={18} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1200px] opacity-100 mt-10' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-8 pb-4">
                        {tour.details.map((item, i) => (
                          <div key={i} className="flex gap-6 group/item">
                            <div className="flex flex-col items-center">
                              <span className="text-[10px] font-black text-emerald-800 leading-none mb-2">D{item.day}</span>
                              <div className="w-[1px] flex-1 bg-slate-100 group-last/item:hidden" />
                            </div>
                            <div className="pb-6">
                              <p className="text-xs font-black uppercase tracking-widest text-slate-900 mb-1">{item.title}</p>
                              <p className="text-xs text-slate-400 font-medium tracking-wide leading-relaxed">{item.activity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     {/* 3. MODERN ITINERARY BUILDER */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-40">
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            
            {/* Sidebar Branding */}
            <div className="lg:col-span-4 bg-emerald-900 p-12 md:p-16 text-white space-y-10 relative">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-8">
                <div className="p-4 bg-emerald-800 rounded-2xl w-fit"><Map size={32} /></div>
                <h3 className="text-3xl font-serif italic leading-tight">Build your dream <br /> journey from scratch.</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Tell us your preferences, and our local experts will coordinate the perfect logistics and stays.
                </p>
                <div className="space-y-4 pt-10">
                   <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                     <Sparkles size={16} /> 24-Hour Response
                   </div>
                   <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                     <Sparkles size={16} /> Authentic Experiences
                   </div>
                </div>
              </div>
            </div>

            {/* Inputs Area */}
            <div className="lg:col-span-8 p-12 md:p-16">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                
                {/* Personal Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">01. Contact Information</span>
                    <div className="h-[1px] flex-grow bg-slate-100" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Title</label>
                      <select name="title" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800">
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Full Name</label>
                      <input name="name" type="text" required placeholder="Full Name" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1">WhatsApp</label>
                      <input name="whatsapp" type="tel" placeholder="+94..." className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Email</label>
                      <input name="email" type="email" required placeholder="hello@adventure.com" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800" />
                    </div>
                  </div>
                </div>

                {/* Logistics Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">02. Trip Logistics</span>
                    <div className="h-[1px] flex-grow bg-slate-100" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Guests</label>
                      <input name="people" type="number" min="1" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Duration (Days)</label>
                      <input
                        name="days"
                        type="number"
                        min="0"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Starting Date</label>
                      <input name="start_date" type="date" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Must-See Regions</label>
                      <input name="places" type="text" placeholder="Ella, Sigiriya, Mirissa..." className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800" />
                    </div>
                  </div>

                
                  
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Special Notes</label>
                  <textarea name="message" rows={4} className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800" placeholder="Dietary needs, special celebrations, or specific interests..." />
                </div>

                <button type="submit" className="w-full bg-emerald-900 text-white font-black uppercase tracking-widest text-[10px] py-6 rounded-full hover:bg-emerald-950 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/20 active:scale-95">
                  Request Custom Itinerary <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OVERLAPPING CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <h3 className="text-4xl md:text-6xl font-serif italic mb-8 relative z-10 leading-tight">Ready for a journey <br /> that stays with you?</h3>
          <div className="flex justify-center gap-6 relative z-10">
             <Link to="/contact" className="bg-white text-emerald-900 px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-50 transition-colors shadow-2xl">
               Contact Our Experts
             </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mt-20 relative z-10">
            <img src="/Eco_Love_Tours/Tour_Images/image119.JPG" className="rounded-2xl h-32 md:h-64 w-full object-cover shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500" alt="Tour" />
            <img src="/Eco_Love_Tours/Tour_Images/image175.JPG" className="rounded-2xl h-32 md:h-64 w-full object-cover shadow-2xl z-20" alt="Nature" />
            <img src="/Eco_Love_Tours/Tour_Images/image7.JPG" className="rounded-2xl h-32 md:h-64 w-full object-cover shadow-2xl rotate-[2deg] hover:rotate-0 transition-transform duration-500" alt="Beach" />
          </div>
        </div>
      </section>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
  
};

export default TourPage;