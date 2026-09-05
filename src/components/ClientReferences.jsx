import React, { useState } from 'react';
import { Award, Globe, Search, CheckCircle, ShieldCheck } from 'lucide-react';
import { clientReferences } from '../data/companyData';

export default function ClientReferences() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReferences = clientReferences.filter((ref) => {
    const q = searchTerm.toLowerCase();
    return ref.client.toLowerCase().includes(q) ||
           ref.project.toLowerCase().includes(q) ||
           ref.country.toLowerCase().includes(q) ||
           ref.scope.toLowerCase().includes(q);
  });

  return (
    <section id="references" className="section" style={{ background: '#090d16' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Award size={16} /> Track Record of Excellence
          </div>
          <h2 className="section-heading">
            Major Industrial <span>Project References</span>
          </h2>
          <p className="section-subtext">
            Over 5,000+ heat tracing and thermal control systems successfully completed for global energy, refining, chemical, and industrial leaders.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          background: 'var(--bg-card)',
          padding: '1rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={18} color="var(--primary-orange)" /> Showing Verified Global References
          </div>

          <div style={{ position: 'relative', minWidth: '280px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by client, project or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 0.75rem 0.55rem 2.25rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(9, 13, 22, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.875rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* References Table */}
        <div className="card-glass" style={{ overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--border-subtle)', color: 'var(--primary-orange-light)' }}>
                  <th style={{ padding: '1rem 1.5rem' }}>Client Organization</th>
                  <th style={{ padding: '1rem 1.5rem' }}>Project / Field Location</th>
                  <th style={{ padding: '1rem 1.5rem' }}>Country</th>
                  <th style={{ padding: '1rem 1.5rem' }}>Scope of Supply & Services</th>
                </tr>
              </thead>
              <tbody>
                {filteredReferences.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      No matching reference projects found.
                    </td>
                  </tr>
                ) : (
                  filteredReferences.map((ref, idx) => (
                    <tr 
                      key={idx}
                      style={{
                        borderBottom: idx === filteredReferences.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <td style={{ padding: '1rem 1.5rem', color: '#fff', fontWeight: 600 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <CheckCircle size={16} color="var(--accent-green)" />
                          {ref.client}
                        </div>
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>
                        {ref.project}
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: '#e2e8f0', fontWeight: 500 }}>
                        {ref.country}
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>
                        {ref.scope}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
