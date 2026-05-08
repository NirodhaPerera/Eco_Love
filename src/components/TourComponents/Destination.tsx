// Define this once to keep your data structured and typed
export interface Destination {
  name: string;
  category: string;
  description: string;      // Short summary for gallery cards
  longDescription: string;  // Detailed history for the detail page
  attractions: string[];    // Key spots to visit
  bestTime: string;         // Ideal months for travel
  img: string;              // Main hero image
  gallery: string[];        // Array of additional images for the detail page
  link: string;             // The URL slug
}