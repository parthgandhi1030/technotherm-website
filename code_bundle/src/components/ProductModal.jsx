import React, { useState } from 'react';
import { X, ShieldCheck, Check, FileText, Download, ChevronRight, Zap, ChevronLeft } from 'lucide-react';

export default function ProductModal({ product, onClose, onOpenRfq }) {
  if (!product) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(5, 8, 15, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="card-glass animate-fade-in" style={{
        width: '100%',
        maxWidth: '900px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        padding: '2.5rem',
        background: '#0d1322',
        border: '1px solid var(--border-bright)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="badge-tag">
            <ShieldCheck size={14} /> {product.category}
          </span>
          <h2 style={{ fontSize: '1.8rem', color: '#fff', marginTop: '0.25rem' }}>
            {product.title}
          </h2>
        </div>

        {/* Gallery & Quick Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }} className="modal-top-grid">
          {/* Main Photo Gallery */}
          <div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '260px', background: '#000', marginBottom: '0.75rem' }}>
              <img 
                src={product.images[activeImgIndex] || product.images[0]} 
                alt={product.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    style={{
                      width: '60px',
                      height: '50px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: activeImgIndex === idx ? '2px solid var(--primary-orange)' : '1px solid var(--border-subtle)',
                      opacity: activeImgIndex === idx ? 1 : 0.6
                    }}
                  >
                    <img src={img} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Overview Paragraph & Features */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Product Overview</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {product.fullDesc}
            </p>

            <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>Key Advantages</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {product.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.875rem' }}>
                  <Check size={16} color="var(--primary-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Data Sheet Table */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={18} color="var(--primary-orange)" /> Technical Specifications
          </h3>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '10px',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <tbody>
                {product.techSpecs.map((spec, idx) => (
                  <tr key={idx} style={{ borderBottom: idx === product.techSpecs.length - 1 ? 'none' : '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem 1.25rem', color: 'var(--text-muted)', fontWeight: 600, width: '40%', background: 'rgba(0,0,0,0.2)' }}>
                      {spec.label}
                    </td>
                    <td style={{ padding: '0.75rem 1.25rem', color: '#fff', fontWeight: 500 }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications List */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Typical Industrial Applications</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }} className="applications-grid">
            {product.applications.map((app, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,87,34,0.06)',
                border: '1px solid rgba(255,87,34,0.15)',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                color: '#e2e8f0',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-orange)' }} />
                {app}
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
          <button onClick={onClose} className="btn-secondary">
            Close Sheet
          </button>
          <button 
            onClick={() => {
              onClose();
              onOpenRfq(product.title);
            }} 
            className="btn-primary"
          >
            Request Quote for {product.title}
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .modal-top-grid {
            grid-template-columns: 1fr !important;
          }
          .applications-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
