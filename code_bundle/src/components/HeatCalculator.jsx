import React, { useState } from 'react';
import { Calculator, Flame, Zap, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export default function HeatCalculator({ onOpenRfqWithSpecs }) {
  const [pipeDiameter, setPipeDiameter] = useState('2'); // Nominal Inches
  const [insulationThickness, setInsulationThickness] = useState('50'); // mm
  const [maintainTemp, setMaintainTemp] = useState('50'); // °C
  const [ambientTemp, setAmbientTemp] = useState('0'); // °C
  const [pipeLength, setPipeLength] = useState('30'); // meters
  const [insulationType, setInsulationType] = useState('glasswool');

  // Thermal conductivities (W/m·K)
  const kValues = {
    glasswool: 0.038,
    rockwool: 0.042,
    polyurethane: 0.024,
    calcium_silicate: 0.055
  };

  // Outer Diameter mapping (NPS inches to mm)
  const pipeOdMap = {
    '0.5': 21.3,
    '1': 33.4,
    '1.5': 48.3,
    '2': 60.3,
    '3': 88.9,
    '4': 114.3,
    '6': 168.3,
    '8': 219.1,
    '10': 273.0,
    '12': 323.8
  };

  const calculateHeatLoss = () => {
    const dInner = (pipeOdMap[pipeDiameter] || 60.3) / 1000.0; // mm to meters
    const insThickM = parseFloat(insulationThickness) / 1000.0;
    const dOuter = dInner + (2 * insThickM);
    
    const deltaT = parseFloat(maintainTemp) - parseFloat(ambientTemp);
    const k = kValues[insulationType] || 0.038;

    if (deltaT <= 0 || dInner <= 0 || insThickM <= 0) {
      return { qPerMeter: 0, totalPower: 0, recommendedCable: 'N/A' };
    }

    // Heat Loss Q (W/m) = 2 * pi * k * deltaT / ln(dOuter / dInner) * 1.2 (Safety Factor 20%)
    const qPerMeterRaw = (2 * Math.PI * k * deltaT) / Math.log(dOuter / dInner);
    const qPerMeter = Math.round(qPerMeterRaw * 1.25); // 25% safety margin
    const totalPower = Math.round(qPerMeter * parseFloat(pipeLength));

    let recommendedCable = 'SLSR-12 (Self-Regulating 12W/m)';
    if (qPerMeter > 12 && qPerMeter <= 22) {
      recommendedCable = 'SLSR-25 (Self-Regulating 25W/m)';
    } else if (qPerMeter > 22 && qPerMeter <= 32) {
      recommendedCable = 'SLSR-35 (Self-Regulating 35W/m)';
    } else if (qPerMeter > 32 && qPerMeter <= 45) {
      recommendedCable = 'CWSR-45 / CTL-40 (Constant Wattage 45W/m)';
    } else if (qPerMeter > 45) {
      recommendedCable = 'Double Run SLSR-35 or Spiral CWSR (Custom Multi-Tracing)';
    }

    return { qPerMeter, totalPower, recommendedCable, deltaT };
  };

  const results = calculateHeatLoss();

  const handleRequestQuoteWithCalc = () => {
    const specsString = `Pipe Sizing Sizing Calculation:
- Pipe Diameter: ${pipeDiameter} inches
- Insulation: ${insulationThickness}mm ${insulationType}
- Maintain Temp: ${maintainTemp}°C (Min Ambient: ${ambientTemp}°C)
- Pipe Length: ${pipeLength} meters
- Calculated Heat Loss: ${results.qPerMeter} W/m
- Recommended Cable: ${results.recommendedCable}`;
    onOpenRfqWithSpecs(specsString);
  };

  return (
    <section id="calculator" className="section" style={{ background: '#0b101d' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Calculator size={16} /> Engineering Tool
          </div>
          <h2 className="section-heading">
            Thermal Heat Loss & <span>Cable Sizing Calculator</span>
          </h2>
          <p className="section-subtext">
            Input your pipeline dimensions and temperature requirements to calculate thermal heat loss (W/m) and receive an instant TechnoTherm heating cable recommendation.
          </p>
        </div>

        <div className="card-glass" style={{
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(19,27,46,0.95) 0%, rgba(13,20,35,0.98) 100%)',
          border: '1px solid rgba(255,87,34,0.3)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="calc-grid">
            
            {/* Inputs Form */}
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={20} color="var(--primary-orange)" /> Pipe & Insulation Parameters
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="calc-inputs-grid">
                
                {/* Nominal Pipe Size */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Nominal Pipe Diameter (NPS)
                  </label>
                  <select
                    value={pipeDiameter}
                    onChange={(e) => setPipeDiameter(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(9, 13, 22, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="0.5">0.5 Inch (21.3 mm OD)</option>
                    <option value="1">1.0 Inch (33.4 mm OD)</option>
                    <option value="1.5">1.5 Inch (48.3 mm OD)</option>
                    <option value="2">2.0 Inch (60.3 mm OD)</option>
                    <option value="3">3.0 Inch (88.9 mm OD)</option>
                    <option value="4">4.0 Inch (114.3 mm OD)</option>
                    <option value="6">6.0 Inch (168.3 mm OD)</option>
                    <option value="8">8.0 Inch (219.1 mm OD)</option>
                    <option value="10">10.0 Inch (273.0 mm OD)</option>
                    <option value="12">12.0 Inch (323.8 mm OD)</option>
                  </select>
                </div>

                {/* Insulation Thickness */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Insulation Thickness (mm)
                  </label>
                  <select
                    value={insulationThickness}
                    onChange={(e) => setInsulationThickness(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(9, 13, 22, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="25">25 mm Insulation</option>
                    <option value="38">38 mm Insulation</option>
                    <option value="50">50 mm Insulation</option>
                    <option value="75">75 mm Insulation</option>
                    <option value="100">100 mm Insulation</option>
                  </select>
                </div>

                {/* Required Maintain Temp */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Maintain Temperature (°C)
                  </label>
                  <input
                    type="number"
                    value={maintainTemp}
                    onChange={(e) => setMaintainTemp(e.target.value)}
                    placeholder="e.g. 50"
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(9, 13, 22, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                {/* Min Ambient Temp */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Min Ambient Temperature (°C)
                  </label>
                  <input
                    type="number"
                    value={ambientTemp}
                    onChange={(e) => setAmbientTemp(e.target.value)}
                    placeholder="e.g. -10"
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(9, 13, 22, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                {/* Insulation Type */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Insulation Material
                  </label>
                  <select
                    value={insulationType}
                    onChange={(e) => setInsulationType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(9, 13, 22, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="glasswool">Glass Wool (k = 0.038 W/mK)</option>
                    <option value="rockwool">Rockwool / Mineral Wool (k = 0.042 W/mK)</option>
                    <option value="polyurethane">Polyurethane Foam (k = 0.024 W/mK)</option>
                    <option value="calcium_silicate">Calcium Silicate (k = 0.055 W/mK)</option>
                  </select>
                </div>

                {/* Pipe Length */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Total Pipe Length (meters)
                  </label>
                  <input
                    type="number"
                    value={pipeLength}
                    onChange={(e) => setPipeLength(e.target.value)}
                    placeholder="e.g. 30"
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(9, 13, 22, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

              </div>
            </div>

            {/* Live Calculation Results Display Box */}
            <div style={{
              background: 'rgba(9, 13, 22, 0.85)',
              border: '1px solid var(--border-bright)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(255,87,34,0.15)'
            }}>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Calculated Heat Loss
              </div>

              <div style={{
                fontSize: '3rem',
                fontWeight: 800,
                color: 'var(--primary-orange-light)',
                lineHeight: 1.1,
                margin: '0.5rem 0'
              }}>
                {results.qPerMeter} <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>W/m</span>
              </div>

              <div style={{ fontSize: '0.875rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Total Power Required: <strong style={{ color: '#fff' }}>{results.totalPower} Watts</strong> ({pipeLength}m length)
              </div>

              {/* Recommended Cable Card */}
              <div style={{
                background: 'rgba(255, 87, 34, 0.08)',
                border: '1px solid rgba(255, 87, 34, 0.25)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary-orange-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Recommended TechnoTherm Model:
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginTop: '0.25rem' }}>
                  {results.recommendedCable}
                </div>
              </div>

              <button 
                onClick={handleRequestQuoteWithCalc}
                className="btn-primary" 
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}
              >
                Inquire Quote with this Sizing <ArrowRight size={16} />
              </button>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .calc-inputs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
