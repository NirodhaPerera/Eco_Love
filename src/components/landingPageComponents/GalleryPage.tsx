import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// --- IMAGE ARRAYS ---
const walkingTourImages = Array.from({ length: 20 }, (_, i) => ({ 
  src: `/Eco_Love_Tours/Tour_Images/img${i + 1}.jpg`, category: 'Tours' 
}));
const cookeryImages = Array.from({ length: 15 }, (_, i) => ({ 
  src: `/Eco_Love_Tours/coockery/img_${i + 1}.JPG`, category: 'Kitchen' 
}));
const lodgeImages = Array.from({ length: 50 }, (_, i) => ({ 
  src: `/Eco_Love_Lodge/Gallery/img_${i + 1}.JPG`, category: 'Lodge' 
}));

// Hero Slider Images
const sliderImages = Array.from({ length: 10 }, (_, i) => `/Landing_Page_Images/IMG_${i + 1}.JPG`);

const allImages = [...walkingTourImages, ...cookeryImages, ...lodgeImages];
const categories = ['All', 'Kitchen', 'Tours', 'Lodge'];

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const [current, setCurrent] = useState(0);

  // --- AUTOMATIC SLIDER LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Hero ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[2500ms] ease-in-out ${
              index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
          />
        ))}
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#FDFCFB] z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-white/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/90">
              Visual Journey
            </span>
            <div className="h-[1px] w-12 bg-white/60" />
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="text-5xl md:text-8xl font-serif italic text-white leading-tight mb-8 drop-shadow-2xl"
          >
            Captured <br /> Moments
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] max-w-xl leading-relaxed"
          >
            Eco Love Sri Lanka — Where every frame tells a story.
          </motion.p>
        </div>
      </section>

      {/* GALLERY CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Filters Container */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-500 transform active:scale-95 ${
                  filter === cat 
                    ? 'bg-emerald-900 text-white shadow-2xl shadow-emerald-900/30' 
                    : 'bg-white text-slate-400 hover:text-emerald-800 border border-slate-100 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            Showing {filteredImages.length} images
          </p>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative group overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-50 shadow-sm"
              >
                <img
                  src={img.src}
                  alt={`Eco Love ${img.category} ${idx}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <span className="px-6 py-2 bg-white/95 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-emerald-900 shadow-xl">
                     {img.category}
                   </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

    
    </div>
  );
};

export default GalleryPage;