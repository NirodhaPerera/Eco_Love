import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom'; // Essential for navigation


// --- DATA ---
const sliderImages = Array.from({ length: 10 }, (_, i) => `/Landing_Page_Images/IMG_${i + 1}.JPG`);

const blogPosts = [
  {
  id: "galle-fort-mythology", // Use the next available ID
  title: "Where Greek Mythology Meets Colonial History: Aeolus Bastion",
  excerpt: "Discover how the god of wind and a flash of blue wings make the sunsets at Galle Fort truly unforgettable.",
  image: "/Blog_Img/galle_fort_mythology/img4.jpeg", // Use a high-quality rampart photo
  author: "Malik",
  date: "May 10, 2026",
  readTime: "4 min read",
  category: "Stories",
  content: `
    <p class="italic text-emerald-800 font-bold">“Machan, kotuwe yamuda?”</p>
    <p>This is something you hear from many youngsters in Galle when the sun begins to set. It means “Dude, shall we go to the fort?”</p>
    
    <p>For locals, Galle Fort is filled with memories. It’s the old jetty where we learned to swim, the star bastion where we spotted sea turtles, or the ramparts where we played cricket. If you want to feel the soul of this place, the best way is always on foot.</p>

    <img src="/Eco_Love_Tours/Walking Tours Images/img5.jpg" alt="Walking Galle Fort" class="rounded-[2.5rem] my-12 w-full object-cover h-[450px]" />

    <h3 class="text-3xl font-serif italic text-slate-900 mt-12 mb-6">The Aeolus Bastion</h3>
    <p>There is one specific bastion which is very popular as a sunset viewpoint: <strong>Aeolus Bastion</strong>. While you wait for the sun to dip, look closely at the old stone walls. You might see a White-throated kingfisher perched like royalty.</p>
    
    <p>This bird is a bridge connecting colonial history with Greek mythology. In the myths, Aeolus was the God of the Wind. His daughter, Alcyone, was transformed into a kingfisher after her husband died at sea, so they could be together forever.</p>

    <blockquote class="border-l-4 border-emerald-800 pl-8 py-4 my-12 italic text-2xl text-slate-700 font-serif">
      "This is the story behind 'Halcyon Days'—the peaceful, calm weather we enjoy at sea."
    </blockquote>

    <img src="/Eco_Love_Tours/Nature/kingfisher.jpg" alt="Kingfisher at Galle Fort" class="rounded-[2.5rem] my-12 w-full object-cover h-[450px]" />

    <h3 class="text-3xl font-serif italic text-slate-900 mt-12 mb-6">A Moment of Reflection</h3>
    <p>Of course, it’s a mythical story. But imagine spotting that flash of blue wings while standing on a bastion named after the God of Wind. It makes the sunset unforgettable.</p>
    
    <p>Next time you walk the ramparts, pause. Between the sea winds and the fading sunlight, you may discover that Galle Fort carries stories far older than its colonial walls.</p>
  `
}
  
];

const BlogPage = () => {
  const [current, setCurrent] = useState(0);

  // --- AUTOMATIC HERO SLIDER ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredPost = blogPosts[0];

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans">
     

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Blog Hero ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[2500ms] ease-in-out ${
              index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#FDFCFB] z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-white/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/90">
              The Eco Love Journal
            </span>
            <div className="h-[1px] w-12 bg-white/60" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif italic text-white leading-tight mb-8 drop-shadow-2xl"
          >
            Stories & <br /> Insights
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] max-w-xl leading-relaxed"
          >
            Deep dives into Sri Lankan culture, cuisine, and slow living.
          </motion.p>
        </div>
      </section>

      {/* FEATURED POST (With Link) */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-30 mb-32">
        <Link to={`/blog/${featuredPost.id}`}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer relative grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[4rem] p-6 md:p-12 border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-700"
          >
            <div className="overflow-hidden rounded-[3rem] h-[400px] lg:h-[500px]">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="space-y-8">
              <span className="inline-block px-5 py-2 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full">
                Latest Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-slate-500 font-light leading-relaxed text-lg italic">
                "{featuredPost.excerpt}"
              </p>
              <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2"><User size={14} className="text-emerald-800"/> {featuredPost.author}</span>
                <span className="flex items-center gap-2"><Calendar size={14} className="text-emerald-800"/> {featuredPost.date}</span>
              </div>
              <div className="inline-flex items-center gap-4 bg-emerald-900 text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20">
                Read Full Story <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        </Link>
      </section>

      {/* BLOG GRID */}
      <main className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.slice(1).map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="flex flex-col h-full bg-white rounded-[3.5rem] p-8 border border-slate-100 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="overflow-hidden rounded-[2.5rem] h-64 mb-8">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="flex flex-col flex-grow space-y-5">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-800">{post.category}</span>
                  <h3 className="text-2xl font-serif italic text-slate-900 leading-snug group-hover:text-emerald-900 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-8 flex items-center justify-between border-t border-slate-50">
                    <span className="text-[9px] font-bold text-slate-400 uppercase flex items-center gap-2 tracking-widest">
                      <Clock size={12} className="text-emerald-800"/> {post.readTime}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-emerald-800 group-hover:bg-emerald-900 group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
};

export default BlogPage;