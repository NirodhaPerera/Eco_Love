import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const StayInKnow: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 mb-24">
      {/* Container: Soft cream background with a very subtle border */}
      <div className="relative overflow-hidden rounded-[4rem] bg-[#fdfdfb] py-24 px-8 border border-green-50 shadow-sm">
        
        {/* Subtle Decorative Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-green-50 rounded-full text-green-700">
            <Leaf size={24} />
          </div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Section Label */}
          <h2 className="text-xs font-bold tracking-[0.5em] text-green-800/40 uppercase mb-4">
            Connect With Us
          </h2>

          {/* Headline: Clean and Airy */}
          <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 leading-[1.1] tracking-tighter mb-8">
            Let the stories <br />
            <span className="font-serif italic text-green-800 underline decoration-green-200 underline-offset-8">come to you.</span>
          </h1>

          <p className="text-slate-500 text-lg font-light mb-12 leading-relaxed">
            From secret jungle trails to traditional village recipes, be the first to 
            know about our <span className="text-slate-900 font-medium font-serif">latest experiences</span>.
          </p>

          {/* The "Floating" Form */}
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col md:flex-row items-center gap-0 bg-white shadow-[0_10px_50px_rgba(0,45,0,0.05)] rounded-[2.5rem] p-1.5 border border-gray-100 transition-all focus-within:shadow-[0_15px_60px_rgba(0,45,0,0.1)]"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent px-8 py-4 text-slate-800 placeholder-slate-400 outline-none text-lg font-light"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-green-900 hover:bg-green-800 text-white px-10 py-4 rounded-[2rem] font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 shadow-lg shadow-green-900/10 group"
            >
              Join Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Minimalist Trust Indicator */}
          <div className="mt-10 flex items-center justify-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-300 rounded-full" />
                Monthly Updates
            </span>
            <span className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-300 rounded-full" />
                Exclusive Offers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayInKnow;