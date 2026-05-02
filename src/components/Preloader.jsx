import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            ScrollTrigger.refresh();
            onComplete();
          }
        });
      }
    });

    // Simple draw-in animation for an abstract 'O' using new warm colors
    tl.fromTo(svgRef.current, 
      { strokeDasharray: 400, strokeDashoffset: 400 },
      { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" }
    )
    .to(svgRef.current, { fill: "var(--accent)", stroke: "transparent", duration: 0.5 }, "-=0.3")
    .to(svgRef.current, { scale: 0, opacity: 0, duration: 0.5, ease: "back.in(1.7)" }, "+=0.2");

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'var(--text-primary)', // Dark contrast for the preloader
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle 
          ref={svgRef}
          cx="50" cy="50" r="40" 
          stroke="var(--bg-page)" 
          strokeWidth="4" 
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Preloader;
