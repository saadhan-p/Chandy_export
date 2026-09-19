import React from 'react';
import { Link } from 'react-router-dom';
import { useRfq } from '../context/RfqContext';
import { Trees, Coffee, ShieldCheck, Ship, Box, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const { openRfqDrawer } = useRfq();

  const servicesList = [
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
      <section className="bg-navy-dark text-white py-14 meridian-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            End-To-End B2B Export Solutions
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-4">
            Commercial Export Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            From precision acoustic tonewood quarter-sawing to single-estate coffee cupping and ISPM-15 phytosanitary crating.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesList.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div key={idx} className="bg-white border border-border-line p-8 rounded-asymmetric hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-azure-light rounded-xl text-navy-primary flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-6 h-6 text-cyan-accent" />
                      </div>
                      <div>
                        <h3 className="font-headline text-xl text-navy-dark leading-snug">{service.title}</h3>
                        <span className="text-xs font-semibold text-cyan-accent uppercase tracking-wider">{service.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-text leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-border-line/60">
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
                    className="w-full bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
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

      {/* CTA Footer Section */}
      <section className="py-16 bg-navy-dark text-white text-center meridian-grid-dark">
        <div className="max-w-4xl mx-auto px-4">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            Custom Procurement Requirements
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white mb-4">Need A Tailored B2B Export Agreement?</h2>
          <p className="text-sm text-white/80 mb-8 max-w-2xl mx-auto">
            Our export desk prepares custom SLAs for lutherie factories, specialty coffee importers, and architectural joinery houses worldwide.
          </p>
          <button
            onClick={() => openRfqDrawer()}
            className="bg-cyan-accent hover:bg-cyan-hover text-navy-dark font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all"
          >
            Submit Commercial Service Spec Sheet
          </button>
        </div>
      </section>
    </div>
  );
}
