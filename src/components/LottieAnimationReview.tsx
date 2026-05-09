import { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

const LottieAnimationReview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/review_1.json', // Ensure this file is inside public/
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto my-6"
    ></div>
  );
};

export default LottieAnimationReview;
