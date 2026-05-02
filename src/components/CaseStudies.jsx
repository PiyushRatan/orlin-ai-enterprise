import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    // Text Reveal for Heading
    gsap.fromTo('.cases-reveal', 
      { y: '110%', rotateZ: 2 },
      { 
        y: '0%', 
        rotateZ: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: '.cases-reveal',
          start: "top 90%",
        }
      }
    );
  }, []);

  return (
    <section id="case-studies" ref={sectionRef} className="section-pad" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto 64px', textAlign: 'center' }}>
          <div style={{ overflow: 'hidden' }}>
            <span className="eyebrow cases-reveal" style={{ display: 'block' }}>Proof of Concept</span>
          </div>
          <h2 className="h2" style={{ marginTop: '8px' }}>
            <div style={{ overflow: 'hidden' }}><div className="cases-reveal" style={{ display: 'inline-block' }}>Measurable Outcomes</div></div>
          </h2>
          <p className="text-lead" style={{ marginTop: '16px' }}>Don't take our word for it. Look at the data.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          
          <div 
            ref={el => cardsRef.current[0] = el}
            style={{ padding: '48px', borderRadius: '24px', background: 'var(--bg-page)', border: '1px solid var(--border-light)' }}
          >
            <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '16px', letterSpacing: '-0.05em' }}>3x</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>Increase in Qualified Appointments</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Before Orlin AI, manual follow-up resulted in a 12% connection rate. By automating the initial SMS outreach within 60 seconds, connection rates jumped to 48%.</p>
            <div style={{ fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '16px', marginBottom: '24px', color: 'var(--text-primary)' }}>
              "We stopped burning cash on MagicBricks leads. The system qualifies them before my team even starts their day."
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop" alt="Vikram Malhotra" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', background: 'var(--border-dark)' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.875rem' }}>Vikram Malhotra</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Managing Director, Malhotra Realty</span>
              </div>
            </div>
          </div>

          <div 
            ref={el => cardsRef.current[1] = el}
            style={{ padding: '48px', borderRadius: '24px', background: 'var(--bg-page)', border: '1px solid var(--border-light)' }}
          >
            <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '16px', letterSpacing: '-0.05em' }}>85%</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>Reduction in CRM Data Entry</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Agents were spending 10+ hours a week logging calls and updating stages. Our bidirectional sync automated the entire process.</p>
            <div style={{ fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '16px', marginBottom: '24px', color: 'var(--text-primary)' }}>
              "My agents finally have time to close high-ticket clients instead of manually following up on cold inquiries."
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=100&auto=format&fit=crop" alt="Anjali Deshmukh" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', background: 'var(--border-dark)' }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.875rem' }}>Anjali Deshmukh</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Head of Sales, Skyline Infra</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
