import React from 'react';
import { Layers, Settings, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { turnkeySteps } from '../data/companyData';

export default function TurnkeyProcess({ onOpenRfq }) {
  return (
    <section id="turnkey" className="section" style={{ background: '#090d16' }}>
      <div className="container">
        
        {/* Title Header */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Layers size={16} /> End-to-End Execution
          </div>
          <h2 className="section-heading">
            Turnkey Project <span>Engineering Methodology</span>
          </h2>
          <p className="section-subtext">
            From initial site analysis and heat loss calculations to system installation, commissioning, and long-term AMCs.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.75rem',
          marginBottom: '3rem'
        }} className="turnkey-grid">
          {turnkeySteps.map((step, idx) => (
            <div 
              key={idx}
              className="card-glass"
              style={{
                padding: '2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: 'rgba(255, 87, 34, 0.4)',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  marginBottom: '0.75rem'
                }}>
                  {step.step}
                </div>

                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.6rem' }}>
                  {step.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-orange-light)', fontSize: '0.825rem', fontWeight: 600, marginTop: '1.25rem' }}>
                <CheckCircle2 size={16} /> Technical Assurance
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="card-glass" style={{
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(255,87,34,0.15) 0%, rgba(59,130,246,0.1) 100%)',
          border: '1px solid rgba(255,87,34,0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.25rem' }}>
              Planning a New Industrial Plant or Heat Tracing Upgrade?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Our expert technical panel provides complimentary application study and system engineering recommendations.
            </p>
          </div>

          <button onClick={() => onOpenRfq('Turnkey Consultancy')} className="btn-primary">
            Request Turnkey Consultation <ArrowRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .turnkey-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .turnkey-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
