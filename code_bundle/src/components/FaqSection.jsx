import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqList } from '../data/companyData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section" style={{ background: '#0b101d' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <HelpCircle size={16} /> Got Questions?
          </div>
          <h2 className="section-heading">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-subtext">
            Key insights on heating cable selection, energy savings, Ex certifications, and turnkey engineering.
          </p>
        </div>

        {/* Accordions */}
        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="card-glass"
                style={{
                  overflow: 'hidden',
                  borderColor: isOpen ? 'var(--border-bright)' : 'var(--border-subtle)'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    background: isOpen ? 'rgba(255,87,34,0.06)' : 'transparent'
                  }}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp size={20} color="var(--primary-orange)" style={{ flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                  )}
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1rem'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
