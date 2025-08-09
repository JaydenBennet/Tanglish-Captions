import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ intensity = 10 }) {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({ 
      duration: intensity / 10,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    const raf = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      if (lenis.current) {
        lenis.current.destroy();
        lenis.current = null;
      }
    };
  }, [intensity]);

  return null;
}