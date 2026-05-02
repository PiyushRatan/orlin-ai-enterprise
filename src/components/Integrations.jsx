import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Integrations = () => {
  const sectionRef = useRef(null);
  const tilesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(tilesRef.current,
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Text Reveal for Heading
    gsap.fromTo('.integrations-reveal', 
      { y: '110%', rotateZ: 2 },
      { 
        y: '0%', 
        rotateZ: 0, 
        duration: 1, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: '.integrations-reveal',
          start: "top 90%",
        }
      }
    );
  }, []);

  const Tile = ({ tag, type, name, index }) => {
    const bg = type === 'Native' ? '#ECFDF5' : type === 'API' ? '#EEF2FF' : '#F1F5F9';
    const color = type === 'Native' ? 'var(--success)' : type === 'API' ? '#4F46E5' : '#475569';

    return (
      <div 
        ref={el => tilesRef.current[index] = el}
        style={{
          padding: '16px 24px', background: 'var(--bg-surface)', border: '1px solid var(--border-light)', 
          borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '12px', 
          boxShadow: '0 1px 2px 0 rgba(11, 15, 25, 0.05)', transition: 'transform 0.2s ease', cursor: 'pointer'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--border-dark)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
      >
        <span style={{ fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', background: bg, color: color }}>
          {type}
        </span>
        {name}
      </div>
    );
  };

  return (
    <section id="integrations" ref={sectionRef} className="section-pad" style={{ background: 'var(--bg-surface)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="h3" style={{ marginBottom: '40px' }}>
          <div style={{ overflow: 'hidden' }}><div className="integrations-reveal" style={{ display: 'inline-block' }}>Works with your existing stack.</div></div>
          <div style={{ overflow: 'hidden' }}><div className="integrations-reveal" style={{ display: 'inline-block' }}>No rip-and-replace.</div></div>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
          <Tile index={0} type="Native" name="FollowUp Boss" />
          <Tile index={1} type="Native" name="HubSpot" />
          <Tile index={2} type="Native" name="Salesforce" />
          <Tile index={3} type="API" name="Calendly" />
          <Tile index={4} type="API" name="Meta Ads" />
          <Tile index={5} type="API" name="MagicBricks" />
          <Tile index={6} type="Custom" name="Webhooks" />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
