import ContactSection from "../../components/kitchenComponents/ContactSection";
import HeroKit from "../../components/kitchenComponents/HeroKit"
import AboutTour from "../../components/TourComponents/AboutTour";
import DestinationsShowcase from "../../components/TourComponents/DestinationSection";
import AuthenticExperiences from "../../components/TourComponents/ExperienceSection";
import GallerySection from "../../components/TourComponents/GallerySection";

import TestimonialSection from "../../components/TourComponents/TestimonialSection";
import TourOption from "../../components/TourComponents/TourOption";

const Home = () => {

    const tourImages = [
    '/Eco_Love_Tours/Tour_Images/img154.jpg',
    '/Eco_Love_Tours/Tour_Images/img106.jpg',
    '/Eco_Love_Tours/Tour_Images/img120.jpg',
    '/Eco_Love_Tours/Tour_Images/img7.jpg',
    '/Eco_Love_Tours/Tour_Images/img136.jpg',
    '/Eco_Love_Tours/Tour_Images/img119.jpg ',
    '/Eco_Love_Tours/Tour_Images/img120.jpg',
    '/Eco_Love_Tours/Tour_Images/img175.jpg',
    '/Eco_Love_Tours/Tour_Images/img176.jpg',
 
  ];

  return (

    <>
     <HeroKit
      images={tourImages}
      title="Explore Sri Lanka With Us"
      subtitle="Authentic, sustainable, and unforgettable travel experiences."
      buttonLabel="Book Now"
      buttonLink="/eco-love-tours/tours"
    />
      <AboutTour></AboutTour>
      <AuthenticExperiences></AuthenticExperiences>
      <TourOption></TourOption>
      <DestinationsShowcase></DestinationsShowcase>
      <GallerySection></GallerySection>
      <TestimonialSection></TestimonialSection>
      <ContactSection></ContactSection>
    
    </>
    
    



  )
}

export default Home
