import React, { useEffect, useState, type FormEvent } from "react";
import { useParams } from "react-router-dom";
import { 
  CheckCircle, Calendar, Users, 
  Sparkles, Phone, 
  XCircle, Clock, Globe, ShieldCheck,
  AlertCircle, HelpCircle
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// --- CONSTANTS ---
const LKR_TO_USD_RATE = 330;
const WHATSAPP_NUMBER = "94774191148"; 

// --- IMAGE ARRAYS ---
const walkingTourImages = Array.from({ length: 25 }, (_, i) => `/Eco_Love_Tours/Walking Tours Images/img${i + 1}.jpg`);
const cookeryImages = Array.from({ length: 15 }, (_, i) => `/Eco_Love_Tours/coockery/img_${i + 1}.JPG`);
const jewelryImages = Array.from({ length: 55 }, (_, i) => `/Eco_Love_Tours/Jewellry/img${i + 1}.jpg`);
const woodCarvingImages = Array.from({ length: 28 }, (_, i) => `/Eco_Love_Tours/wood carving/image${i + 1}.jpg`);
const cyclingImages = Array.from({ length: 8 }, (_, i) => `/Eco_Love_Tours/cycling/img${i + 1}.jpg`);
const safariImages = Array.from({ length: 67 }, (_, i) => `/Eco_Love_Tours/safari/img${i + 1}.jpg`);
const handloomImages = Array.from({ length: 16 }, (_, i) => `/Eco_Love_Tours/handloom/img${i + 1}.jpg`);
const KanneliyaImages = Array.from({ length: 10 }, (_, i) => `/Eco_Love_Tours/kanneliya/Img_${i + 1}.jpg`);
const mangroveImages = Array.from({ length: 16 }, (_, i) => `/Eco_Love_Tours/Mangrove/Img_${i + 1}.jpg`);

// --- MASTER DATA ARRAY ---
const experiences = [
  {
    title: "Walk, Stories & Hidden Corners",
    slug: "walking-tours",
    pricePerPerson: 12000,
    description: "Explore the historic Galle Dutch Fort on a guided walking tour. Learn about the fort's history and its cultural influences from your guide.",
    images: walkingTourImages,
    overview: {
      cancellation: "Free cancellation up to 24 hours in advance for a full refund",
      duration: "Duration 3 hours",
      guide: "Live tour guide (English speaking)",
      groupSize: "Private group"
    },
    details: {
      about: "Galle Fort is more than old walls and colonial buildings — it’s a place filled with stories, cultures, forgotten details, and everyday life still unfolding inside the fort today.\n\nThis walk is designed for travelers who want more than a quick history lesson or a list of landmarks. Instead of simply pointing out buildings, your guide will take you through hidden corners, quiet streets, and lesser-known spots while sharing stories shaped by colonial history, local traditions, religion, trade, food culture, and life inside the fort through generations.\n\nBorn and raised in Galle, your storyteller guide brings personal knowledge, local connections, and a deep understanding of the fort beyond what guidebooks usually tell you.\n\nBy the end of the walk, you won’t just remember what you saw — you’ll remember the stories attached to it.",
      highlights: [
        "Step back in time as you explore the historic Galle Dutch Fort",
        "Learn about the fort's history and its cultural influences from your guide",
        "Discover the architectural marvels and bastions of the fort",
        "Engage with the diverse heritage of the fort in a journey that transcends time",
        "Taste the tantalizing local cuisine and discover the fort’s secrets"
      ],
      includes: [
        "Expert local guide",
        "Entrance tickets to the Black Fort (Oldest bastion)",
        "Entrance tickets to the Maritime museum",
        "Engaging anecdotes and insightful discussions",
        "Exploration of Dutch, Portuguese, and British eras (and post-colonial)",
        "Cultural and architectural insights"
      ],
      notSuitableFor: [
        "People with mobility impairments",
        "Wheelchair users"
      ],
      importantInfo: {
        bring: ["Comfortable shoes", "Hat", "Camera", "Sunscreen"],
        knowBefore: [
          "Wear comfortable walking shoes.",
          "Bring a hat and sunscreen for protection.",
          "Stay hydrated - bring a water bottle.",
          "Be prepared for varying weather conditions.",
          "Respect the local customs and regulations. Additionally keep some fabrics to cover your shoulder & knees since we will finish the tour from the Buddhist temple and we have to be prepared before entering the temple."
        ]
      },
      meetingPoint: "Old Gate Entrance (you can see the British coat of arms above the entrance). Search for 'Hall De Galle' in maps which is near the Old Gate."
    }
  },
  {
    title: "Spices, Stories & Sri Lankan Kitchen",
    slug: "cookery-session",
    pricePerPerson: 7000,
    description: "Immerse yourself in the vibrant world of Sri Lankan cuisine with a traditional cooking class in Galle. Learn to prepare mouthwatering dishes and enjoy an unforgettable day with a lovely local family.",
    images: cookeryImages,
    overview: {
      cancellation: "Free cancellation up to 24 hours in advance for a full refund",
      duration: "Duration 3 hours",
      guide: "Hands-on culinary instructor",
      groupSize: "Private group"
    },
    details: {
      about: "Sri Lankan food is full of color, aroma, and stories passed down through generations. If you love food, this is your chance not only to taste it — but to learn the hands behind it.\n\nThis experience takes place in a real home kitchen, not a cooking studio or commercial restaurant. You’ll cook alongside a local woman preparing the same dishes she makes for her own family, giving you a chance to connect with daily life while learning traditional recipes.\n\nThe session begins by roasting spices together and making fresh Sri Lankan curry powder from scratch — one of the most loved aromas in every local kitchen. From there, you’ll learn how to prepare a selection of rice and curry dishes while discovering the ingredients, flavors, and traditional benefits behind them.\n\nAlong the way, expect plenty of tasting, conversation, and a few local sweets waiting at the end too.\n\nMore than a cooking class, this is a small window into Sri Lankan home life.",
      highlights: [
        "Learn to cook traditional Sri Lankan dishes in a local kitchen in Galle",
        "Discover the rich history and cultural significance behind each ingredient",
        "Engage with the flavors that define Sri Lankan cooking with a hands-on class",
        "Gain practical skills while savoring every moment of this delightful journey",
        "Enjoy a unique cultural adventure and connect with the heart of Sri Lanka"
      ],
      includes: [
        "Local culinary expert",
        "Cooking ingredients and equipment",
        "Welcome drink",
        "Lunch or dinner with the prepared meal",
        "Desserts"
      ],
      notSuitableFor: [],
      importantInfo: {
        bring: ["An empty appetite!", "Camera for food photography"],
        knowBefore: [
          "Wear comfortable clothing and shoes suitable for cooking.",
          "Notify us in advance if you have any dietary restrictions or allergies.",
          "Arrive 15 minutes before the session starts."
        ]
      },
      meetingPoint: "If you are coming through the map then it’s much easier. Or there will be an English speaking local to give directions over the phone if you feel difficult finding the place."
    }
  },
  {
    title: "Galle: Kanneliya Rainforest Trek with Lunch and Swim",
    slug: "kanneliya-rainforest-trek",
    pricePerPerson: 22000,
    description: "Explore the Kanneliya Rainforest on a guided trek from Galle. Discover the rich biodiversity of a UNESCO-recognized biosphere reserve, relax by a waterfall, and enjoy a Sri Lankan lunch.",
    images: KanneliyaImages,
    overview: {
      cancellation: "Free cancellation up to 24 hours in advance for a full refund",
      duration: "Duration 6 hours",
      guide: "Live tour guide & native tracker",
      groupSize: "Private group"
    },
    details: {
      about: "Leave the busy coast behind and step into one of Sri Lanka’s last remaining lowland rainforests, where towering trees, hidden streams, bird calls, and the scent of wet earth surround you at every turn.\n\nThis experience is more than a simple hike. Guided by a knowledgeable local naturalist, you’ll walk slowly through rainforest trails while learning about the rich biodiversity of Kanneliya — from endemic birds and colorful lizards to medicinal plants, insects, and the smaller details many travelers often miss.\n\nAlong the way, there’s time to pause beside natural pools and flowing streams hidden within the forest, offering the perfect chance for a refreshing swim in the middle of nature. After the walk, enjoy a homemade local lunch surrounded by the calm atmosphere of the rainforest.\n\nPerfect for nature lovers, photographers, birdwatchers, and travelers looking to experience a quieter and more authentic side of Sri Lanka beyond the usual tourist routes.",
      highlights: [
        "Immerse yourself in the lush beauty of Kanneliya Rainforest on a guided trek",
        "Discover the rich biodiversity of a UNESCO-recognized biosphere reserve",
        "Spot wildlife such as birds, reptiles, and endemic species along the way",
        "Relax by a beautiful rainforest waterfall and swim in a natural pond",
        "Enjoy a freshly prepared Sri Lankan lunch made by a local family and fresh toddy"
      ],
      includes: [
        "Guided trekking experience",
        "Entrance tickets to the rainforest",
        "Local tracker guide",
        "Sri Lankan lunch",
        "Opportunity to taste fresh Toddy",
        "Binoculars",
        "Bottles of mineral water",
        "Transportation by air-conditioned vehicles (drop/pickup from hotel)"
      ],
      notSuitableFor: [
        "People with mobility impairments"
      ],
      importantInfo: {
        bring: ["Swimwear", "Camera", "Hiking shoes", "Sunscreen", "Insect repellent", "Reusable water bottle"],
        knowBefore: [
          "Pickup/Drop can be completely arranged from Galle area.",
          "The trek involves walking through streams and navigating uneven terrain.",
          "Lunch location may vary safely depending on real-time weather conditions.",
          "On rainy days there might be leeches (We do provide professional leech socks in case)."
        ]
      },
      meetingPoint: "Door-to-door pickup included from your accommodation in Galle."
    }
  },
  {
    title: "Whispers Through The Mangroves",
    slug: "mangrove-nature-walk",
    pricePerPerson: 9000,
    description: "Explore Sri Lanka’s mangroves on a guided nature walk. Discover the rich biodiversity of the mangrove ecosystem, observe bird species, and visit a traditional coir rope factory.",
    images: mangroveImages,
    overview: {
      cancellation: "Free cancellation up to 24 hours in advance for a full refund",
      duration: "Duration 2 hours",
      guide: "Live tour guide & native expert",
      groupSize: "Private group"
    },
    details: {
      about: "Step away from the busy roads and into the quiet world of Sri Lanka’s mangroves, where life hides between tangled roots, muddy shores, and calm waters.\n\nThis slow nature walk is led by local storytelling guides who help you discover the smaller details many people walk past — from colorful fiddler crabs and mudskippers to birds, lizards, medicinal plants, and the important role mangroves play in protecting coastal ecosystems.\n\nRather than rushing through the trail, this experience is all about slowing down, observing carefully, and learning through stories, conversations, and real encounters with nature. Along the way, your guide will also share local knowledge about village life, traditional fishing practices, and the relationship between people and the wetlands through generations.\n\nPerfect for nature lovers, birdwatchers, photographers, and curious travelers looking to experience a quieter side of Sri Lanka around the Galle area.",
      highlights: [
        "Immerse yourself in the serene beauty of Sri Lanka’s mangroves",
        "Observe and photograph a variety of bird species in their natural habitat",
        "Learn about the importance of mangroves in protecting the coastline",
        "Discover the rich biodiversity of the mangrove ecosystem with a guide",
        "Visit a traditional coir rope factory and see local craftsmanship in action"
      ],
      includes: [
        "Guided nature walking tour",
        "Local expert guide",
        "Bird watching opportunities",
        "Visit to a traditional coir rope factory (if open)",
        "Bottles of water",
        "Homemade Mangrove Apple juice",
        "Binoculars",
        "Transportation to Nugaduwa Junction"
      ],
      notSuitableFor: [
        "Pregnant women",
        "People with mobility impairments"
      ],
      importantInfo: {
        bring: ["Comfortable shoes", "Camera", "Water", "Insect repellent", "Binoculars"],
        knowBefore: [
          "The tour is completely slow-paced and suitable for both beginners and experienced nature lovers.",
          "The visit to the coir rope factory is subject to its operational opening hours.",
          "Seasonal variations may affect the presence of certain migratory bird species."
        ]
      },
      meetingPoint: "Nugaduwa Junction Base area. Coordinates and direct directions sent via WhatsApp map drop."
    }
  },
  {
    title: "Slow Safaris & Wild Stories",
    slug: "wildlife-safari",
    pricePerPerson: 28000,
    description: "Embark on a respectful, nature-conscious safari through the wild beauty of Udawalawe NP. Travel in a comfortable open-air jeep with a certified guide and learn about the park's diverse wildlife.",
    images: safariImages,
    overview: {
      cancellation: "Free cancellation up to 24 hours in advance for a full refund",
      duration: "Duration 4 hours",
      guide: "Live tour guide & expert naturalist",
      groupSize: "Private group"
    },
    details: {
      about: "Embark on a respectful, nature-conscious safari through the wild beauty of Udawalawe National Park — a sanctuary renowned for its large elephant herds, diverse birdlife, and lush landscapes. This is not just a safari; it's a promise to protect and preserve.\n\nWhat makes this safari different? Wildlife viewing should never come at the cost of animal welfare. That’s why experienced and certified guides follow strict ethical safari practices.\n\nTravel in a comfortable, well-maintained open-air jeep, guided by passionate naturalists who share fascinating insights about elephants, crocodiles, buffalo, exotic birds, and more. Whether you're a photographer, animal lover, or nature traveler, this safari offers an authentic and responsible way to explore Udawalawe.",
      highlights: [
        "Experience a safari that respects the natural behavior of the animals",
        "Travel in a comfortable open-air jeep with a certified guide",
        "Learn about the park's diverse wildlife from a passionate naturalist",
        "See elephants, crocodiles, buffalo, and exotic birds in their natural habitat",
        "Enjoy a safari that is both respectful and nature-conscious"
      ],
      includes: [
        "Hotel pickup & drop off (Only if your accommodation is located in Udawalawe)",
        "Experienced and friendly safari Jeep driver",
        "Open-air jeep tour",
        "Insights into local wildlife habitat",
        "Bottles of mineral water",
        "All official entrance tickets to the national park"
      ],
      notSuitableFor: [
        "Pregnant women",
        "People with back problems",
        "Wheelchair users"
      ],
      importantInfo: {
        bring: ["Comfortable shoes", "Hat", "Camera", "Sunscreen", "Insect repellent"],
        knowBefore: [
          "Wear comfortable shoes and clothing suitable for the weather.",
          "Bring a hat, sunscreen, and insect repellent to protect against the sun and bugs.",
          "Stay hydrated; bring enough water for the duration of the safari.",
          "Respect the wildlife and follow the guide's instructions at all times. Strictly no animal feeding allowed."
        ]
      },
      meetingPoint: "Your hotel lobby if located within Udawalawe, or the Park Gate Main Counter area."
    }
  },
  {
    title: "Carved By Hand, Shaped by Tradition",
    slug: "wood-carving",
    pricePerPerson: 11000,
    description: "Join a hands-on workshop in Galle and learn the art of wooden elephant carving. Create your own elephant and take home a meaningful souvenir.",
    images: woodCarvingImages,
    overview: {
      cancellation: "Free cancellation up to 24 hours in advance for a full refund",
      duration: "Duration 3 hours",
      guide: "Hands-on artisan instructor",
      groupSize: "Private / Small group group"
    },
    details: {
      about: "Step into the workshop of local artisans and discover the quiet patience behind one of Sri Lanka’s traditional crafts. Far away from commercial souvenir shops, this experience gives you the chance to spend time with craftsmen who continue to carve and shape wood by hand using techniques passed down through generations.\n\nDuring the session, you’ll learn how a simple piece of wood slowly transforms into a traditional elephant carving — from the first rough cuts to the final details and polishing. Our artisans will guide you throughout the process, demonstrating each step while encouraging you to create and paint your own piece along the way.\n\nNo experience is needed. This is not about perfection, but about enjoying the process, learning the stories behind the craft, and spending time inside a real local workshop where tradition is still part of everyday life.\n\nAt the end of the experience, you’ll take home a handmade elephant shaped by your own hands and the guidance of local artisans.",
      highlights: [
        "Learn the art of wooden elephant from skilled local artisans",
        "Watch a live demonstration of carving and painting by local craftsmen",
        "Paint your own wooden elephant with expert guidance",
        "Discover the cultural and spiritual significance of elephants in Sri Lanka",
        "Take home a handcrafted souvenir that you made yourself"
      ],
      includes: [
        "Guided workshop with local artisans",
        "All materials and tools for carving/painting",
        "Your finished wooden elephant to take home",
        "Light traditional refreshments",
        "Cultural insights and storytelling during the session"
      ],
      notSuitableFor: [],
      importantInfo: {
        bring: ["Comfortable clothes", "Clothes that can safely get dirty from acrylic paint"],
        knowBefore: [
          "No prior carving or painting experience is necessary to join.",
          "Feel free to let us know via WhatsApp if the session needs to be customized as per your time schedule! (e.g., The Full session vs. Painting only option)."
        ]
      },
      meetingPoint: "Artisan home studio location pin dropped securely directly via WhatsApp confirmation."
    }
  },
  {
    title: "Pedals, Path & Hidden Stories",
    slug: "cycling-tours",
    pricePerPerson: 15000,
    description: "Explore the countryside and local villages on an eco-friendly cycling safari.",
    images: cyclingImages,
    overview: {
      cancellation: "Free cancellation up to 24 hours in advance for a full refund",
      duration: "Duration 4 hours",
      guide: "Cycling trail group guide",
      groupSize: "Small group"
    },
    details: {
      about: "Cycle through picturesque paddy fields and spot wildlife. Explore the backcountry lanes and local village pathways of the stunning Southern Province countryside on a carbon-neutral bicycle safari.",
      highlights: [
        "Scenic trails through lush countryside fields",
        "Wildlife spotting in natural habitats",
        "Eco-friendly outdoor adventure"
      ],
      includes: [
        "Premium multi-gear bicycles",
        "Safety helmets",
        "Experienced guide"
      ],
      notSuitableFor: [
        "Individuals unable to ride a bicycle",
        "People with severe mobility impairments"
      ],
      importantInfo: {
        bring: ["Sportswear", "Running shoes", "Sunglasses"],
        knowBefore: [
          "The cycling distance is carefully tailored to the group's general fitness capabilities.",
          "The trail travels through unpaved paths, gravel tracks, and narrow village country lanes."
        ]
      },
      meetingPoint: "Eco Love South Coast Office Base."
    }
  },
  {
    title: "From Flame to Finger",
    slug: "jewelry-workshop",
    pricePerPerson: 16000,
    description: "Immerse yourself in the vibrant world of Sri Lankan craftsmanship with a Traditional Jewellery Making Workshop. Create your own unique piece of jewelry using authentic techniques and materials.",
    images: jewelryImages,
    overview: {
      cancellation: "Free cancellation up to 24 hours in advance for a full refund",
      duration: "Duration 1 day",
      guide: "Master silversmith instructor",
      groupSize: "Private group"
    },
    details: {
      about: "Step into a small local workshop where silver is shaped by hand, fire, and years of experience. This is not a commercial factory or a staged showroom — our artisans work from their own homes, giving you the chance to witness both the craft and the everyday life behind it.\n\nDuring the session, you’ll learn the full journey of ring making, from melting and shaping to polishing the final piece. Our artisans guide you through every step, demonstrating the techniques and helping you create your own silver ring along the way. No experience is needed, and you’re welcome to bring your own design ideas too.\n\nBy the end of the workshop, you won’t just leave with a handmade souvenir — you’ll leave with a story attached to it.",
      highlights: [
        "Discover the art of jewelry making with a local artisan in Sri Lanka",
        "Learn about the history and significance of traditional jewelry in Sri Lanka",
        "Create your own unique piece of jewelry using authentic techniques and materials",
        "Take home your complimentary Solid Silver Ring!!!"
      ],
      includes: [
        "Welcome drink",
        "All materials and tools needed for jewelry making",
        "Guidance from a skilled local artisan",
        "Your own handmade jewelry to take home",
        "Transportation to and from the local workshop structure"
      ],
      notSuitableFor: [
        "Children under 12 years",
        "People with back problems",
        "Wheelchair users"
      ],
      importantInfo: {
        bring: ["Appetite for learning", "Eyeglasses if you need them for close-up detail work"],
        knowBefore: [
          "Arrive 15 minutes early to settle into the studio.",
          "No prior experience in jewelry making is required whatsoever.",
          "The workshop is held inside the artisan's workspace home. Once you connect through WhatsApp, we will drop the exact map pin to guide you or your driver seamlessly."
        ]
      },
      meetingPoint: "Artisan's Home Studio Workshop. Exact custom coordinates sent over WhatsApp upon processing."
    }
  },
  {
    title: "The Art of Sri Lankan Handloom",
    slug: "traditional-handloom-factory",
    pricePerPerson: 0,
    description: "Witness the weaving process of beautiful Sri Lankan textiles (Free Entrance).",
    images: handloomImages,
    overview: {
      cancellation: "Completely open access tracking",
      duration: "Duration 1.5 hours",
      guide: "Factory production site tracker",
      groupSize: "Open group walkthrough"
    },
    details: {
      about: "Tour the factory and learn how spinning and weaving create intricate fabrics. Witness the precision engineering and traditional methods used to transform threads into beautiful fair-trade island textiles.",
      highlights: [
        "Artisans at work using traditional mechanical shuttle looms",
        "Free educational admission entrance tracking",
        "Support fair-trade shopping and buy directly from local makers"
      ],
      includes: [
        "Factory workspace tour",
        "Live weaving master demonstrations"
      ],
      notSuitableFor: [],
      importantInfo: {
        bring: ["Camera for documenting slow artisan heritage crafts"],
        knowBefore: [
          "The site is 100% free of entry fees. Your presence directly supports local ethical community weavers.",
          "Please avoid touching the active mechanical threads while weavers are operating machinery."
        ]
      },
      meetingPoint: "Handloom Factory Main Entrance Lobby Counter."
    }
  }
];

const ExperienceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const experience = experiences.find((exp) => exp.slug === (slug || "walking-tours"));

  const [currentImg, setCurrentImg] = useState(0);
  const [participants, setParticipants] = useState(1);
  const [date, setDate] = useState<Date | null>(new Date());
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (!experience) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % experience.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [experience]);

  if (!experience) return <div className="h-screen flex items-center justify-center font-serif italic text-slate-400">Experience not found</div>;

  const pricePerPerson = experience.pricePerPerson ?? 0;
  const priceUSD = pricePerPerson > 0 ? pricePerPerson / LKR_TO_USD_RATE : 0;
  const totalPrice = participants * priceUSD;
  const formattedDate = date ? date.toLocaleDateString('en-GB') : 'Not selected';

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello Eco Love! \n\n*Booking Request: ${experience.title}*\n\n` +
      `*Guest Name:* ${userName}\n` +
      `*Preferred Date:* ${formattedDate}\n` +
      `*Total Guests:* ${participants}\n` +
      `*Estimated Cost:* ${totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : "Custom Quote"}\n\n` +
      `Is this session available?`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-800 antialiased selection:bg-emerald-100">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[70vh] overflow-hidden bg-black">
        {experience.images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImg ? "opacity-60" : "opacity-0"
            }`}
          >
            <img src={img} alt="Gallery item" className="w-full h-full object-cover scale-105" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />
        <div className="absolute bottom-6 sm:bottom-12 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-800/40 backdrop-blur-sm">
            Activity Provider: Eco Love Sri Lanka
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-serif text-white tracking-tight mt-3 max-w-4xl font-bold leading-tight">
            {experience.title}
          </h1>
        </div>
      </section>

      {/* 2. THUMBNAIL TRACK SLIDER ROW */}
      <section className="bg-white py-3 sm:py-4 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 snap-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {experience.images.slice(0, 12).map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImg(index)}
                className={`relative w-20 h-14 sm:w-28 sm:h-18 md:w-32 md:h-20 rounded-xl overflow-hidden shrink-0 snap-start transition-all duration-300 ${
                  index === currentImg 
                    ? "ring-2 sm:ring-4 ring-emerald-800 scale-95 opacity-100 shadow-md" 
                    : "opacity-50 hover:opacity-90"
                }`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
            {experience.images.length > 12 && (
              <div className="w-20 h-14 sm:w-28 sm:h-18 md:w-32 md:h-20 bg-slate-50 border border-dashed border-slate-200 rounded-xl shrink-0 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-slate-500">+{experience.images.length - 12}</span>
                <span className="text-[8px] sm:text-[9px] text-slate-400 font-medium uppercase tracking-wider">Photos</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* THE CONTENT & LAYOUT BLOCK SYSTEM */}
          <div className="w-full lg:col-span-8 flex flex-col gap-8 sm:gap-12">
            
            {/* A. QUICK OVERVIEW STATS (Renders at the top) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex gap-3 items-start sm:items-center">
                <ShieldCheck className="text-emerald-700 shrink-0" size={18} />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Cancellation</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{experience.overview?.cancellation}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start sm:items-center">
                <Clock className="text-emerald-700 shrink-0" size={18} />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Duration</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{experience.overview?.duration}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start sm:items-center">
                <Globe className="text-emerald-700 shrink-0" size={18} />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Live Guide</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{experience.overview?.guide}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start sm:items-center">
                <Users className="text-emerald-700 shrink-0" size={18} />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Group Option</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{experience.overview?.groupSize}</p>
                </div>
              </div>
            </div>

            {/* B. FULL DESCRIPTION (Surfaces immediately below overview on mobile) */}
            <section className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">Full description</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light whitespace-pre-line">
                {experience.details.about}
              </p>
            </section>

            {/* C. BOOK NOW CONTAINER (Render wrapper hidden on desktop, injected here contextually for mobile) */}
            <div className="block lg:hidden w-full">
              <BookingCard experience={experience} userName={userName} setUserName={setUserName} participants={participants} setParticipants={setParticipants} date={date} setDate={setDate} totalPrice={totalPrice} priceUSD={priceUSD} handleWhatsAppRedirect={handleWhatsAppRedirect} />
            </div>

            <hr className="border-slate-200" />

            {/* D. HIGHLIGHTS */}
            <section className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {experience.details.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-slate-200" />

            {/* E. INCLUDES / NOT SUITABLE FOR */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">Includes</h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {experience.details.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {experience.details.notSuitableFor && experience.details.notSuitableFor.length > 0 && (
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">Not suitable for</h4>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {experience.details.notSuitableFor.map((not, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
                        <XCircle size={15} className="text-rose-600 shrink-0 mt-0.5" />
                        <span>{not}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <hr className="border-slate-200" />

            {/* F. IMPORTANT INFORMATION & LOGISTICS */}
            <section className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <AlertCircle className="text-emerald-800" size={18} />
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Important information</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                {experience.details.importantInfo.bring && experience.details.importantInfo.bring.length > 0 && (
                  <div className="space-y-2.5">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                      <span className="w-1 h-3 bg-emerald-700 rounded-full inline-block" /> What to bring
                    </h5>
                    <ul className="list-disc pl-4 text-[11px] sm:text-xs text-slate-500 space-y-1.5 leading-relaxed">
                      {experience.details.importantInfo.bring.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                )}
                
                {experience.details.importantInfo.knowBefore && experience.details.importantInfo.knowBefore.length > 0 && (
                  <div className="space-y-2.5">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                      <span className="w-1 h-3 bg-emerald-700 rounded-full inline-block" /> Know before you go
                    </h5>
                    <ul className="list-disc pl-4 text-[11px] sm:text-xs text-slate-500 space-y-1.5 leading-relaxed">
                      {experience.details.importantInfo.knowBefore.map((k, i) => <li key={i}>{k}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              {experience.details.meetingPoint && (
                <div className="pt-4 sm:pt-6 border-t border-slate-100 space-y-2.5">
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                    <HelpCircle className="text-emerald-700" size={14} /> Meeting Point Logistics
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-light bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                    {experience.details.meetingPoint}
                  </p>
                </div>
              )}
            </section>

          </div>

          {/* DESKTOP COLUMN (Keeps layout sticky on the right for monitors) */}
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-8 w-full">
            <BookingCard experience={experience} userName={userName} setUserName={setUserName} participants={participants} setParticipants={setParticipants} date={date} setDate={setDate} totalPrice={totalPrice} priceUSD={priceUSD} handleWhatsAppRedirect={handleWhatsAppRedirect} />
          </div>

        </div>
      </main>

      <footer className="py-8 sm:py-12 border-t border-slate-200 bg-white text-center px-4">
         <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-400">Eco Love — Premium Handcrafted Immersive Experiences</p>
      </footer>
    </div>
  );
};

// --- REUSABLE SUB-COMPONENT FOR CLEAN INJECTION MANAGEMENT ---
interface BookingCardProps {
  experience: any;
  userName: string;
  setUserName: (val: string) => void;
  participants: number;
  setParticipants: (val: number) => void;
  date: Date | null;
  setDate: (date: Date | null) => void;
  totalPrice: number;
  priceUSD: number;
  handleWhatsAppRedirect: (e: FormEvent) => void;
}

const BookingCard: React.FC<BookingCardProps> = ({ userName, setUserName, participants, setParticipants, date, setDate, totalPrice, priceUSD, handleWhatsAppRedirect }) => {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] space-y-5 sm:space-y-6 w-full">
      <div className="pb-3 sm:pb-4 border-b border-slate-100">
        <span className="text-[11px] sm:text-xs text-slate-400 font-medium block">Price starts from</span>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="text-2xl sm:text-3xl font-bold text-slate-900">
            {priceUSD > 0 ? `$${priceUSD.toFixed(0)}` : "Custom"}
          </span>
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium">per person</span>
        </div>
      </div>

      <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Your Full Name</label>
          <input 
            required 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            className="w-full bg-slate-50 border-0 rounded-xl py-3 px-4 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800/20 text-slate-800" 
            placeholder="Enter full name" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1">
              <Users size={12}/> Adults
            </label>
            <select 
              value={participants} 
              onChange={(e) => setParticipants(Number(e.target.value))} 
              className="w-full bg-slate-50 border-0 rounded-xl py-3 px-4 text-xs sm:text-sm cursor-pointer text-slate-800"
            >
              {[...Array(15)].map((_, i) => <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>)}
            </select>
          </div>

          <div className="space-y-1 w-full">
            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1">
              <Calendar size={12}/> Date
            </label>
            <div className="relative w-full custom-datepicker-container">
              <DatePicker 
                selected={date} 
                onChange={(d) => setDate(d)} 
                minDate={new Date()} 
                className="w-full bg-slate-50 border-0 rounded-xl py-3 px-4 text-xs sm:text-sm cursor-pointer text-slate-800" 
              />
            </div>
          </div>
        </div>

        <div className="bg-emerald-50/40 p-3.5 sm:p-4 rounded-xl border border-emerald-100/30 flex justify-between items-center mt-4">
          <span className="text-[11px] sm:text-xs font-bold text-emerald-900">Estimated Total:</span>
          <span className="text-base sm:text-lg font-black text-emerald-900">
            {totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : "On Request"}
          </span>
        </div>

        <button 
          type="submit" 
          className="w-full bg-emerald-800 text-white font-bold uppercase tracking-widest text-xs py-3.5 sm:py-4 rounded-xl hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-900/5"
        >
          Check Availability <Phone size={13} />
        </button>
      </form>

      <div className="pt-1 text-center text-[10px] sm:text-[11px] text-slate-400">
        <p className="flex items-center justify-center gap-1.5">
          <Sparkles size={11} className="text-amber-500" /> Reserve now & pay later to secure space
        </p>
      </div>
    </div>
  );
};

export default ExperienceDetail;