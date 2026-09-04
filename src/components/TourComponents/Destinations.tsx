// src/data/destinations.ts
import type { Destination } from "../TourComponents/Destination";

export const destinations: Destination[] = [
  // --- CULTURAL & HISTORIC WONDERS ---
  { 
    name: "Sigiriya", 
    category: "Heritage",
    description: "Iconic rock fortress and UNESCO World Heritage Site.",
    longDescription: "Sigiriya is an ancient rock fortress dominated by a massive column of rock nearly 200 metres high. It features the remains of a sky palace, extensive water gardens, and famous frescoes. Known as the Eighth Wonder of the World, it offers a glimpse into ancient Sri Lankan engineering and artistic mastery.",
    attractions: ["Lion's Paw", "Mirror Wall", "Water Gardens", "Pidurangala Rock"],
    bestTime: "January to April",
    img: "/Eco_Love_Tours/Sigiriya_II.jpeg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/img43.jpg", "/Eco_Love_Tours/Tour_Images/img42.jpg", "/Eco_Love_Tours/Sigiriya_II.jpeg"],
    link: "/eco-love-tours/destinations/sigiriya" 
  },
  { 
    name: "Anuradhapura", 
    category: "Sacred City",
    description: "The epicentre of Sinhalese civilization dating back to 4th century BC.",
    longDescription: "As one of the ancient capitals of Sri Lanka, Anuradhapura is famous for its well-preserved ruins of ancient Lankan civilization. This UNESCO World Heritage site was the center of Theravada Buddhism for many centuries and remains a sacred destination for pilgrims worldwide.",
    attractions: ["Sri Maha Bodhi", "Ruwanwelisaya", "Jetavanaramaya", "Abhayagiri Dagaba"],
    bestTime: "June to September",
    img: "/Eco_Love_Tours/Anuradhapura.jpg", 
    gallery: ["/Eco_Love_Tours/Anuradhapura/3d.jpg", "/Eco_Love_Tours/Anuradhapura/img1.jpg", "/Eco_Love_Tours/Anuradhapura/img2.jpg"],
    link: "/eco-love-tours/destinations/anuradhapura" 
  },
  { 
    name: "Polonnaruwa", 
    category: "Heritage",
    description: "Ancient ruins in the cultural triangle.",
    longDescription: "The second most ancient of Sri Lanka's kingdoms, Polonnaruwa was first declared the capital city by King Vijayabahu I. Today, the ancient city remains one of the best-planned archaeological relic sites in the country, standing as a testament to the discipline and far-reaching vision of the kingdom's early rulers.",
    attractions: ["Gal Vihara", "Vatadage", "Rankoth Vehera", "Parakrama Samudra"],
    bestTime: "July to August",
    img: "/Eco_Love_Tours/Polonnaruwa.jpg", 
    gallery: ["/Eco_Love_Tours/Polonnaruwa/img1.jpg", "/Eco_Love_Tours/Polonnaruwa/img3.jpg", "/Eco_Love_Tours/Polonnaruwa/img4.jpg"],
    link: "/eco-love-tours/destinations/polonnaruwa" 
  },
  { 
    name: "Dambulla", 
    category: "Cultural",
    description: "The sacred cave temples are the main highlight.",
    longDescription: "Dambulla is famous for the Golden Temple of Dambulla, a UNESCO World Heritage site that is the largest and best-preserved cave temple complex in Sri Lanka. The rock towers 160m over the surrounding plains, housing over 80 documented caves and five major sanctuaries containing statues and paintings related to Gautama Buddha.",
    attractions: ["Cave Temples", "Golden Buddha Statue", "Ibbankatuwa Burial Site", "Museum"],
    bestTime: "January to May",
    img: "/Eco_Love_Tours/Dambulla.jpg", 
    gallery: ["/Eco_Love_Tours/Dambulla/img1.jpg", "/Eco_Love_Tours/Dambulla/img2.jpg", "/Eco_Love_Tours/Dambulla/img3.jpg"],
    link: "/eco-love-tours/destinations/dambulla" 
  },
  { 
    name: "Kandy", 
    category: "Cultural Heart",
    description: "Home to the sacred Temple of the Tooth Relic.",
    longDescription: "Set on a plateau surrounded by mountains, Kandy is home to tea plantations and biodiverse rainforest. The city is famed for its sacred Buddhist sites, including the Temple of the Tooth (Sri Dalada Maligawa) shrine, which houses a relic of the tooth of the Buddha.",
    attractions: ["Temple of the Tooth", "Royal Botanical Gardens", "Kandy Lake", "Bahirawakanda Buddha"],
    bestTime: "January to April",
    img: "/Eco_Love_Tours/Kandy.jpg", 
    gallery: ["/Eco_Love_Tours/Kandy/img1.jpg", "/Eco_Love_Tours/Kandy/img2.jpg", "/Eco_Love_Tours/Kandy/img3.jpg"],
    link: "/eco-love-tours/destinations/kandy" 
  },
  { 
    name: "Galle", 
    category: "Heritage",
    description: "Colonial charm meets coastal bliss in the Southern capital.",
    longDescription: "Galle is a jewel of colonial architecture and coastal beauty. The Galle Fort, a world heritage site, is the largest remaining fortress in Asia built by European occupiers, showing a unique interaction between European architectural styles and South Asian traditions.",
    attractions: ["Galle Fort", "Lighthouse", "Dutch Reformed Church", "Maritime Museum"],
    bestTime: "December to April",
    img: "/Eco_Love_Tours/Galle/img2.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/img34.jpg", "/Eco_Love_Tours/Tour_Images/img108.jpg", "/Eco_Love_Tours/Tour_Images/img209.jpg"],
    link: "/eco-love-tours/destinations/galle" 
  },
  { 
    name: "Jaffna", 
    category: "Heritage",
    description: "Rich culture and unique landscape in the North.",
    longDescription: "Jaffna is a city with a soul unlike any other in Sri Lanka. From its colorful Kovils to the serene Delft island, it offers a glimpse into a resilient culture, distinct cuisine, and landscapes characterized by palmyra palms and turquoise lagoons.",
    attractions: ["Nallur Kandaswamy Kovil", "Jaffna Fort", "Delft Island", "Casuarina Beach"],
    bestTime: "January to August",
    img: "/Eco_Love_Tours/Jaffna.jpg", 
    gallery: ["/Eco_Love_Tours/Jaffna/img1.jpg", "/Eco_Love_Tours/Jaffna/img2.jpg", "/Eco_Love_Tours/Jaffna/img4.jpg"],
    link: "/eco-love-tours/destinations/jaffna" 
  },

  // --- BEACH & COASTAL RETREATS ---
  { 
    name: "Arugam Bay", 
    category: "Coastal",
    description: "Unspoilt beaches and magnificent waves.",
    longDescription: "Arugam Bay is a moon-shaped curl of soft sand on the East Coast. Known as a surf paradise, it has a laid-back, hippie vibe that makes it the ultimate hangout spot for world travelers and wave riders alike.",
    attractions: ["Main Point Surf", "Whiskey Point", "Pottuvil Lagoon", "Muhudu Maha Vihara"],
    bestTime: "April to October",
    img: "/Eco_Love_Tours/ArugamBay.jpg", 
    gallery: ["/Eco_Love_Tours/Arugambay/img2.jpg", "/Eco_Love_Tours/Arugambay/img3.jpg", "/Eco_Love_Tours/Arugambay/img5.jpeg"],
    link: "/eco-love-tours/destinations/arugam-bay" 
  },
  { 
    name: "Bentota", 
    category: "Coastal",
    description: "Beautiful beaches, watersports and buzzing streets.",
    longDescription: "Bentota is a coastal town where the river meets the sea. It is a premier destination for water sports and luxury beach stays, offering everything from windsurfing to boat safaris on the Madu River.",
    attractions: ["Bentota Beach", "Brief Garden", "Madu Ganga Safari", "Sea Turtle Hatchery"],
    bestTime: "November to April",
    img: "/Eco_Love_Tours/Bentota.jpg", 
    gallery: ["/Eco_Love_Tours/Benthota/img2.jpg", "/Eco_Love_Tours/Benthota/img3.jpg", "/Eco_Love_Tours/Benthota/img4.png"],
    link: "/eco-love-tours/destinations/bentota" 
  },
  { 
    name: "Mirissa", 
    category: "Coastal",
    description: "Charming beach town on the South coast.",
    longDescription: "Mirissa is famous for its stunning sunsets and whale watching opportunities. It strikes a perfect balance between a relaxed beach atmosphere and a vibrant nightlife, making it a favorite for couples and solo travelers.",
    attractions: ["Whale Watching", "Coconut Tree Hill", "Parrot Rock", "Secret Beach"],
    bestTime: "November to April",
    img: "/Eco_Love_Tours/Mirissa.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image17.jpg"],
    link: "/eco-love-tours/destinations/mirissa" 
  },
  { 
    name: "Hikkaduwa", 
    category: "Coastal",
    description: "Popular beach town for relaxation and parties.",
    longDescription: "Hikkaduwa is one of the original tourist destinations in Sri Lanka. Known for its coral sanctuary and vibrant surf scene, it offers a high-energy environment with plenty of beachfront cafes and bars.",
    attractions: ["Coral Sanctuary", "Hikkaduwa Beach", "Narigama Beach", "Turtle Beach"],
    bestTime: "November to April",
    img: "/Eco_Love_Tours/Hikkaduwa_1.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image18.jpg"],
    link: "/eco-love-tours/destinations/hikkaduwa" 
  },
  { 
    name: "Unawatuna", 
    category: "Coastal",
    description: "Relaxed beach with chilled vibes.",
    longDescription: "Unawatuna is a coastal town in Galle district. Famous for its beautiful horseshoe-shaped beach and turquoise waters, it is a haven for snorkeling and diving, with several shipwrecks to explore just offshore.",
    attractions: ["Japanese Peace Pagoda", "Jungle Beach", "Dalawella Swing", "Main Beach"],
    bestTime: "December to April",
    img: "/Eco_Love_Tours/Unawatuna.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image19.jpg"],
    link: "/eco-love-tours/destinations/unawatuna" 
  },
  { 
    name: "Weligama", 
    category: "Coastal",
    description: "Small town with great surf.",
    longDescription: "Weligama, literally 'Sandy Village', is a popular surf destination especially for beginners. The town is also famous for its iconic stilt fishermen, who can be seen balancing on poles just off the shore.",
    attractions: ["Taprobane Island", "Stilt Fishermen", "Surf Schools", "Kushtarajagala Statue"],
    bestTime: "October to April",
    img: "/Eco_Love_Tours/Waligama.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image20.jpg"],
    link: "/eco-love-tours/destinations/weligama" 
  },
  { 
    name: "Tangalle", 
    category: "Coastal",
    description: "Turtles, temples and fishing villages.",
    longDescription: "Tangalle offers a more secluded and quiet beach experience compared to the rest of the south coast. With pristine stretches of sand and natural bays, it is the perfect spot for those seeking true peace and luxury.",
    attractions: ["Rekawa Turtle Watch", "Mulkirigala Rock Temple", "Hummanya Blowhole", "Silent Beach"],
    bestTime: "December to March",
    img: "/Eco_Love_Tours/Tangalle.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image21.jpg"],
    link: "/eco-love-tours/destinations/tangalle" 
  },
  { 
    name: "Negombo", 
    category: "Coastal",
    description: "Golden beaches and colonial heritage.",
    longDescription: "Located just a short drive from the airport, Negombo is a historic fishing town with a Dutch-influenced canal system. It is the perfect first or last stop on any Sri Lankan journey.",
    attractions: ["Dutch Canal", "Fish Market", "St. Mary's Church", "Negombo Beach"],
    bestTime: "December to April",
    img: "/Eco_Love_Tours/Negombo.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image22.jpg"],
    link: "/eco-love-tours/destinations/negombo" 
  },
  { 
    name: "Trincomalee", 
    category: "Coastal",
    description: "Historic port city with stunning beaches.",
    longDescription: "Trincomalee is home to one of the world's deepest natural harbors. Beyond its history, it offers some of the most beautiful white-sand beaches on the island and incredible whale watching opportunities.",
    attractions: ["Koneswaram Temple", "Pigeon Island", "Nilaveli Beach", "Fort Frederick"],
    bestTime: "May to September",
    img: "/Eco_Love_Tours/Trincomalee.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image23.jpg"],
    link: "/eco-love-tours/destinations/trincomalee" 
  },
  { 
    name: "Passikudah", 
    category: "Coastal",
    description: "Pristine beach ideal for relaxing.",
    longDescription: "Passikudah is known for having one of the longest stretches of shallow coastline in the world. You can walk kilometers into the sea with water only up to your knees, making it a paradise for families and swimmers.",
    attractions: ["Passikudah Bay", "Kalkudah Beach", "Coral Reefs", "Water Sports"],
    bestTime: "May to September",
    img: "/Eco_Love_Tours/Pasikudah_beach.JPG", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image24.jpg"],
    link: "/eco-love-tours/destinations/passikudah" 
  },
  { 
    name: "Kalpitiya", 
    category: "Coastal",
    description: "Nature and watersports lovers’ paradise.",
    longDescription: "Kalpitiya is the kitesurfing capital of Sri Lanka. Composed of 14 islands, it is also one of the best places in the world to see pods of hundreds of dolphins in their natural habitat.",
    attractions: ["Kitesurfing", "Dolphin Watching", "Bar Reef", "Dutch Fort"],
    bestTime: "May to September (Surf) / Nov to April (Dolphins)",
    img: "/Eco_Love_Tours/Kalpitiya.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image25.jpg"],
    link: "/eco-love-tours/destinations/kalpitiya" 
  },

  // --- NATURE & WILDLIFE ---
  { 
    name: "Yala", 
    category: "Wildlife",
    description: "Sri Lanka’s top safari destination.",
    longDescription: "Yala National Park is the most visited and second largest national park in Sri Lanka. It is famous for having one of the highest leopard densities in the world, alongside elephants, sloth bears, and crocodiles.",
    attractions: ["Game Drive", "Sithulpawwa Temple", "Magul Maha Vihara", "Leopard Spotting"],
    bestTime: "February to June",
    img: "/Eco_Love_Tours/yala.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image26.jpg"],
    link: "/eco-love-tours/destinations/yala" 
  },
  { 
    name: "Udawalawe", 
    category: "Wildlife",
    description: "Vast wildlife reserve in the south.",
    longDescription: "Udawalawe is the best place in Sri Lanka to see wild elephants throughout the year. The park was created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir.",
    attractions: ["Elephant Transit Home", "Udawalawe Reservoir", "Safari", "Bird Watching"],
    bestTime: "December to March",
    img: "/Eco_Love_Tours/udawalawe.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image27.jpg"],
    link: "/eco-love-tours/destinations/udawalawe" 
  },
  { 
    name: "Wilpattu", 
    category: "Wildlife",
    description: "Massive national park with diverse wildlife.",
    longDescription: "Wilpattu is unique for its 'Willus' (Natural Lakes). It is the largest and oldest National Park in Sri Lanka, offering a more wilderness-focused, quiet safari experience compared to Yala.",
    attractions: ["Willu Exploration", "Leopard Safari", "Ancient Ruins", "Wildlife Photography"],
    bestTime: "February to October",
    img: "/Eco_Love_Tours/Wilpattu.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image28.jpg"],
    link: "/eco-love-tours/destinations/wilpattu" 
  },
  { 
    name: "Sinharaja", 
    category: "Nature",
    description: "UNESCO rainforest rich in biodiversity.",
    longDescription: "Sinharaja is a national park and a biodiversity hotspot in Sri Lanka. It is of international significance and has been designated a Biosphere Reserve and World Heritage Site by UNESCO. It is home to many endemic species found nowhere else.",
    attractions: ["Rainforest Trek", "Bird Watching", "Waterfalls", "Endemic Species Search"],
    bestTime: "January to March / August to September",
    img: "/Eco_Love_Tours/Sinharaja.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image29.jpg"],
    link: "/eco-love-tours/destinations/sinharaja" 
  },
  { 
    name: "Kitulgala", 
    category: "Adventure",
    description: "Adventure hotspot: rafting and trekking.",
    longDescription: "Kitulgala is one of the wettest places in the country. It is the base for white-water rafting in Sri Lanka, and was also the filming location for the Academy Award-winning 'The Bridge on the River Kwai'.",
    attractions: ["White Water Rafting", "Canyoning", "Jungle Trekking", "Belilena Caves"],
    bestTime: "January to April",
    img: "/Eco_Love_Tours/Kitulgala.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image30.jpg"],
    link: "/eco-love-tours/destinations/kitulgala" 
  },
  { 
    name: "Wellawaya", 
    category: "Nature",
    description: "Scenic rural beauty and waterfalls.",
    longDescription: "Wellawaya is a hidden gem in the Moneragala District. It is home to ancient statues and some of the most impressive waterfalls in Sri Lanka, surrounded by lush paddy fields and rural charm.",
    attractions: ["Buduruwagala Statues", "Diyaluma Falls", "Ella Wala Waterfall", "Paddy Fields"],
    bestTime: "January to May",
    img: "/Eco_Love_Tours/Wellawaya.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image31.jpg"],
    link: "/eco-love-tours/destinations/wellawaya" 
  },

  // --- HIGHLANDS ---
  { 
    name: "Ella", 
    category: "Mountain",
    description: "Lush hills and breathtaking vistas.",
    longDescription: "Ella is a small town high in the mountains. It's famous for its cool climate, tea plantations, and stunning hiking trails that lead to some of the best viewpoints in the country.",
    attractions: ["Nine Arches Bridge", "Little Adam's Peak", "Ella Rock", "Ravana Falls"],
    bestTime: "January to March",
    img: "/Eco_Love_Tours/Ella.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image1.jpg", "/Eco_Love_Tours/Tour_Images/image2.jpg", "/Eco_Love_Tours/Tour_Images/image3.jpg"],
    link: "/eco-love-tours/destinations/ella" 
  },
  { 
    name: "Nuwara Eliya", 
    category: "Highland",
    description: "Mist-covered hills and tea country beauty.",
    longDescription: "Often called 'Little England', Nuwara Eliya is famous for its cool climate and colonial-era architecture. It is the heart of Sri Lanka's tea production, surrounded by rolling hills carpeted in green tea leaves.",
    attractions: ["Gregory Lake", "Horton Plains", "Tea Factory", "Victoria Park"],
    bestTime: "April to June",
    img: "/Eco_Love_Tours/Nuwara-Eliya.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image32.jpg"],
    link: "/eco-love-tours/destinations/nuwara-eliya" 
  },
  { 
    name: "Hatton", 
    category: "Highland",
    description: "Colonial legacy and tea plantation lifestyle.",
    longDescription: "Hatton is a major center of the Sri Lankan tea industry. It serves as a gateway to Adam's Peak and is surrounded by some of the most scenic tea estates in the country, including Castlereagh and Bogawantalawa.",
    attractions: ["Adam's Peak", "Castlereagh Reservoir", "Tea Estate Walk", "Devon Falls"],
    bestTime: "December to May",
    img: "/Eco_Love_Tours/Hatton.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image33.jpg"],
    link: "/eco-love-tours/destinations/hatton" 
  },

  // --- GATEWAYS ---
  { 
    name: "Colombo", 
    category: "Urban",
    description: "Diverse attractions from malls to markets.",
    longDescription: "Colombo is the commercial capital and largest city of Sri Lanka. It is a vibrant mix of modern skyscrapers, colonial buildings, and bustling street markets like Pettah, offering a true taste of Sri Lankan urban life.",
    attractions: ["Gangaramaya Temple", "Galle Face Green", "Lotus Tower", "Pettah Market"],
    bestTime: "January to March",
    img: "/Eco_Love_Tours/Colombo.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image34.jpg"],
    link: "/eco-love-tours/destinations/colombo" 
  },
  { 
    name: "Habarana", 
    category: "Gateway",
    description: "Strategic gateway to North and East Sri Lanka.",
    longDescription: "Habarana is a popular destination for nature lovers and the starting point for safaris in Minneriya and Kaudulla National Parks, famous for 'The Gathering' of hundreds of wild elephants.",
    attractions: ["Minneriya Safari", "Hiriwadunna Village", "Elephant Gathering", "Eco Walks"],
    bestTime: "July to September",
    img: "/Eco_Love_Tours/Habarana.jpg", 
    gallery: ["/Eco_Love_Tours/Tour_Images/image35.jpg"],
    link: "/eco-love-tours/destinations/habarana" 
  }
];