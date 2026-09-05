import React from 'react';
import { Factory, Flame, TestTube, Cpu, Zap, Apple, Anchor, Snowflake } from 'lucide-react';
import { industriesServed } from '../data/companyData';

export default function Industries() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame size={26} color="var(--primary-orange)" />;
      case 'TestTube': return <TestTube size={26} color="var(--accent-blue)" />;
      case 'Cpu': return <Cpu size={26} color="var(--accent-green)" />;
      case 'Zap': return <Zap size={26} color="#eab308" />;
      case 'Apple': return <Apple size={26} color="#ef4444" />;
      case 'Anchor': return <Anchor size={26} color="#06b6d4" />;
      case 'Snowflake': return <Snowflake size={26} color="#38bdf8" />;
      default: return <Factory size={26} color="var(--primary-orange)" />;
    }
  };

  return (
    <section id="industries" className="section" style={{ background: '#0b101d' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Factory size={16} /> Diverse Sector Expertise
          </div>
          <h2 className="section-heading">
            Industries <span>We Serve</span>
          </h2>
          <p className="section-subtext">
            Proven thermal performance across heavy process industries, plastic manufacturing, energy generation, and commercial cold chains worldwide.
          </p>
        </div>

        {/* Industry Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }} className="industries-grid">
          {industriesServed.map((ind, idx) => (
            <div 
              key={idx}
              className="card-glass"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {getIcon(ind.icon)}
              </div>

              <h3 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.6rem' }}>
                {ind.name}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                {ind.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1080px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
