import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TrustBar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(barRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  const logos = [
    "Lodha Group",
    "DLF Limited",
    "Godrej Properties",
    "Tata Housing",
    "Prestige Estates",
    "Oberoi Realty"
  ];

  return (
    <div 
      ref={barRef}
      style={{
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        padding: '40px 0',
        background: 'var(--bg-surface)',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Built for real-estate teams that need faster response & more booked calls
      </p>

      {/* Infinite Marquee Container */}
      <div className="marquee-container" style={{ display: 'flex', whiteSpace: 'nowrap', opacity: 0.7, filter: 'grayscale(100%)' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
          {/* Render logos twice to create the seamless infinite loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'serif', letterSpacing: '-1px' }}>
              {logo}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee 20s linear infinite;
        }
        
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
