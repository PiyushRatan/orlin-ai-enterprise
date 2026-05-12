import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="book" ref={sectionRef} style={{ background: 'var(--text-primary)', color: 'white', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 className="h2" style={{ color: 'white', marginBottom: '24px' }}>Ready to Scale Your Business?</h2>
        <p className="text-lead" style={{ color: '#A8A29E', maxWidth: '600px', margin: '0 auto 40px' }}>
          Schedule a strategy session today to discover how our Enterprise AI Blueprint can transform your operations.
        </p>
        <a href="https://calendly.com/orlinskybound05/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>Book Your Free AI Strategy Call</a>
      </div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', opacity: 0.2, pointerEvents: 'none' }}></div>
    </section>
  );
};

export default CTA;
