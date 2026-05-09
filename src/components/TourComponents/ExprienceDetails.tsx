import React, { useEffect, useState, type FormEvent } from "react";
import { useParams } from "react-router-dom";
import { 
  CheckCircle, Calendar, Users, 
  Sparkles, Navigation, Phone 
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// --- CONSTANTS ---
const LKR_TO_USD_RATE = 330;
const WHATSAPP_NUMBER = "94774191148"; 

// --- IMAGE ARRAYS ---
const walkingTourImages = Array.from({ length: 25 }, (_, i) => `/public/Eco_Love_Tours/Walking Tours Images/image${i + 1}.JPG`);
const cookeryImages = Array.from({ length: 15 }, (_, i) => `/Eco_Love_Tours/coockery/img_${i + 1}.JPG`);
const jewelryImages = Array.from({ length: 56 }, (_, i) => `/Eco_Love_Tours/Jewellry/image${i + 1}.jpg`);
const woodCarvingImages = Array.from({ length: 28 }, (_, i) => `/Eco_Love_Tours/woodcarving/image${i + 1}.jpg`);
const cyclingImages = Array.from({ length: 8 }, (_, i) => `/Eco_Love_Tours/cycling/image${i + 1}.jpg`);
const safariImages = Array.from({ length: 67 }, (_, i) => `/Eco_Love_Tours/safari/image${i + 1}.jpg`);
const handloomImages = Array.from({ length: 16 }, (_, i) => `/Eco_Love_Tours/handloom/image${i + 1}.jpg`);

// --- MASTER DATA ARRAY ---
const experiences = [
  {
    title: "Wildlife Safari Experience",
    slug: "wildlife-safari",
    pricePerPerson: null,
    description: "Explore Sri Lanka’s rich biodiversity through thrilling safaris across 26 national parks.",
    images: safariImages,
    details: {
      about: "Sri Lanka is home to 26 national parks, including Yala, Udawalawe, and Wilpattu.",
      highlights: ["Multiple national parks", "See leopards & elephants", "Private jeeps"],
      includes: ["Safari arrangements", "Professional guides"],
      meetingPoint: "https://www.google.com/maps?q=Yala+National+Park",
      importantInfo: { bring: ["Binoculars", "Hat"], notes: ["Best early morning"], language: "English", accessibility: "Jeep dependent", group: "Private/Group" },
    },
  },
  {
    title: "Walking Tour",
    slug: "walking-tours",
    pricePerPerson: 12000,
    description: "Join a guided walking tour through historic Galle Fort.",
    images: walkingTourImages,
    details: {
      about: "Explore the charm of Galle Fort with a local guide sharing colonial history.",
      highlights: ["UNESCO Galle Fort", "Hidden alleys", "Colonial history"],
      includes: ["Professional guide", "Water"],
      meetingPoint: "https://www.google.com/maps?q=Galle+Fort",
      importantInfo: { bring: ["Walking shoes"], notes: ["2.5 hours duration"], language: "English", accessibility: "Partial", group: "Small group" },
    },
  },
  {
    title: "Traditional Cookery Session",
    slug: "cookery-session",
    pricePerPerson: 7000,
    description: "Learn to cook traditional Sri Lankan meals using fresh village ingredients.",
    images: cookeryImages,
    details: {
      about: "Step into a village kitchen and master the art of spices.",
      highlights: ["Hands-on class", "Organic ingredients", "Eat what you cook"],
      includes: ["Ingredients", "Full meal"],
      meetingPoint: "https://www.google.com/maps?q=Galle",
      importantInfo: { bring: ["Appetite"], notes: ["3-4 hours"], language: "English", accessibility: "Accessible", group: "Private/Shared" },
    },
  },
  {
    title: "Traditional Jewelry Workshop",
    slug: "jewelry-workshop",
    pricePerPerson: 16000,
    description: "Design and craft your own piece of jewelry using age-old methods.",
    images: jewelryImages,
    details: {
      about: "Work with skilled artisans in Ahangama or Galle.",
      highlights: ["Custom design", "Traditional tools", "Handmade souvenir"],
      includes: ["Materials", "Artisan guidance"],
      meetingPoint: "https://www.google.com/maps?q=Ahangama",
      importantInfo: { bring: ["Creativity"], notes: ["4 hours"], language: "English", accessibility: "Ahangama only", group: "Private" },
    },
  },
  {
    title: "Wood Carving",
    slug: "wood-carving",
    pricePerPerson: 11000,
    description: "Discover traditional wood carving techniques in a hands-on workshop.",
    images: woodCarvingImages,
    details: {
      about: "Learn to carve intricate patterns into local hardwoods.",
      highlights: ["Master craftsmen", "Hands-on carving", "Souvenir creation"],
      includes: ["Hardwood", "Carving tools"],
      meetingPoint: "https://www.google.com/maps?q=Wood+Carving+Workshop",
      importantInfo: { bring: ["Comfortable clothes"], notes: ["3 hours"], language: "English", accessibility: "Partial", group: "Small group" },
    },
  },
  {
    title: "Cycling Tours",
    slug: "cycling-tours",
    pricePerPerson: 15000,
    description: "Explore the countryside and local villages on an eco-friendly cycling safari.",
    images: cyclingImages,
    details: {
      about: "Cycle through picturesque paddy fields and spot wildlife.",
      highlights: ["Scenic trails", "Wildlife spotting", "Eco-friendly"],
      includes: ["Bikes", "Helmets", "Guide"],
      meetingPoint: "https://www.google.com/maps?q=Cycling+Point",
      importantInfo: { bring: ["Sportswear"], notes: ["4 hours"], language: "English", accessibility: "None", group: "Small group" },
    },
  },
  {
    title: "Traditional Handloom Factory",
    slug: "traditional-handloom-factory",
    pricePerPerson: 0,
    description: "Witness the weaving process of beautiful Sri Lankan textiles (Free Entrance).",
    images: handloomImages,
    details: {
      about: "Tour the factory and learn how spinning and weaving create intricate fabrics.",
      highlights: ["Artisans at work", "Free entrance", "Shop local"],
      includes: ["Factory tour", "Demonstrations"],
      meetingPoint: "https://www.google.com/maps?q=Handloom+Factory",
      importantInfo: { bring: ["Camera"], notes: ["1.5 hours"], language: "English", accessibility: "Partial", group: "Open group" },
    },
  },
];

const ExperienceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const experience = experiences.find((exp) => exp.slug === slug);

  const [currentImg, setCurrentImg] = useState(0);
  const [participants, setParticipants] = useState(1);
  const [date, setDate] = useState<Date | null>(new Date());
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % (experience?.images.length || 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [experience]);

  if (!experience) return <div className="h-screen flex items-center justify-center font-serif italic text-slate-400">Experience not found</div>;

  // Calculation (Safe for Nulls)
  const pricePerPerson = experience.pricePerPerson ?? 0;
  const priceUSD = pricePerPerson > 0 ? pricePerPerson / LKR_TO_USD_RATE : 0;
  const totalPrice = participants * priceUSD;
  const formattedDate = date ? date.toLocaleDateString('en-GB') : 'Not selected';

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Eco Love! \n\n*Experience Inquiry: ${experience.title}*\n\n` +
      `*Guest:* ${userName}\n` +
      `*Date:* ${formattedDate}\n` +
      `*Participants:* ${participants}\n` +
      `*Estimated:* ${totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : "Custom Quote Required"}\n\n` +
      `Is this available?`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans selection:bg-emerald-100">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {experience.images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImg ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover scale-110 animate-slow-zoom"
            />
          </div>
        ))}
      
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic text-white drop-shadow-2xl">{experience.title}</h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-16">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10 bg-emerald-800" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800">The Experience</h2>
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-slate-900 leading-relaxed">{experience.details.about}</p>
            </section>

            <section className="grid md:grid-cols-2 gap-8 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              {experience.details.highlights.map((h, i) => (
                <div key={i} className="flex gap-4">
                  <Sparkles className="text-emerald-800 shrink-0" size={18} />
                  <span className="text-sm text-slate-600 font-light leading-relaxed">{h}</span>
                </div>
              ))}
            </section>

            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900">What's Included</h3>
                <ul className="space-y-3">
                  {experience.details.includes.map((item, i) => (
                    <li key={i} className="text-sm text-slate-500 font-light flex items-center gap-3">
                      <CheckCircle size={14} className="text-emerald-800" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Location</h3>
                <a href={experience.details.meetingPoint} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-emerald-800 hover:opacity-60 underline decoration-emerald-800/30 underline-offset-4">
                  <Navigation size={14} /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right: Instant WhatsApp Booking Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-12 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.04)] overflow-hidden">
              <form onSubmit={handleWhatsAppRedirect} className="space-y-8 relative z-10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Investment</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-serif italic text-slate-900">
                      {totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : "Quote"}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">USD</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      value={userName} 
                      onChange={(e) => setUserName(e.target.value)} 
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-emerald-800" 
                      placeholder="Your name" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 flex items-center gap-1">
                        <Users size={10}/> Guests
                      </label>
                      <select 
                        value={participants} 
                        onChange={(e) => setParticipants(Number(e.target.value))} 
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm cursor-pointer"
                      >
                        {[...Array(10)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 flex items-center gap-1">
                        <Calendar size={10}/> Date
                      </label>
                      <DatePicker 
                        selected={date} 
                        onChange={(d) => setDate(d)} 
                        minDate={new Date()} 
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-emerald-900 text-white font-black uppercase tracking-widest text-[10px] py-6 rounded-full hover:bg-emerald-950 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/20 active:scale-95"
                >
                  Confirm on WhatsApp <Phone size={14} />
                </button>
                
                <div className="flex flex-col items-center gap-2">
                   <p className="text-[9px] text-center font-bold text-slate-300 uppercase tracking-widest">
                     Response usually within 1 hour
                   </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 border-t border-slate-100 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Eco Love Tours — Authentic Local Experiences</p>
      </footer>
    </div>
  );
};

export default ExperienceDetail;