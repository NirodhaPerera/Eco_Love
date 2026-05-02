import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const images = [
  "/Eco_Love_Lodge/img_1.JPG",
  "/Eco_Love_Lodge/IMG_7120.JPG",
  "/Eco_Love_Lodge/IMG_7153.JPG",
  "/Eco_Love_Lodge/IMG_7144.JPG",       
  "/Eco_Love_Lodge/IMG_7130.JPG",
  "/Eco_Love_Lodge/IMG_7131.JPG",
  "/Eco_Love_Lodge/IMG_7132.JPG",
  "/Eco_Love_Lodge/IMG_7133.JPG",
];

const GallerySection: React.FC = () => {
  const navigate = useNavigate();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2, // Show a peek of the next slide for better UX
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  // Auto-play logic
  useEffect(() => {
    if (!slider) return;

    const autoPlay = () => {
      if (slider.current) {
        slider.current.next();
      }
    };

    timer.current = setInterval(autoPlay, 4000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <section className="bg-[#FDFCFB] py-24 px-6 md:px-12 lg:px-24 border-t border-slate-50">
      <div className="max-w-7xl mx-auto mb-16">
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-emerald-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
              The Collection
            </span>
            <div className="h-[1px] w-12 bg-emerald-800" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif italic text-slate-900 leading-tight">
            Lodge Gallery
          </h2>
          <p className="text-slate-500 text-sm tracking-wide max-w-xl leading-relaxed uppercase font-light">
            Take a glimpse into our serene world of comfort and nature.
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="max-w-[1400px] mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {images.map((src, index) => (
            <div
              key={index}
              className="keen-slider__slide rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white"
            >
              <img
                src={src}
                alt={`Eco Love Lodge view ${index + 1}`}
                className="w-full h-[450px] object-cover transition-transform duration-[1500ms] ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* See More Button - REFINED COMPACT STYLE */}
      <div className="text-center mt-16">
        <button
          onClick={() => navigate("/eco-love-lodge/gallery")}
          className="group relative inline-flex items-center gap-4 bg-[#064e3b] text-white font-black uppercase tracking-[0.3em] text-[10px] py-3.5 px-10 rounded-full transition-all hover:bg-[#14532d] shadow-xl active:scale-95"
        >
          <span>See More Photos</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;