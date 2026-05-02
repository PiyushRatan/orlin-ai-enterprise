import React, { useEffect } from 'react';

const OnboardingPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--bg-page)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="h1" style={{ marginBottom: '16px' }}>Let's Get Started</h1>
        <p className="text-lead" style={{ marginBottom: '48px' }}>
          Please complete the setup form below so we can begin building your AI system.
        </p>
        
        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', height: '800px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid var(--border-light)' }}>
          <iframe 
            src="https://tally.so/embed/3x6DRy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%" 
            height="100%"
            frameBorder="0"
            title="Orlin AI Setup Form"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
