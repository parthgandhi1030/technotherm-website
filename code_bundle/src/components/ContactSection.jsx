import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { companyDetails, productCategories } from '../data/companyData';

export default function ContactSection({ selectedProductTitle, prefilledSpecs }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: selectedProductTitle || 'Self-Regulating Heating Cable (SLSR)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProductTitle) {
      setFormData(prev => ({ ...prev, product: selectedProductTitle }));
    }
  }, [selectedProductTitle]);

  useEffect(() => {
    if (prefilledSpecs) {
      setFormData(prev => ({ ...prev, message: prefilledSpecs }));
    }
  }, [prefilledSpecs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Build mailto link as fallback
    const subject = encodeURIComponent(`Inquiry for ${formData.product} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProduct: ${formData.product}\n\nDetails:\n${formData.message}`
    );
    window.location.href = `mailto:${companyDetails.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*TechnoTherm Inquiry*\nName: ${formData.name || 'N/A'}\nCompany: ${formData.company || 'N/A'}\nProduct: ${formData.product}\nNotes: ${formData.message}`
    );
    window.open(`https://wa.me/${companyDetails.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section" style={{ background: '#090d16' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Mail size={16} /> Fast Technical Assistance
          </div>
          <h2 className="section-heading">
            Request a <span>Custom Technical Quote</span>
          </h2>
          <p className="section-subtext">
            Submit your technical specifications or contact our engineering panel directly for sizing recommendations and quotations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3rem' }} className="contact-grid">
          
          {/* Left Column: Address & Details Card */}
          <div>
            <div className="card-glass" style={{
              padding: '2.5rem',
              height: '100%',
              background: 'linear-gradient(145deg, rgba(19,27,46,0.95) 0%, rgba(13,20,35,0.98) 100%)',
              border: '1px solid var(--border-bright)'
            }}>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                Contact Information
              </h3>

              {/* Address */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(255,87,34,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-orange)',
                  flexShrink: 0
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.25rem' }}>Factory & Head Office</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {companyDetails.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(59,130,246,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)',
                  flexShrink: 0
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.25rem' }}>Phone & WhatsApp</h4>
                  {companyDetails.contact.phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p}`} style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.925rem', marginBottom: '0.2rem' }}>
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(16,185,129,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-green)',
                  flexShrink: 0
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.25rem' }}>Email Us</h4>
                  <a href={`mailto:${companyDetails.contact.email}`} style={{ color: 'var(--primary-orange-light)', fontSize: '0.925rem' }}>
                    {companyDetails.contact.email}
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
                    Web: {companyDetails.contact.website}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <Clock size={20} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: '#fff' }}>Operational Hours:</strong><br />
                  {companyDetails.contact.workingHours}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div>
            <div className="card-glass" style={{ padding: '2.5rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
                Submit Inquiry Details
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle size={48} color="var(--accent-green)" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Inquiry Prepared!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Your email client should open automatically with your inquiry. You can also send directly via WhatsApp below.
                  </p>
                  <button onClick={handleWhatsAppSend} className="btn-primary" style={{ background: '#25D366' }}>
                    <MessageSquare size={18} /> Send via WhatsApp Instant
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Your Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(9, 13, 22, 0.8)',
                          border: '1px solid var(--border-subtle)',
                          color: '#fff',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Company Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Industries"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(9, 13, 22, 0.8)',
                          border: '1px solid var(--border-subtle)',
                          color: '#fff',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Work Email *
                      </label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@acme.com"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(9, 13, 22, 0.8)',
                          border: '1px solid var(--border-subtle)',
                          color: '#fff',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Phone / WhatsApp *
                      </label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(9, 13, 22, 0.8)',
                          border: '1px solid var(--border-subtle)',
                          color: '#fff',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Product Category Selector */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Product Interested In
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(9, 13, 22, 0.8)',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        outline: 'none'
                      }}
                    >
                      {productCategories.map((p) => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Technical Message / Specs */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Technical Requirements / Sizing Notes
                    </label>
                    <textarea 
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify pipe diameter, length, maintain temp, ambient min temp, or custom jacket requirements..."
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(9, 13, 22, 0.8)',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <button type="submit" className="btn-primary">
                      <Send size={16} /> Send Email RFQ
                    </button>

                    <button type="button" onClick={handleWhatsAppSend} className="btn-secondary" style={{ color: '#25D366', borderColor: 'rgba(37, 211, 102, 0.3)' }}>
                      <MessageSquare size={16} /> WhatsApp RFQ
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 550px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
