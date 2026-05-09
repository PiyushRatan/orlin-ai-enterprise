import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-surface)', padding: '80px 0 40px', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '64px', marginBottom: '64px' }} className="footer-grid">
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              <img src="/logo.png" alt="Orlin AI Logo" style={{ height: '32px' }} onError={(e) => { e.target.style.display = 'none' }} />
             AI
            </Link>
            <p style={{ color: 'var(--text-secondary)', margin: '16px 0 24px', maxWidth: '300px' }}>
              Building the nervous system for modern real estate brokerages. Convert more leads, automatically.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <a href="https://www.instagram.com/orlinai_?igsh=c3h1cGV5cjc0bW5j" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://x.com/Orlin_Ai" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/devalla-karthik-470ab536a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pages</h4>
            <ul>
              <li style={{ marginBottom: '12px' }}><Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/solutions" style={{ color: 'var(--text-secondary)' }}>Solutions</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/case-studies" style={{ color: 'var(--text-secondary)' }}>Case Studies</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/about" style={{ color: 'var(--text-secondary)' }}>About Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Capabilities</h4>
            <ul>
              <li style={{ marginBottom: '12px' }}><a href="/#solutions" style={{ color: 'var(--text-secondary)' }}>Lead Capture</a></li>
              <li style={{ marginBottom: '12px' }}><a href="/#solutions" style={{ color: 'var(--text-secondary)' }}>AI Qualification</a></li>
              <li style={{ marginBottom: '12px' }}><a href="/#solutions" style={{ color: 'var(--text-secondary)' }}>Appointment Booking</a></li>
              <li style={{ marginBottom: '12px' }}><a href="/#solutions" style={{ color: 'var(--text-secondary)' }}>CRM Integration</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h4>
            <ul>
              <li style={{ marginBottom: '12px' }}><Link to="#" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="#" style={{ color: 'var(--text-secondary)' }}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ paddingTop: '32px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }} className="footer-bottom">
          <span>&copy; 2026 Orlin AI. All rights reserved.</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.8, position: 'relative' }}>
            Made by <a href="https://piyushratan.in" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Piyush</a>
            {/* DO NOT REMOVE - Builder Credit */}
            <a href="https://piyushratan.in" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Built by Piyush Ratan</a>
          </span>
          <span>System Status: <strong style={{ color: 'var(--success)' }}>100% Operational</strong></span>
        </div>
      </div>

      <style>{`
        .footer-col a:hover { color: var(--accent) !important; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
