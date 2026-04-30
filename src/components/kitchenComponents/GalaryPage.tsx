import React, { useEffect, useState } from "react";
import { X, Maximize2 } from "lucide-react";

const sliderImages = [
  '/Eco_Love_Kitchen/slider1.jpeg', 
  '/Eco_Love_Kitchen/slider2.jpeg', 
  '/Eco_Love_Kitchen/slider3.jpeg',
  '/Eco_Love_Kitchen/gallery/img_11.JPG',
  '/Eco_Love_Kitchen/gallery/img_10.JPG'
];

const galleryImages = [
  '/Eco_Love_Kitchen/slider1.jpeg', '/Eco_Love_Kitchen/slider2.jpeg', '/Eco_Love_Kitchen/slider3.jpeg', '/Eco_Love_Kitchen/slider4.jpeg',
  '/Eco_Love_Kitchen/slider5.jpeg', '/Eco_Love_Kitchen/slider6.jpeg', '/Eco_Love_Kitchen/slider7.jpeg',
  '/Eco_Love_Kitchen/about1.jpeg', '/Eco_Love_Kitchen/about2.jpeg', '/Eco_Love_Kitchen/about3.jpeg', '/Eco_Love_Kitchen/about4.jpeg',
  '/Eco_Love_Kitchen/about5.jpeg',
  '/Eco_Love_Kitchen/gallery/img_1.JPG', '/Eco_Love_Kitchen/gallery/img_2.JPG', '/Eco_Love_Kitchen/gallery/img_3.JPG',
  '/Eco_Love_Kitchen/gallery/img_5.JPG', '/Eco_Love_Kitchen/gallery/img_6.JPG',
  '/Eco_Love_Kitchen/gallery/img_7.JPG', '/Eco_Love_Kitchen/gallery/img_8.JPG', '/Eco_Love_Kitchen/gallery/img_9.JPG',
  '/Eco_Love_Kitchen/gallery/img_10.JPG', '/Eco_Love_Kitchen/gallery/img_11.JPG', '/Eco_Love_Kitchen/gallery/img_12.JPG',
  '/Eco_Love_Kitchen/gallery/img_13.JPG', '/Eco_Love_Kitchen/gallery/img_14.JPG', '/Eco_Love_Kitchen/gallery/img_15.JPG',
];

const GalleryPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans">
      
      
      <div className="relative w-full h-[85vh] overflow-hidden bg-slate-900">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
              index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
          >
            <img src={img} alt="Eco Love" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-white/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/80">The Gallery</span>
            <div className="h-[1px] w-12 bg-white/40" />
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-serif italic mb-8 drop-shadow-2xl">
            Symphony of <br/> Nature & Culture.
          </h1>
          <p className="text-white/80 text-[10px] md:text-xs font-light tracking-[0.4em] max-w-xl leading-loose uppercase">
            A visual documentation of heritage, joy, and the art of Sri Lankan cuisine.
          </p>
        </div>
      </div>

      
      <div className="max-w-screen-2xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800 block mb-4">Visual Stories</span>
          <h2 className="text-4xl font-serif italic text-slate-900">Moments from the Kitchen</h2>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="relative group overflow-hidden rounded-2xl bg-slate-100 cursor-none transition-all duration-700 hover:shadow-2xl"
            >
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size="{20}"/>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-slate-950/95 z-[100] flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in" 
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size="{32}"/>
          </button>
          
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;