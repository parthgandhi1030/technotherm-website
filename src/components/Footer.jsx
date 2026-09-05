import React from 'react';
import { Flame, ShieldCheck, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { companyDetails, productCategories } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#05080f', borderTop: '1px solid var(--border-subtle)', color: 'var(--text-muted)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr', gap: '2.5rem', marginBottom: '3.5rem' }} className="footer-grid">
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--primary-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Flame size={22} />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
                Techno<span style={{ color: 'var(--primary-orange)' }}>Therm</span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              TechnoTherm Industries LLP is a proud group company of Thermo-Tech Industries (est. 1971). ISO 9001:2015 certified manufacturer of industrial heating cables, energy saving jackets, and thermal management systems.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,87,34,0.1)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,87,34,0.25)', fontSize: '0.8rem', color: 'var(--primary-orange-light)', fontWeight: 600 }}>
              <ShieldCheck size={14} /> CSIR-CIMFR Zone II Approved
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1.25rem' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#hero" style={{ color: 'var(--text-muted)' }}>Home</a></li>
              <li><a href="#about" style={{ color: 'var(--text-muted)' }}>About Company</a></li>
              <li><a href="#products" style={{ color: 'var(--text-muted)' }}>Product Line</a></li>
              <li><a href="#calculator" style={{ color: 'var(--text-muted)' }}>Thermal Loss Calculator</a></li>
              <li><a href="#turnkey" style={{ color: 'var(--text-muted)' }}>Turnkey Engineering</a></li>
              <li><a href="#references" style={{ color: 'var(--text-muted)' }}>Global References</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-muted)' }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Key Products */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1.25rem' }}>Core Products</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              {productCategories.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <a href="#products" style={{ color: 'var(--text-muted)' }}>{p.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Address & Phone */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1.25rem' }}>Headquarters</h4>
            <div style={{ fontSize: '0.875rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--primary-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{companyDetails.contact.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Phone size={16} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{companyDetails.contact.phones.join(' | ')}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Mail size={16} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{companyDetails.contact.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem'
        }}>
          <div>
            © {new Date().getFullYear()} TechnoTherm Industries LLP. All Rights Reserved. ISO 9001:2015 Registered.
          </div>

          <button 
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem'
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
