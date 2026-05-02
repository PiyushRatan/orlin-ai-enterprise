import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const PageTransition = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const node1 = useRef(null);
  const node2 = useRef(null);
  const node3 = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.6,
          ease: "power4.inOut",
          onComplete
        });
      }
    });

    // "Assembly" animation for nodes
    tl.fromTo([node1.current, node2.current, node3.current], 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" }
    )
    .fromTo([line1.current, line2.current], 
      { strokeDasharray: 100, strokeDashoffset: 100 },
      { strokeDashoffset: 0, duration: 0.3, stagger: 0.1, ease: "power2.inOut" },
      "-=0.2"
    )
    .fromTo(textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
      "-=0.2"
    )
    .to([node1.current, node2.current, node3.current, line1.current, line2.current, textRef.current], 
      { scale: 0.9, opacity: 0, duration: 0.3, ease: "power2.in", delay: 0.2 }
    );

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'var(--bg-page)', // Warm background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="200" height="100" viewBox="0 0 200 100" fill="none" style={{ overflow: 'visible' }}>
        <path ref={line1} d="M 50 50 C 75 50, 75 50, 100 50" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="4 4" />
        <path ref={line2} d="M 100 50 C 125 50, 125 50, 150 50" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="4 4" />
        
        <rect ref={node1} x="30" y="35" width="40" height="30" rx="4" fill="var(--text-primary)" />
        <rect ref={node2} x="80" y="35" width="40" height="30" rx="4" fill="var(--accent)" />
        <rect ref={node3} x="130" y="35" width="40" height="30" rx="4" fill="var(--success)" />
      </svg>
      
      <div ref={textRef} style={{ marginTop: '24px', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Routing...
      </div>
    </div>
  );
};

export default PageTransition;
