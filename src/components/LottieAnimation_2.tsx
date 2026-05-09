import { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

const LottieAnimation_2 = () => {
  const containerRef = useRef(null); // ✅ create a ref

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current, // ✅ attach the ref
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation-2.json', // ✅ make sure the file is in public folder or update the path
      });

      return () => animation.destroy(); // ✅ clean up when component unmounts
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[500px] rotate-0 h-auto mx-auto" // ✅ Tailwind styles for size
    ></div>
  );
};

export default LottieAnimation_2;
