import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CheckCircle, MapPin } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";

const LKR_TO_USD_RATE = 330;
const convertLKRtoUSD = (lkrAmount: number | null): string | null => {
  if (!lkrAmount) return null;
  const usd = lkrAmount / LKR_TO_USD_RATE;
  return `$${usd.toFixed(2)}`;
};

const walkingTourImages = Array.from({ length: 25 }, (_, i) => `/public/Eco_Love_Tours/Walking Tours Images/image${i + 1}.JPG`);

const cookeryImages = Array.from({ length: 15 }, (_, i) => `/public/Eco_Love_Tours/coockery/img_${i + 1}.JPG`);

const jewelryImages = Array.from({ length: 56 }, (_, i) => `/public/Eco_Love_Tours/Jewellry /image${i + 1}.JPG`);

const woodCarvingImages = Array.from({ length: 9 }, (_, i) => `/public/Eco_Love_Tours/wood carving/image${i + 1}.avif`);

const cyclingImages = Array.from({ length: 8 }, (_, i) => `/public/Eco_Love_Tours/cycling/image${i + 1}.JPG`);

const safariImages = Array.from({ length: 67 }, (_, i) => `/public/Eco_Love_Tours/safari/image${i + 1}.JPG`);

const handloomImages = Array.from({ length: 16 }, (_, i) => `/public/Eco_Love_Tours/handloom/image${i + 1}.JPG`);

