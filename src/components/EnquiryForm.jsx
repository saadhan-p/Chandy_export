import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  RotateCcw,
  Sliders,
  Anchor,
  Compass,
  FileText
} from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function EnquiryForm() {
  const { addToast } = useRfq();
  const [inquiryType, setInquiryType] = useState('rfq'); // 'rfq' or 'general'
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    email: '',
    phone: '',
    quantity: '',
    destination: '',
    incoterm: 'CIF',
    timeline: '30 Days',
    message: ''
  });

  const [selectedProduct, setSelectedProduct] = useState('Guitar Tonewoods');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  const productsList = [
    { id: 'Guitar Tonewoods', name: 'Guitar Tonewoods', subtitle: 'Rosewood, Ebony & Soundboards' },
    { id: 'Kodagu Coffee', name: 'Kodagu Coffee', subtitle: 'Specialty Arabica & Robusta' },
    { id: 'Architectural Timber', name: 'Architectural Timber', subtitle: 'Teak, Hardwoods & Flitches' },
    { id: 'Agricultural Produce', name: 'Agricultural Produce', subtitle: 'Coorg Spices & Botanicals' },
    { id: 'Specialty Roasted Coffee', name: 'Specialty Roasted', subtitle: 'Direct Micro-lots & Blends' },
    { id: 'Custom Turnings/Blanks', name: 'Turnings & Blanks', subtitle: 'Luthier & Precision Milling' },
    { id: 'Other / Custom', name: 'Bespoke Sourcing', subtitle: 'Custom Port Contract' }
  ];

  const incoterms = [
    { code: 'CIF', name: 'Cost, Ins. & Freight' },
    { code: 'FOB', name: 'Free on Board' },
    { code: 'EXW', name: 'Ex Works / Mill' },
    { code: 'DDP', name: 'Delivered Duty Paid' }
  ];

  const timelines = [
    { label: 'Immediate (< 2 wks)', val: 'Immediate' },
    { label: 'Within 30 Days', val: '30 Days' },
    { label: '60 - 90 Days', val: '90 Days' },
    { label: 'Annual Contract', val: 'Contract' }
  ];

  const quickRequirements = [
    '+ Phytosanitary Certificate',
    '+ Kiln Dried (KD < 10%)',
    '+ Coffee Cup Score 85+',
    '+ CITES Documentation',
    '+ Sample Swatch Required',
    '+ Custom Export Packaging'
  ];

  const handleSelectProduct = (prodId) => {
    setSelectedProduct(prodId);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSpecTag = (tagText) => {
    const cleanTag = tagText.replace('+ ', '');
    if (formData.message.includes(cleanTag)) return;
    setFormData(prev => ({
      ...prev,
      message: prev.message ? `${prev.message}\n• Required: ${cleanTag}` : `• Required: ${cleanTag}`
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inquiryType === 'rfq' && !selectedProduct) {
      addToast('Please select a Commodity Stream.');
      return;
    }
    
    // Generate an official looking RFQ reference
    const refId = `CGX-${new Date().getFullYear().toString().slice(-2)}${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(refId);
    setIsSubmitted(true);
    addToast(`Transmission Confirmed. Reference #${refId} dispatched to Trade Desk.`);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: '', lastName: '', companyName: '', country: '',
      email: '', phone: '', quantity: '', destination: '',
      incoterm: 'CIF', timeline: '30 Days', message: ''
    });
    setSelectedProduct('Guitar Tonewoods');
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm relative overflow-hidden text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 border border-emerald-200/60 shadow-sm">
          <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-accent font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3">
          Transmission Confirmed
        </span>

        <h3 className="font-headline text-xl sm:text-3xl font-bold text-slate-900 mb-2">
          RFQ Reference #{submittedRef}
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed">
          Your procurement requirements have been queued on our international desk. An itemized FOB/CIF quotation with moisture analysis & port transit schedule will be dispatched to <strong className="text-slate-900">{formData.email}</strong> within 24 business hours.
        </p>

        {/* Manifest Preview Box */}
        <div className="bg-slate-50 border border-slate-200/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-left max-w-md mx-auto mb-6 sm:mb-8 text-xs space-y-2">
          <div className="flex justify-between pb-2 border-b border-slate-200 text-slate-500 font-mono uppercase text-[10px] sm:text-xs">
            <span>Trade Manifest</span>
            <span>Status: In Desk Review</span>
          </div>
          <div className="flex justify-between py-1 text-[11px] sm:text-xs">
            <span className="text-slate-500">Representative:</span>
            <span className="font-semibold text-slate-800 truncate ml-2">{formData.firstName} {formData.lastName} ({formData.companyName})</span>
          </div>
          <div className="flex justify-between py-1 text-[11px] sm:text-xs">
            <span className="text-slate-500">Commodity:</span>
            <span className="font-semibold text-slate-800">{selectedProduct}</span>
          </div>
          <div className="flex justify-between py-1 text-[11px] sm:text-xs">
            <span className="text-slate-500">Incoterm & Port:</span>
            <span className="font-semibold text-slate-800">{formData.incoterm} · {formData.destination || 'Unspecified Port'}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={resetForm}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-primary transition-colors shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Submit Another Specification
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200/70 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
      
      {/* Top Controller Bar: Responsive Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-slate-100">
        <div>
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-cyan-accent uppercase block mb-1">
            01 // Manifest Setup
          </span>
          <h2 className="font-headline text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
            Procurement Specification
          </h2>
        </div>

        {/* Minimalist Pill Switcher */}
        <div className="inline-flex p-1 bg-slate-100/80 rounded-xl border border-slate-200/60 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setInquiryType('rfq')}
            className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-bold rounded-lg transition-all text-center ${
              inquiryType === 'rfq'
                ? 'bg-white text-navy-dark shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Commodity RFQ
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('general')}
            className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-bold rounded-lg transition-all text-center ${
              inquiryType === 'general'
                ? 'bg-white text-navy-dark shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Direct Message
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

        {/* Commodity Matrix (Visible for RFQ) */}
        {inquiryType === 'rfq' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-cyan-accent" />
                Select Commodity Stream
              </label>
              <span className="text-[10px] sm:text-[11px] text-cyan-accent font-mono font-medium">
                1 Stream Selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
              {productsList.map((prod) => {
                const isSelected = selectedProduct === prod.id;
                return (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => handleSelectProduct(prod.id)}
                    className={`text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-200 relative group block ${
                      isSelected
                        ? 'bg-navy-dark text-white border-navy-dark shadow-sm'
                        : 'bg-slate-50/70 hover:bg-slate-100/70 border-slate-200/80 text-slate-800'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs font-bold tracking-wide truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {prod.name}
                        </span>
                        {isSelected ? (
                          <div className="w-4 h-4 rounded-full bg-cyan-accent text-navy-dark flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-cyan-accent transition-colors flex-shrink-0"></div>
                        )}
                      </div>
                      <p className={`text-[10px] sm:text-[11px] truncate mt-1 ${isSelected ? 'text-cyan-accent/90' : 'text-slate-500'}`}>
                        {prod.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 02: Identity & Organization */}
        <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            <Compass className="w-3.5 h-3.5 text-cyan-accent" />
            Entity & Principal Contact
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="relative">
              <input
                required
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
            <div className="relative">
              <input
                required
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <input
                required
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Trading Firm / Mill / Importer Name *"
                className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country / Destination Market *"
                className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Corporate Email Address *"
                className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Direct Phone / WhatsApp"
                className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Section 03: Logistics Parameters (Incoterms, Volume & Port) */}
        {inquiryType === 'rfq' && (
          <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
              <Anchor className="w-3.5 h-3.5 text-cyan-accent" />
              Logistics & Freight Specifications
            </div>

            {/* Incoterm Selectors (Tactile Button Row) */}
            <div>
              <span className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1.5 sm:mb-2">
                Preferred Incoterm Model
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {incoterms.map((inc) => (
                  <button
                    key={inc.code}
                    type="button"
                    onClick={() => setFormData({ ...formData, incoterm: inc.code })}
                    className={`py-2 px-2 sm:px-3 rounded-xl border text-center transition-all ${
                      formData.incoterm === inc.code
                        ? 'bg-navy-dark text-white border-navy-dark shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold font-mono">{inc.code}</div>
                    <div className={`text-[9px] sm:text-[10px] truncate ${formData.incoterm === inc.code ? 'text-cyan-accent' : 'text-slate-400'}`}>
                      {inc.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Estimated Quantity (e.g. 1x 20ft FCL, 500 kg, 20 MT)"
                  className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Discharge Port (e.g. Jebel Ali, Hamburg, Tokyo)"
                  className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium"
                />
              </div>
            </div>

            {/* Timeline Row */}
            <div>
              <span className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1.5 sm:mb-2">
                Supply Readiness & Target Schedule
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {timelines.map((time) => (
                  <button
                    key={time.val}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: time.val })}
                    className={`py-2 px-2 sm:px-3 rounded-xl border text-center text-[10px] sm:text-xs font-semibold transition-all ${
                      formData.timeline === time.val
                        ? 'bg-navy-dark text-white border-navy-dark shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {time.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section 04: Specification Notes & Prompt Tags */}
        <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-cyan-accent" />
              Technical Notes & Custom Parameters
            </span>
          </div>

          {/* Quick Tap Requirement Injectors */}
          <div className="flex flex-wrap gap-1.5">
            {quickRequirements.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => addSpecTag(tag)}
                className="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-cyan-50 hover:text-cyan-accent text-slate-600 border border-slate-200/70 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Specify timber dimensions (thickness/width/length), coffee lot grade / screen size, target moisture content, phytosanitary requirements, or packaging guidelines..."
            className="w-full bg-slate-50/60 focus:bg-white text-slate-900 text-xs sm:text-sm p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 focus:border-navy-dark focus:ring-1 focus:ring-navy-dark transition-all outline-none placeholder:text-slate-400 font-medium resize-none leading-relaxed"
          ></textarea>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs">24h guaranteed itemized CIF/FOB quote • Direct export compliance</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-navy-dark hover:bg-navy-primary text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 shadow-sm group hover:scale-[1.01]"
          >
            <span>Transmit Specification</span>
            <ArrowRight className="w-4 h-4 text-cyan-accent group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </form>
    </div>
  );
}
