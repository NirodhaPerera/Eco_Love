import  { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone, MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 transition-all duration-700 pointer-events-none">
      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled 
            ? 'max-w-5xl bg-white/90 backdrop-blur-2xl py-2 md:py-3 px-5 md:px-8 rounded-full shadow-xl border border-white/20' 
            : 'max-w-7xl bg-transparent py-2 md:py-4 px-2 md:px-0'
        } pointer-events-auto`}
      >
        {/* Left Side: Brand Identity */}
        <div className={`transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-100'}`}>
          <div className="relative group flex flex-col items-start cursor-pointer">
            <img
              src="logo-ecolove2.png"
              alt="Eco Love Logo"
              className={`transition-all duration-700 object-contain ${
                scrolled ? 'w-20 md:w-28' : 'w-28 md:w-44'
              }`}
            />
            {!scrolled && (
              <p className="hidden md:block font-serif italic text-green-900 text-sm mt-[-6px] tracking-wide">
                Nature & Culture.
              </p>
            )}
          </div>
        </div>

        {/* Desktop View: Iconic Orb Cluster */}
        <div className="hidden md:flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            
            <HeaderOrb href="tel:+94774191148" icon={<Phone size={scrolled ? 14 : 16} />} label="Call" scrolled={scrolled} />
            <HeaderOrb href="https://wa.me/94774191148" icon={<FaWhatsapp size={scrolled ? 14 : 16} />} label="WhatsApp"  scrolled={scrolled} />
          </div>
          <div className="h-8 w-[1px] bg-slate-200 mx-2" />
          <div className="flex items-center gap-2">
            <HeaderOrb href="#" icon={<FaFacebookF size={12} />} label="Facebook" isSocial scrolled={scrolled} />
            <HeaderOrb href="#" icon={<FaInstagram size={12} />} label="Instagram" isSocial scrolled={scrolled} />
            <HeaderOrb href="mailto:ecolovetours@gmail.com" icon={<Mail size={12} />} label="Email" isSocial scrolled={scrolled} />
          </div>
        </div>

        {/* Mobile View: Simplified Action Button */}
        <div className="md:hidden flex items-center gap-2">
          <a 
            href="tel:+94774191148" 
            className="w-10 h-10 rounded-full bg-green-900 text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            <Phone size={18} />
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-slate-800 shadow-sm active:scale-90 transition-transform"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}

        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] transition-all duration-500 ease-in-out md:hidden ${
            mobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}>
            
            {/* Top Navigation Bar in Menu */}
            <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between">
              {/* Brand Logo */}
              <div className="flex items-center gap-2">
                <img
                    src="logo-ecolove2.png"
                    alt="Eco Love Logo"
                    className="w-24 object-contain"
                  />
                
              </div>

              {/* Refined Close Button */}
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-green-900 transition-colors shadow-sm"
                aria-label="Close Menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center justify-center h-full gap-8 px-10 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40">
                Connect with us
              </span>
              
              <div className="space-y-4 w-full">
                <MobileMenuLink 
                  href="tel:+94774191148" 
                  icon={<Phone size={20}/>} 
                  title="Call Us" 
                  detail="+94 77 419 1148" 
                />
                <MobileMenuLink 
                  href="mailto:ecolovetours@gmail.com" 
                  icon={<Mail size={20}/>} 
                  title="Email Us" 
                  detail="ecolovetours@gmail.com" 
                />
                <MobileMenuLink 
                  href="https://wa.me/94774191148" 
                  icon={<MessageCircle size={20}/>} 
                  title="WhatsApp" 
                  detail="+94 77 419 1148" 
                />
              </div>

              <div className="flex gap-6 mt-4">
                <a 
                  href="https://www.facebook.com/share/1DbyJLNNTJ/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm"
                >
                  <FaFacebookF size={18}/>
                </a>
                <a 
                  href="https://www.instagram.com/ecolovekitchen?igsh=MXYzZXNhbWxrN3J1" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm"
                >
                  <FaInstagram size={18}/>
                </a>
              </div>

              <p className="font-serif italic text-green-900 text-xl mt-8">Nature & Culture.</p>
            </div>
        </div>
    </nav>
  );
};

// Sub-components
const HeaderOrb = ({ icon, href, label, isSocial = false, scrolled }: any) => (
  <div className="group relative flex flex-col items-center">
    <a href={href} className={`flex items-center justify-center rounded-full transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-12 h-12 shadow-sm border border-green-100/50'} ${isSocial ? 'bg-white hover:bg-green-900 hover:text-white' : 'bg-green-50 text-green-900 hover:bg-green-900 hover:text-white'}`}>
      {icon}
    </a>
    <span className="absolute -bottom-8 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 text-[9px] font-black uppercase tracking-[0.2em] text-green-800 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md shadow-lg border border-white whitespace-nowrap">{label}</span>
  </div>
);

const MobileMenuLink = ({ href, icon, title, detail }: any) => (
  <a href={href} className="flex items-center gap-5 p-4 bg-slate-50 rounded-2xl w-full text-left active:bg-green-50 transition-colors">
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-800 shadow-sm">{icon}</div>
    <div>
      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{title}</h4>
      <p className="text-slate-900 font-medium">{detail}</p>
    </div>
  </a>
);

export default Header;