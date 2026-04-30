import React from 'react';
import { Star, Quote } from 'lucide-react';
import LottieAnimationReview from '../LottieAnimationReview';

const testimonials = [
  {
    id: 1,
    name: "David",
    origin: "United Kingdom",
    text: "Absolutely charming host who took us into her kitchen and we cooked a huge meal with about eight different dishes on two burners. Her skill was fascinating. And the food was delicious!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rebecca",
    origin: "Germany",
    text: "Was a great experience with a lovely family. We learned so much about Sri lankan cuisine and the food made was delicious. Can highly recommend",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily",
    origin: "United Kingdom",
    text: "I had a fabulous time here, the food was amazing and I was welcomed into the home so nicely. Left having learnt how locals produce their family meals. All round an amazing experience.",
    rating: 5,
  },
  {
    id: 4,
    name: "Chanel Theunissen",
    origin: "South Africa",
    text: "Delightful cooking and lunch My friend and I had so much fun cooking a traditional Sri Lankan lunch with this family. Such a wholesome experience with soul food and soul people!",
    rating: 5,
  },
  {
    id: 5,
    name: "Carmen T",
    origin: "Spain",
    text: "Best local Sri Lanka food, I can only say that of all the local places I have been to in sri lanka without a doubt was the best! Their menu has all the local dishes.",
    rating: 5,
  },
  {
    id: 6,
    name: "Katie",
    origin: "United Kingdom",
    text: "Authentic Sri Lankan cooking class. We were welcomed in and shown how to make Sri Lankan food and then got to eat it. Best curry we’d had and not just because we helped make it haha.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 text-slate-900 overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-green-800/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800">
            Guest Stories
          </span>
          <div className="h-[1px] w-8 bg-green-800/20" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
          What Our Guests Say
        </h2>
        <a
          href="/testimonials"
          className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-200 pb-2 hover:border-green-800 transition-all hover:text-green-800"
        >
          View All Experiences
        </a>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map(({ id, name, origin, text, rating }) => (
          <div
            key={id}
            className="group relative bg-slate-50/50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500"
          >
            <Quote className="text-green-800/10 absolute top-6 right-8 w-12 h-12" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="mb-8 text-sm md:text-base leading-relaxed text-slate-600 italic">
              "{text}"
            </p>

            <div className="mt-auto pt-6 border-t border-slate-100">
              <p className="font-bold text-slate-900 text-sm uppercase tracking-widest">{name}</p>
              <p className="text-[10px] font-medium text-green-700 uppercase tracking-widest opacity-60">
                {origin}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lottie Animation & Platforms */}
      <div className="mt-32 flex flex-col items-center">
        <div className="max-w-[200px] opacity-80 hover:opacity-100 transition-opacity">
          <LottieAnimationReview />
        </div>

        <div className="mt-16 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 block mb-10">
            Verify our journey on
          </span>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <PlatformOrb 
                href="https://www.tripadvisor.com/Restaurant_Review-g297896-d19462729-Reviews-Eco_Love_Kitchen-Galle_Galle_District_Southern_Province.html" 
                img="tripadvisor.png" 
            />
            <PlatformOrb 
                href="https://www.google.com/search?q=Eco+Love+Kitchen+Reviews" 
                img="google.png" 
            />
            <PlatformOrb 
                href="https://www.facebook.com/share/1AjgEvmJX3/" 
                img="facebook.png" 
            />
            <PlatformOrb 
                href="https://www.instagram.com/ecolovekitchen" 
                img="intagram.png" 
            />
            <PlatformOrb 
                href="https://www.getyourguide.com/galle-l1817/galle-traditional-sri-lankan-cooking-class-t811337/" 
                img="getYourGuide.png" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for Platform Orbs
const PlatformOrb = ({ href, img }: { href: string; img: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center p-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
  >
    <img src={img} alt="Review Platform" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
  </a>
);

export default TestimonialsSection;