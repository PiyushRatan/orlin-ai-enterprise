import React, { useEffect, useRef, useState, useContext } from 'react';
import { LoadingContext } from '../App';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { initialLoading } = useContext(LoadingContext);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Entrance Animation
    if (!initialLoading) {
      const tl = gsap.timeline();
      tl.fromTo(headerRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      ).fromTo(logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      ).fromTo(navRef.current.children,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialLoading]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
    <header 
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        padding: scrolled ? '16px 0' : '24px 0',
        background: scrolled ? 'rgba(252, 251, 248, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        transition: 'padding 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.4s ease, border 0.4s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link 
          to="/" 
          ref={logoRef}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}
        >
          <img src="/logo.png" alt="Orlin AI Logo" style={{ height: '32px' }} onError={(e) => { e.target.style.display = 'none' }} />
        </Link>

        <nav ref={navRef} style={{ display: 'flex', gap: '32px' }} className="desktop-nav">
          <Link to="/solutions" className="nav-link">Solutions</Link>
          <Link to="/case-studies" className="nav-link">Case Studies</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a href="#book" className="btn btn-primary desktop-btn">Book Strategy Call</a>
          <button 
            style={{ display: 'block', padding: '8px', color: 'var(--text-primary)', background: 'none', border: 'none', cursor: 'pointer', position: 'relative', zIndex: 100000 }} 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    <div 
      style={{
        position: 'fixed',
        top: scrolled ? '64px' : '80px',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--bg-surface)',
        zIndex: 99998,
        display: mobileMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '32px 24px',
        gap: '24px',
        borderTop: '1px solid var(--border-light)',
        overflowY: 'auto',
        transition: 'top 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)'
      }}
      className="mobile-menu"
    >
        <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>Home</Link>
        
        <div style={{ height: '1px', background: 'var(--border-light)', margin: '4px 0' }}></div>
        
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Home Sections</div>
        <a href="/#process" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-primary)' }}>The Blueprint</a>
        <a href="/#solutions" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-primary)' }}>The System</a>
        <a href="/#integrations" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-primary)' }}>Integrations</a>

        <div style={{ height: '1px', background: 'var(--border-light)', margin: '4px 0' }}></div>

        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Pages</div>
        <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-primary)' }}>Solutions</Link>
        <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-primary)' }}>Case Studies</Link>
        <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-primary)' }}>About</Link>
        
        <div style={{ marginTop: 'auto', paddingBottom: '32px', paddingTop: '16px' }}>
          <a href="#book" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Book Strategy Call</a>
        </div>
      </div>

      <style>{`
        .nav-link {
          fontSize: 0.95rem;
          fontWeight: 500;
          color: var(--text-secondary);
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-btn { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
