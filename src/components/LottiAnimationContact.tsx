import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimationContact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/contact.json', // Ensure this file is inside public/
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl sm:max-w-sm md:max-w-md mx-auto my-6"
    ></div>
  );
};

export default LottieAnimationContact;
