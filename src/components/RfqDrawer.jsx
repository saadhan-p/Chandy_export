import React, { useState, useEffect } from 'react';
import { X, Lock, Send, Check, Sparkles } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import { submitToGoogleSheets } from '../services/googleSheets';

export default function RfqDrawer() {
  const { isDrawerOpen, closeRfqDrawer, preselectedCategory, addToast } = useRfq();

  const [interest, setInterest] = useState('tonewood'); // 'tonewood' | 'coffee' | 'timber' | 'logistics'
  const [orderSize, setOrderSize] = useState('sample'); // 'sample' | 'small' | 'bulk'
  
  const [formData, setFormData] = useState({
    name: '',
    contact: '', // email or phone/whatsapp
    country: '',
    company: '',
    notes: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedCategory) {
      if (preselectedCategory === 'coffee') setInterest('coffee');
      else if (preselectedCategory === 'timber' || preselectedCategory === 'producer_export') setInterest('timber');
      else if (preselectedCategory === 'logistics') setInterest('logistics');
      else setInterest('tonewood');
    }
  }, [preselectedCategory]);

  if (!isDrawerOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitToGoogleSheets({
      formSource: 'Quick Slide-Over RFQ Drawer',
      name: formData.name,
      emailPhone: formData.contact,
      company: formData.company || 'N/A',
      country: formData.country || 'N/A',
      commodity: `${interest} (${orderSize})`,
      notes: formData.notes || 'N/A'
    });

    setIsSubmitting(false);
    addToast('Quote request received! Our export desk will reply with pricing within 4 hours.');
    closeRfqDrawer();
    setFormData({ name: '', contact: '', country: '', company: '', notes: '' });
  };

  const interestOptions = [
    { id: 'tonewood', label: 'Guitar Tonewoods', icon: '🎸' },
    { id: 'coffee', label: 'Kodagu Coffee', icon: '☕' },
    { id: 'timber', label: 'Sawmill / Timber', icon: '🌲' },
    { id: 'logistics', label: 'Export & Shipping', icon: '🚢' },
  ];

  const orderSizes = [
    { id: 'sample', label: 'Sample / Trial', desc: 'Single pieces or test kg' },
    { id: 'small', label: 'Commercial Batch', desc: '50 - 500 pcs / pallet' },
    { id: 'bulk', label: 'Bulk / Container', desc: 'Full FCL / LCL shipments' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm transition-opacity"
        onClick={closeRfqDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="bg-navy-dark text-white p-5 sm:p-6 flex items-center justify-between border-b border-cyan-accent/20">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-accent animate-pulse" />
                <h3 className="font-headline text-lg sm:text-xl font-bold tracking-wide text-white">
                  Get a Price Quote
                </h3>
              </div>
              <p className="text-xs text-cyan-accent/90 mt-0.5 font-sans">
                Fast & simple • Direct factory pricing within 4 hours
              </p>
            </div>
            <button 
              onClick={closeRfqDrawer}
              className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Body */}
          <div className="p-5 sm:p-6 overflow-y-auto flex-grow space-y-5">
            <form onSubmit={handleSubmit} id="rfqForm" className="space-y-4">
              
              {/* 1. What are you interested in? */}
              <div>
                <label className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  1. What products do you need?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((item) => {
                    const isSelected = interest === item.id;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setInterest(item.id)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all text-left ${
                          isSelected
                            ? 'bg-navy-dark text-white border-navy-dark shadow-sm'
                            : 'bg-surface-bg text-slate-700 border-border-line hover:border-cyan-accent/60'
                        }`}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="leading-tight">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Order Quantity / Scale */}
              <div>
                <label className="block text-xs font-bold text-navy-dark uppercase tracking-wider mb-2">
                  2. Approximate Order Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {orderSizes.map((size) => {
                    const isSelected = orderSize === size.id;
                    return (
                      <button
                        type="button"
                        key={size.id}
                        onClick={() => setOrderSize(size.id)}
                        className={`p-2 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-azure-light border-cyan-accent text-navy-primary font-bold ring-1 ring-cyan-accent'
                            : 'bg-white border-border-line text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span className="block text-xs leading-snug">{size.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Basic Contact Details */}
              <div className="pt-2 border-t border-border-line/60 space-y-3">
                <label className="block text-xs font-bold text-navy-dark uppercase tracking-wider">
                  3. Where should we send the quote?
                </label>

                <div>
                  <input 
                    type="text" 
                    required 
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name *" 
                    className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-xl focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent bg-white"
                  />
                </div>

                <div>
                  <input 
                    type="text" 
                    required 
                    maxLength={120}
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Email or WhatsApp Number *" 
                    className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-xl focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text" 
                    required 
                    maxLength={100}
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Country / City *" 
                    className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-xl focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent bg-white"
                  />
                  <input 
                    type="text" 
                    maxLength={100}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company (Optional)" 
                    className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-xl focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent bg-white"
                  />
                </div>

                {/* Anti-Bot Honeypot */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <input
                    type="text"
                    name="corporate_verification_tag"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <textarea 
                    rows={2} 
                    maxLength={2000}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any specific requirement or wood grade? (Optional)" 
                    className="w-full p-3 text-xs sm:text-sm border border-border-line rounded-xl focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent bg-white resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3.5 bg-cyan-accent hover:bg-cyan-hover text-navy-dark font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Transmitting to Sheets...' : 'Send Me Price & Spec Sheet'}</span>
              </button>
            </form>
          </div>

          {/* Footer Notice */}
          <div className="bg-alt-bg px-5 py-3 border-t border-border-line text-center text-[11px] text-muted-text flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-cyan-accent" />
            <span>100% confidential. No spam or unsolicited calls.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
