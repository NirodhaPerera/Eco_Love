import Footer from '../../components/kitchenComponents/FooterKit';
import HeaderKit from '../../components/kitchenComponents/HeaderKit';
import { Outlet } from 'react-router-dom';

function TourLayout() {
  return (
    <div>
      <HeaderKit
        logoSrc="/Eco_Love_Tours/logo_tour.png"
        logoSizeClass="w-24 sm:w-32 md:w-40" // Adjust as needed
        navLinks={[
          { label: 'Home', path: '/eco-love-tours' },
          { label: 'Destinations', path: '/eco-love-tours/destinations' },
          { label: 'Experiences', path: '/eco-love-tours/experiences' },
         
          { label: 'Tours', path: '/eco-love-tours/tours' },
          { label: 'Gallery', path: '/eco-love-tours/gallery' },
          { label: 'Contact', path: '/eco-love-tours/contact' },
        ]}
        buttonLink="/eco-love-tours/tours"
        buttonLabel="Book Now"
      />
      <main>
        <Outlet />  {/* This will render the nested routes */}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default TourLayout;
