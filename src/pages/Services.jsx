import React from 'react';
import { Link } from 'react-router-dom';
import { useRfq } from '../context/RfqContext';
import { 
  Trees, 
  Coffee, 
  ShieldCheck, 
  Ship, 
  Box, 
  ArrowRight, 
  CheckCircle2, 
  Sprout, 
  Handshake 
} from 'lucide-react';

export default function Services() {
  const { openRfqDrawer } = useRfq();

  const servicesList = [
    {
      icon: Sprout,
      title: 'Farmer & Business Producer Export Sourcing',
      subtitle: 'Global buyer matchmaking for local farmers & businesses',
      desc: 'Are you a farmer, grower, or business producer looking to export your goods? We connect your products directly to verified global buyers, manage trade contracts, handle customs compliance, and execute end-to-end export logistics.',
      features: ['Verified Global Buyer Matching', 'Customs & Phytosanitary Handling', 'Secured B2B Export Contracts'],
      category: 'producer_export',
    },
    {
      icon: Trees,
      title: 'Precision Timber Milling & Quarter-Sawing',
      subtitle: 'Custom acoustic tonewood & veneer preparation',
      desc: 'Quarter-sawing to strict 90° grain orientation, ultrasonic acoustic velocity grading (>5,000 m/s), kiln drying to 8%–10% target moisture, and book-matched set slicing.',
      features: ['90° Quarter-Sawn Precision', 'Kiln Drying 8%–10% Target', 'Ultrasonic Elasticity Certification'],
      category: 'tonewood',
    },
    {
      icon: Coffee,
      title: 'Coffee Cupping & Custom Roast Profiling',
      subtitle: 'Single-estate Kodagu coffee processing',
      desc: 'Licensed Q-Grader cupping evaluation (84+ SCA), custom roast profile development, moisture-barrier GrainPro packaging, and nitrogen-flushed valve bag sealing.',
      features: ['84+ SCA Cupping Scores', 'Nitrogen-Flushed Hermetic Packaging', 'Coffee Board of India Certified'],
      category: 'coffee',
    },
    {
      icon: ShieldCheck,
      title: 'Phytosanitary & ISPM-15 Quarantine Crating',
      subtitle: 'Global plant quarantine compliance',
      desc: 'Official phytosanitary certificate issuance, heat treatment (HT 56°C for 30 minutes), ISPM-15 stamped wooden palleted crating, and non-GMO certification.',
      features: ['ISPM-15 Heat Treated Crating', 'Plant Quarantine Inspection', 'Fumigation & Non-GMO Certs'],
      category: 'veneer',
    },
    {
      icon: Ship,
      title: 'International Freight & Container Logistics',
      subtitle: 'End-to-end maritime export management',
      desc: 'Full Container Load (FCL 20ft/40ft) and LCL consolidation from Nhava Sheva (Mumbai) and Cochin ports with real-time ocean bill of lading tracking.',
      features: ['Direct Port Customs Clearance', 'Weekly Ocean Vessel Sailings', 'FOB & CIF Tariff Quotations'],
      category: 'tonewood',
    },
    {
      icon: Box,
      title: 'OEM Private Labeling & Custom Packaging',
      subtitle: 'Tailored export packaging for distributors',
      desc: 'Bespoke branding on wooden tonewood crating, custom roasted coffee retail pouches, barcoding, and international shipping manifest labeling.',
      features: ['Custom Brand Barcoding', 'Bespoke Retail Pouching', 'Moisture Barrier Overwrap'],
      category: 'coffee',
    },
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-navy-dark text-white py-10 sm:py-14 meridian-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-headline text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            End-To-End B2B Export Solutions
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Commercial Export Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
            From precision acoustic tonewood quarter-sawing to single-estate coffee cupping, ISPM-15 phytosanitary crating, and global buyer matchmaking for regional producers & farmers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
            {servicesList.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div key={idx} className="bg-white border border-border-line p-5 sm:p-8 rounded-asymmetric hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between space-y-5 sm:space-y-6">
                  <div>
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-azure-light rounded-xl text-navy-primary flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-accent" />
                      </div>
                      <div>
                        <h3 className="font-headline text-lg sm:text-xl text-navy-dark leading-snug">{service.title}</h3>
                        <span className="text-[10px] sm:text-xs font-semibold text-cyan-accent uppercase tracking-wider block mt-0.5">{service.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-5 sm:mb-6">
                      {service.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-border-line/60">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-body">
                          <CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openRfqDrawer(service.category)}
                    className="w-full bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Producer & Grower Export Facilitation Section */}
      <section className="py-10 sm:py-16 bg-azure-light/50 border-y border-border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border-line rounded-asymmetric p-5 sm:p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-accent/15 text-navy-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full mb-3">
                <Sprout className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-accent" />
                <span>Producer Export Facilitation Program</span>
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-dark mb-3 sm:mb-4 leading-tight">
                Are You a Farmer, Agricultural Grower, or Local Business Owner?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-body leading-relaxed">
                Unlock global trade for your crops, produce, or commercial goods. Chandy's Global Exports acts as your dedicated export facilitator — we identify verified international buyers, structure secure B2B trade contracts, handle phytosanitary & customs compliance, and manage full freight logistics.
              </p>
            </div>

            {/* 4 Steps for Farmers/Growers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="bg-alt-bg p-4 sm:p-5 rounded-xl border border-border-line/70 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-navy-primary text-white rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm mb-3 sm:mb-4">
                    01
                  </div>
                  <h4 className="font-headline text-base sm:text-lg font-bold text-navy-dark mb-1.5 sm:mb-2">Connect & Share Specs</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Contact our export desk with your crop produce, harvest volume, or manufactured product specifications.
                  </p>
                </div>
              </div>

              <div className="bg-alt-bg p-4 sm:p-5 rounded-xl border border-border-line/70 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-navy-primary text-white rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm mb-3 sm:mb-4">
                    02
                  </div>
                  <h4 className="font-headline text-base sm:text-lg font-bold text-navy-dark mb-1.5 sm:mb-2">Global Buyer Matchmaking</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    We match your product with active, verified corporate buyers across North America, Europe, the Middle East & Asia.
                  </p>
                </div>
              </div>

              <div className="bg-alt-bg p-4 sm:p-5 rounded-xl border border-border-line/70 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-navy-primary text-white rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm mb-3 sm:mb-4">
                    03
                  </div>
                  <h4 className="font-headline text-base sm:text-lg font-bold text-navy-dark mb-1.5 sm:mb-2">Compliance & Crating</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Our team oversees quality grading, phytosanitary clearance, ISPM-15 export crating, and regulatory filings.
                  </p>
                </div>
              </div>

              <div className="bg-alt-bg p-4 sm:p-5 rounded-xl border border-border-line/70 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-navy-primary text-white rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm mb-3 sm:mb-4">
                    04
                  </div>
                  <h4 className="font-headline text-base sm:text-lg font-bold text-navy-dark mb-1.5 sm:mb-2">Dispatch & Payment</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    We coordinate ocean/air container shipping and secure trade payment protection for your produce.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Box */}
            <div className="bg-navy-dark text-white p-5 sm:p-8 rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6">
              <div>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-white mb-1">Ready to Export Your Product Globally?</h3>
                <p className="text-xs text-white/80 leading-relaxed">Get in touch today — our export specialists will connect you with buyers and guide you through every step.</p>
              </div>
              <button
                onClick={() => openRfqDrawer('producer_export')}
                className="w-full sm:w-auto bg-cyan-accent hover:bg-cyan-hover text-navy-dark font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Handshake className="w-4 h-4 flex-shrink-0" />
                <span>Contact Export Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-12 sm:py-16 bg-navy-dark text-white text-center meridian-grid-dark">
        <div className="max-w-4xl mx-auto px-4">
          <span className="font-headline text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            Custom Procurement Requirements
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Need A Tailored B2B Export Agreement?</h2>
          <p className="text-xs sm:text-sm text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Our export desk prepares custom SLAs for lutherie factories, specialty coffee importers, agricultural growers, and architectural joinery houses worldwide.
          </p>
          <button
            onClick={() => openRfqDrawer()}
            className="w-full sm:w-auto bg-cyan-accent hover:bg-cyan-hover text-navy-dark font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg transition-all"
          >
            Submit Commercial Service Spec Sheet
          </button>
        </div>
      </section>
    </div>
  );
}

