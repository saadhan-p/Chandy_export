import React from 'react';
import { useRfq } from '../context/RfqContext';
import { MapPin, Mail, Phone, Send, Building } from 'lucide-react';

export default function Contact() {
  const { addToast } = useRfq();

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast('RFQ Spec Sheet Submitted! An Export Specialist will contact you within 4 hours.');
    e.target.reset();
  };

  return (
    <div>
      <section className="bg-navy-dark text-white py-14 meridian-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            Commercial Desk & RFQ Portal
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact & Request a Commercial Quote
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            Submit your detailed procurement specifications or contact our international trade team directly.
          </p>
        </div>
      </section>

      <section className="py-16 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Info */}
            <div className="space-y-6">
              <div>
                <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                  Direct Enterprise Contact
                </span>
                <h2 className="font-headline text-3xl text-navy-dark mb-4">Export Trade Desk</h2>
                <p className="text-sm text-muted-text leading-relaxed">
                  Our international commercial team responds to all formal RFQ inquiries within 4 business hours.
                </p>
              </div>

              <div className="bg-white border border-border-line p-5 rounded-asymmetric space-y-3">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm text-navy-dark font-semibold">Corporate Headquarters</h4>
                    <p className="text-xs text-muted-text">Outer Ring Road, Hebbal, Bengaluru, Karnataka 560024, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border-line p-5 rounded-asymmetric space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm text-navy-dark font-semibold">Estate & Timber Operations</h4>
                    <p className="text-xs text-muted-text">Kodagu Estate & Timber Works, Madikeri, Coorg, Karnataka 571201, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border-line p-5 rounded-asymmetric space-y-2">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-accent flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-body">trade@chandysglobal.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-accent flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-body">+91 (80) 4122 8900</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-cyan-accent/40 rounded-asymmetric p-8 shadow-sm">
              <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-1 block">
                Commercial Inquiry Form
              </span>
              <h3 className="font-headline text-2xl text-navy-dark mb-6">Submit Detailed B2B RFQ</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                      Procurement Officer Name
                    </label>
                    <input type="text" required placeholder="e.g. Sarah Jenkins" className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                      Corporate Email
                    </label>
                    <input type="email" required placeholder="sarah@globalguitars.com" className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                      Company Name
                    </label>
                    <input type="text" required placeholder="e.g. Global Instruments LLC" className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                      Country / Region
                    </label>
                    <input type="text" required placeholder="e.g. Germany / USA" className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                      Commodity Portfolio
                    </label>
                    <select required className="w-full h-11 px-3 text-sm border border-border-line rounded bg-white focus:outline-none focus:border-cyan-accent">
                      <option value="tonewood">Acoustic Guitar Tonewoods</option>
                      <option value="coffee">Kodagu Single-Estate Coffee</option>
                      <option value="veneer">Exotic Hardwood Veneers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                      Target Container Load
                    </label>
                    <select required className="w-full h-11 px-3 text-sm border border-border-line rounded bg-white focus:outline-none focus:border-cyan-accent">
                      <option value="fcl20">20ft Full Container Load (FCL)</option>
                      <option value="fcl40">40ft Full Container Load (FCL)</option>
                      <option value="lcl">LCL Consolidated Consignment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                    Destination Harbor
                  </label>
                  <input type="text" required placeholder="e.g. Hamburg Harbor (DEHAM)" className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
                    Detailed Specifications & Notes
                  </label>
                  <textarea rows={4} placeholder="Specify moisture %, cupping score, grain figure, or ISPM-15 preferences." className="w-full p-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent" />
                </div>

                <button type="submit" className="w-full py-3.5 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Submit Commercial RFQ Spec Sheet</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
