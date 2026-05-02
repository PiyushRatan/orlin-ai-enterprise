import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const solutionsData = [
  { id: 1, title: 'AI Lead & Outreach Engine', desc: 'Generate and qualify leads automatically with lead capture, cold outreach, and referral systems.' },
  { id: 2, title: 'AI Sales & Conversion System', desc: 'Convert leads automatically using appointment automation, product matching, and custom plan generators.' },
  { id: 3, title: 'AI Chatbot & Experience Suite', desc: 'Automate conversations & support with intelligent website, staff training, and onboarding chatbots.' },
  { id: 4, title: 'AI Operations & Workflow Automation', desc: 'Streamline internal operations with seamless CRM integration, task assignment, and HR automation.' },
  { id: 5, title: 'AI Retention & Growth Systems', desc: 'Increase lifetime value through automated email sequences, content generation, and smart analytics.' }
];

const Solutions = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 320px)", () => {
      // Create the stacking effect where cards scale down and dim as the next one arrives
      cardsRef.current.forEach((card, i) => {
        if (i === cardsRef.current.length - 1) return; // Skip the last card

        gsap.to(card, {
          scale: 0.9 + (i * 0.01),
          opacity: 0.3,
          scrollTrigger: {
            trigger: cardsRef.current[i + 1],
            start: "top 60%", // When the NEXT card hits 60% of viewport
            end: "top 20%",
            scrub: true,
          }
        });
      });
      // Text Reveal for Heading
      gsap.fromTo('.solutions-reveal', 
        { y: '110%', rotateZ: 2 },
        { 
          y: '0%', 
          rotateZ: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: '.solutions-reveal',
            start: "top 90%",
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="solutions" className="section-pad" ref={containerRef} style={{ background: 'var(--bg-page)', position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto 64px', textAlign: 'center' }}>
          <div style={{ overflow: 'hidden' }}>
            <span className="eyebrow solutions-reveal" style={{ display: 'block' }}>The System</span>
          </div>
          <h2 className="h2" style={{ marginTop: '8px' }}>
            <div style={{ overflow: 'hidden' }}><div className="solutions-reveal" style={{ display: 'inline-block' }}>End-to-End Deal</div></div>
            <div style={{ overflow: 'hidden' }}><div className="solutions-reveal" style={{ display: 'inline-block' }}>Infrastructure</div></div>
          </h2>
          <p className="text-lead" style={{ marginTop: '16px' }}>Replace disjointed software with a unified automation stack designed specifically for real estate operations.</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4vh', paddingBottom: '10vh' }}>
          {solutionsData.map((item, index) => (
            <div 
              key={item.id} 
              ref={el => cardsRef.current[index] = el}
              className="sharp-card"
              onClick={() => navigate(`/division/${item.id}`)}
              style={{
                width: '100%',
                maxWidth: '800px',
                position: 'sticky',
                top: `calc(15vh + ${index * 15}px)`, // Stacks beautifully natively
                zIndex: index,
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '4px', background: 'var(--accent-glow)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold' }}>
                  0{item.id}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{item.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1, fontSize: '1.125rem' }}>{item.desc}</p>
              <span style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Explore Division Services &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
