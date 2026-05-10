import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, ArrowLeft, Share2, MessageCircle, ArrowRight, Clock } from 'lucide-react';
import { useEffect } from 'react';


// In a real app, this would come from an API or a central 'data.ts' file
const blogPosts = [
{
  id: "galle-fort-mythology",
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
    
    <p>For locals, Galle Fort is filled with memories. It’s the old jetty where we learned to swim, the star bastion where we spotted sea turtles, or the ramparts where we played cricket (Haha, of course, everywhere cricket).</p>

    <img src="/Blog_Img/galle_fort_mythology/img8.jpeg" alt="Playing cricket on Galle Fort ramparts" class="rounded-[2.5rem] my-10 w-full object-contain h-[300px]" />

    <h3 class="text-3xl font-serif italic text-slate-900 mt-12 mb-6">Walking Experience</h3>
    <p>If you are planning to visit Galle Fort, the best way to explore is always on foot. Walk along the ramparts and feel the sea breeze.</p>
    
    <p> Don’t forget to pause for a few quiet seconds and look down at the crystal clear waters. If you are lucky, you might spot a green turtle, colorful parrotfish, or even the shadow of a blacktip reef shark moving between the rocks. It all becomes part of the memory.</p>

    <img src="/Blog_Img/galle_fort_mythology/img2.jpeg" alt="Green Turtle in crystal clear water" class="rounded-[2.5rem] my-10 w-full object-contain h-[300px]" />

    <h3 class="text-3xl font-serif italic text-slate-900 mt-12 mb-6">Aeolus Bastion</h3>
    <p>There is one specific bastion at Galle Fort which is very popular as a sunset viewpoint: <strong>Aeolus Bastion</strong> (opposite the military camp).</p>
    
    <p>If you observe your surroundings for a moment, a White-throated kingfisher looking for prey may suddenly appear, perched like royalty on the old stone walls. This bird is a bridge connecting colonial history with Greek mythology. Myths always leave us wanting to hear more.</p>

    <img src="/Blog_Img/galle_fort_mythology/img3.jpeg" alt="Aeolus Bastion at Galle Fort" class="rounded-[2.5rem] my-12 w-full object-cover h-[450px]" />

    <h3 class="text-3xl font-serif italic text-slate-900 mt-12 mb-6">Greek Mythology</h3>
    <p>According to Greek mythology, Aeolus is known as the god of wind who had a daughter whose name was Alcyone. This is where the story begins…</p>
    
    <p>One day Alcyone’s husband (a sailor) died in a storm at sea. Alcyone grieved deeply and the god (Aeolus) transformed them into kingfishers so they could always be together.</p>

    <blockquote class="border-l-4 border-emerald-800 pl-8 py-4 my-12 italic text-2xl text-slate-700 font-serif">
      "This is also the story behind the famous phrase “Halcyon days” which refers to calm seas and peaceful weather."
    </blockquote>

    <p> Interestingly, the scientific genus name of the White-throated kingfisher, <em>Halcyon</em>, also traces back to the same ancient mythology.</p>

    <img src="/Blog_Img/galle_fort_mythology/img9.jpeg" alt="White-throated kingfisher illustration" class="rounded-[2.5rem] my-10 w-full object-contain h-[400px]" />

    <h3 class="text-3xl font-serif italic text-slate-900 mt-12 mb-6">Reflection</h3>
    <p>Of course, it’s a mythical story! But imagine spotting a beautiful kingfisher while standing near the Aeolus Bastion? Isn’t that amazing?</p>
    
    <p>Sometimes, small stories are what make a sunset unforgettable.</p>

    <img src="/Blog_Img/galle_fort_mythology/img6.jpeg" alt="Sunset over Galle Fort and the Indian Ocean" class="rounded-[2.5rem] my-12 w-full object-cover h-[450px]" />

    <p>So the next time you walk along the ramparts of Aeolus Bastion, pause for a moment and look around.</p>
    
    <p>Between the sea winds, the fading sunlight, and the flash of blue wings above the old stones, you may discover that Galle Fort still carries stories far older than its colonial walls.</p>

    <img src="/Blog_Img/galle_fort_mythology/img1.jpeg" alt="Final view of Aeolus Bastion at Galle Fort" class="rounded-[2.5rem] my-12 w-full object-cover h-[450px]" />
  `
}
  
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Dynamic Page Title for Browser Tab
    if (post) {
       document.title = `${post.title} | Eco Love Sri Lanka`;
    }
  }, [id, post]);

  if (!post) return <div className="text-center py-40 font-serif italic text-2xl">Post not found</div>;

  // Filter out the current post to show "Related Stories"
  const relatedPosts = blogPosts.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans">
     

      {/* HERO SECTION */}
      <div className="relative w-full h-[95vh] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <Link to="/blog" className="flex items-center gap-2 text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-8 hover:text-white transition-all">
            <ArrowLeft size={14} /> Back to Journal
          </Link>
          <span className="px-5 py-2 bg-emerald-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-6 shadow-xl">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-7xl font-serif italic text-white max-w-5xl leading-tight drop-shadow-2xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between border-b border-slate-100 pb-12 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800">
              <User size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">By {post.author}</p>
              <p className="text-xs font-bold text-slate-900">{post.date}</p>
            </div>
          </div>
          <div className="flex gap-4 text-slate-400">
            <Share2 size={18} className="cursor-pointer hover:text-emerald-800 transition-colors" />
          </div>
        </div>

        {/* This renders the HTML content safely */}
        <div 
          className="prose prose-slate lg:prose-xl max-w-none prose-headings:font-serif prose-headings:italic prose-p:font-light prose-p:text-slate-600 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* WHATSAPP CTA */}
        <div className="mt-24 p-12 bg-emerald-900 rounded-[3.5rem] text-center space-y-8 shadow-2xl">
           <h4 className="text-white font-serif italic text-3xl">Want to experience this journey?</h4>
           <p className="text-white/70 text-sm max-w-md mx-auto">Message us to book a personalized tour or cooking class inspired by this story.</p>
           <a href="https://wa.me/94774191148" className="inline-flex items-center gap-3 bg-white text-emerald-900 px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
             <MessageCircle size={16} /> Chat with us
           </a>
        </div>
      </main>

      {/* RELATED POSTS SECTION */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800">Keep Reading</span>
              <h2 className="text-4xl font-serif italic text-slate-900">More from the Journal</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {relatedPosts.map((rPost) => (
                <Link to={`/blog/${rPost.id}`} key={rPost.id} className="group">
                  <motion.article 
                    whileHover={{ y: -10 }}
                    className="flex flex-col h-full bg-white rounded-[3rem] p-6 border border-slate-100 hover:shadow-xl transition-all"
                  >
                    <div className="overflow-hidden rounded-[2rem] h-56 mb-6">
                      <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h3 className="text-xl font-serif italic text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">{rPost.title}</h3>
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Clock size={12}/> {rPost.readTime}
                      </span>
                      <ArrowRight size={18} className="text-emerald-800 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default BlogDetail;