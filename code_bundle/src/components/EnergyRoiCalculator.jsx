import React, { useState } from 'react';
import { Cpu, DollarSign, TrendingDown, Leaf, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function EnergyRoiCalculator({ onOpenRfqWithSpecs }) {
  const [machineCount, setMachineCount] = useState('5');
  const [barrelkW, setBarrelkW] = useState('30'); // kW per machine
  const [dailyHours, setDailyHours] = useState('20'); // hours/day
  const [tariffRate, setTariffRate] = useState('10'); // ₹ per kWh
  const [savingsPercent, setSavingsPercent] = useState('35'); // %

  const calculateRoi = () => {
    const num = parseFloat(machineCount) || 1;
    const kw = parseFloat(barrelkW) || 10;
    const hrs = parseFloat(dailyHours) || 12;
    const rate = parseFloat(tariffRate) || 8;
    const pct = (parseFloat(savingsPercent) || 35) / 100.0;

    // Daily kWh consumed by heater bands = num * kw * hrs
    const totalDailyKwh = num * kw * hrs;
    const dailyKwhSaved = totalDailyKwh * pct;
    const monthlyKwhSaved = Math.round(dailyKwhSaved * 30);
    const annualKwhSaved = Math.round(dailyKwhSaved * 365);

    // Financial Savings
    const monthlySavingsMoney = Math.round(monthlyKwhSaved * rate);
    const annualSavingsMoney = Math.round(annualKwhSaved * rate);

    // Estimated Jacket Investment (Approx ₹25,000 per 30kW machine jacket set)
    const totalEstInvestment = num * (kw * 800);
    const paybackMonths = annualSavingsMoney > 0 ? ((totalEstInvestment / annualSavingsMoney) * 12).toFixed(1) : 0;

    // CO2 Reduction (0.82 kg CO2 per kWh)
    const co2SavedTons = ((annualKwhSaved * 0.82) / 1000.0).toFixed(1);

    return {
      monthlyKwhSaved,
      annualKwhSaved,
      monthlySavingsMoney,
      annualSavingsMoney,
      paybackMonths,
      co2SavedTons
    };
  };

  const results = calculateRoi();

  const handleRequestAudit = () => {
    const roiSummary = `Energy Audit Inquiry for Plastic Plant:
- Total Machines: ${machineCount}
- Barrel Heater Load: ${barrelkW} kW/machine
- Running Hours: ${dailyHours} hrs/day @ ₹${tariffRate}/kWh
- Est. Monthly Savings: ${results.monthlyKwhSaved.toLocaleString()} kWh (₹${results.monthlySavingsMoney.toLocaleString()})
- Est. Payback Period: ${results.paybackMonths} months`;
    onOpenRfqWithSpecs(roiSummary);
  };

  return (
    <section id="roi-calculator" className="section" style={{ background: '#090d16' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper">
          <div className="badge-tag">
            <Cpu size={16} /> Financial ROI & Carbon Calculator
          </div>
          <h2 className="section-heading">
            Plastic Machinery <span>Energy Savings Calculator</span>
          </h2>
          <p className="section-subtext">
            Calculate your plant's exact monthly electricity savings, annual cost reduction, and investment payback period by installing TechnoTherm Power Saving Insulation Jackets.
          </p>
        </div>

        {/* Main Card */}
        <div className="card-glass" style={{
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(13,20,35,0.98) 100%)',
          border: '1px solid rgba(16,185,129,0.3)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }} className="roi-grid">
            
            {/* Input Parameters */}
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={20} color="var(--accent-green)" /> Plant Operating Inputs
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="roi-inputs-grid">
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Number of Machines
                  </label>
                  <input
                    type="number"
                    value={machineCount}
                    onChange={(e) => setMachineCount(e.target.value)}
                    placeholder="e.g. 5"
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Avg Barrel Heating (kW/Machine)
                  </label>
                  <input
                    type="number"
                    value={barrelkW}
                    onChange={(e) => setBarrelkW(e.target.value)}
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Running Hours / Day
                  </label>
                  <input
                    type="number"
                    value={dailyHours}
                    onChange={(e) => setDailyHours(e.target.value)}
                    placeholder="e.g. 20"
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Electricity Tariff (₹ / kWh)
                  </label>
                  <input
                    type="number"
                    value={tariffRate}
                    onChange={(e) => setTariffRate(e.target.value)}
                    placeholder="e.g. 10"
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

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Expected Thermal Saving: <strong style={{ color: 'var(--accent-green)' }}>{savingsPercent}%</strong>
                </label>
                <input
                  type="range"
                  min="20"
                  max="45"
                  value={savingsPercent}
                  onChange={(e) => setSavingsPercent(e.target.value)}
                  style={{ width: '100%', accentColor: 'var(--accent-green)' }}
                />
              </div>

            </div>

            {/* Results Grid Box */}
            <div style={{
              background: 'rgba(9, 13, 22, 0.9)',
              border: '1px solid rgba(16,185,129,0.4)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Estimated Annual Cost Savings
              </div>

              <div style={{
                fontSize: '2.75rem',
                fontWeight: 800,
                color: 'var(--accent-green)',
                lineHeight: 1.1,
                margin: '0.5rem 0'
              }}>
                ₹{results.annualSavingsMoney.toLocaleString()}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Monthly Electricity Saved</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{results.monthlyKwhSaved.toLocaleString()} kWh</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ROI Payback Period</div>
                  <div style={{ fontWeight: 700, color: 'var(--primary-orange-light)', fontSize: '1rem' }}>{results.paybackMonths} Months</div>
                </div>
              </div>

              {/* CO2 Reduction Badge */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '0.75rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#e2e8f0',
                fontSize: '0.875rem'
              }}>
                <Leaf size={18} color="var(--accent-green)" />
                Reduces Carbon Footprint by <strong>{results.co2SavedTons} Tons CO₂ / year</strong>
              </div>

              <button 
                onClick={handleRequestAudit}
                className="btn-primary" 
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 4px 14px rgba(16,185,129,0.4)' }}
              >
                Request On-Site Energy Audit <ArrowRight size={16} />
              </button>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .roi-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .roi-inputs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
