import  { useEffect, useState } from 'react';
import { FaBars, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Calendar, X, Phone, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface HeaderKitProps {
  logoSrc: string;
  navLinks: { label: string; path: string }[];
  buttonLink: string;
  buttonLabel: string;
  logoSizeClass?: string;
}

const HeaderKit = ({
  logoSrc,
  navLinks,
  buttonLink,
  buttonLabel,
  logoSizeClass = 'w-28 md:w-40',
}: HeaderKitProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        {/* Logo Section */}
        <div className={`transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-100'}`}>
          <img
            src={logoSrc}
            alt="Eco Love Logo"
            className={`${logoSizeClass} object-contain transition-all duration-700`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full ${
                  isActive
                    ? 'bg-green-900 text-white shadow-lg shadow-green-900/20'
                    : `${scrolled ? 'text-slate-600' : 'text-white'} hover:bg-green-50 hover:text-green-900`
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <a href={buttonLink} className="group">
            <button className={`flex items-center gap-2 rounded-full font-black uppercase tracking-widest transition-all duration-500 shadow-lg active:scale-95 ${
                scrolled 
                ? 'bg-green-900 text-white py-2 px-5 text-[9px]' 
                : 'bg-white text-green-900 py-3 px-6 text-[10px]'
            }`}>
              <Calendar size={scrolled ? 14 : 16} className="group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">{buttonLabel}</span>
              <span className="sm:hidden">Book</span>
            </button>
          </a>

          {/* Mobile Menu Toggle (Visible on Mobile & Tablet) */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/20 text-white backdrop-blur-md border border-white/30'
            }`}
          >
            <FaBars size={18} />
          </button>
        </div>
      </div>

      {/* FIXED MOBILE & TABLET OVERLAY */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[110] transition-all duration-500 ease-in-out lg:hidden ${
        menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        
        {/* Top Bar inside Menu */}
        <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between">
          <img src={logoSrc} alt="Eco Love Logo" className="w-24 object-contain" />
          <button 
            onClick={() => setMenuOpen(false)}
            className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-green-900 transition-colors shadow-sm"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-full gap-6 px-10 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40 mb-4">Nature & Culture</span>
            
            <div className="w-full space-y-2">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            `block w-full py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all ${
                                isActive ? 'bg-green-900 text-white shadow-xl' : 'text-slate-800 hover:bg-slate-50'
                            }`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>

            <div className="w-12 h-[1px] bg-slate-200 my-4" />

            {/* Quick Contact Links for Mobile User Convenience */}
            <div className="w-full space-y-3">
                <MobileLink href="https://wa.me/94774191148" icon={<MessageCircle size={18}/>} label="WhatsApp Chat" />
                <MobileLink href="tel:+94774191148" icon={<Phone size={18}/>} label="Call Inquiry" />
            </div>

            {/* Socials */}
            <div className="flex gap-6 mt-6">
                <a href="https://www.facebook.com/share/1DbyJLNNTJ/?mibextid=wwXIfr" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600"><FaFacebookF size={16}/></a>
                <a href="https://www.instagram.com/ecolovekitchen?igsh=MXYzZXNhbWxrN3J1://www.instagram.com/ecolovekitchen" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600"><FaInstagram size={16}/></a>
            </div>
        </div>
      </div>
    </nav>
  );
};

// Helper component for mobile menu contact links
const MobileLink = ({ href, icon, label }: any) => (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full bg-slate-50 text-slate-600 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-emerald-50 hover:text-emerald-900 transition-all">
        {icon}
        {label}
    </a>
);

export default HeaderKit;