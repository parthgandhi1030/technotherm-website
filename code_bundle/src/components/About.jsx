import React, { useState } from 'react';
import { Award, ShieldCheck, Globe, UserCheck, ChevronDown, ChevronUp, Quote, CheckCircle } from 'lucide-react';
import { companyDetails } from '../data/companyData';

export default function About() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <section id="about" className="section" style={{ background: '#0b101d' }}>
      <div className="container">
        
        {/* Section Title Header */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Award size={16} /> Over 5 Decades of Engineering Trust
          </div>
          <h2 className="section-heading">
            About <span>TechnoTherm Industries LLP</span>
          </h2>
          <p className="section-subtext">
            A proud group company of Thermo-Tech Industries with a continuous legacy of quality, innovation, and reliability in thermal management solutions since 1971.
          </p>
        </div>

        {/* 3 Grid Cards: Vision, Mission, Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem', marginBottom: '4rem' }} className="about-cards-grid">
          
          <div className="card-glass" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(255, 87, 34, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-orange)',
              marginBottom: '1.25rem'
            }}>
              <Globe size={28} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>
              {companyDetails.vision}
            </p>
          </div>

          <div className="card-glass" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(59, 130, 246, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-blue)',
              marginBottom: '1.25rem'
            }}>
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>
              {companyDetails.mission}
            </p>
          </div>

          <div className="card-glass" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-green)',
              marginBottom: '1.25rem'
            }}>
              <UserCheck size={28} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Our Core Value</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>
              {companyDetails.coreValue}
            </p>
          </div>

        </div>

        {/* Chairman's Message Feature Block */}
        <div className="card-glass" style={{
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(19,27,46,0.9) 0%, rgba(13,20,35,0.95) 100%)',
          border: '1px solid rgba(255,87,34,0.3)',
          position: 'relative'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'start' }} className="chairman-grid">
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-orange) 0%, #ff9800 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: 800,
                margin: '0 auto 1rem auto',
                boxShadow: '0 8px 24px rgba(255,87,34,0.4)'
              }}>
                RG
              </div>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>{companyDetails.chairman.name}</h4>
              <div style={{ color: 'var(--primary-orange-light)', fontSize: '0.875rem', fontWeight: 600 }}>{companyDetails.chairman.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>TechnoTherm Industries LLP</div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-orange)', marginBottom: '0.75rem' }}>
                <Quote size={24} />
                <span style={{ fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Chairman's Address</span>
              </div>

              <blockquote style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: '#f1f5f9',
                lineHeight: 1.6,
                marginBottom: '1.25rem'
              }}>
                "{companyDetails.chairman.quote}"
              </blockquote>

              <div style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.975rem' }}>
                {showFullMessage ? (
                  <div style={{ whiteSpace: 'pre-line' }}>
                    {companyDetails.chairman.message}
                  </div>
                ) : (
                  <p>
                    {companyDetails.chairman.message.substring(0, 320)}...
                  </p>
                )}
              </div>

              <button 
                onClick={() => setShowFullMessage(!showFullMessage)}
                className="btn-outline-orange"
                style={{ marginTop: '1.25rem' }}
              >
                {showFullMessage ? (
                  <>Read Less <ChevronUp size={16} /></>
                ) : (
                  <>Read Full Chairman Message <ChevronDown size={16} /></>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Global Export Footprint */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
            Supplying High Quality Thermal Solutions Across <span>12+ Global Markets</span>
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {companyDetails.exportCountries.map((country, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                color: '#e2e8f0',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle size={14} color="var(--primary-orange)" /> {country}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .chairman-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
