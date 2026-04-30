import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiGooglemaps, SiTripadvisor } from 'react-icons/si';

type SiteKey = 'kitchen' | 'tours' | 'lodge';

const footerData: Record<SiteKey, {
  title: string;
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
    desc: 'Discover authentic Sri Lankan flavors and cooking experiences — fresh, natural, and full of love.',
    links: [
      { name: 'Home', path: '/eco-love-kitchen' },
      { name: 'Sessions', path: '/eco-love-kitchen/session' },
      { name: 'Gallery', path: '/eco-love-kitchen/gallery' },
      { name: 'Contact', path: '/eco-love-kitchen/contact' },
    ],
    email: 'ecolovetours@gmail.com',
    phone: '+94 77 419 1148',
    social: {
      facebook: 'https://facebook.com/ecolovekitchen',
      instagram: 'https://instagram.com/ecolovekitchen',
      tiktok: 'https://www.tiktok.com/@ecolovekitchen',
      google: 'https://g.co/kgs/kitchen123',
      tripadvisor: 'https://tripadvisor.com/kitchen-review',
    },
  },
  tours: {
    title: 'Eco Love Tours',
    desc: 'Tailored Sri Lankan travel experiences from ancient cities to wild safaris — explore with love.',
    links: [
      { name: 'Home', path: '/eco-love-tours' },
      { name: 'Tours', path: '/eco-love-tours/tours' },
      { name: 'Destinations', path: '/eco-love-tours/destinations' },
      { name: 'Contact', path: '/eco-love-tours/contact' },
    ],
    email: 'ecolovetours@gmail.com',
    phone: '+94 77 411 9148',
    social: {
      facebook: 'https://facebook.com/ecolovetours',
      instagram: 'https://instagram.com/ecolovetours',
      tiktok: 'https://www.tiktok.com/@ecolovetours',
      google: 'https://g.co/kgs/rnwAB63',
      tripadvisor: 'https://tripadvisor.com/tours-review',
    },
  },
  lodge: {
    title: 'The Lodge by Eco Love',
    desc: 'A cozy hideaway in Galle, perfect for peaceful retreats, creative workshops, and cultural stays.',
    links: [
      { name: 'Home', path: '/eco-love-lodge' },
      { name: 'Stays', path: '/eco-love-lodge/stays' },
      { name: 'Gallery', path: '/eco-love-lodge/gallery' },
      { name: 'Contact', path: '/eco-love-lodge/contact' },
    ],
    email: 'ecolovetours@gmail.com',
    phone: '+94 77 419 1148',
    social: {
      facebook: 'https://facebook.com/ecolovelodge',
      instagram: 'https://instagram.com/ecolovelodge',
      tiktok: 'https://www.tiktok.com/@ecolovelodge',
      google: 'https://g.co/kgs/lodge123',
      tripadvisor: 'https://tripadvisor.com/lodge-review',
    },
  },
};

const Footer: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let site: SiteKey = 'kitchen'; // default fallback
  if (path.startsWith('/eco-love-tours')) site = 'tours';
  else if (path.startsWith('/eco-love-lodge')) site = 'lodge';
  else if (path.startsWith('/eco-love-kitchen')) site = 'kitchen';

  const { title, desc, links, email, phone, social } = footerData[site];

  return (
    <footer
      className="relative text-white py-10 px-6"
      style={{
        backgroundImage: "url('/footer-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="bg-black bg-opacity-50 rounded-lg p-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.path} className="hover:text-white transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaFacebookF />
            </a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaInstagram />
            </a>
            <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaTiktok />
            </a>
            <a href={social.google} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <SiGooglemaps />
            </a>
            <a href={social.tripadvisor} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <SiTripadvisor />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-300">Galle, Sri Lanka</p>
          <p className="text-sm text-gray-300">
            Email: <a href={`mailto:${email}`} className="hover:text-white transition">{email}</a>
          </p>
          <p className="text-sm text-gray-300">Phone: {phone}</p>
        </div>
      </div>

      <div className="bg-green-800 mt-10 py-4 text-center text-xs text-white">
        © {new Date().getFullYear()} {title} | Developed by <span className="text-green-300">Nirodha Adithya</span>
      </div>
    </footer>
  );
};

export default Footer;
