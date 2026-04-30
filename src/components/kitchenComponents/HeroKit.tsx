import { useState, useEffect } from 'react';
import { Calendar, Download, ChevronRight } from 'lucide-react';

interface HeroKitProps {
  images: string[];
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonLink?: string;
  downloadLink?: string;
  downloadLabel?: string;
}

const HeroKit = ({
  images,
  title,
  subtitle,
  buttonLabel = "Book Your Experience",
  buttonLink = "#",
  downloadLink,
  downloadLabel
}: HeroKitProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          } transition-transform duration-[5000ms]`}
        >
          <img src={img} alt="Nature Slide" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>
      ))}

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl font-serif italic mb-6 max-w-5xl drop-shadow-2xl">
          {title}
        </h1>

        <p className="text-white/90 text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] max-w-xl mb-10 leading-loose">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
          {/* REFINED SMALLER BUTTON */}
          <a href={buttonLink} className="group">
            <button className="flex items-center gap-3 bg-white text-green-900 font-black uppercase tracking-[0.2em] text-[10px] py-3.5 px-8 rounded-full transition-all duration-500 hover:bg-green-900 hover:text-white shadow-xl active:scale-95">
              <Calendar size={14} className="group-hover:rotate-12 transition-transform" />
              {buttonLabel}
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </a>

          {downloadLink && (
            <a href={downloadLink} download className="group flex items-center gap-3 text-white/70 hover:text-white transition-all">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors">
                <Download size={14} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">{downloadLabel || 'Menu'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroKit;