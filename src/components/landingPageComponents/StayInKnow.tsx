import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRight, MessageCircle } from 'lucide-react';

const StayInKnow: React.FC = () => {
  const [message, setMessage] = useState('');
  const phoneNumber = '94774191148';

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultText = 'Hello! I would like to know more about your tours and experiences.';
    const encodedMessage = encodeURIComponent(message.trim() || defaultText);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 mb-24 overflow-hidden">
      {/* Container: Soft cream background with subtle border */}
      <div className="relative overflow-hidden rounded-3xl md:rounded-[4rem] bg-[#fdfdfb] py-16 md:py-24 px-4 md:px-8 border border-green-50 shadow-sm">
        
        {/* Subtle Decorative Icon */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="p-4 bg-emerald-50 rounded-full text-emerald-700 shadow-sm">
            <FaWhatsapp size={26} />
          </div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Section Label */}
          <h2 className="text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] text-green-800/60 uppercase mb-3 md:mb-4">
            Direct Inquiries
          </h2>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight text-slate-900 leading-[1.15] tracking-tight mb-6 md:mb-8">
            Have a question? <br />
            <span className="font-serif italic text-green-800 underline decoration-green-200 underline-offset-8">
              Ask us directly.
            </span>
          </h1>

          <p className="text-slate-500 text-base md:text-lg font-light mb-8 md:mb-12 leading-relaxed px-2">
            Whether you want to check dates, customize a trail, or ask about our local kitchen, we are just a quick message away.
          </p>

          {/* WhatsApp Direct Action Bar */}
          <form 
            onSubmit={handleWhatsAppRedirect}
            className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-2 bg-white shadow-[0_10px_40px_rgba(0,45,0,0.06)] rounded-2xl sm:rounded-full p-2 border border-slate-100 transition-all focus-within:shadow-[0_15px_50px_rgba(0,45,0,0.1)]"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question or say hello..."
              className="w-full bg-transparent px-5 py-3 text-slate-800 placeholder-slate-400 outline-none text-sm md:text-base font-light"
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3.5 rounded-xl sm:rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-md shadow-emerald-900/10 group"
            >
              <span>Chat Now</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Replies within minutes
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle size={12} className="text-emerald-700" />
              Direct local host
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayInKnow;