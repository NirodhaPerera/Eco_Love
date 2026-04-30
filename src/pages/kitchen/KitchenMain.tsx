import Footer from '../../components/kitchenComponents/FooterKit';
import HeaderKit from '../../components/kitchenComponents/HeaderKit';
import { Outlet } from 'react-router-dom';

function KitchenMain() {
  return (
    <div>
      <HeaderKit
        logoSrc="/Eco_Love_Kitchen/logo-kitchen.png"
        navLinks={[
          { label: "Home", path: "/eco-love-kitchen" },
          { label: "Session", path: "/eco-love-kitchen/session" },
          { label: "Gallery", path: "/eco-love-kitchen/gallery" },
          { label: "Contact", path: "/eco-love-kitchen/contact" },
        ]}
        buttonLink="/eco-love-kitchen/session" buttonLabel={'Book a Session'}        />  {/* ✅ Use your styled header */}
      <main>
        <Outlet />  {/* This will render the nested routes */}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default KitchenMain;
