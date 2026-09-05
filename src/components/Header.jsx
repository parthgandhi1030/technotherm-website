import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Flame, ShieldCheck, FileText } from 'lucide-react';
import { companyDetails } from '../data/companyData';

export default function Header({ onOpenRfq }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Cable Explorer', href: '#cable-explorer' },
    { name: 'Heat Calculator', href: '#calculator' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'Turnkey Projects', href: '#turnkey' },
    { name: 'References', href: '#references' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed-header-wrapper" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      {/* Top Bar */}
      <div className="top-bar" style={{ background: '#070a12', borderBottom: '1px solid var(--border-subtle)', padding: '0.4rem 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} color="var(--primary-orange)" /> ISO 9001:2015 & CIMFR Certified
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={14} color="var(--accent-blue)" /> Vasai (E), Palghar, Maharashtra (India)
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <a href={`tel:${companyDetails.contact.phones[0]}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-main)' }}>
              <Phone size={14} color="var(--primary-orange)" /> {companyDetails.contact.phones[0]}
            </a>
            <a href={`mailto:${companyDetails.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-main)' }}>
              <Mail size={14} color="var(--accent-blue)" /> {companyDetails.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        style={{
          background: isScrolled ? 'rgba(9, 13, 22, 0.95)' : 'rgba(13, 27, 46, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: isScrolled ? '0.75rem 0' : '1.1rem 0',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--primary-orange) 0%, #d84315 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(255, 87, 34, 0.4)'
            }}>
              <Flame size={26} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', color: '#fff', leading: 1 }}>
                Techno<span style={{ color: 'var(--primary-orange)' }}>Therm</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Industries LLP • Est. 1971
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-orange-light)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              onClick={() => onOpenRfq()} 
              className="btn-primary" 
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
            >
              <FileText size={16} /> Request Quote
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                display: 'none',
                color: '#fff',
                padding: '0.5rem',
                borderRadius: '6px',
                background: 'rgba(255,255,255,0.08)'
              }}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '100px',
          left: 0,
          right: 0,
          background: 'rgba(9, 13, 22, 0.98)',
          borderBottom: '1px solid var(--border-bright)',
          padding: '1.5rem',
          backdropFilter: 'blur(20px)',
          zIndex: 999
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#fff',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {link.name}
                <ChevronRight size={18} color="var(--primary-orange)" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Responsive Style Overrides */}
      <style>{`
        @media (max-width: 1180px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
