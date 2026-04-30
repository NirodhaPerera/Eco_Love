import React, { useEffect, useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";

const sliderImages = [
  '/Eco_Love_Kitchen/slider1.jpeg', 
  '/Eco_Love_Kitchen/slider2.jpeg', 
  '/Eco_Love_Kitchen/slider3.jpeg',
  '/Eco_Love_Kitchen/gallery/img_11.JPG',
  '/Eco_Love_Kitchen/gallery/img_10.JPG'
];

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5444.987139418722!2d80.23091297621761!3d6.062435593923488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1734e5ee6d3d9%3A0x70dbce6ac78efce1!2sEco%20Love%20Kitchen!5e1!3m2!1sen!2slk!4v1749459793694!5m2!1sen!2slk";

const ContactPage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans">
      
      {/* 1. CINEMATIC HERO SLIDER */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-slate-900">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2500ms] ease-in-out ${
              index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <img src={img} alt="Contact Eco Love" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-white/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/80">Contact</span>
            <div className="h-[1px] w-12 bg-white/40" />
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-serif italic mb-8 drop-shadow-2xl">
            Let’s start a <br/> conversation.
          </h1>
        </div>
      </div>

      {/* 2. CONTACT INFO & MAP SECTION */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 z-30 relative py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Feature */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-slate-50 bg-white p-2">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0 rounded-2xl"
              title="Eco Love Kitchen Location"
            ></iframe>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.06)] p-10 flex flex-col justify-between border border-slate-50">
            <div className="space-y-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800 block mb-4">Our Home</span>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">
                  No.227/12 Mories Road,<br />
                  Ambalawatta, Galle,<br />
                  Sri Lanka
                </p>
              </div>

              <div className="space-y-6">
                <ContactDetail icon={<Phone size={16}/>} title="Direct Line" value="+94 77 419 1148" href="tel:+94774191148" />
                <ContactDetail icon={<FaWhatsapp size={16}/>} title="WhatsApp" value="Instant Chat" href="https://wa.me/94774191148" />
                <ContactDetail icon={<Mail size={16}/>} title="Email" value="ecolovetours@gmail.com" href="mailto:ecovovetours@gmail.com" />
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 block mb-4">Social</span>
              <div className="flex gap-6">
                <SocialIcon icon={<FaFacebookF />} href="https://www.facebook.com/share/1AjgEvmJX3/?mibextid=wwXIfr" />
                <SocialIcon icon={<FaInstagram />} href="https://www.instagram.com/ecolovekitchen?igsh=NjFldTBoMW4xbmk2&utm_source=qr" />
                <SocialIcon icon={<FaTripadvisor />} href="https://www.tripadvisor.com/Restaurant_Review-g297896-d19462729-Reviews-Eco_Love_Kitchen-Galle_Galle_District_Southern_Province.html?m=69573" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. INQUIRY FORM SECTION (Clean Minimalist Style) */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="space-y-6">
             <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-emerald-800" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">Inquiry</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 leading-tight">
               Write to us.
             </h2>
             <p className="text-slate-500 text-sm tracking-wide leading-relaxed max-w-md">
               Whether you have questions about our cooking sessions, tour availability, or dietary requirements, our team is here to assist.
             </p>
          </div>

          <div className="w-full">
            <form
              action="https://formspree.io/f/mnnvppkq"
              method="POST"
              className="space-y-10"
            >
              <FloatingInput label="Full Name" name="name" type="text" />
              <FloatingInput label="Email Address" name="email" type="email" />
              
              <div className="group relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2 group-focus-within:text-emerald-800 transition-colors">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-emerald-800 transition-all resize-none text-sm tracking-wide placeholder:text-slate-100"
                  placeholder="Tell us about your plans..."
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-4 bg-[#064e3b] text-white font-black uppercase tracking-[0.3em] text-[10px] py-3.5 px-10 rounded-full transition-all hover:bg-[#14532d] shadow-xl active:scale-95"
              >
                <span>Send Inquiry</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const ContactDetail = ({ icon, title, value, href }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
    <div className="flex items-center gap-3 mb-1">
      <span className="text-emerald-700">{icon}</span>
      <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-emerald-800 transition-colors">{title}</span>
    </div>
    <p className="text-sm font-medium text-slate-900 ml-7">{value}</p>
  </a>
);

const SocialIcon = ({ icon, href }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-800 transition-colors text-xl">
    {icon}
  </a>
);

const FloatingInput = ({ label, name, type }: any) => (
  <div className="group relative">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1 group-focus-within:text-emerald-800 transition-colors">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required
      className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-emerald-800 transition-all text-sm tracking-wide"
    />
  </div>
);

export default ContactPage;