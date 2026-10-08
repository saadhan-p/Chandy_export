import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Factory, 
  Trees, 
  Flame, 
  Sparkles 
} from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function About() {
  const { openRfqDrawer } = useRfq();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header Banner */}
      <section className="bg-navy-dark text-white py-14 sm:py-18 meridian-grid-dark text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Institutional Heritage & Industrial Discipline
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white mb-4">
            Integrated Sawmill, Timber Factory & Export House
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
            Headquartered in Virajpet, Kodagu (Coorg), Karnataka—the historic timber belt of the Western Ghats—Chandys Global Exports operates an end-to-end vertically integrated ecosystem spanning log sawmilling, automated kiln-drying, precision luthier component milling, and international maritime export operations.
          </p>
        </div>
      </section>

      {/* Primary Foundation Section with Real Sawmill Sourcing Photo */}
      <section className="py-16 sm:py-20 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 bg-navy-dark p-3 rounded-asymmetric shadow-hover-card overflow-hidden group">
              <img 
                src="/assets/about_banner.jpg" 
                alt="Chandys Global Exports Natural Hardwood Seasoning & Timber Curing Facility in Virajpet Coorg" 
                className="w-full h-[400px] sm:h-[480px] object-cover object-center rounded rounded-tr-[28px] group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-7">
              <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                Manufacturing Roots · Virajpet, Coorg
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-navy-dark font-bold mb-6">
                Bridging Forest Provenance with Precision Industrial Engineering
              </h2>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-4">
                Chandys Global Exports operates in direct synergy with our established timber manufacturing powerhouse in Kodagu—home to <strong>Coorg Ply</strong>, an authoritative regional manufacturer of marine-grade plywood, architectural veneers, core veneers, and dimensioned timber panels.
              </p>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6">
                Unlike traditional trading intermediaries, our facility on the Madikeri–Virajpet trade corridor houses full-scale primary sawmilling, radial quarter-sawing log carriages, automated moisture-controlled seasoning kilns, and acoustic luthier calibration labs. Every piece of Indian Rosewood (<em>Dalbergia latifolia</em>), Ebony, and exotic hardwood is directly tracked from certified forest auctions to factory packing.
              </p>

              {/* Fast Facts Badge Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-surface-bg p-3.5 rounded-lg border border-border-line">
                  <div className="font-mono text-cyan-accent font-bold text-lg">Virajpet, Coorg</div>
                  <div className="text-[11px] text-muted-text">Primary Sawmill Hub</div>
                </div>
                <div className="bg-surface-bg p-3.5 rounded-lg border border-border-line">
                  <div className="font-mono text-cyan-accent font-bold text-lg">In-House Kilns</div>
                  <div className="text-[11px] text-muted-text">KD &lt; 10% Moisture</div>
                </div>
                <div className="bg-surface-bg p-3.5 rounded-lg border border-border-line col-span-2 sm:col-span-1">
                  <div className="font-mono text-cyan-accent font-bold text-lg">100% CITES CoC</div>
                  <div className="text-[11px] text-muted-text">Vriksh Legal Passports</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/products" className="text-center bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded transition-all shadow">
                  Explore Product Catalogue &rarr;
                </Link>
                <button onClick={() => openRfqDrawer('tonewood')} className="text-center border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded transition-all">
                  Request Factory RFQ
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industrial Infrastructure & Vertically Integrated Production Workflow */}
      <section className="py-16 sm:py-20 bg-surface-bg border-y border-border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              Vertical Production Control
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-navy-dark font-bold">
              The Sawmill & Factory Manufacturing Pipeline
            </h2>
            <p className="text-sm sm:text-base text-muted-text mt-3 leading-relaxed">
              Complete control over the wood lifecycle eliminates third-party markups, ensures tight grain alignment, and prevents humidity defects during global transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl border border-border-line hover:border-cyan-accent hover:shadow-hover-card transition-all">
              <div className="w-12 h-12 bg-azure-light rounded-lg flex items-center justify-center text-navy-primary mb-5">
                <Trees className="w-6 h-6 text-cyan-accent" />
              </div>
              <span className="font-mono text-xs text-cyan-accent font-bold uppercase tracking-wider block mb-1">Phase 01</span>
              <h3 className="font-headline text-xl text-navy-dark font-bold mb-2">Sustainable Log Procurement</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                Direct procurement from Government timber depot auctions in Karnataka with official transit passes and full Vriksh timber legality accreditation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl border border-border-line hover:border-cyan-accent hover:shadow-hover-card transition-all">
              <div className="w-12 h-12 bg-azure-light rounded-lg flex items-center justify-center text-navy-primary mb-5">
                <Factory className="w-6 h-6 text-cyan-accent" />
              </div>
              <span className="font-mono text-xs text-cyan-accent font-bold uppercase tracking-wider block mb-1">Phase 02</span>
              <h3 className="font-headline text-xl text-navy-dark font-bold mb-2">Quarter-Sawing & Slicing</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                Precision breakdown using industrial heavy-duty band saws. Strict 90° quarter-sawn cut ensures acoustic stability and rich longitudinal resonance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl border border-border-line hover:border-cyan-accent hover:shadow-hover-card transition-all">
              <div className="w-12 h-12 bg-azure-light rounded-lg flex items-center justify-center text-navy-primary mb-5">
                <Flame className="w-6 h-6 text-cyan-accent" />
              </div>
              <span className="font-mono text-xs text-cyan-accent font-bold uppercase tracking-wider block mb-1">Phase 03</span>
              <h3 className="font-headline text-xl text-navy-dark font-bold mb-2">Controlled Kiln Seasoning</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                Graduated multi-stage kiln drying bringing timber down to 8.0% – 10.0% moisture content, sealed with paraffin end-coating to prevent checking.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl border border-border-line hover:border-cyan-accent hover:shadow-hover-card transition-all">
              <div className="w-12 h-12 bg-azure-light rounded-lg flex items-center justify-center text-navy-primary mb-5">
                <ShieldCheck className="w-6 h-6 text-cyan-accent" />
              </div>
              <span className="font-mono text-xs text-cyan-accent font-bold uppercase tracking-wider block mb-1">Phase 04</span>
              <h3 className="font-headline text-xl text-navy-dark font-bold mb-2">Export Crating & CITES QA</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                Ultrasonic acoustic velocity testing, vacuum moisture wrap barrier, ISPM-15 stamped crating, and direct customs container dispatch.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-dark text-white meridian-grid-dark border-t border-border-line/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Partner With India's Direct Luthier Tonewood & Timber Exporter
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you require commercial container-load timber shipments, master-grade luthier billets, or customized roasting coffee consignments, our Virajpet mills and international export desks are ready to fulfill your specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="bg-cyan-accent hover:bg-white text-navy-dark font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow">
              View Product Inventory
            </Link>
            <button onClick={() => openRfqDrawer('tonewood')} className="border border-white/40 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all">
              Request Commercial RFQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

