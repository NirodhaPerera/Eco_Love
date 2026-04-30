import { useState, useEffect } from 'react';
import { Calendar, Download } from 'lucide-react';

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
  buttonLabel = "Book Now",
  buttonLink = "#",
  downloadLink,
  downloadLabel
}: HeroKitProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        <p className="text-white text-base sm:text-lg mb-6 max-w-xl drop-shadow-md">{subtitle}</p>
        <div className="flex gap-4">
          <a href={buttonLink}>
            <button className="inline-flex items-center gap-2 bg-green-800 text-white text-sm sm:text-base font-semibold py-2 px-2 sm:px-4 rounded-xl shadow hover:bg-green-700 transition">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              {buttonLabel}
            </button>
          </a>
          {downloadLink && (
            <a href={downloadLink} download className="inline-flex items-center gap-2 bg-white text-sm sm:text-base text-black font-semibold py-2 px-4 sm:px-4 rounded-xl shadow hover:bg-white transition">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              {downloadLabel || 'Download'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroKit;
