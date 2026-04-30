import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Calendar } from 'lucide-react';
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
            alt="Site Logo"
            className={`${logoSizeClass} object-contain transition-all duration-700`}
          />
        </div>

        {/* Desktop Navigation - Minimalist Editorial Style */}
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
          {/* Action Button (Book/Calendar) */}
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/20 text-white backdrop-blur-md border border-white/30'
            }`}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Matches the previous design */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-[-1] transition-all duration-700 ease-in-out md:hidden ${
        menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-6 px-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40 mb-4">Discover Eco Love</span>
            
            {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                        `w-full text-center py-4 rounded-2xl text-sm font-black uppercase tracking-[0.3em] transition-all ${
                            isActive ? 'bg-green-900 text-white shadow-xl scale-105' : 'text-slate-800 active:bg-green-50'
                        }`
                    }
                >
                    {link.label}
                </NavLink>
            ))}

            <div className="w-12 h-[1px] bg-slate-200 my-4" />

            <a href={buttonLink} className="w-full">
                <button className="w-full bg-green-50 text-green-900 py-5 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs">
                    <Calendar size={18} />
                    {buttonLabel}
                </button>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderKit;