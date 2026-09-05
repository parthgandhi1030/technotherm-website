import React from 'react';
import { Flame, ShieldCheck, Calculator, ArrowRight, Zap, Award, Globe, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/companyData';

export default function Hero({ onOpenRfq }) {
  return (
    <section id="hero" style={{
      position: 'relative',
      paddingTop: '160px',
      paddingBottom: '90px',
      background: 'radial-gradient(circle at 70% 30%, rgba(255, 87, 34, 0.15) 0%, rgba(9, 13, 22, 1) 70%)',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,87,34,0.18) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column Text Content */}
          <div>
            <div className="badge-tag">
              <ShieldCheck size={16} /> ISO 9001:2015 & CSIR-CIMFR Certified Manufacturer
            </div>

            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              Precision Industrial <br />
              <span style={{
                background: 'linear-gradient(135deg, #ff5722 0%, #ff9800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Electric Heating Cables
              </span> & Thermal Systems
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '620px',
              lineHeight: 1.6
            }}>
              Over 53 years of engineering excellence since 1971. Manufacturing Self-Regulating (SLSR) & Constant Wattage (CWSR) Heating Cables, Power Saving Insulation Jackets, Cold Storage Door Heaters, Hopper Pads, and Turnkey Engineering Solutions.
            </p>

            {/* Quick Benefits Bullet List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="var(--primary-orange)" /> 20%-45% Energy Saving Jackets
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="var(--primary-orange)" /> Zone II Ex Area CIMFR Certified
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="var(--primary-orange)" /> Custom Lengths & Sizing Support
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="var(--primary-orange)" /> Exports to 12+ Nations Worldwide
              </div>
            </div>

            {/* Call to Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#products" className="btn-primary">
                Explore Product Line <ArrowRight size={18} />
              </a>
              <a href="#calculator" className="btn-secondary">
                <Calculator size={18} color="var(--primary-orange)" /> Calculate Cable Heat Loss
              </a>
            </div>
          </div>

          {/* Right Column Visual Graphic Card */}
          <div>
            <div className="card-glass" style={{
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, rgba(19,27,46,0.95) 0%, rgba(15,23,42,0.98) 100%)',
              border: '1px solid rgba(255,87,34,0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
            }}>
              {/* Image Preview */}
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', height: '260px' }}>
                <img 
                  src="/assets/images/slsr_cable_1.jpg" 
                  alt="TechnoTherm Heating Cables" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(9,13,22,0.95) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.25rem'
                }}>
                  <div>
                    <span className="badge-tag" style={{ background: 'var(--primary-orange)', color: '#fff', border: 'none' }}>
                      THERMO-FLEX® SLSR Series
                    </span>
                    <h3 style={{ color: '#fff', fontSize: '1.25rem', marginTop: '0.25rem' }}>
                      Self-Regulating Electric Heat Tracer
                    </h3>
                  </div>
                </div>
              </div>

              {/* Technical Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '10px' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Temperature Range</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>-60°C to +220°C</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Wattage Ratings</div>
                  <div style={{ fontWeight: 700, color: 'var(--primary-orange-light)', fontSize: '1rem' }}>10W - 60W / meter</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hazardous Rating</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Zone II (T1 to T5)</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Certifications</div>
                  <div style={{ fontWeight: 700, color: 'var(--accent-green)', fontSize: '1rem' }}>CIMFR / ISO 9001</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div style={{
          marginTop: '4.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          background: 'rgba(19, 27, 46, 0.6)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '2rem',
          backdropFilter: 'blur(10px)'
        }} className="stats-grid">
          {companyDetails.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--primary-orange-light)',
                lineHeight: 1
              }}>
                {stat.value}
              </div>
              <div style={{ fontWeight: 600, color: '#fff', marginTop: '0.35rem', fontSize: '1rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
