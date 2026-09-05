import React from 'react';
import { X, Check, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export default function ProductCompareModal({ products, onClose, onOpenRfq }) {
  if (!products || products.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2100,
      background: 'rgba(5, 8, 15, 0.88)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="card-glass animate-fade-in" style={{
        width: '100%',
        maxWidth: '1050px',
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

        <div style={{ marginBottom: '1.5rem' }}>
          <span className="badge-tag">
            <Zap size={14} /> Side-by-Side Comparison
          </span>
          <h2 style={{ fontSize: '1.8rem', color: '#fff', marginTop: '0.25rem' }}>
            Product Technical Comparison Matrix
          </h2>
        </div>

        {/* Comparison Table */}
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-subtle)' }}>
                <th style={{ padding: '1rem', width: '22%', color: 'var(--text-muted)', textAlign: 'left' }}>
                  Technical Spec
                </th>
                {products.map((prod) => (
                  <th key={prod.id} style={{ padding: '1rem', width: `${78 / products.length}%`, textAlign: 'center' }}>
                    <div style={{ width: '80px', height: '60px', margin: '0 auto 0.5rem auto', borderRadius: '6px', overflow: 'hidden' }}>
                      <img src={prod.images[0]} alt={prod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ color: '#fff', fontSize: '1rem', fontWeight: 700 }}>{prod.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary-orange-light)', marginTop: '0.25rem' }}>{prod.badge}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)', fontWeight: 600 }}>Category</td>
                {products.map(p => (
                  <td key={p.id} style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#fff' }}>{p.category}</td>
                ))}
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)', fontWeight: 600 }}>Heat Output Behavior</td>
                {products.map(p => (
                  <td key={p.id} style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#cbd5e1' }}>
                    {p.id.includes('slsr') ? 'Automatically varies with ambient temperature' : 'Constant / fixed output per meter'}
                  </td>
                ))}
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)', fontWeight: 600 }}>Overheating Protection</td>
                {products.map(p => (
                  <td key={p.id} style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#cbd5e1' }}>
                    {p.id.includes('slsr') ? 'Intrinsic self-regulating polymer core' : 'Requires control thermostat / PID panel'}
                  </td>
                ))}
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)', fontWeight: 600 }}>Key Advantages</td>
                {products.map(p => (
                  <td key={p.id} style={{ padding: '0.85rem 1rem', textAlign: 'left', color: '#cbd5e1', fontSize: '0.85rem' }}>
                    <ul style={{ paddingLeft: '1rem' }}>
                      {p.features.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>Action</td>
                {products.map(p => (
                  <td key={p.id} style={{ padding: '1rem', textAlign: 'center' }}>
                    <button 
                      onClick={() => { onClose(); onOpenRfq(p.title); }}
                      className="btn-primary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                    >
                      Inquire Quote
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'right' }}>
          <button onClick={onClose} className="btn-secondary">Close Comparison</button>
        </div>

      </div>
    </div>
  );
}
