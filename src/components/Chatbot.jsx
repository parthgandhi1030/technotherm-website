import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronRight, Calculator, FileText, Phone } from 'lucide-react';
import { companyDetails, productCategories } from '../data/companyData';

export default function Chatbot({ onOpenRfq, onScrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! 👋 I'm **ThermoBot AI**, your industrial heating & thermal engineering assistant. How can I help you today?",
      quickChips: [
        'How does Self-Regulating Cable work?',
        'Insulation Jacket Energy Savings',
        'CIMFR Zone II Certifications',
        'Help me calculate Heat Loss'
      ]
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const generateBotReply = (userText) => {
    const q = userText.toLowerCase();

    if (q.includes('self-regulating') || q.includes('slsr') || q.includes('how does') || q.includes('ptc')) {
      return {
        text: "🔥 **THERMO-FLEX® SLSR Self-Regulating Cables** feature a PTC polymer core that automatically adjusts heat output relative to surrounding surface temperature.\n\n• As ambient temperature drops, power output increases.\n• As temperature rises, heat output reduces automatically, preventing overheating.\n• Available in 12W, 15W, 25W, 35W, 45W, 50W, 60W per meter.",
        actionBtn: { label: 'Explore SLSR Specs', section: 'products' }
      };
    }

    if (q.includes('jacket') || q.includes('energy') || q.includes('saving') || q.includes('moulding') || q.includes('roi')) {
      return {
        text: "⚡ **Energy Saving Insulation Jackets** for plastic injection moulding machines & extruders reduce electricity consumption by **20% to 45%**!\n\n• Lowers barrel warm-up time by 30%\n• Payback period in just 4 to 8 months\n• Reduces shop floor heat load.",
        actionBtn: { label: 'Calculate Energy ROI', section: 'roi-calculator' }
      };
    }

    if (q.includes('zone') || q.includes('cimfr') || q.includes('hazardous') || q.includes('explosion') || q.includes('ex')) {
      return {
        text: "🛡️ **CSIR-CIMFR Certified**: Our CWSR series resistance heat tracers are approved by CSIR-CIMFR (Approval TSP/0256/24-25) for **Zone II Hazardous Areas** with Gas Classifications T1 to T5 as per IS 5571:1979 & IS/IEC/IEEE6079-30:2015.",
        actionBtn: { label: 'View CWSR Data Sheet', section: 'products' }
      };
    }

    if (q.includes('heat loss') || q.includes('calculate') || q.includes('sizing') || q.includes('wattage')) {
      return {
        text: "🧮 You can use our live **Thermal Heat Loss & Cable Sizing Calculator** to calculate exact W/m pipe heat loss based on pipe diameter, insulation thickness, maintain temp, and minimum ambient temp!",
        actionBtn: { label: 'Open Heat Loss Calculator', section: 'calculator' }
      };
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('address') || q.includes('quote') || q.includes('rfq')) {
      return {
        text: `📞 **Contact TechnoTherm Industries LLP**:\n• Phone: ${companyDetails.contact.phones.join(' | ')}\n• Email: ${companyDetails.contact.email}\n• Factory: 129 Vora Industrial Estate No 04, Vasai (East), Palghar - 401 210.`,
        actionBtn: { label: 'Request Factory Quote', rfq: true }
      };
    }

    if (q.includes('drain') || q.includes('cold storage') || q.includes('door') || q.includes('freezer')) {
      return {
        text: "❄️ For Cold Storage & Refrigeration, we manufacture:\n1. **Silicone Rubber Drain Pipe Defrost Heaters** (40W/m & 50W/m, -60°C to +220°C)\n2. **Cold Storage Door Frame Gasket Heaters**\n3. **Sub-floor Radiant Frost Heave Cables**.",
        actionBtn: { label: 'View Cold Storage Products', section: 'products' }
      };
    }

    return {
      text: `TechnoTherm Industries LLP provides standard and customized industrial electric heating systems (legacy since 1971). \n\nHow can our technical panel assist your project? You can request a quote or call our engineers at ${companyDetails.contact.phones[0]}.`,
      actionBtn: { label: 'Request Quote', rfq: true }
    };
  };

  const handleSend = (textToSend = inputMsg) => {
    if (!textToSend.trim()) return;

    const userMsgObj = { sender: 'user', text: textToSend };
    const botReplyObj = generateBotReply(textToSend);

    setMessages(prev => [...prev, userMsgObj, { sender: 'bot', ...botReplyObj }]);
    setInputMsg('');
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 1500,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary-orange) 0%, #d84315 100%)',
          color: '#fff',
          boxShadow: '0 8px 25px rgba(255,87,34,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={26} /> : (
          <div style={{ position: 'relative' }}>
            <Bot size={28} />
            <div style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#10b981',
              border: '2px solid #090d16'
            }} />
          </div>
        )}
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '96px',
          right: '24px',
          zIndex: 1500,
          width: '380px',
          maxWidth: 'calc(100vw - 32px)',
          height: '540px',
          maxHeight: 'calc(100vh - 120px)',
          background: '#0d1322',
          border: '1px solid var(--border-bright)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }} className="animate-fade-in">
          
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,87,34,0.15) 0%, rgba(9,13,22,0.95) 100%)',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--primary-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Bot size={20} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>ThermoBot AI</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Sparkles size={12} /> Online • Technical Assistant
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: 'var(--text-muted)' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{
            flexGrow: 1,
            padding: '1rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            background: '#090d16'
          }}>
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%'
                }}
              >
                <div style={{
                  background: msg.sender === 'user' ? 'var(--primary-orange)' : 'var(--bg-card)',
                  color: msg.sender === 'user' ? '#fff' : 'var(--text-main)',
                  padding: '0.75rem 1rem',
                  borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                  whiteSpace: 'pre-line'
                }}>
                  {msg.text}
                </div>

                {/* Optional Action Button inside bot reply */}
                {msg.actionBtn && (
                  <button 
                    onClick={() => {
                      if (msg.actionBtn.rfq) {
                        onOpenRfq();
                      } else if (msg.actionBtn.section && onScrollToSection) {
                        onScrollToSection(msg.actionBtn.section);
                      }
                      setIsOpen(false);
                    }}
                    className="btn-outline-orange"
                    style={{ marginTop: '0.5rem', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  >
                    {msg.actionBtn.label} <ChevronRight size={14} />
                  </button>
                )}

                {/* Quick Chips */}
                {msg.quickChips && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem' }}>
                    {msg.quickChips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        onClick={() => handleSend(chip)}
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.4rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          color: 'var(--primary-orange-light)',
                          fontSize: '0.8rem',
                          textAlign: 'left',
                          transition: 'all 0.2s'
                        }}
                      >
                        💡 {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div style={{
            padding: '0.75rem 1rem',
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            <input 
              type="text"
              placeholder="Ask ThermoBot AI..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flexGrow: 1,
                padding: '0.55rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(9, 13, 22, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.875rem',
                outline: 'none'
              }}
            />
            <button 
              onClick={() => handleSend()}
              style={{
                background: 'var(--primary-orange)',
                color: '#fff',
                padding: '0.55rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={16} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
