import React, { useState } from 'react';
import { Search, Filter, Flame, ChevronRight, FileText, Check, ShieldCheck, Zap, Layers } from 'lucide-react';
import { productCategories } from '../data/companyData';

export default function ProductCatalog({ onSelectProduct, onOpenRfq, onOpenCompare }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedForCompare, setSelectedForCompare] = useState([]);

  const categories = [
    'All',
    'Heating Cables',
    'Industrial Heaters',
    'Insulation Jackets',
    'Controls & Accessories',
    'Turnkey & Consultancy'
  ];

  const filteredProducts = productCategories.filter((prod) => {
    const matchesCategory = activeCategory === 'All' || prod.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleCompare = (product) => {
    if (selectedForCompare.some(p => p.id === product.id)) {
      setSelectedForCompare(selectedForCompare.filter(p => p.id !== product.id));
    } else {
      if (selectedForCompare.length >= 3) {
        alert("You can compare up to 3 products at a time.");
        return;
      }
      setSelectedForCompare([...selectedForCompare, product]);
    }
  };

  return (
    <section id="products" className="section" style={{ background: '#090d16' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Flame size={16} /> Complete Thermal Product Portfolio
          </div>
          <h2 className="section-heading">
            Our <span>Industrial Heating Solutions</span>
          </h2>
          <p className="section-subtext">
            Engineered for high thermal efficiency, extreme durability, and maximum safety compliance in demanding industrial environments.
          </p>
        </div>

        {/* Filter Controls & Search Bar Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
          background: 'var(--bg-card)',
          padding: '1rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  background: activeCategory === cat ? 'var(--primary-orange)' : 'rgba(255,255,255,0.05)',
                  color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                  border: activeCategory === cat ? 'none' : '1px solid var(--border-subtle)',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search products, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Floating Compare Bar */}
        {selectedForCompare.length > 0 && (
          <div style={{
            position: 'sticky',
            top: '80px',
            zIndex: 900,
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, var(--primary-orange) 0%, #d84315 100%)',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(255,87,34,0.4)',
            color: '#fff'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}>
              <Layers size={20} />
              <span>{selectedForCompare.length} Product(s) Selected for Side-by-Side Comparison</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                onClick={() => setSelectedForCompare([])}
                style={{ background: 'rgba(0,0,0,0.2)', color: '#fff', padding: '0.4rem 0.85rem', borderRadius: '4px', fontSize: '0.825rem' }}
              >
                Clear All
              </button>
              <button 
                onClick={() => onOpenCompare(selectedForCompare)}
                style={{ background: '#fff', color: '#000', fontWeight: 700, padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.85rem' }}
              >
                Compare Now Side-by-Side →
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
            No products match your search criteria. Try clearing search filters.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem'
          }} className="products-grid">
            {filteredProducts.map((product) => {
              const isSelectedForCompare = selectedForCompare.some(p => p.id === product.id);
              return (
                <div 
                  key={product.id}
                  className="card-glass"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden',
                    borderColor: isSelectedForCompare ? 'var(--primary-orange)' : 'var(--border-subtle)'
                  }}
                >
                  {/* Product Image Preview */}
                  <div style={{ position: 'relative', height: '220px', background: '#000', overflow: 'hidden' }}>
                    <img 
                      src={product.images[0] || '/assets/images/slsr_cable_1.jpg'} 
                      alt={product.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(9, 13, 22, 0.85)',
                      backdropFilter: 'blur(4px)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--primary-orange-light)',
                      border: '1px solid rgba(255,87,34,0.3)'
                    }}>
                      {product.badge || product.category}
                    </div>

                    {/* Compare Checkbox Badge */}
                    <button
                      onClick={() => toggleCompare(product)}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: isSelectedForCompare ? 'var(--primary-orange)' : 'rgba(9,13,22,0.85)',
                        color: '#fff',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <Check size={12} color={isSelectedForCompare ? '#fff' : 'transparent'} />
                      {isSelectedForCompare ? 'Compared' : '+ Compare'}
                    </button>
                  </div>

                  {/* Content Details */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      {product.category}
                    </div>

                    <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0.4rem 0 0.75rem 0', lineHeight: 1.3 }}>
                      {product.title}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', flexGrow: 1, lineHeight: 1.5 }}>
                      {product.shortDesc}
                    </p>

                    {/* Bullet Highlights */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1', fontSize: '0.825rem', marginBottom: '0.35rem' }}>
                          <Check size={14} color="var(--primary-orange)" /> {feat}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <button 
                        onClick={() => onSelectProduct(product)}
                        className="btn-secondary"
                        style={{ padding: '0.6rem', fontSize: '0.825rem' }}
                      >
                        Tech Sheet <ChevronRight size={14} />
                      </button>
                      
                      <button 
                        onClick={() => onOpenRfq(product.title)}
                        className="btn-primary"
                        style={{ padding: '0.6rem', fontSize: '0.825rem' }}
                      >
                        Inquire Quote
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 1080px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
