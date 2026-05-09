import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Camera } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const images = [
  "/Eco_Love_Tours/Tour_Images/image1.jpg",
  "/Eco_Love_Tours/Tour_Images/image2.jpg",
  "/Eco_Love_Tours/Tour_Images/image3.jpg",
  "/Eco_Love_Tours/Tour_Images/image4.jpg",
  "/Eco_Love_Tours/Tour_Images/image5.jpg",
  "/Eco_Love_Tours/Tour_Images/image6.jpg",
  "/Eco_Love_Tours/Tour_Images/image7.jpg",
  "/Eco_Love_Tours/Tour_Images/image8.jpg",
  "/Eco_Love_Tours/Tour_Images/image9.jpg",
  "/Eco_Love_Tours/Tour_Images/image10.jpg",
  "/Eco_Love_Tours/Tour_Images/image11.jpg",
  "/Eco_Love_Tours/Tour_Images/image12.jpg",
  "/Eco_Love_Tours/Tour_Images/image13.jpg",
  "/Eco_Love_Tours/Tour_Images/image14.jpg",
  "/Eco_Love_Tours/Tour_Images/image15.jpg",
  "/Eco_Love_Tours/Tour_Images/image16.jpg",
  "/Eco_Love_Tours/Tour_Images/image17.jpg",
];

const animation = { duration: 15000, easing: (t: number) => t };

const GallerySection: React.FC = () => {
  const navigate = useNavigate();

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 1.2,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 30 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 40 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <section className="bg-[#FDFCFB] py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-emerald-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
              Visual Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 leading-tight">
            Capturing the <br /> Soul of Sri Lanka.
          </h2>
        </div>

        <button
          onClick={() => navigate("/eco-love-tours/gallery")}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/20 pb-2 hover:border-emerald-900 transition-all"
        >
          View Full Gallery <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Cinematic Continuous Slider */}
      <div ref={sliderRef} className="keen-slider cursor-grab active:cursor-grabbing">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide relative group aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100"
          >
            <img
              src={src}
              alt={`Tour Chapter ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
            />
            {/* Minimalist Overlay */}
            <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
               <Camera className="text-white/80 scale-50 group-hover:scale-100 transition-transform duration-500" size={32} strokeWidth={1} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
         <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
           Drag to explore our memories
         </p>
      </div>
    </section>
  );
};

export default GallerySection;