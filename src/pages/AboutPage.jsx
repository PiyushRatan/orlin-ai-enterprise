import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);
  const layerBackRef = useRef(null);
  const layerMidRef = useRef(null);
  const layerFrontRef = useRef(null);

  useEffect(() => {
    // Parallax Effect
    gsap.to(layerBackRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(layerMidRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Front layer moves faster up
    gsap.to(layerFrontRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => ScrollTrigger.refresh();
  }, []);

  return (
    <div style={{ background: 'var(--bg-page)', position: 'relative' }}>
      
      {/* Noise Texture Overlay */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: 0.4,
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <section ref={containerRef} style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Back Layer */}
        <div 
          ref={layerBackRef}
          style={{ 
            position: 'absolute', 
            inset: -100, 
            background: 'linear-gradient(to bottom, #F7F7F9, #E2E8F0)',
            zIndex: 1
          }}
        >
           {/* Abstract typography acting as mountains */}
           <div style={{ position: 'absolute', top: '20%', left: '10%', fontSize: '20vw', fontWeight: 800, color: '#CBD5E1', opacity: 0.3, letterSpacing: '-0.05em' }}>ORLIN</div>
        </div>

        {/* Mid Layer */}
        <div 
          ref={layerMidRef}
          style={{ 
            position: 'absolute', 
            inset: 0, 
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <span className="eyebrow">Our Mission</span>
          <h1 className="h1" style={{ textAlign: 'center', maxWidth: '800px' }}>
            We're building the nervous system for modern real estate.
          </h1>
        </div>

        {/* Front Layer */}
        <div 
          ref={layerFrontRef}
          style={{ 
            position: 'absolute', 
            bottom: '-10%', 
            left: 0, 
            right: 0, 
            height: '40vh',
            background: 'linear-gradient(to top, var(--bg-surface) 50%, transparent)',
            zIndex: 3,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '48px'
          }}
        >
          <div style={{ width: '2px', height: '100px', background: 'var(--accent)' }}></div>
        </div>
      </section>

      <section className="container section-pad" style={{ position: 'relative', zIndex: 4, background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px' }}>
            Real estate is a relationship business. But operators are spending 80% of their time on tasks that computers are objectively better at: data entry, initial qualification, and follow-up scheduling.
          </p>
          <p>
            Orlin AI was founded to fix this. By automating the mechanical aspects of lead generation and pipeline management, we give agents their time back so they can focus on what humans do best: building trust, advising clients, and closing deals.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
