import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps, SiTripadvisor } from 'react-icons/si';

type SiteKey = 'kitchen' | 'tours' | 'lodge';

const footerData: Record<SiteKey, {
  title: string;
  tagline: string;
  desc: string;
  links: { name: string; path: string }[];
  email: string;
  phone: string;
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
    google: string;
    tripadvisor: string;
  };
}> = {
  kitchen: {
    title: 'Eco Love Kitchen',
    tagline: 'Culinary Heritage',
    desc: 'Discover authentic Sri Lankan flavors and traditional cooking experiences—fresh, natural, and full of love.',
    links: [
      {name: 'Home', path: '/eco-love-kitchen'},
      { name: 'Session', path: '/eco-love-kitchen/session' },
      { name: 'Gallery', path: '/eco-love-kitchen/gallery' },
      { name: 'Contact', path: '/eco-love-kitchen/contact' },
    ],
    email: 'ecolovetours@gmail.com',
    phone: '+94 77 419 1148',
    social: {
      facebook: 'https://www.facebook.com/share/1Ce5zKiE1B/',
      instagram: 'https://instagram.com/ecolovekitchen',
      tiktok: 'https://www.tiktok.com/@ecolovekitchen',
      google: 'https://g.co/kgs/rnwAB63',
      tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g297896-d19911120-Reviews-Eco_Love_Tours-Galle_Galle_District_Southern_Province.html',
    },
  },
  tours: {
    title: 'Eco Love Tours',
    tagline: 'Soulful Journeys',
    desc: 'Tailored Sri Lankan travel experiences from ancient cities to wild safaris—designed for the conscious traveler.',
    links: [
      { name: 'Home', path: '/eco-love-tours' },
      { name: 'Experiences', path: '/eco-love-tours/experiences' },
      { name: 'Tours', path: '/eco-love-tours/tours' },
      { name: 'Destinations', path: '/eco-love-tours/destinations' },
      { name: 'Contact', path: '/eco-love-tours/contact' },
    ],
    email: 'ecolovetours@gmail.com',
    phone: '+94 77 419 1148',
    social: {
      facebook: 'https://www.facebook.com/share/1Ce5zKiE1B/',
      instagram: 'https://instagram.com/ecolovetours',
      tiktok: 'https://www.tiktok.com/@ecolovetours',
      google: 'https://g.co/kgs/rnwAB63',
      tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g297896-d19911120-Reviews-Eco_Love_Tours-Galle_Galle_District_Southern_Province.html',
    },
  },
  lodge: {
    title: 'The Lodge by Eco Love',
    tagline: 'Galle Sanctuary',
    desc: 'A cozy hideaway in the heart of Galle, perfect for peaceful retreats, creative workshops, and cultural stays.',
    links: [
      { name: 'Home', path: '/eco-love-lodge' },
      { name: 'Stays', path: '/eco-love-lodge/stays' },
      { name: 'Gallery', path: '/eco-love-lodge/gallery' },
      { name: 'Contact', path: '/eco-love-lodge/contact' },
    ],
    email: 'ecolovetours@gmail.com',
    phone: '+94 77 419 1148',
    social: {
      facebook: 'https://www.facebook.com/share/1Ce5zKiE1B/',
      instagram: 'https://instagram.com/ecolovetours',
      tiktok: 'https://www.tiktok.com/@ecolovetours',
      google: 'https://g.co/kgs/rnwAB63',
      tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g297896-d19911120-Reviews-Eco_Love_Tours-Galle_Galle_District_Southern_Province.html',
    },
  },
};

const Footer: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let site: SiteKey = 'tours'; 
  if (path.startsWith('/eco-love-lodge')) site = 'lodge';
  else if (path.startsWith('/eco-love-kitchen')) site = 'kitchen';
  else if (path.startsWith('/eco-love-tours')) site = 'tours';

  const { title, tagline, desc, links, email, phone, social } = footerData[site];

  return (
    <footer className="bg-[#064e3b] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif italic tracking-tight">{title}</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400/80">{tagline}</p>
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200/60 leading-relaxed font-light">
            {desc}
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-100/40">Navigate</h4>
          <ul className="flex flex-col gap-4 text-[11px] uppercase tracking-widest font-medium">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.path} className="hover:text-emerald-300 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Presence */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-100/40">Connect</h4>
          <div className="grid grid-cols-3 gap-6 items-center w-max">
            <SocialIcon href={social.facebook} icon={<FaFacebookF size={14} />} />
            <SocialIcon href={social.instagram} icon={<FaInstagram size={16} />} />
            <SocialIcon href={social.tiktok} icon={<FaTiktok size={14} />} />
            <SocialIcon href={social.google} icon={<SiGooglemaps size={14} />} />
            <SocialIcon href={social.tripadvisor} icon={<SiTripadvisor size={16} />} />
            <SocialIcon href={`https://wa.me/${phone.replace(/\D/g, '')}`} icon={<FaWhatsapp size={16} />} />
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-100/40">Inquiries</h4>
          <div className="text-[11px] tracking-[0.1em] space-y-4 font-light text-emerald-50/80">
            <p>Galle, Sri Lanka</p>
            <p className="hover:text-white transition-colors">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className="text-emerald-300 font-medium">{phone}</p>
          </div>
        </div>
      </div>

      {/* Signature Credits */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-emerald-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] uppercase tracking-[0.5em] text-emerald-100/30">
          © {new Date().getFullYear()} {title}. Crafted in Sri Lanka.
        </p>
        <p className="text-[9px] uppercase tracking-[0.3em] text-emerald-100/40 font-bold">
          Developed by <span className="text-emerald-400">Nirodha Perera</span>
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-emerald-100/60 hover:text-white transition-all hover:scale-110"
  >
    {icon}
  </a>
);

export default Footer;