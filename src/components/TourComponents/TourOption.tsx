import React, { useState } from "react";
import { MapPin, ChevronDown, Clock, ArrowUpRight } from "lucide-react";

// Itineraries data remains the same
const itineraries = [
  {
    title: "21-Day Adventure Around Sri Lanka",
    days: 21,
    category: "The Grand Circuit",
    image: "Eco_Love_Tours/Adventure.png",
    details: [
      { day: "01", title: "Airport to Bentota", activity: "Sunset at Barberyn lighthouse island" },
      { day: "02", title: "Bentota to Galle", activity: "Cooking session & Galle Fort exploration" },
      { day: "03", title: "Rainforest Trek", activity: "Kanneliya rainforest & Cinnamon plantation" },
      { day: "04-05", title: "Southern Coast", activity: "Cycling tour & Dickwella beach retreat" },
      { day: "06-07", title: "Safari & Ella", activity: "Mulkirigala temple & Udawalawe Wildlife Safari" },
      { day: "08-09", title: "Highlands", activity: "Nine Arches Bridge & Lipton’s Seat" },
      { day: "10-11", title: "The Summit", activity: "Gartmore Falls & Grand Adams Peak hike" },
      { day: "12-13", title: "Tea Country", activity: "Nuwara Eliya tea factories & Kandy" },
      { day: "14-15", title: "Cultural Triangle", activity: "Sigiriya Rock & Polonnaruwa village tour" },
      { day: "16-18", title: "Northern Reaches", activity: "Jaffna Fort, Delft Island & Casuarina Beach" },
      { day: "19-21", title: "Final Wilds", activity: "Vankalai Sanctuary & Wilpattu Safari" },
    ],
  },
  {
    title: "8-Day Southern Discovery",
    days: 8,
    category: "Coastal Heritage",
    image: "Eco_Love_Tours/Img-t.png",
    details: [
      { day: "01-02", title: "West Coast", activity: "Madu River & Galle Fort exploration" },
      { day: "03-04", title: "Wild & Sacred", activity: "Udawalawe Safari & Buduruwagala" },
      { day: "05-06", title: "Hill Country", activity: "Scenic train ride & Kandy Temple of Tooth" },
      { day: "07-08", title: "Urban Sri Lanka", activity: "Pinnawala & Colombo city tour" },
    ],
  },
  {
    title: "6-Day Cultural & Nature Escape",
    days: 6,
    category: "Short Getaway",
    image: "Eco_Love_Tours/Img-tm.png",
    details: [
      { day: "01-02", title: "Ancient Heights", activity: "Sigiriya sunrise & Nuwara Eliya" },
      { day: "03-04", title: "Mountain Soul", activity: "Train ride, Ella Rock & waterfalls" },
      { day: "05-06", title: "Wild to Coast", activity: "Udawalawe Safari & Galle Fort" },
    ],
  },
];

const ItineraryList: React.FC = () => {
  // Use null to indicate no itinerary is expanded by default
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // If the clicked index is already active, close it (set to null), otherwise open the new one
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-[#FDFCFB] py-24 md:py-40 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
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
            <p className="text-slate-500 text-sm uppercase tracking-widest leading-loose">
              AI-enhanced travel plans designed for authentic local immersion.
            </p>
          </div>
        </div>

        {/* Itinerary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {itineraries.map((tour, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-700 h-fit"
              >
                {/* Image Header */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-emerald-900">
                      {tour.category}
                    </span>
                  </div>
                </div>

                {/* Summary Info */}
                <div className="p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-serif italic text-slate-900">{tour.title}</h3>
                      <div className="flex gap-4 items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <span className="flex items-center gap-1.5"><Clock size={12}/> {tour.days} Days</span>
                        <span className="flex items-center gap-1.5"><MapPin size={12}/> {tour.details.length} Chapters</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                      className={`w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center transition-all ${isOpen ? 'bg-emerald-900 text-white' : 'hover:bg-slate-50'}`}
                    >
                      <ChevronDown size={18} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Collapsible Timeline Details */}
                  <div 
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[1200px] opacity-100 mt-10' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
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
                      <div className="pt-6 border-t border-slate-50">
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-900 hover:opacity-60 transition-opacity">
                          Download Full Guide <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ItineraryList;