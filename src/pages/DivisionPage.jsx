import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { divisionData } from '../data';

const DivisionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const division = divisionData[id];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [id]);

  if (!division) {
    return <div style={{ padding: '100px 24px', textAlign: 'center' }}>Division not found.</div>;
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--bg-page)', minHeight: '100vh' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>
            &larr; Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="h1" style={{ marginBottom: '16px' }}>{division.name}</h1>
          <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto' }}>{division.description}</p>
        </div>

        {/* Subdivision Links */}
        <div style={{ maxWidth: '900px', margin: '0 auto 80px' }}>
          <h3 className="h3" style={{ marginBottom: '32px', textAlign: 'center' }}>Select a Service to Configure</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {division.services.map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate(`/division/${id}/service/${service.id}`)}
                className="sharp-card" 
                style={{ 
                  padding: '32px', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '1px solid var(--border-light)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)';
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--accent-glow)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>
                  {idx + 1}
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                  {service.title.replace(/^[0-9]+️⃣\s*/, '')}
                </h4>
                <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  View details &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DivisionPage;
