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
      img: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
      title: 'Farmer & Business Producer Export Sourcing',
      subtitle: 'Global buyer matchmaking for local farmers & businesses',
      desc: 'Are you a farmer, grower, or business producer looking to export your goods? We connect your products directly to verified global buyers, manage trade contracts, handle customs compliance, and execute end-to-end export logistics.',
      features: ['Verified Global Buyer Matching', 'Customs & Phytosanitary Handling', 'Secured B2B Export Contracts'],
      category: 'producer_export',
    },
    {
      icon: Trees,
      img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      title: 'Precision Timber Milling & Quarter-Sawing',
      subtitle: 'Custom acoustic tonewood & veneer preparation',
      desc: 'Quarter-sawing to strict 90° grain orientation, ultrasonic acoustic velocity grading (>5,000 m/s), controlled seasoning to 8%–10% target moisture, and book-matched set slicing.',
      features: ['90° Quarter-Sawn Precision', 'Controlled Seasoning 8%–10%', 'Ultrasonic Elasticity Certification'],
      category: 'tonewood',
    },
    {
      icon: Coffee,
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      title: 'Coffee Cupping & Custom Roast Profiling',
      subtitle: 'Single-estate Kodagu coffee processing',
      desc: 'Licensed Q-Grader cupping evaluation (84+ SCA), custom roast profile development, moisture-barrier GrainPro packaging, and nitrogen-flushed valve bag sealing.',
      features: ['84+ SCA Cupping Scores', 'Nitrogen-Flushed Hermetic Packaging', 'Coffee Board of India Certified'],
      category: 'coffee',
    },
    {
      icon: Ship,
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      title: 'International Freight & Container Logistics',
      subtitle: 'End-to-end maritime export management',
      desc: 'Full Container Load (FCL 20ft/40ft) and LCL consolidation with real-time ocean bill of lading tracking and international freight management.',
      features: ['Customs Clearance & Compliance', 'Weekly Ocean Vessel Sailings', 'FOB & CIF Tariff Quotations'],
      category: 'tonewood',
    },
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-navy-dark text-white py-14 sm:py-16 meridian-grid-dark text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="font-headline text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            End-To-End B2B Export Solutions
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Commercial Export Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed mx-auto">
            From precision acoustic tonewood quarter-sawing to single-estate coffee cupping and global buyer matchmaking for regional producers & farmers.
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
                <div key={idx} className="bg-white border border-border-line p-5 sm:p-7 rounded-asymmetric hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between space-y-5">
                  <div>
                    <div className="h-44 sm:h-48 w-full overflow-hidden rounded-lg mb-5 bg-alt-bg border border-border-line/70">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>

                    <div className="flex items-start sm:items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 bg-azure-light rounded-xl text-navy-primary flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-5 h-5 text-cyan-accent" />
                      </div>
                      <div>
                        <h3 className="font-headline text-lg sm:text-xl text-navy-dark leading-snug font-bold">{service.title}</h3>
                        <span className="text-[10px] sm:text-xs font-semibold text-cyan-accent uppercase tracking-wider block mt-0.5">{service.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
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
                Unlock global trade for your crops, produce, or commercial goods. Chandys Global Exports acts as your dedicated export facilitator — we identify verified international buyers, structure secure B2B trade contracts, handle phytosanitary & customs compliance, and manage full freight logistics.
              </p>
            </div>

            {/* 4 Steps for Farmers/Growers - Modern 2x2 Grid on Mobile, 4-col on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 mb-8 sm:mb-10">
              {[
                {
                  step: '01',
                  title: 'Connect & Specs',
                  desktopTitle: 'Connect & Share Specs',
                  desc: 'Share harvest volume or product specifications with our desk.',
                  desktopDesc: 'Contact our export desk with your crop produce, harvest volume, or manufactured product specifications.',
                },
                {
                  step: '02',
                  title: 'Buyer Matching',
                  desktopTitle: 'Global Buyer Matchmaking',
                  desc: 'We match you with verified buyers in NA, EU, ME & Asia.',
                  desktopDesc: 'We match your product with active, verified corporate buyers across North America, Europe, the Middle East & Asia.',
                },
                {
                  step: '03',
                  title: 'Compliance & Crating',
                  desktopTitle: 'Compliance & Crating',
                  desc: 'Phytosanitary clearance and ISPM-15 export crating.',
                  desktopDesc: 'Our team oversees quality grading, phytosanitary clearance, ISPM-15 export crating, and regulatory filings.',
                },
                {
                  step: '04',
                  title: 'Dispatch & Payment',
                  desktopTitle: 'Dispatch & Payment',
                  desc: 'Ocean/air freight and secure trade payment protection.',
                  desktopDesc: 'We coordinate ocean/air container shipping and secure trade payment protection for your produce.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-5 flex flex-col justify-between hover:border-cyan-accent shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <span className="w-7 h-7 sm:w-10 sm:h-10 bg-navy-primary text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-[11px] sm:text-sm shadow-xs">
                        {item.step}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-cyan-accent/90 tracking-wider">
                        STEP {idx + 1}
                      </span>
                    </div>
                    <h4 className="font-headline text-xs sm:text-base font-bold text-navy-dark mb-1 sm:mb-2 leading-snug">
                      <span className="sm:hidden">{item.title}</span>
                      <span className="hidden sm:inline">{item.desktopTitle}</span>
                    </h4>
                    <p className="text-[10px] sm:text-xs text-muted-text leading-relaxed">
                      <span className="sm:hidden">{item.desc}</span>
                      <span className="hidden sm:inline">{item.desktopDesc}</span>
                    </p>
                  </div>
                </div>
              ))}
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

      {/* CTA Footer Section (Hidden on mobile, visible on desktop) */}
      <section className="hidden md:block py-12 sm:py-16 bg-navy-dark text-white text-center meridian-grid-dark">
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