// Your full `experiences` array should go here...
// For brevity, I’ve removed the array. Keep your full array here.
const experiences = [
    {
        title: "Wildlife Safari Experience",
        slug: "wildlife-safari",
        pricePerPerson: null, // Price changes
        currency: "LKR",
        showBookingForm: false, // 👈 no form
        description:
            "Explore Sri Lanka’s rich biodiversity through thrilling safaris across 26 national parks.",
        images: safariImages,
        details: {
            about: `Sri Lanka is home to 26 national parks, including Yala, Udawalawe, and Wilpattu. Each offers unique encounters with elephants, leopards, sloth bears, and countless bird species. This experience connects you with our trusted safari partners to plan your ideal adventure.`,
            highlights: [
            "Multiple national parks to choose from",
            "See elephants, leopards, crocodiles & more",
            "Private or shared jeeps available",
            "Customized to your travel location",
            ],
            includes: ["Safari arrangements", "Professional guides"],
            meetingPoint: "https://www.google.com/maps?q=Yala+National+Park,+Sri+Lanka",
            importantInfo: {
            bring: ["Binoculars", "Hat", "Water", "Camera"],
            notes: ["Park fees vary", "Best visited early morning or evening"],
            language: "English",
            accessibility: "Depends on park & jeep provider",
                    group: "Private or group",
                    },
        },
        },
  {
    title: "Walking Tour",
    slug: "walking-tours",
    pricePerPerson: convertLKRtoUSD(6000),
    currency: "LKR",
    description:
      "Join a guided walking tour through historic Galle Fort and discover hidden gems, colonial architecture, and vibrant street life.",
    images: walkingTourImages,
    details: {
      about:
        "Explore the charm of Galle Fort with a local guide who shares insights into its colonial past, local culture, and scenic spots.",
      highlights: [
        "Explore UNESCO-listed Galle Fort on foot",
        "Learn history and local stories from an expert guide",
        "Visit markets, temples, and secret alleys",
      ],
      includes: ["Professional guide", "Drinking water", "Entry fees (where applicable)"],
      meetingPoint: "https://www.google.com/maps?q=Galle+Fort,+Sri+Lanka",
      importantInfo: {
        bring: ["Comfortable shoes", "Sun protection"],
        notes: ["Tour duration: 2.5 hours", "Starts in the morning and evening"],
        language: "English",
        accessibility: "Partially accessible",
        group: "Small group",
      },
    },
  },
  {
    title: "Traditional Cookery Session",
    slug: "cookery-session",
    pricePerPerson: convertLKRtoUSD(7000),
    currency: "LKR",
    description:
      "Learn to cook traditional Sri Lankan meals using fresh ingredients in a village kitchen guided by local chefs.",
    images: cookeryImages,
    details: {
      about:
        "Step into a village kitchen and cook with local ingredients while discovering the traditions behind Sri Lankan cuisine.",
      highlights: [
        "Hands-on cooking class",
        "Use fresh, organic vegetables",
        "Learn about spices and traditional techniques",
      ],
      includes: ["All cooking ingredients", "Lunch/Dinner", "Recipe booklet"],
      meetingPoint: "https://www.google.com/maps?q=Galle,+Sri+Lanka",
      importantInfo: {
        bring: ["Appetite"],
        notes: ["Duration: 3–4 hours"],
        language: "English",
        accessibility: "Wheelchair accessible",
        group: "Private or shared",
      },
    },
  },
  {
    title: "Traditional Jewelry Workshop",
    slug: "jewelry-workshop",
    pricePerPerson: convertLKRtoUSD(14000),
    currency: "LKR",
    description:
      "Design and craft your own piece of jewelry using traditional Sri Lankan methods. Choose your workshop location: Ahangama or Galle.",
    images: jewelryImages,
    details: {
      about: `Craft handmade jewelry with skilled artisans using age-old techniques. Choose a workshop location most convenient for you.`,
      highlights: [
        "Hands-on design & creation process",
        "Two location options: Ahangama or Galle",
        "Learn about traditional Sri Lankan jewelry",
      ],
      includes: [
        "All materials & tools provided",
        "Guidance from professional artisans",
        "Your custom-made jewelry to take home",
      ],
      meetingPoint: "https://www.google.com/maps?q=Ahangama+or+Galle,+Sri+Lanka",
      importantInfo: {
        bring: ["Creativity", "Comfortable attire"],
        notes: ["Choose location upon booking", "Duration: 4 hours"],
        language: "English",
        accessibility: "Wheelchair accessible (Ahangama only)",
        group: "Private",
      },
    },
  },
  {
    title: "Wood Carving",
    slug: "wood-carving",
    pricePerPerson: convertLKRtoUSD(5000),
    currency: "LKR",
    description:
      "Discover traditional Sri Lankan wood carving techniques in a hands-on workshop led by local artisans.",
    images: woodCarvingImages,
    details: {
      about:
        "Learn the art of wood carving and create your own piece using local hardwoods and traditional tools.",
      highlights: [
        "Hands-on carving experience",
        "Meet skilled artisans",
        "Create a souvenir to take home",
      ],
      includes: ["All materials & tools", "Guidance from artisans"],
      meetingPoint: "https://www.google.com/maps?q=Wood+Carving+Workshop,+Sri+Lanka",
      importantInfo: {
        bring: ["Comfortable clothes", "Protective gloves (optional)"],
        notes: ["Duration: 3 hours", "Suitable for beginners"],
        language: "English",
        accessibility: "Partially accessible",
        group: "Small group",
      },
    },
  },
  {
    title: "Cycling Tours",
    slug: "cycling-tours",
    pricePerPerson: convertLKRtoUSD(8000),
    currency: "LKR",
    description:
      "Explore Sri Lanka’s countryside and wildlife on a guided cycling safari through scenic trails.",
    images: cyclingImages,
    details: {
      about:
        "Cycle through picturesque landscapes, spotting local wildlife and enjoying fresh air on this eco-friendly adventure.",
      highlights: [
        "Guided cycling tour",
        "Wildlife viewing opportunities",
        "Suitable for moderate fitness levels",
      ],
      includes: ["Bike rental", "Helmet", "Guide", "Drinking water"],
      meetingPoint: "https://www.google.com/maps?q=Cycling+Safari+Start+Point,+Sri+Lanka",
      importantInfo: {
        bring: ["Comfortable sportswear", "Sunscreen", "Water bottle"],
        notes: ["Duration: 4 hours", "Bring your own helmet if preferred"],
        language: "English",
        accessibility: "Not wheelchair accessible",
        group: "Small group",
      },
    },
  },
  {
    title: "Traditional Handloom Factory (Free Entrance)",
    slug: "traditional-handloom-factory",
    pricePerPerson: 0,
    currency: "LKR",
    description:
      "Visit a traditional handloom factory and witness the weaving process of beautiful Sri Lankan textiles, free entrance included.",
    images: handloomImages,
    details: {
      about:
        "Tour the factory and learn about the craft of handloom weaving, from spinning to finished fabric.",
      highlights: [
        "Free entrance",
        "See artisans at work",
        "Opportunity to buy handmade textiles",
      ],
      includes: ["Factory tour", "Demonstration by artisans"],
      meetingPoint: "https://www.google.com/maps?q=Handloom+Factory,+Sri+Lanka",
      importantInfo: {
        bring: ["Camera"],
        notes: ["Duration: 1.5 hours", "Open during factory hours"],
        language: "English",
        accessibility: "Partially accessible",
        group: "Open group",
      },
    },
  },
];

const ExperienceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const experience = experiences.find((exp) => exp.slug === slug);
  const [current, setCurrent] = useState(0);
  const [participants, setParticipants] = useState(1);
  const [date, setDate] = useState<Date | null>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (experience?.images.length || 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [experience]);

  const BackButton = () => (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 hover:underline transition-all"
    >
      ← Back to Experiences
    </button>
  );

  if (!experience) {
    return (
      <div className="text-center py-20 text-gray-800 dark:text-white">
        Experience not found
      </div>
    );
  }

  const priceInUSD =
    typeof experience.pricePerPerson === "string"
      ? Number(experience.pricePerPerson.replace("$", ""))
      : typeof experience.pricePerPerson === "number"
      ? experience.pricePerPerson
      : 0;
  const totalPrice = participants * priceInUSD;

  return (
    <div className="text-gray-800 dark:text-white bg-white dark:bg-gray-900">
      {/* Hero Section with Image Slider */}
      <div className="relative h-screen w-full overflow-hidden">
        {experience.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {experience.title}
          </h1>
          <p className="text-lg text-white max-w-2xl">{experience.description}</p>
        </div>
      </div>

      {/* Top Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <BackButton />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 px-6 py-16">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">About this activity</h2>
            <p>{experience.details.about}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <ul className="list-disc pl-6 space-y-2">
              {experience.details.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Includes</h2>
            <ul className="space-y-2">
              {experience.details.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Meeting Point</h2>
            <a
              href={experience.details.meetingPoint}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps →
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Important Information</h2>
            <div className="space-y-2">
              <strong>What to bring:</strong>
              <ul className="list-disc pl-6">
                {experience.details.importantInfo.bring.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <strong>Know before you go:</strong>
              <ul className="list-disc pl-6">
                {experience.details.importantInfo.notes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Language:</strong> {experience.details.importantInfo.language}
              </p>
              <p>
                <strong>Accessibility:</strong> {experience.details.importantInfo.accessibility}
              </p>
              <p>
                <strong>Group:</strong> {experience.details.importantInfo.group}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Booking Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl sticky top-24 self-start">
          <h3 className="text-xl font-bold mb-4">Select participants and date</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaUserFriends className="text-green-600" />
              <select
                value={participants}
                onChange={(e) => setParticipants(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    Adult x {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-green-600" />
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700"
              />
            </div>
          </div>

          <div className="mt-6">
            {experience.pricePerPerson ? (
              <>
                <p className="text-gray-700 dark:text-gray-300">
                  {experience.pricePerPerson} per person
                </p>
                <h4 className="text-2xl font-bold mt-1 mb-4">
                  ${totalPrice.toFixed(1)}
                </h4>
              </>
            ) : (
              <p className="text-red-600 font-semibold"></p>
            )}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mb-2">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Back Button */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <BackButton />
      </div>
    </div>
  );
};

export default ExperienceDetail;
