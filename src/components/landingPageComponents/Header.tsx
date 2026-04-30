import  { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Mail, Phone } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-700 pointer-events-none">
      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled 
            ? 'max-w-5xl bg-white/80 backdrop-blur-2xl py-3 px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/20' 
            : 'max-w-7xl bg-transparent py-4 px-0'
        } pointer-events-auto`}
      >
        {/* Left Side: Brand Seal */}
        <div 
          className={`transition-all duration-700 ${
            scrolled ? 'scale-90' : 'scale-100'
          }`}
        >
          <div className="relative group flex flex-col items-start cursor-pointer">
            <img
              src="logo-ecolove2.png"
              alt="Eco Love Logo"
              className={`transition-all duration-700 object-contain ${
                scrolled ? 'w-24 md:w-28' : 'w-32 md:w-44'
              }`}
            />
            {!scrolled && (
              <p className="font-serif italic text-green-900 text-sm mt-[-6px] tracking-wide">
                Nature & Culture.
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Iconic Orb Cluster */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Contact Group */}
          <div className="flex items-center gap-2">
            <HeaderOrb 
              href="mailto:info@ecolove.com" 
              icon={<Mail size={scrolled ? 14 : 16} />} 
              label="Email" 
              scrolled={scrolled}
            />
            <HeaderOrb 
              href="tel:+94712345678" 
              icon={<Phone size={scrolled ? 14 : 16} />} 
              label="Call" 
              scrolled={scrolled}
            />
          </div>

          {/* Vertical Divider Line */}
          <div className={`h-8 w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent mx-2 transition-opacity duration-500 ${scrolled ? 'opacity-50' : 'opacity-100'}`} />

          {/* Social Group */}
          <div className="flex items-center gap-2">
            <HeaderOrb 
              href="#" 
              icon={<FaFacebookF size={scrolled ? 12 : 14} />} 
              label="Facebook" 
              isSocial 
              scrolled={scrolled}
            />
            <HeaderOrb 
              href="#" 
              icon={<FaInstagram size={scrolled ? 12 : 14} />} 
              label="Instagram" 
              isSocial 
              scrolled={scrolled}
            />
            <HeaderOrb 
              href="#" 
              icon={<FaWhatsapp size={scrolled ? 12 : 14} />} 
              label="WhatsApp" 
              isSocial 
              scrolled={scrolled}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Sub-component for the circular "Orb" buttons
const HeaderOrb = ({ icon, href, label, isSocial = false, scrolled }: { icon: any, href: string, label: string, isSocial?: boolean, scrolled: boolean }) => (
  <div className="group relative flex flex-col items-center">
    <a
      href={href}
      className={`flex items-center justify-center rounded-full transition-all duration-500 border border-transparent
        ${scrolled ? 'w-10 h-10' : 'w-12 h-12 shadow-sm border-green-100/50'}
        ${isSocial 
          ? 'bg-white hover:bg-green-900 hover:text-white shadow-lg shadow-green-900/5' 
          : 'bg-green-50 text-green-900 hover:bg-green-900 hover:text-white'
        }
      `}
    >
      <span className="transition-transform duration-500 group-hover:scale-110">
        {icon}
      </span>
    </a>
    
    {/* Floating Tooltip */}
    <span className="absolute -bottom-8 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 text-[9px] font-black uppercase tracking-[0.2em] text-green-900 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md shadow-lg border border-white">
      {label}
    </span>
  </div>
);

export default Header;

