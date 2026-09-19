import React from 'react';
import { useRfq } from '../context/RfqContext';
import { ShieldCheck, Target, Sliders, Users } from 'lucide-react';

export default function WhyUs() {
  const { openRfqDrawer } = useRfq();

  return (
    <div>
      <section className="bg-navy-dark text-white py-14 meridian-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            Enterprise Value Proposition
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Partner With Chandy's Global Exports
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            Institutional reliability, rigid quality control standards, and bespoke export tailoring for international B2B importers.
          </p>
        </div>
      </section>

      <section className="py-16 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                The CGE Advantage
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-navy-dark mb-6">
                Designed For Enterprise Procurement Officers
              </h2>
              <p className="text-sm text-muted-text leading-relaxed mb-4">
                We eliminate the friction and uncertainty of international B2B sourcing through structured contracts, verified laboratory documentation, and dedicated logistics oversight.
              </p>
              <p className="text-sm text-muted-text leading-relaxed mb-6">
                Whether you are ordering 1,000 sets of acoustic guitar rosewood fingerboards or 50 Metric Tons of single-estate Kodagu green coffee, every shipment is guaranteed to match pre-agreed technical specifications.
              </p>

              <button 
                onClick={() => openRfqDrawer()}
                className="bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded transition-all shadow"
              >
                Start B2B Commercial Inquiry &rarr;
              </button>
            </div>

            <div className="bg-navy-dark p-3 rounded-asymmetric shadow-hover-card">
              <img 
                src="/assets/partnerships_banner.jpg" 
                alt="Chandy's Global Exports B2B Partnership Banner" 
                className="w-full h-[400px] object-cover rounded rounded-tr-[28px]"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              Core Guarantees
            </span>
            <h2 className="font-headline text-3xl text-navy-dark">Our Commercial Commitments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-border-line p-6 rounded-asymmetric flex gap-4">
              <div className="w-12 h-12 bg-azure-light rounded text-navy-primary font-headline text-xl font-bold flex items-center justify-center flex-shrink-0">
                01
              </div>
              <div>
                <h3 className="font-headline text-lg text-navy-dark mb-2">Strict Dimensional & Moisture Guarantees</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  All timber products are guaranteed to meet kiln-dried target moisture ranges (8%–10%) and precise dimensional tolerances. Any non-conforming items replaced under contract.
                </p>
              </div>
            </div>

            <div className="bg-white border border-border-line p-6 rounded-asymmetric flex gap-4">
              <div className="w-12 h-12 bg-azure-light rounded text-navy-primary font-headline text-xl font-bold flex items-center justify-center flex-shrink-0">
                02
              </div>
              <div>
                <h3 className="font-headline text-lg text-navy-dark mb-2">Single Estate Traceability</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Our coffee beans are 100% sourced from verified single estates in Kodagu (Coorg), Karnataka, accompanied by Coffee Board of India origin seals.
                </p>
              </div>
            </div>

            <div className="bg-white border border-border-line p-6 rounded-asymmetric flex gap-4">
              <div className="w-12 h-12 bg-azure-light rounded text-navy-primary font-headline text-xl font-bold flex items-center justify-center flex-shrink-0">
                03
              </div>
              <div>
                <h3 className="font-headline text-lg text-navy-dark mb-2">Custom Slicing & Roasting SLAs</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  We offer OEM custom quarter-sawing, book-matching, custom coffee roasting profiles, and bespoke GrainPro or ISPM-15 packaging tailored to your brand.
                </p>
              </div>
            </div>

            <div className="bg-white border border-border-line p-6 rounded-asymmetric flex gap-4">
              <div className="w-12 h-12 bg-azure-light rounded text-navy-primary font-headline text-xl font-bold flex items-center justify-center flex-shrink-0">
                04
              </div>
              <div>
                <h3 className="font-headline text-lg text-navy-dark mb-2">Dedicated Account Managers</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Direct 24/7 access to your assigned export officer who handles vessel scheduling, container stuffing photos, bill of lading releases, and customs updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
