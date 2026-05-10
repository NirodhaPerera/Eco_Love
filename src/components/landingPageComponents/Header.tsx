import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { Mail, Phone, MessageCircle, Menu, X } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { path: '/blog', label: 'Tales from the Island' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reviews', label: 'Reviews' },
  ];

 // Inside Header.tsx
const experiences = [
  { path: '/eco-love-kitchen', label: 'Spices, Stories & Sri Lankan Kitchen' },
  { path: '/eco-love-tours/experiences/walking-tours', label: 'Walk, Stories & Hidden Corners' },
  { path: '/eco-love-tours/experiences/wildlife-safari', label: 'Slow Safaris & Wild Stories' },
  { path: '/eco-love-tours/experiences/jewelry-workshop', label: 'From Flame to Finger' },
  { path: '/eco-love-tours/experiences/wood-carving', label: 'Carved By Hand, Shaped by Tradition' },
  { path: '/eco-love-tours/experiences/cycling-tours', label: 'Pedals, Path & Hidden Stories' },
];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 transition-all duration-700 pointer-events-none">
        <div 
          className={`mx-auto flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            scrolled 
              ? 'max-w-6xl bg-white/90 backdrop-blur-2xl py-2 md:py-3 px-5 md:px-8 rounded-full shadow-xl border border-white/20' 
              : 'max-w-7xl bg-transparent py-2 md:py-4 px-2 md:px-0'
          } pointer-events-auto`}
        >
          {/* Brand Identity */}
          <Link to="/" className={`transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <img
              src="/logo-ecolove2.png"
              alt="Eco Love Logo"
              className={`transition-all duration-700 object-contain ${
                scrolled ? 'w-20 md:w-28' : 'w-28 md:w-44'
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
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

            {/* Experiences Dropdown with "Bridge" Fix */}
            <div className="relative group py-2"> {/* Added padding here to act as a bridge */}
              <button className={`flex items-center gap-2 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full ${scrolled ? 'text-slate-600' : 'text-white'} hover:bg-green-50 hover:text-green-900`}>
                Experiences <FaChevronDown size={8} className="group-hover:rotate-180 transition-transform duration-500" />
              </button>
              
              {/* The Dropdown Menu */}
              <div className="absolute top-full left-0 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-[110]">
                {/* This extra div ensures there is NO gap between the button and the list */}
                <div className="pt-2"> 
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 flex flex-col gap-1 overflow-hidden">
                    {experiences.map((exp) => (
                      <NavLink 
                        key={exp.path} 
                        to={exp.path} 
                        className={({ isActive }) => 
                          `px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-200 ${
                            isActive 
                            ? 'bg-green-50 text-green-900' 
                            : 'text-slate-600 hover:bg-green-50/50 hover:text-green-900'
                          }`
                        }
                      >
                        {exp.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="hidden md:flex items-center gap-2">
            <HeaderOrb href="tel:+94774191148" icon={<Phone size={scrolled ? 14 : 16} />} label="Call" scrolled={scrolled} />
            <HeaderOrb href="https://wa.me/94774191148" icon={<FaWhatsapp size={scrolled ? 14 : 16} />} label="WhatsApp" scrolled={scrolled} />
            <div className="h-8 w-[1px] bg-slate-200/50 mx-1" />
            <HeaderOrb href="mailto:ecolovetours@gmail.com" icon={<Mail size={12} />} label="Email" isSocial scrolled={scrolled} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a href="tel:+94774191148" className="w-10 h-10 rounded-full bg-green-900 text-white flex items-center justify-center shadow-lg">
              <Phone size={18} />
            </a>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-slate-800 shadow-sm active:scale-95 transition-transform"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY - Moved outside of the relative nav for full screen coverage */}
      <div 
        className={`fixed inset-0 bg-white z-[200] transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="p-6 flex items-center justify-between border-b border-slate-50">
            <img src="/logo-ecolove2.png" alt="Logo" className="w-24" />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8">
            <div className="flex flex-col gap-6 mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40">Navigation</span>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-green-900">Blog</Link>
              <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-green-900">Gallery</Link>
              <Link to="/reviews" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-green-900">Reviews</Link>
            </div>

            <div className="flex flex-col gap-4 mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40">Our Experiences</span>
              {experiences.map((exp, idx) => (
                <Link 
                  key={idx} 
                  to={exp.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl"
                >
                  <div className="w-2 h-2 rounded-full bg-green-900" />
                  <span className="font-bold text-slate-700">{exp.label}</span>
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-800/40 block mb-4">Contact</span>
              <MobileMenuLink href="https://wa.me/94774191148" icon={<MessageCircle size={20}/>} title="WhatsApp" detail="+94 77 419 1148" />
              <div className="flex gap-4 pt-4">
                <a href="#" className="flex-1 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600"><FaFacebookF size={20}/></a>
                <a href="#" className="flex-1 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600"><FaInstagram size={20}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Sub-components
const HeaderOrb = ({ icon, href, isSocial = false, scrolled }: any) => (
  <div className="group relative flex flex-col items-center">
    <a 
      href={href} 
      className={`flex items-center justify-center rounded-full transition-all duration-500 ${
        scrolled ? 'w-10 h-10' : 'w-12 h-12 shadow-sm border border-green-100/30'
      } ${isSocial ? 'bg-white hover:bg-green-900 hover:text-white text-slate-400' : 'bg-green-50 text-green-900 hover:bg-green-900 hover:text-white'}`}
    >
      {icon}
    </a>
  </div>
);

const MobileMenuLink = ({ href, icon, title, detail }: any) => (
  <a href={href} className="flex items-center gap-5 p-4 bg-slate-50 rounded-2xl w-full">
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-800 shadow-sm">{icon}</div>
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{title}</h4>
      <p className="text-slate-900 font-bold text-sm">{detail}</p>
    </div>
  </a>
);

export default Header;