import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Capture', desc: 'Webhook intercepts lead data instantly.', trigger: 'Form Submit' },
  { num: '02', title: 'Score', desc: 'AI assesses intent & property match.', trigger: 'A/B/C Rating' },
  { num: '03', title: 'Book', desc: 'High-intent leads get calendar links.', trigger: 'SMS sent' },
  { num: '04', title: 'Sync', desc: 'Agent\'s CRM updated with transcript.', trigger: 'FollowUp Boss' },
  { num: '05', title: 'Nurture', desc: 'Unbooked leads enter drip campaigns.', trigger: 'Reactivation' }
];

const WorkflowBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, opacity: 0.05 }}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="process-grid" width="300" height="300" patternUnits="userSpaceOnUse">
          <rect x="20" y="20" width="30" height="20" rx="2" fill="#fff" />
          <rect x="150" y="80" width="30" height="20" rx="2" fill="var(--accent)" />
          <rect x="80" y="180" width="30" height="20" rx="2" fill="#fff" />
          <path d="M 50 30 C 100 30, 100 90, 150 90" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 165 100 C 165 140, 95 140, 95 180" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="2 2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#process-grid)" />
    </svg>
  </div>
);

const Process = () => {
  const containerRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 320px)", () => {
      stepsRef.current.forEach((step, i) => {
        if (i === stepsRef.current.length - 1) return;

        gsap.to(step, {
          scale: 0.95 + (i * 0.01),
          opacity: 0.4,
          scrollTrigger: {
            trigger: stepsRef.current[i + 1],
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          }
        });
      });
      // Text Reveal for Heading
      gsap.fromTo('.process-reveal', 
        { y: '110%', rotateZ: 2 },
        { 
          y: '0%', 
          rotateZ: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: '.process-reveal',
            start: "top 90%",
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="process" className="section-pad" style={{ background: 'var(--bg-page)' }}>
      <div 
        ref={containerRef}
        style={{
          background: 'var(--text-primary)',
          color: 'white',
          borderRadius: '8px',
          margin: '0 24px',
          padding: '96px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <WorkflowBackground />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ overflow: 'hidden' }}>
              <span className="eyebrow process-reveal" style={{ color: 'var(--accent)', display: 'block' }}>The Blueprint</span>
            </div>
            <h2 className="h2" style={{ color: 'white', marginTop: '8px' }}>
              <div style={{ overflow: 'hidden' }}><div className="process-reveal" style={{ display: 'inline-block' }}>How the Automation</div></div>
              <div style={{ overflow: 'hidden' }}><div className="process-reveal" style={{ display: 'inline-block' }}>Flows</div></div>
            </h2>
            <p className="text-lead" style={{ color: '#A8A29E', maxWidth: '500px', margin: '16px auto 0' }}>A predictable, 5-step system that runs 24/7, ensuring no inquiry falls through the cracks.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vh', paddingBottom: '5vh' }}>
            {steps.map((step, i) => (
              <div 
                key={i}
                ref={el => stepsRef.current[i] = el}
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '40px',
                  borderRadius: '6px',
                  position: 'sticky',
                  top: `calc(20vh + ${i * 15}px)`,
                  zIndex: i,
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                className="step-card"
              >
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'white', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace' }}>{step.num} //</span> 
                    {step.title}
                  </h3>
                  <p style={{ color: '#A8A29E', fontSize: '1rem' }}>{step.desc}</p>
                </div>
                <span style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.875rem', color: '#D4CFC3', border: '1px solid rgba(255,255,255,0.1)' }}>
                  Trigger: {step.trigger}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .step-card { flex-direction: column; align-items: flex-start !important; gap: 24px; padding: 24px !important; }
            .step-card > span { align-self: flex-start; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Process;
