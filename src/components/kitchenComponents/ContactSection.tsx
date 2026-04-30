import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  // Brand Color Constants
 
  
  return (
    <section id="contact" className="bg-[#FDFCFB] py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-[#14532d]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#14532d]">
              Inquiries
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-[1.1] mb-8">
            Let’s start a <br /> conversation.
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed tracking-wide">
            Whether you are planning a traditional cooking session in our kitchen or an eco-tour through the heart of Galle, we are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-10">
              <ContactDetail 
                title="Electronic Mail" 
                value="ecovovetours@gmail.com" 
                href="mailto:ecovovetours@gmail.com"
              />
              <ContactDetail 
                title="Instant Messaging" 
                value="+94 77 419 1148" 
                href="https://wa.me/94774191148"
              />
              <ContactDetail 
                title="Physical Presence" 
                value="Galle, Southern Province, Sri Lanka" 
                href="#"
              />
            </div>

            <div className="pt-12 border-t border-slate-100">
               <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 mb-2">Established</p>
               <p className="font-serif italic text-slate-400 text-lg">Eco Love Sri Lanka.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form
              action="https://formspree.io/f/mnnvppkq"
              method="POST"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
            >
              <FloatingInput label="Full Name" name="name" type="text" />
              <FloatingInput label="Email Address" name="email" type="email" />
              
              <div className="md:col-span-2 group relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4 group-focus-within:text-[#14532d]">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-[#14532d] transition-all resize-none text-sm tracking-wide placeholder:text-slate-100"
                  placeholder="Tell us about your travel dates or dietary preferences..."
                />
              </div>

              <div className="md:col-span-2">
                {/* REFINED COMPACT BUTTON */}
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-4 bg-[#064e3b] text-white font-black uppercase tracking-[0.3em] text-[10px] py-3.5 px-10 rounded-full transition-all hover:bg-[#14532d] shadow-xl active:scale-95"
                >
                  <span className="relative z-10">Send Inquiry</span>
                  <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactDetail = ({ title, value, href }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3 group-hover:text-[#14532d] transition-colors">{title}</p>
    <p className="text-base font-medium text-slate-900 border-b border-transparent group-hover:border-[#14532d] inline-block transition-all pb-1">{value}</p>
  </a>
);

const FloatingInput = ({ label, name, type }: any) => (
  <div className="group relative">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-[#14532d]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required
      className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-[#14532d] transition-all text-sm tracking-wide"
    />
  </div>
);

export default ContactSection;