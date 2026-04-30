import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface HeaderKitProps {
  logoSrc: string;
  navLinks: { label: string; path: string }[];
  buttonLink: string;
  buttonLabel: string;
  logoSizeClass?: string; // Optional class for logo sizing
}

const HeaderKit = ({
  logoSrc,
  navLinks,
  buttonLink,
  buttonLabel,
  logoSizeClass = 'w-28 sm:w-36 md:w-44', // default if not provided
}: HeaderKitProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-md px-4 sm:px-8 py-3 sm:py-4 transition-colors duration-300 ${
        scrolled ? 'bg-white backdrop-blur shadow-md' : 'bg-none'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src={logoSrc}
          alt="Site Logo"
          className={`${logoSizeClass} object-contain`}
        />

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex gap-6 font-bold text-md ${scrolled ? 'text-green-800' : 'text-white'}`}>
          <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? 'bg-green-800 text-white'
                        : 'text-inherit hover:bg-gray-200 transition'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Buttons and Menu */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Book Button - Large */}
          <a href={buttonLink}>
            <button className="hidden sm:inline-flex lg:inline-flex items-center gap-2 bg-green-800 text-white font-semibold py-2 px-4 rounded-2xl shadow-md hover:bg-green-700 transition text-sm">
              <Calendar className="w-5 h-5" />
              {buttonLabel}
            </button>
          </a>

          {/* Book Button - Small */}
          <a href={buttonLink}>
            <button className="inline-flex sm:hidden items-center gap-1.5 bg-green-800 text-white text-xs rounded-xl px-2 py-1 shadow-md hover:bg-green-700 transition">
              <Calendar className="w-3.5 h-3.5" />
              Book
            </button>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-green-800 text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center gap-4 bg-white rounded-md p-4 shadow-md text-green-800 font-medium text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-emerald-600 font-bold underline'
                  : 'text-green-800'
              }
            >
              {link.label}
            </NavLink>
          ))}
          
        </div>
      )}
    </header>
  );
};

export default HeaderKit;
