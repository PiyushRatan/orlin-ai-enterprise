import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesPage = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const zoomWrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // 1. Text Reveal Effect (Asymmetrical text blocks)
    textRefs.current.forEach((text) => {
      gsap.fromTo(text, 
        { opacity: 0.2, y: 20 },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true
          }
        }
      );
    });

    // 2. Zoom Scroll Effect
    gsap.to(zoomWrapperRef.current, {
      scale: 1,
      borderRadius: "0px",
      scrollTrigger: {
        trigger: zoomWrapperRef.current,
        start: "top 70%",
        end: "top 20%",
        scrub: true,
      }
    });

    gsap.fromTo(imageRef.current,
      { scale: 1.5 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: zoomWrapperRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        }
      }
    );

    return () => ScrollTrigger.refresh();
  }, []);

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <section className="container section-pad">
        <span className="eyebrow">Case Studies</span>
        <h1 className="h1" style={{ marginBottom: '96px' }}>Impact in the Real World.</h1>

        {/* Asymmetrical Layout + Text Reveal */}
        <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px', alignItems: 'center' }}>
            <h2 ref={el => textRefs.current[0] = el} style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.1 }}>
              Premier Realty was losing 60% of Zillow leads due to slow follow-up.
            </h2>
            <div></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '48px', alignItems: 'center' }}>
            <div></div>
            <p ref={el => textRefs.current[1] = el} className="text-lead" style={{ fontSize: '1.5rem' }}>
              They hired three inside sales agents, but humans need sleep. Leads arriving at 10 PM weren't touched until 9 AM the next day. The conversion rate plummeted.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <h2 ref={el => textRefs.current[2] = el} style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.1, color: 'var(--accent)' }}>
              Orlin AI stepped in with a sub-60-second response guarantee.
            </h2>
            <div></div>
          </div>

        </div>
      </section>

      {/* Zoom Scroll Effect Section */}
      <section style={{ height: '150vh' }}>
        <div 
          style={{ 
            position: 'sticky', 
            top: '80px', 
            height: 'calc(100vh - 80px)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <div 
            ref={zoomWrapperRef}
            style={{ 
              width: '90%', 
              height: '80%', 
              borderRadius: '32px', 
              overflow: 'hidden',
              position: 'relative',
              scale: 0.6 // Initial scale
            }}
          >
            {/* Dark overlay for text readability */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1 }}></div>
            
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Luxury Real Estate" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: 'clamp(4rem, 15vw, 6rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                340%
              </div>
              <div style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Increase in Booked Appointments
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="container section-pad" style={{ textAlign: 'center' }}>
        <h2 className="h2" style={{ marginBottom: '24px' }}>Ready for results like these?</h2>
        <a href="https://calendly.com/orlinskybound05/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Your Free AI Strategy Call</a>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
