import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { step: '01', title: 'Capture', desc: 'Aggregate leads from MagicBricks, 99acres, Meta, and your website into one unified inbox instantly.' },
  { step: '02', title: 'Qualify', desc: 'AI engages leads 24/7, filtering tire-kickers by budget and timeline before you even wake up.' },
  { step: '03', title: 'Book', desc: 'High-intent leads are automatically routed to the right agent’s calendar.' },
  { step: '04', title: 'Sync', desc: 'Bidirectional updates keep your CRM accurate without manual data entry.' },
  { step: '05', title: 'Nurture', desc: 'Unbooked leads enter long-term drip campaigns until they are ready to transact.' },
  { step: '06', title: 'Report', desc: 'Attribute every closed deal back to the exact ad campaign or lead source.' }
];

const SolutionsPage = () => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 320px)", () => {
      // Horizontal Scroll Animation runs on ALL screens now!
      const sections = gsap.utils.toArray('.solution-card');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollWrapperRef.current.offsetWidth
        }
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div style={{ background: 'var(--bg-page)', overflowX: 'hidden' }}>
      
      {/* Hero Intro */}
      <section className="section-pad container" style={{ paddingBottom: '48px' }}>
        <span className="eyebrow">End-to-end Infrastructure</span>
        <h1 className="h1" style={{ maxWidth: '800px', marginBottom: '24px' }}>A unified automation stack for modern brokerages.</h1>
        <p className="text-lead" style={{ maxWidth: '600px' }}>
          Stop duct-taping software together. Scroll to see how a lead moves through the Orlin AI ecosystem from capture to close.
        </p>
      </section>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="scroll-container" style={{ height: '100vh', display: 'flex', alignItems: 'center', background: 'var(--text-primary)', color: 'white' }}>
        <div 
          ref={scrollWrapperRef}
          className="scroll-wrapper"
          style={{ display: 'flex', flexWrap: 'nowrap', padding: '0 50vw 0 10vw' }}
        >
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="solution-card"
              style={{
                width: '400px',
                maxWidth: '85vw', // Ensures it fits on mobile
                height: '500px',
                maxHeight: '70vh',
                flexShrink: 0,
                marginRight: '5vw', // Responsive gap
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px', // Sharper aesthetic
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent)', opacity: 0.5, position: 'absolute', top: '32px', right: '32px', lineHeight: 1 }}>
                {feature.step}
              </div>
              
              <div style={{ flexGrow: 1 }} />
              
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '16px' }}>{feature.title}</h2>
              <p style={{ color: '#94A3B8', fontSize: '1.125rem', lineHeight: 1.6 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Buffer */}
      <div style={{ height: '20vh', background: 'var(--bg-page)' }}></div>

      {/* Mobile Override - ensure horizontal structure is kept for GSAP */}
      <style>{`
        @media (max-width: 992px) {
          .scroll-wrapper { padding: 0 50vw 0 5vw !important; }
        }
        
        /* Make sure h2 resizes nicely inside the card on mobile */
        .solution-card h2 {
          font-size: clamp(1.5rem, 5vw, 2.5rem) !important;
        }
      `}</style>
    </div>
  );
};

export default SolutionsPage;
