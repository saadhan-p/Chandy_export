import React, { useState, useEffect } from 'react';
import { X, Lock, Send } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function RfqDrawer() {
  const { isDrawerOpen, closeRfqDrawer, preselectedCategory, addToast } = useRfq();
  const [category, setCategory] = useState(preselectedCategory || 'tonewood');

  useEffect(() => {
    if (preselectedCategory) setCategory(preselectedCategory);
  }, [preselectedCategory]);

  if (!isDrawerOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast('Commercial RFQ Submitted! An Export Specialist will issue your FOB quote within 4 hours.');
    closeRfqDrawer();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm transition-opacity"
        onClick={closeRfqDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-white shadow-modal-depth flex flex-col">
          
          {/* Header */}
          <div className="bg-navy-dark text-white p-6 flex items-center justify-between">
            <h3 className="font-headline text-lg tracking-wider text-white">Request B2B Export Quote (RFQ)</h3>
            <button 
              onClick={closeRfqDrawer}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form Body */}
          <div className="p-6 overflow-y-auto flex-grow space-y-4">
            <p className="text-xs text-muted-text">
              Submit your detailed commercial inquiry below. Our export desk prepares itemized FOB/CIF quotes and phytosanitary specs.
            </p>

            <form onSubmit={handleSubmit} id="rfqForm" className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                  Procurement Officer Name
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. David Miller" 
                  className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                  Company / Import Agency
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Apex Luthiers Corp" 
                  className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                  Corporate Email
                </label>
                <input 
                  type="email" 
                  required 
                  placeholder="david@apexluthiers.com" 
                  className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                  Commodity Category
                </label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-11 px-3 text-sm border border-border-line rounded bg-white focus:outline-none focus:border-cyan-accent"
                >
                  <option value="tonewood">Acoustic Guitar Tonewoods</option>
                  <option value="coffee">Single-Estate Kodagu Specialty Coffee</option>
                  <option value="veneer">Architectural Hardwood Veneers</option>
                  <option value="producer_export">Farmer & Producer Export Matchmaking</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                  Target Volume / Quantity
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. 500 sets / 10 Metric Tons" 
                  className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                  Destination Harbor
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Hamburg Harbor, Germany" 
                  className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                  Custom Notes & Specifications
                </label>
                <textarea 
                  rows={3} 
                  placeholder="Specify moisture content %, cupping score target, or ISPM-15 crating preferences." 
                  className="w-full p-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-all shadow"
              >
                <Send className="w-4 h-4" />
                <span>Submit Commercial RFQ</span>
              </button>
            </form>
          </div>

          {/* Footer Notice */}
          <div className="bg-alt-bg p-4 border-t border-border-line text-center text-[11px] text-muted-text flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-cyan-accent" />
            <span>Governed by international commercial non-disclosure protocols.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
