import React, { useEffect, useRef, useContext } from 'react';
import { LoadingContext } from '../App';
import gsap from 'gsap';

// Minimalist n8n-style workflow nodes SVG for background
const WorkflowBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, opacity: 0.15 }}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="workflow-grid" width="400" height="400" patternUnits="userSpaceOnUse">
          {/* Nodes */}
          <rect x="50" y="50" width="40" height="24" rx="4" fill="var(--text-primary)" />
          <rect x="250" y="120" width="40" height="24" rx="4" fill="var(--accent)" />
          <rect x="150" y="250" width="40" height="24" rx="4" fill="var(--text-secondary)" />
          <rect x="350" y="300" width="40" height="24" rx="4" fill="var(--success)" />
          {/* Connections */}
          <path d="M 90 62 C 170 62, 170 132, 250 132" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 90 62 C 120 62, 120 262, 150 262" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 290 132 C 320 132, 320 312, 350 312" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 190 262 C 270 262, 270 312, 350 312" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="4 4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#workflow-grid)" />
    </svg>
  </div>
);

const MagneticButton = ({ children, className, href }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    // Disable magnetic effect on mobile
    if (window.innerWidth <= 768) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      const w = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - w;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)"
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a ref={btnRef} href={href} className={className} style={{ display: 'inline-flex', position: 'relative', zIndex: 1 }}>
      {children}
    </a>
  );
};

const Hero = () => {
  const { initialLoading } = useContext(LoadingContext);
  const heroRef = useRef(null);
  const mockupRef = useRef(null);
  const introRef = useRef(null);
  const leadRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      let { isMobile } = context.conditions;

      const dMult = isMobile ? 1.5 : 1;
      const sMult = isMobile ? 1.5 : 1;

      // PRE-SET: Hide everything immediately to prevent jitters
      gsap.set([introRef.current, leadRef.current, buttonsRef.current, mockupRef.current], { opacity: 0, y: 20 });
      gsap.set('.kinetic-line', { y: '110%', opacity: 0 });

      // Entrance Animation
      if (!initialLoading) {
        const tl = gsap.timeline({ delay: 0.1 }); // Tiny buffer for loader clearance
        tl.fromTo(introRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
        ).fromTo(heroRef.current.querySelectorAll('.kinetic-line'),
          { y: '110%', rotateZ: 5, opacity: 0 },
          { y: '0%', rotateZ: 0, opacity: 1, duration: 0.8 * dMult, stagger: 0.08 * sMult, ease: "expo.out" },
          "-=0.4"
        ).fromTo(leadRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 * dMult, ease: "power3.out" },
          "-=0.6"
        ).fromTo(buttonsRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 * dMult, ease: "power3.out" },
          "-=0.4"
        ).fromTo(mockupRef.current,
          { x: 30, opacity: 0, rotateY: 15, scale: 0.98 },
          { x: 0, opacity: 1, rotateY: -5, rotateX: 5, scale: 1, duration: 0.8 * dMult, ease: "power4.out" },
          "-=0.7"
        );
      }

      // Mouse Parallax Effect (only desktop)
      if (!isMobile) {
        const handleMouseMove = (e) => {
          const { innerWidth, innerHeight } = window;
          const xPos = (e.clientX / innerWidth - 0.5) * 20;
          const yPos = (e.clientY / innerHeight - 0.5) * 20;

          gsap.to(mockupRef.current, {
            rotateY: -5 + xPos,
            rotateX: 5 - yPos,
            duration: 1,
            ease: "power2.out"
          });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    }, [initialLoading]);

    return () => mm.revert();
  }, [initialLoading]);

  return (
    <section ref={heroRef} className="hero section-pad" style={{ paddingTop: '0px', overflow: 'hidden', position: 'relative' }}>
      <WorkflowBackground />
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Left Content */}
        <div style={{ maxWidth: '580px' }}>
          <div ref={introRef}>
            <span className="eyebrow">AI Automation for Real Estate</span>
          </div>

          <h1 className="h1" style={{ marginBottom: '24px' }}>
            <div style={{ overflow: 'hidden' }}><div className="kinetic-line" style={{ display: 'inline-block', opacity: 0 }}>Convert</div></div>
            <div style={{ overflow: 'hidden' }}><div className="kinetic-line" style={{ display: 'inline-block', color: 'var(--accent)', opacity: 0 }}>More Leads</div></div>
            <div style={{ overflow: 'hidden' }}><div className="kinetic-line" style={{ display: 'inline-block', opacity: 0 }}>Without Manual Follow-Up</div></div>
          </h1>

          <p ref={leadRef} className="text-lead" style={{ marginBottom: '40px' }}>We build custom AI systems for brokerages that instantly capture, qualify, and book property leads directly to your CRM.</p>

          <div ref={buttonsRef} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }} className="hero-buttons">
            <MagneticButton href="https://calendly.com/orlinskybound05/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Your Free AI Strategy Call</MagneticButton>
            <a href="#process" className="btn btn-secondary">See How It Works</a>
          </div>

          <div style={{ marginTop: '24px', fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#F59E0B', letterSpacing: '2px' }}>★ ★ ★ ★ ★</span>
            Trusted by top-producing real estate teams.
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <div style={{ perspective: '1000px' }}>
          <div
            ref={mockupRef}
            style={{
              background: 'var(--bg-surface)',
              borderRadius: '6px', // Sharper
              boxShadow: 'var(--shadow-float)',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              transform: 'rotateY(-5deg) rotateX(5deg)',
            }}
          >
            {/* Mockup Header */}
            <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-light)', display: 'flex', gap: '8px', alignItems: 'center', background: 'white' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></div>
              <span style={{ marginLeft: '12px', fontSize: '0.75rem', color: '#9CA3AF', fontFamily: 'monospace' }}>Orlin AI Dashboard // Pipeline Sync</span>
            </div>

            {/* Mockup Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'white', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>Response Time</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>&lt; 1 Min</div>
                </div>
                <div style={{ background: 'white', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>Qual. Rate</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>42%</div>
                </div>
              </div>

              <div style={{ background: 'white', borderRadius: '4px', border: '1px solid var(--border-light)', padding: '16px' }}>
                {[
                  { name: 'Arjun Mehra', source: 'MagicBricks Inbound', status: 'New Lead', color: '#4F46E5', bg: '#EEF2FF', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop' },
                  { name: 'Priya Sharma', source: '99acres Lead', status: 'Qualified', color: 'var(--accent)', bg: '#FFF7ED', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop' },
                  { name: 'Rohan Gupta', source: 'Website Chat', status: 'Booked', color: 'var(--success)', bg: '#ECFDF5', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop' },
                ].map((lead, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i === 2 ? 'none' : '1px solid var(--border-light)', paddingBottom: i === 2 ? 0 : '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img src={lead.img} alt={lead.name} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', background: 'var(--border-light)' }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{lead.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{lead.source}</div>
                      </div>
                    </div>
                    <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, background: lead.bg, color: lead.color, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: lead.color }}></span>
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 992px) {
          .hero .container { grid-template-columns: 1fr !important; text-align: center; gap: 48px !important; }
          .hero .container > div:first-child { margin: 0 auto; }
          .hero-buttons { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
