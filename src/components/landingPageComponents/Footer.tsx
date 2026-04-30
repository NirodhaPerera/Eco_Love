import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white py-10 px-6"
      style={{
        backgroundImage: "url('/footer-bg.jpg')",
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="bg-black bg-opacity-50 rounded-lg p-8 max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-2">Eco Love</h3>
          <p className="text-sm text-gray-300">
            Where nature, tradition, and travel meet — explore, cook, and relax with us in Sri Lanka.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/eco-love-tours" className="hover:text-white">Tours</a></li>
            <li><a href="/eco-love-kitchen" className="hover:text-white">Kitchen</a></li>
            <li><a href="/the-lodge" className="hover:text-white">The Lodge</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-300">Galle, Sri Lanka</p>
          <p className="text-sm text-gray-300">
            Email: <a href="mailto:ecolove@gmail.com" className="hover:text-white">ecolove@gmail.com</a>
          </p>
          <p className="text-sm text-gray-300">Phone: +94 77 123 4567</p>
        </div>
      </div>

      <div className="bg-green-800 mt-10 py-4 text-center text-xs text-white">
        © {new Date().getFullYear()} Eco Love | Developed by <span className="text-green-400">Nirodha Adithya</span>
      </div>
    </footer>
  );
};

export default Footer;
