import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { divisionData, plans } from '../data';

const SubdivisionPage = () => {
  const { divId, serviceId } = useParams();
  const navigate = useNavigate();
  const division = divisionData[divId];
  const service = division?.services.find(s => s.id === serviceId);

  const paypalContainerRef = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [divId, serviceId]);

  useEffect(() => {
    if (selectedPlan && !paymentSuccess) {
      if (paypalContainerRef.current) {
        paypalContainerRef.current.innerHTML = '';
      }

      if (window.paypal) {
        window.paypal.Buttons({
          style: {
            color: 'gold',
            shape: 'rect',
            label: 'paypal'
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: { value: selectedPlan.price }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              setPaymentSuccess(true);
              setTimeout(() => {
                navigate('/onboarding');
              }, 1500);
            });
          },
          onError: (err) => {
            console.error("PayPal Error:", err);
            alert("Payment failed. Please try again.");
          }
        }).render(paypalContainerRef.current);
      }
    }
  }, [selectedPlan, paymentSuccess, navigate]);

  if (!division || !service) {
    return <div style={{ padding: '100px 24px', textAlign: 'center' }}>Service not found.</div>;
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', background: 'var(--bg-page)', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '32px' }}>
          <Link to={`/division/${divId}`} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>
            &larr; Back to {division.name}
          </Link>
        </div>

        {/* Header Section */}
        <div style={{ marginBottom: '64px' }}>
          <h1 className="h1" style={{ marginBottom: '16px' }}>{service.title.replace(/^[0-9]+️⃣\s*/, '')}</h1>
        </div>

        {/* Detailed Service Breakdown */}
        <div style={{ maxWidth: '900px', margin: '0 0 80px' }}>
          <div className="sharp-card" style={{ padding: '40px' }}>
            {service.purpose && (
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 700 }}>Purpose</h4>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.125rem' }}>{service.purpose}</p>
              </div>
            )}

            {service.flow && (
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)', marginBottom: '16px', fontWeight: 700 }}>Automation Flow</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {service.flow.map((step, stepIdx) => (
                    <div key={stepIdx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-glow)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                        {stepIdx + 1}
                      </div>
                      <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.extra && (
              <div style={{ background: 'var(--bg-surface)', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-light)', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                <strong>Additional Capabilities:</strong> {service.extra}
              </div>
            )}
          </div>
        </div>

        {/* Pricing Section */}
        <div style={{ background: 'var(--text-primary)', color: 'white', padding: '64px 32px', borderRadius: '16px', textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px' }}>Activate This Service</h2>
          <p style={{ color: '#A8A29E', marginBottom: '48px' }}>Select a tier below to get started with {service.title.replace(/^[0-9]+️⃣\s*/, '')}.</p>
          
          {paymentSuccess ? (
            <div style={{ background: 'var(--success)', padding: '24px', borderRadius: '12px', color: 'white', fontWeight: 600 }}>
              Payment Successful! Redirecting to setup...
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '48px' }}>
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    style={{
                      padding: '32px',
                      borderRadius: '12px',
                      background: selectedPlan?.id === plan.id ? 'rgba(255, 106, 0, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${selectedPlan?.id === plan.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      position: 'relative'
                    }}
                  >
                    {selectedPlan?.id === plan.id && (
                      <div style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--accent)' }}>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      </div>
                    )}
                    <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '8px' }}>{plan.name}</h4>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '8px' }}>${plan.price}</div>
                    <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>{plan.desc}</p>
                  </div>
                ))}
              </div>

              {selectedPlan && (
                <div 
                  ref={paypalContainerRef} 
                  style={{ maxWidth: '400px', margin: '0 auto', background: 'white', padding: '24px', borderRadius: '12px', minHeight: '150px' }}
                >
                  {/* PayPal buttons render here */}
                </div>
              )}
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default SubdivisionPage;
