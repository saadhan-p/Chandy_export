import React, { useState } from 'react';
import { useRfq } from '../context/RfqContext';
import { 
  Building, 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Check, 
  ShieldCheck, 
  Ship, 
  Box, 
  Globe, 
  FileText, 
  BadgeCheck, 
  CheckCircle2, 
  SlidersHorizontal,
  ChevronRight,
  Info
} from 'lucide-react';

export default function Contact() {
  const { addToast } = useRfq();

  // Category Tab Filter
  const [activeCategory, setActiveCategory] = useState('tonewood'); // 'tonewood' | 'coffee' | 'producer'

  // Selected Products State
  const [selectedProducts, setSelectedProducts] = useState([
    'Rosewood Fingerboards',
    'Ebony Fingerboards'
  ]);

  // Selected Services State
  const [selectedServices, setSelectedServices] = useState([
    'Phytosanitary Clearance',
    'ISPM-15 Heat Treated Crating'
  ]);

  // Shipping & Logistics State
  const [containerType, setContainerType] = useState('fcl20');
  const [destinationPort, setDestinationPort] = useState('');

  // Contact Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    notes: ''
  });

  // Product Catalog by Category
  const catalog = {
    tonewood: [
      { id: 'Rosewood Fingerboards', title: 'Rosewood Fingerboards', spec: 'Master Grade AAA | 520 x 70 x 9 mm' },
      { id: 'Rosewood Back & Sides', title: 'Rosewood Back & Side Sets', spec: 'Quarter-Sawn AAA | 5,200+ m/s Speed' },
      { id: 'Rosewood Headstocks', title: 'Rosewood Headstock Overlays', spec: 'Select Premium Veneers | 2.5–4.0 mm' },
      { id: 'Rosewood Bridges', title: 'Rosewood Acoustic Bridges', spec: 'Sanded Luthier AA | 180 x 40 x 12 mm' },
      { id: 'Ebony Fingerboards', title: 'Ebony Fingerboards', spec: 'Jet Black AAA | 1,150 kg/m³ Density' },
      { id: 'Ebony Headstocks', title: 'Ebony Headstock Overlays', spec: 'Jet Black AA | Slot-Ready Micro-Sanded' },
      { id: 'Ebony Bridges', title: 'Ebony Acoustic Bridges', spec: 'Master Jet Black | 180 x 40 x 12 mm' },
      { id: 'Bowl & Pen Blanks', title: 'Rosewood & Ebony Turning Blanks', spec: 'Bowl & Pen Turning Blanks | Air-Dried' },
    ],
    coffee: [
      { id: 'Kodagu Arabica Green Coffee', title: 'Kodagu Plantation Arabica', spec: 'Single-Estate Green Coffee | 84+ SCA Score' },
      { id: 'Kodagu Robusta Kaapi Royale', title: 'Kodagu Kaapi Royale Robusta', spec: 'Screen 18/17 | Clean Cup Specialty Grade' },
      { id: 'Custom Roasted Coffee Beans', title: 'Custom Roasted Specialty Coffee', spec: 'Nitrogen-Flushed Hermetic Packaging' },
    ],
    producer: [
      { id: 'Agricultural Crop Export', title: 'Farmer Agricultural Crops & Produce', spec: 'Buyer Matchmaking & Customs Clearance' },
      { id: 'Architectural Hardwood Logs', title: 'Architectural Timber & Sliced Logs', spec: 'Precision Milling & Container Dispatch' },
    ]
  };

  // Service Options
  const serviceList = [
    { id: 'Phytosanitary Clearance', label: 'Official Phytosanitary Clearance Certificate' },
    { id: 'ISPM-15 Heat Treated Crating', label: 'ISPM-15 Heat-Treated Wooden Pallet Crating' },
    { id: 'CITES Vriksh Passports', label: 'CITES / Vriksh Legal Timber Passport' },
    { id: 'FCL/LCL Freight Booking', label: 'FCL / LCL Freight Booking & Customs Handling' },
  ];

  const toggleProduct = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(p => p !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProducts.length === 0) {
      addToast('Please select at least one product to include in your RFQ spec sheet.');
      return;
    }
    addToast(`Commercial RFQ Submitted! Included ${selectedProducts.length} product(s). An Export Specialist will issue your FOB quote within 4 hours.`);
    setFormData({ name: '', email: '', company: '', country: '', notes: '' });
  };

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-navy-dark text-white py-10 sm:py-14 meridian-grid-dark border-b border-border-line/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-headline text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              Commercial Export Desk & Tariff Quotations
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Request a B2B Commercial RFQ
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
              Select your required timber components, coffee grades, or producer services below. Our trade desk prepares itemized FOB/CIF quotes within 4 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-16 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Column: Form & Product Selector (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Section 1: Commodity Selection */}
                <div className="bg-white border border-border-line rounded-2xl p-5 sm:p-8 shadow-sm">
                  
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-line">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-navy-primary text-white text-xs font-bold flex items-center justify-center">
                        1
                      </span>
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-navy-dark">
                        Select Commodities & Products
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-cyan-accent">
                      {selectedProducts.length} selected
                    </span>
                  </div>

                  {/* Category Tabs */}
                  <div className="flex flex-wrap gap-2 mb-6 p-1 bg-alt-bg rounded-xl border border-border-line/80">
                    <button
                      type="button"
                      onClick={() => setActiveCategory('tonewood')}
                      className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all text-center ${
                        activeCategory === 'tonewood'
                          ? 'bg-navy-primary text-white shadow-sm'
                          : 'text-slate-body hover:text-navy-dark hover:bg-white/60'
                      }`}
                    >
                      Guitar Tonewoods
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('coffee')}
                      className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all text-center ${
                        activeCategory === 'coffee'
                          ? 'bg-navy-primary text-white shadow-sm'
                          : 'text-slate-body hover:text-navy-dark hover:bg-white/60'
                      }`}
                    >
                      Kodagu Coffee
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('producer')}
                      className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all text-center ${
                        activeCategory === 'producer'
                          ? 'bg-navy-primary text-white shadow-sm'
                          : 'text-slate-body hover:text-navy-dark hover:bg-white/60'
                      }`}
                    >
                      Producer Export
                    </button>
                  </div>

                  {/* Product Checkbox List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {catalog[activeCategory].map((prod) => {
                      const isSelected = selectedProducts.includes(prod.id);
                      return (
                        <div
                          key={prod.id}
                          onClick={() => toggleProduct(prod.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                            isSelected
                              ? 'bg-azure-light/50 border-cyan-accent shadow-sm'
                              : 'bg-white border-border-line hover:border-slate-300 hover:bg-alt-bg/40'
                          }`}
                        >
                          {/* Custom Checkbox */}
                          <div className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected ? 'bg-navy-primary text-white' : 'border border-slate-300 bg-white'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 text-cyan-accent stroke-[3]" />}
                          </div>

                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-navy-dark leading-snug">
                              {prod.title}
                            </h4>
                            <p className="text-[11px] text-muted-text mt-1 leading-relaxed">
                              {prod.spec}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Section 2: Services & Compliance */}
                <div className="bg-white border border-border-line rounded-2xl p-5 sm:p-8 shadow-sm">
                  
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-line">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-navy-primary text-white text-xs font-bold flex items-center justify-center">
                        2
                      </span>
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-navy-dark">
                        Compliance & Freight Requirements
                      </h3>
                    </div>
                  </div>

                  {/* Services Checkboxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {serviceList.map((serv) => {
                      const isSelected = selectedServices.includes(serv.id);
                      return (
                        <div
                          key={serv.id}
                          onClick={() => toggleService(serv.id)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 select-none ${
                            isSelected
                              ? 'bg-navy-dark text-white border-navy-dark shadow-sm'
                              : 'bg-white border-border-line text-slate-body hover:border-slate-300'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                            isSelected ? 'bg-cyan-accent text-navy-dark' : 'border border-slate-300'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-semibold leading-tight">
                            {serv.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Shipping & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border-line/60">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1.5">
                        Consignment Load Type
                      </label>
                      <select
                        value={containerType}
                        onChange={(e) => setContainerType(e.target.value)}
                        className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-lg bg-white font-medium focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent"
                      >
                        <option value="fcl20">20ft Full Container Load (FCL 20')</option>
                        <option value="fcl40">40ft High-Cube Container (FCL 40')</option>
                        <option value="lcl">LCL Consolidated Pallet Shipment</option>
                        <option value="air">Air Freight Express Cargo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1.5">
                        Destination Harbor / City *
                      </label>
                      <input
                        type="text"
                        required
                        value={destinationPort}
                        onChange={(e) => setDestinationPort(e.target.value)}
                        placeholder="e.g. Hamburg Harbor (DEHAM) or Los Angeles"
                        className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-lg bg-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>
                  </div>

                </div>

                {/* Section 3: Contact & Corporate Details */}
                <div className="bg-white border border-border-line rounded-2xl p-5 sm:p-8 shadow-sm">
                  
                  <div className="flex items-center gap-2 pb-4 mb-6 border-b border-border-line">
                    <span className="w-7 h-7 rounded-full bg-navy-primary text-white text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-navy-dark">
                      Procurement Contact Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1.5">
                        Procurement Officer Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Miller"
                        className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-lg focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@apexluthiers.com"
                        className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-lg focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Luthiers Corp"
                        className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-lg focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1.5">
                        Country / Region *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Germany / United States"
                        className="w-full h-11 px-3.5 text-xs sm:text-sm border border-border-line rounded-lg focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1.5">
                      Specific Cutting, Moisture, or Grading Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify target moisture % (e.g. 8%-10%), SCA score targets, or custom wood sizing dimensions."
                      className="w-full p-3.5 text-xs sm:text-sm border border-border-line rounded-lg focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent"
                    />
                  </div>

                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 text-cyan-accent group-hover:text-white transition-colors" />
                  <span>Submit Formal B2B RFQ Spec Sheet</span>
                </button>

              </form>

            </div>

            {/* Right Column: Contact Details & Floating Summary (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* RFQ Selection Summary Card */}
              <div className="bg-navy-dark text-white rounded-2xl p-6 shadow-sm meridian-grid-dark sticky top-28 border border-border-line/40">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <FileText className="w-5 h-5 text-cyan-accent" />
                  <h4 className="font-headline text-base font-bold text-white">RFQ Summary</h4>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase tracking-wider font-bold mb-1">
                      Selected Commodities ({selectedProducts.length})
                    </span>
                    {selectedProducts.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProducts.map((p, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-white/10 rounded-md text-white text-[11px] font-medium border border-white/10">
                            {p}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-white/40 italic">No products selected yet</span>
                    )}
                  </div>

                  <div>
                    <span className="text-white/60 block text-[10px] uppercase tracking-wider font-bold mb-1">
                      Selected Services ({selectedServices.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedServices.map((s, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-cyan-accent/20 text-cyan-accent rounded-md text-[11px] font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-white/80">
                      <span>Response Guarantee:</span>
                      <span className="font-bold text-cyan-accent">4 Business Hours</span>
                    </div>
                    <div className="flex items-center justify-between text-white/80">
                      <span>Port Options:</span>
                      <span className="font-bold text-white">Nhava Sheva / Cochin</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Enterprise Contact Details */}
              <div className="bg-white border border-border-line rounded-2xl p-6 shadow-sm space-y-4">
                <h4 className="font-headline text-base font-bold text-navy-dark pb-2 border-b border-border-line">
                  Enterprise Contact Desk
                </h4>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-navy-dark">Headquarters</h5>
                      <p className="text-xs text-muted-text leading-relaxed">Outer Ring Road, Hebbal, Bengaluru, Karnataka 560024, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-navy-dark">Timber & Coffee Works</h5>
                      <p className="text-xs text-muted-text leading-relaxed">Kodagu Estate, Madikeri, Coorg, Karnataka 571201, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-border-line/60">
                    <Mail className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-body">trade@chandysglobal.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-body">+91 (80) 4122 8900</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
