import React, { useState } from 'react';
import { ShieldCheck, Flame, Zap, Layers, Info, CheckCircle2 } from 'lucide-react';

export default function CableExplorer() {
  const [activeCableType, setActiveCableType] = useState('SLSR');
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(1);
  const [simulateHeat, setSimulateHeat] = useState(true);

  const slsrLayers = [
    {
      name: "1. Bus Conductors",
      material: "Dual Tinned Copper Wires (7 × 0.4 mm)",
      desc: "Delivers continuous electrical power along the entire circuit length with high electrical conductivity and corrosion resistance.",
      color: "#f59e0b"
    },
    {
      name: "2. PTC Semi-Conductive Core",
      material: "PTC Carbon Matrix Polymer",
      desc: "The heart of Self-Regulating technology. Semi-conductive polymer matrix automatically increases resistance when hot and decreases resistance when cold.",
      color: "#ef4444"
    },
    {
      name: "3. Primary Insulation",
      material: "Polyolefin / Fluoropolymer (PTFE)",
      desc: "High dielectric strength insulation layer protecting against moisture, thermal stress, and voltage breakdown up to 220V/230V AC.",
      color: "#3b82f6"
    },
    {
      name: "4. Metallic Shield Braid",
      material: "Aluminium-Magnesium Alloy Braid",
      desc: "Provides 100% ground fault safety protection, mechanical impact resistance, and electromagnetic shielding as required by IS/IEC standards.",
      color: "#94a3b8"
    },
    {
      name: "5. Outer Protective Jacket",
      material: "UV-Resistant Polyolefin / FEP",
      desc: "Heavy-duty outer sheath protecting against harsh industrial chemicals, weather exposure, UV radiation, and mechanical abrasion.",
      color: "#1e293b"
    }
  ];

  const cwsrLayers = [
    {
      name: "1. Resistance Heating Element",
      material: "Nichrome / PTFE Teflon Coated Series Wire",
      desc: "Delivers constant, non-varying wattage per meter (25W/m or 45W/m) regardless of temperature changes.",
      color: "#f97316"
    },
    {
      name: "2. Primary Insulation",
      material: "P.T.F.E. (Teflon) High-Temp Matrix",
      desc: "Continuous high-temperature insulation rated for non-energized exposure up to 200°C.",
      color: "#60a5fa"
    },
    {
      name: "3. Secondary Insulation",
      material: "High-Purity Glass-Fibre Braid",
      desc: "Secondary thermal barrier providing extreme mechanical stability under continuous heat load.",
      color: "#e2e8f0"
    },
    {
      name: "4. Protective Metallic Sheathing",
      material: "SS 304 Stainless Steel Sheath Braid",
      desc: "Robust stainless steel outer casing certified for Zone II explosive gas environments (CSIR-CIMFR Approved).",
      color: "#cbd5e1"
    }
  ];

  const currentLayers = activeCableType === 'SLSR' ? slsrLayers : cwsrLayers;
  const currentSelectedLayer = currentLayers[selectedLayerIndex] || currentLayers[0];

  return (
    <section id="cable-explorer" className="section" style={{ background: '#080c16' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Layers size={16} /> Interactive Engineering Visualizer
          </div>
          <h2 className="section-heading">
            Interactive Cable <span>Structure Explorer</span>
          </h2>
          <p className="section-subtext">
            Inspect the internal construction layers of TechnoTherm electric heating cables. Click any layer to examine its exact material specification and thermal function.
          </p>
        </div>

        {/* Cable Type Switch & Thermal Glow Simulation Toggle */}
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
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => { setActiveCableType('SLSR'); setSelectedLayerIndex(0); }}
              className={activeCableType === 'SLSR' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
            >
              SLSR Self-Regulating Cable
            </button>

            <button
              onClick={() => { setActiveCableType('CWSR'); setSelectedLayerIndex(0); }}
              className={activeCableType === 'CWSR' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
            >
              CWSR Constant Wattage (Zone II)
            </button>
          </div>

          <button
            onClick={() => setSimulateHeat(!simulateHeat)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: simulateHeat ? 'rgba(255,87,34,0.2)' : 'rgba(255,255,255,0.05)',
              border: simulateHeat ? '1px solid var(--primary-orange)' : '1px solid var(--border-subtle)',
              color: simulateHeat ? 'var(--primary-orange-light)' : 'var(--text-muted)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
          >
            <Flame size={16} color={simulateHeat ? 'var(--primary-orange)' : 'var(--text-muted)'} />
            Simulate Heat Glow: {simulateHeat ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Explorer Visualizer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center' }} className="explorer-grid">
          
          {/* Left Column: Visual Layer Stack Cutaway */}
          <div className="card-glass" style={{
            padding: '2.5rem',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(19,27,46,0.98) 0%, rgba(10,15,26,0.99) 100%)',
            border: '1px solid var(--border-bright)'
          }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={20} color="var(--primary-orange)" /> 
              {activeCableType === 'SLSR' ? 'SLSR PTC Cross-Section' : 'CWSR Series Tracer Cross-Section'}
            </h3>

            {/* Cutaway Layer Blocks Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {currentLayers.map((layer, idx) => {
                const isSelected = selectedLayerIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedLayerIndex(idx)}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'rgba(255,87,34,0.15)' : 'rgba(255,255,255,0.03)',
                      border: isSelected ? '2px solid var(--primary-orange)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: isSelected && simulateHeat ? '0 0 20px rgba(255,87,34,0.3)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: layer.color,
                        boxShadow: simulateHeat ? `0 0 10px ${layer.color}` : 'none'
                      }} />
                      <div>
                        <div style={{ color: isSelected ? '#fff' : 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem' }}>
                          {layer.name}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {layer.material}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div style={{ color: 'var(--primary-orange-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                        Selected
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Layer Specs & Details */}
          <div className="card-glass" style={{
            padding: '2.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div className="badge-tag" style={{ background: 'rgba(59,130,246,0.12)', color: 'var(--accent-blue)', borderColor: 'rgba(59,130,246,0.3)' }}>
              <Info size={14} /> Layer Specification
            </div>

            <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0.5rem 0 0.25rem 0' }}>
              {currentSelectedLayer.name}
            </h3>

            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-orange-light)', marginBottom: '1.25rem' }}>
              Material: {currentSelectedLayer.material}
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              {currentSelectedLayer.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="var(--accent-green)" /> Engineered for continuous industrial thermal duty
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={16} color="var(--accent-green)" /> 100% Factory Voltage & Insulation Resistance Tested
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .explorer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
