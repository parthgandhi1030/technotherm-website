import React, { useState } from 'react';
import { ShieldCheck, Award, FileText, ExternalLink, X, CheckCircle2, Calendar, Building, Info, Eye } from 'lucide-react';
import { companyDetails } from '../data/companyData';

export default function Certifications() {
  const [activeCertModal, setActiveCertModal] = useState(null);

  return (
    <section id="certifications" className="section" style={{ background: '#080c16', borderTop: '1px solid var(--border-subtle)', position: 'relative' }}>
      
      {/* Background Decorative Element */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="badge-tag" style={{ background: 'rgba(59, 130, 246, 0.12)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
            <ShieldCheck size={16} /> Global Quality Assurance & Standard Compliance
          </div>
          <h2 className="section-heading">
            Official <span>Certifications & Accreditations</span>
          </h2>
          <p className="section-subtext">
            TechnoTherm Industries LLP operates under rigorous international quality standards. Every heating cable and thermal system is independently audited, certified, and compliant with European, UK, and Indian regulatory directives.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }} className="cert-grid">
          
          {companyDetails.certificationsList.map((cert) => (
            <div 
              key={cert.id}
              className="card-glass"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                {/* Top Badge & Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 87, 34, 0.15)',
                    color: 'var(--primary-orange-light)',
                    border: '1px solid rgba(255, 87, 34, 0.3)'
                  }}>
                    {cert.badge}
                  </span>

                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-green)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontWeight: 600
                  }}>
                    <CheckCircle2 size={14} /> Active & Valid
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {cert.title}
                </h3>
                <div style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {cert.subtitle}
                </div>

                {/* Details Meta */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={14} color="var(--primary-orange)" />
                    <span>Cert No: <strong style={{ color: '#e2e8f0' }}>{cert.certNo}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <Building size={14} color="var(--accent-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{cert.issuingBody}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={14} color="var(--accent-green)" />
                    <span>Valid: <strong style={{ color: '#e2e8f0' }}>{cert.issueDate} – {cert.expiryDate}</strong></span>
                  </div>
                </div>

                {/* Scope snippet */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.825rem',
                  color: '#94a3b8',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem',
                  borderLeft: '3px solid var(--primary-orange)'
                }}>
                  {cert.scope}
                </div>
              </div>

              {/* Action Button */}
              {cert.image ? (
                <button
                  onClick={() => setActiveCertModal(cert)}
                  className="btn-outline-orange"
                  style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', padding: '0.6rem 1rem', fontSize: '0.875rem' }}
                >
                  <Eye size={16} /> View Official Certificate
                </button>
              ) : (
                <div style={{
                  textAlign: 'center',
                  fontSize: '0.825rem',
                  color: 'var(--text-dim)',
                  padding: '0.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  Government Laboratory Technical Report Available on Request
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Global Regulatory Compliance Banner */}
        <div className="card-glass" style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(13,27,46,0.9) 0%, rgba(9,13,22,0.95) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'rgba(59,130,246,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-blue)',
              flexShrink: 0
            }}>
              <Award size={32} />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
                Need Verified Compliance Documentation for Tender or Audit?
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', margin: 0 }}>
                Download official PDF copies or request certified test reports directly from our quality control department.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Request QC Certificates Packet <ExternalLink size={16} />
          </a>
        </div>

      </div>

      {/* Interactive Certificate Preview Modal */}
      {activeCertModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }} onClick={() => setActiveCertModal(null)}>
          <div 
            style={{
              background: '#0d1424',
              border: '1px solid var(--border-bright)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.75rem',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.02)'
            }}>
              <div>
                <span className="badge-tag" style={{ background: 'var(--primary-orange)', color: '#fff', border: 'none', marginBottom: '0.25rem' }}>
                  {activeCertModal.badge}
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>
                  {activeCertModal.title} — {activeCertModal.subtitle}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Certificate Number: <strong style={{ color: 'var(--primary-orange-light)' }}>{activeCertModal.certNo}</strong> | Authority: {activeCertModal.issuingBody}
                </div>
              </div>

              <button
                onClick={() => setActiveCertModal(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body with Certificate Document Image */}
            <div style={{ padding: '1.75rem', textAlign: 'center', background: '#060911' }}>
              <div style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'inline-block',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                maxWidth: '100%'
              }}>
                <img 
                  src={activeCertModal.image} 
                  alt={activeCertModal.title}
                  style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '1.25rem 1.75rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              background: 'rgba(255,255,255,0.02)'
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Issued: {activeCertModal.issueDate} | Expiry Date: <strong style={{ color: 'var(--accent-green)' }}>{activeCertModal.expiryDate}</strong>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a 
                  href={activeCertModal.image} 
                  download={`${activeCertModal.id}_certificate_technotherm.jpg`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
                >
                  Download Certificate Image
                </a>
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
                >
                  Close Preview
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
