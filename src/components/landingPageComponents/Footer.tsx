import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#064e3b] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
        
        {/* Brand Identity */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif italic tracking-tight">Eco Love</h3>
          <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200/60 leading-relaxed font-light">
            Where nature, tradition, and travel meet. Explore the soul of Sri Lanka through mindful stays and culinary heritage.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-100/40">Explore</h4>
          <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-widest font-medium">
            <li><a href="/eco-love-tours" className="hover:text-emerald-300 transition-colors">Tours</a></li>
            <li><a href="/eco-love-kitchen" className="hover:text-emerald-300 transition-colors">Kitchen</a></li>
            <li><a href="/the-lodge" className="hover:text-emerald-300 transition-colors">The Lodge</a></li>
          </ul>
        </div>

        {/* Social Presence */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-100/40">Connect</h4>
          <div className="flex gap-8 items-center">
            <a href="https://www.facebook.com/share/1Ce5zKiE1B/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-all hover:scale-110">
              <FaFacebookF size={16} />
            </a>
            <a href="https://www.instagram.com/ecolovetours" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-all hover:scale-110">
              <FaInstagram size={18} />
            </a>
            <a href="https://wa.me/94774191148" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-all hover:scale-110">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-100/40">Inquiries</h4>
          <div className="text-[11px] tracking-[0.1em] space-y-3 font-light text-emerald-50/80">
            <p className="flex items-center gap-2">Galle, Sri Lanka</p>
            <p><a href="mailto:ecolovetours@gmail.com" className="hover:text-white transition-colors">ecolovetours@gmail.com</a></p>
            <p className="text-emerald-200">+94 77 419 1148</p>
          </div>
        </div>
      </div>

      {/* Signature Credits */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-emerald-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] uppercase tracking-[0.5em] text-emerald-100/30">
          © {currentYear} Eco Love Sri Lanka. All Rights Reserved.
        </p>
        <p className="text-[9px] uppercase tracking-[0.3em] text-emerald-100/40 font-black">
          Crafted by <span className="text-emerald-400">Nirodha Perera</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;