import Footer from '../../components/kitchenComponents/FooterKit';
import HeaderKit from '../../components/kitchenComponents/HeaderKit';
import { Outlet } from 'react-router-dom';

function LodgeLayout() {
  return (
    <div>
      <HeaderKit
        logoSrc="/Eco_Love_Lodge/logo-lodge.png"
        logoSizeClass="w-20 sm:w-24 md:w-28" // Smaller logo
        navLinks={[
          { label: 'Home', path: '/eco-love-lodge' },
          { label: 'Stays', path: '/eco-love-lodge/stays' },
          { label: 'Gallery', path: '/eco-love-lodge/gallery' },
          { label: 'Contact', path: '/eco-love-lodge/contact' },
        ]}
        buttonLink="/eco-love-lodge/stays"
        buttonLabel="Book a Stay"
      />
      <main>
        <Outlet />  {/* This will render the nested routes */}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default LodgeLayout;
