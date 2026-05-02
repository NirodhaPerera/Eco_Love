import React, { useState } from "react";
import { Star, Quote, Plus, Minus } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jip - Netherlands",
    role: "Lodge Guest",
    text: "The Lodge is very well made. Malik and his family are very welcoming. The breakfast provided is amazing. The location is very good, in a quiet area, close to Galle Fort. You can even borrow some bicycles. Malik also provides very good tours around Galle Fort - definitely a recommendation!",
    rating: 5,
  },
  {
    id: 2,
    name: "Martyn - United Kingdom",
    role: "Lodge Guest",
    text: "This was a gem of a find for me. First time to Sri Lanka and there was trepidation on my part about the trip. However Malik the owner and his family made it so easy for me. The accommodation is a clean, modern and comfortable bungalow set in the garden of the family home. The accommodation is 10 minutes from the centre of Galle but in a quiet location. An ideal location for trips to the beaches, Galle fort and other local attractions. Malik and his family are so helpful, nothing too much trouble. The home cooking, breakfast and dinner is delicious and they offer traditional cookery lessons in their home kitchen. Malik even sorted my transport from the airport to the accommodation and also had a SIM card sorted for me. Local transport to and from the bungalow is so easy to arrange, I used the pick me up app. I fully recommend this accommodation. Enjoy.",
    rating: 5,
  },
  {
    id: 3,
    name: "Nele - Germany",
    role: "Lodge Guest",
    text: "The lodge gave me “arriving at home” vibes. The host just opened that place near to his house. All details are very well selected, it starts with a nice lemon grass smell, over slippers/wonderful soap etc and ends with the most comfortable bed I have ever slept in. You can close all windows so in the night, if you wish, everything can be very dark - since this is very special for Asian countries, i should point that out. I had a delicious breakfast and I also booked a cooking class with the host mom, which was so delicious and interesting for me. I look forward to come back to this amazing place.",
    rating: 5,
  },
  {
    id: 4,
    name: "Leslie - Germany",
    role: "Lodge Guest",
    text: "I loved my time at the lodge. The accommodation is run by a family and has been opened just some weeks ago. Not only does it look really beautiful and stilish, every little detail has been planned with love. There is a warm shower with good water pressure, the bed is incredibly comfortable and the food prepared by the mother is simply delicious! I did a cooking class with her and Malik gave me a tour of Galle. The center is not far away and the way to get there is fantastic! You are on your own in the lodge and have plenty of peace and privacy, but the family always welcomes you and ensures you have an unforgettable time. I will definitely come back and stay longer!.",
    rating: 5,
  },
  {
    id: 5,
    name: "Julia - Germany",
    role: "Lodge Guest",
    text: "Meine Tochter und ich haben 3 Nächte in der Lodge übernachtet und haben es geliebt. Mal abgesehen davon, dass es uns in der Lodge an nichts gefehlt hat, haben wir Malik und seine Familie sehr ins Herz geschlossen. Alle waren so warmherzig und gastfreundlich, es fühlte sich beinahe an, Teil der Familie zu sein. Wenn ihr etwas Besonderes mit ganz viel Herz sucht, solltet ihr unbedingt in der Lodge übernachten.",
    rating: 5,
  },
  {
    id: 6,
    name: "Garvey - China",
    role: "Lodge Guest",
    text: "It is very convenient to go to the castle, and the landlord provides bicycles. The service is very good, providing dinner and breakfast, as well as unlimited free beer and frozen sparkling water. There is a refrigerator. Since there is only one room, you can experience all aspects of the service attached to you.",
    rating: 5,
  },
  {
    id: 7,
    name: "Claudia - Austria",
    role: "Lodge Guest",
    text: "We arrived, were warmly welcomed and were shown our room. It is beautiful, very big and modern. The bathroom is also modern, new and very clean. The bed is very comfortable! We felt right at home. The family lives in the building next door and no matter what questions we had, we were helped right away. The breakfast is very good, either traditional or English. We were also able to rent bikes and cycle through the rice fields. We also had a cooking class with the house manager and we were suggested many other activities that can be organized.A clear recommendation for Galle, if you want to stay a bit quieter and out of the way, but is right in the city by bus or TukTuk.",
    rating: 5,
  },
  {
    id: 8,
    name: "Alice - Germany",
    role: "Lodge Guest",
    text: "The lodge is beautiful and quietly located near Galle fort. The design is magical and invites you to linger. From the second one you are carried on your hands and you do not miss anything! Thanks to Malik and his family, we experienced 3 really great activities: We learned Sri Lankan cooked with mother, went on a walking tour of Galle (Malik knows everything about the history and the peculiarities on site) & were at a gold smith nearby to make your own rings. Staying at Malik and his family was the absolute highlight of our 14 day vacation.",
    rating: 5,
  },
];

const TestimonialsPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="bg-[#FDFCFB] py-24 md:py-40 px-6 md:px-12 lg:px-24 border-t border-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-emerald-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
              Guest Chronicles
            </span>
            <div className="h-[1px] w-12 bg-emerald-800" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-tight">
            Soulful Stories.
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] max-w-lg">
            Authentic experiences from our international community.
          </p>
        </div>

        {/* Clean Typographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden shadow-2xl">
          {testimonials.map(({ id, name, role, text, rating }) => {
            const isExpanded = expandedId === id;
            return (
              <div
                key={id}
                className="bg-white p-10 md:p-12 flex flex-col justify-between transition-all duration-500 hover:bg-slate-50 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <Quote className="text-emerald-800/10 group-hover:text-emerald-800/20 transition-colors" size={40} />
                    <div className="flex gap-0.5">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className={`text-slate-600 text-sm md:text-base leading-[1.8] tracking-wide mb-8 transition-all duration-700 ${isExpanded ? '' : 'line-clamp-4'}`}>
                    {text}
                  </p>
                  
                  {text.length > 180 && (
                    <button 
                      onClick={() => setExpandedId(isExpanded ? null : id)}
                      className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-emerald-800 mb-10 hover:opacity-60 transition-opacity"
                    >
                      {isExpanded ? <Minus size={12} /> : <Plus size={12} />}
                      {isExpanded ? "Show Less" : "Read Full Story"}
                    </button>
                  )}
                </div>

                <div className="pt-8 border-t border-slate-50">
                  <p className="font-serif italic text-slate-900 text-xl mb-1">{name}</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-700">{role}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Social Media Icons Section */}
        <div className="mt-40 pt-20 border-t border-slate-100 text-center">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block mb-12">
             Verify our reputation across the web
           </span>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
              <SocialIcon href="https://g.co/kgs/rnwAB63" img="google.png" label="Google" />
              <SocialIcon href="https://www.tripadvisor.com/Attraction_Review-g297896-d19911120-Reviews-Eco_Love_Tours-Galle_Galle_District_Southern_Province.html" img="tripadvisor.png" label="TripAdvisor" />
              <SocialIcon href="https://www.facebook.com/share/1Ce5zKiE1B/" img="facebook.png" label="Facebook" />
              <SocialIcon href="https://www.instagram.com/ecolovetours" img="intagram.png" label="Instagram" />
           </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, img, label }: { href: string; img: string; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex flex-col items-center gap-4 group transition-all"
  >
    <img src={img} alt={label} className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-500" />
    <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-900">{label}</span>
  </a>
);

export default TestimonialsPage;