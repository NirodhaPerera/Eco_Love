import React from "react";
import { Star, Quote } from "lucide-react";
import LottieAnimationReview from "../LottieAnimationReview";

// Testimonial data remains consistent with your provided source
const testimonials = [
  {
    id: 1,
    name: "Wendy",
    location: "Australia",
    role: "Apr 2025 • Family",
    text: "High quality and fabulous experience. Malika picked us up at Colombo airport and drove my daughter and I around Sri Lanka. He knew exactly the best spots and is a good driver. We even went for a dinner with his family. I highly recommend him for any travels.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sine",
    location: "Switzerland",
    role: "Mar 2025 • Couples",
    text: "Amazing Trip in South Sri Lanka. Our guide, Shehan, was super friendly, a safe driver, and super knowledgeable. He provided us with fascinating insights into history and culture. If you are looking for a tour guide who combines professionalism with a personal touch, this is for you.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lynn Francis",
    location: "United Kingdom",
    role: "Feb 2025 • Friends",
    text: "First class tour company. Malik is a first class Guide and Driver. He’s straightforward to deal with, honest, attentive, and kind. He suggested an itinerary which took us to all the best sites. Eco Love Tours has a beautiful self-contained villa and cooking classes on site.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jason F",
    location: "Australia",
    role: "Guest",
    text: "Excellent experience. Our driver Shehan was with us for 10 days and I can’t recommend him highly enough. He accommodated all our requirements and was extremely knowledgeable about Sri Lankan culture and wildlife.",
    rating: 5,
  },
  {
    id: 5,
    name: "Claudia S",
    location: "Austria",
    role: "Jan 2025 • Couples",
    text: "Absolute heart recommendation! Malik suggested a varied itinerary that perfectly suited our interests. Dinesh became a friend over time. We stayed in Malik's beautiful accommodation and had a wonderful time. His family is very warm.",
    rating: 5,
  },
  {
    id: 6,
    name: "Bumpy",
    location: "Auckland",
    role: "Dec 2024 • Family",
    text: "Five stars for Eco Love! Malik made our trip seamless and enjoyable. As a driver, he is calm and safety conscious. As a person, he's so kind and fun to be around. A fantastic holiday for our family.",
    rating: 5,
  },
];

const TestimonialsPage: React.FC = () => {
  return (
    <section className="bg-[#FDFCFB] py-24 md:py-40 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 md:mb-32">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-emerald-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
                Guest Chronicles
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 leading-tight">
              What Our <br /> Guests Say.
            </h2>
            <p className="text-slate-500 text-sm uppercase tracking-widest leading-loose">
              Real experiences from travelers who discovered the soul of Sri Lanka.
            </p>
          </div>
        </div>

        {/* Uniform Grid - Using Grid and Flex for consistent height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, location, role, text, rating }) => (
            <div
              key={id}
              className="flex flex-col bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 group"
            >
              <div className="flex flex-col h-full">
                <Quote className="text-emerald-900/10 mb-6 group-hover:text-emerald-900/20 transition-colors" size={40} />
                
                {/* flex-grow ensures this area pushes the footer to the bottom */}
                <div className="flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed mb-10 font-light italic">
                    "{text}"
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-50 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-emerald-800 text-emerald-800" />
                    ))}
                  </div>
                  <div>
                    <h4 className="text-sm font-serif italic text-slate-900">{name}</h4>
                    <p className="text-[9px] font-black uppercase tracking-widest text-emerald-800/40">
                      {location} • {role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Verification Section */}
        <div className="mt-40 border-t border-slate-100 pt-24 text-center">
          <div className="max-w-md mx-auto mb-16">
             <LottieAnimationReview />
          </div>
          
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12">
            Verified On Global Platforms
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <SocialLink href="https://www.tripadvisor.com/Attraction_Review-g297896-d19911120-Reviews-Eco_Love_Tours-Galle_Galle_District_Southern_Province.html" img="tripadvisor.png" label="TripAdvisor" />
            <SocialLink href="https://g.co/kgs/rnwAB63" img="google.png" label="Google" />
            <SocialLink href="https://www.facebook.com/share/1Ce5zKiE1B/" img="facebook.png" label="Facebook" />
            <SocialLink href="https://www.instagram.com/ecolovetours" img="intagram.png" label="Instagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, img, label }: { href: string; img: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-4 transition-all"
    aria-label={label}
  >
    <img src={img} alt={label} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
    <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
  </a>
);

export default TestimonialsPage;