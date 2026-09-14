import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Calendar, X, Menu, MessageCircle } from 'lucide-react';

interface HeaderKitProps {
  logoSrc: string;
  navLinks: { label: string; path: string }[];
  buttonLink: string;
  buttonLabel: string;
  logoSizeClass?: string;
  experiences?: { label: string; path: string }[];
}



const HeaderKit = ({
  logoSrc,
  navLinks,
  buttonLink,
  buttonLabel,
  logoSizeClass = 'w-28 md:w-40'
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

  // Lock body scroll when mobile menu is open without breaking global overflow
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 transition-all duration-700 pointer-events-none">
        <div 
          className={`mx-auto flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            scrolled 
              ? 'max-w-5xl bg-white/90 backdrop-blur-2xl py-2 md:py-3 px-5 md:px-8 rounded-full shadow-xl border border-white/20' 
              : 'max-w-7xl bg-transparent py-2 md:py-4 px-2 md:px-0'
          } pointer-events-auto`}
        >
          {/* Logo Section */}
          <Link to="/" className={`transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <img
              src={logoSrc}
              alt="Eco Love Logo"
              className={`${logoSizeClass} object-contain transition-all duration-700`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end
                className={({ isActive }) =>
                  `px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full ${
                    isActive
                      ? 'bg-green-900 text-white shadow-lg shadow-green-900/20'
                      : `${scrolled ? 'text-slate-600' : 'text-white'} hover:bg-green-50 hover:text-green-900`
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

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

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-slate-800 shadow-sm active:scale-95 transition-transform"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[200] transition-transform duration-500 ease-in-out lg:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Header Bar inside Drawer */}
          <div className="p-6 flex items-center justify-between border-b border-slate-50">
            <img src={logoSrc} alt="Logo" className="w-24 object-contain" />
            <button 
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8">
            {/* Primary Navigation */}
            <div className="flex flex-col gap-6 mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40">Navigation</span>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-serif text-green-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Experiences Section */}
         
            {/* Quick Contact & Socials */}
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40 block mb-4">Contact</span>
              <MobileMenuLink 
                href="https://wa.me/94774191148" 
                icon={<MessageCircle size={20}/>} 
                title="WhatsApp" 
                detail="+94 77 419 1148" 
              />
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.facebook.com/share/1AjgEvmJX3/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 hover:text-green-900"
                >
                  <FaFacebookF size={20}/>
                </a>
                <a 
                  href="https://www.instagram.com/ecolovekitchen?igsh=NjFldTBoMW4xbmk2&utm_source=qr" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 hover:text-green-900"
                >
                  <FaInstagram size={20}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileMenuLink = ({ href, icon, title, detail }: any) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-5 p-4 bg-slate-50 rounded-2xl w-full">
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-800 shadow-sm">{icon}</div>
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{title}</h4>
      <p className="text-slate-900 font-bold text-sm">{detail}</p>
    </div>
  </a>
);

export default HeaderKit;