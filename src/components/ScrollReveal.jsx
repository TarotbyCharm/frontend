import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealComponent({
  children,
  options = {},
  className,
}) {
  const revealRef = useRef(null);

  useEffect(() => {
    if (revealRef.current) {
      ScrollReveal().reveal(revealRef.current, {
        origin: "bottom",
        distance: "50px",
        duration: 1500,
        delay: 200,
        reset: false, // Prevent animation from resetting when scrolling back
        ...options, // Allow overriding default options
      });
    }
  }, [options]);

  return (
    <div ref={revealRef} className={className}>
      {children}
    </div>
  );
}
