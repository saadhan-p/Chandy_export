import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, ShieldCheck, Award, Layers, Music, Ship, Globe, FileCheck, Container, Box, Compass, Waves } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import PipelineTracer from '../components/PipelineTracer';

export default function Home() {
  const { openRfqDrawer } = useRfq();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="meridian-grid-pattern py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="font-headline text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-accent mb-3 block">
                Institutional B2B Commodity & Tonewood Export Portal
              </span>
              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-dark leading-[1.1] mb-6">
                Precision Guitar Tonewoods & Global Hardwood Exports From India
              </h1>
              <p className="text-base sm:text-lg text-muted-text leading-relaxed mb-8 max-w-2xl">
                Connecting India's finest material heritage—master-grade acoustic guitar tonewoods (Indian Rosewood fingerboards, Ebony bridges, neck billets, soundboards) and architectural hardwood veneers—with luthiers, instrument makers, and commercial importers worldwide.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4">
                <Link 
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-all shadow hover:-translate-y-0.5 text-center"
                >
                  <span>Explore Guitar & Timber Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openRfqDrawer()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-all text-center"
                >
                  Request Bulk RFQ Quote
                </button>
              </div>

              {/* Quick Specs Badges */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 pt-6 border-t border-border-line">
                <div>
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-navy-primary">45+</div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase text-muted-text">Global Destinations</div>
                </div>
                <div>
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-cyan-accent">100%</div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase text-muted-text">Phytosanitary Passed</div>
                </div>
                <div>
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-navy-dark">AAA</div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase text-muted-text">Master Luthier Grade</div>
                </div>
              </div>
            </div>

            {/* Right Hero Card Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-asymmetric overflow-hidden shadow-hover-card transition-all border border-border-line/70 bg-navy-dark group">
                <img 
                  src="/assets/hero_banner.jpg" 
                  alt="Chandy's Global Exports Maritime Freight Container Port Terminal & Vessel Dispatch" 
                  className="w-full h-[380px] sm:h-[480px] lg:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Export Portfolios Section (Tonewoods, Veneers, Sawmill Cut Billets) */}
      <section className="py-16 sm:py-20 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              Luthier & Hardwood Export Specializations
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-navy-dark">Our Core Material Portfolios</h2>
            <p className="text-sm sm:text-base text-muted-text mt-3">
              Every timber lot undergoes ultrasonic acoustic calibration, kiln moisture regulation, and strict international phytosanitary grading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Portfolio 1: Guitar Tonewoods */}
            <div className="bg-white border border-border-line rounded-asymmetric p-6 hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden rounded mb-5 bg-navy-dark/5">
                  <img 
                    src="/assets/Guitar Parts & Acoustic Tonewoods.jpg" 
                    alt="Master Luthier Acoustic Guitar Tonewoods & Workshop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                  Master Luthier Grade
                </span>
                <h3 className="font-headline text-xl sm:text-2xl text-navy-dark mb-2">Guitar Parts & Acoustic Tonewoods</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                  Indian Rosewood (Dalbergia latifolia) fingerboards, jet-black ebony bridges, neck billets, and resonant soundboard sets.
                </p>
                <ul className="text-xs sm:text-sm text-slate-body space-y-2 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> Ultrasonic acoustic velocity tested (5,000+ m/s)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> Kiln-dried to 8% – 10% target moisture</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> FSC Chain-of-Custody & CITES certified</li>
                </ul>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border-line">
                <Link to="/products?cat=tonewood" className="flex-1 text-center border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-3 rounded transition-all">
                  View Specs
                </Link>
                <button onClick={() => openRfqDrawer('tonewood')} className="flex-1 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3 rounded transition-all">
                  Request Quote
                </button>
              </div>
            </div>

            {/* Portfolio 2: Architectural Hardwood Veneers */}
            <div className="bg-white border border-border-line rounded-asymmetric p-6 hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden rounded mb-5 bg-navy-dark/5">
                  <img 
                    src="/assets/Architectural Veneers & Joinery .jpg" 
                    alt="Natural Micro-Sliced Exotic Hardwood Veneers & Timber" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                  Architectural Grade
                </span>
                <h3 className="font-headline text-xl sm:text-2xl text-navy-dark mb-2">Architectural Veneers & Joinery</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                  Precision micro-sliced exotic Indian Teak veneers, Satinwood decorative sheets, and custom architectural timber cut to specs.
                </p>
                <ul className="text-xs sm:text-sm text-slate-body space-y-2 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> Micro-sliced thickness (0.55mm – 3.0mm)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> Custom book-matched sheet bundling</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> ISPM-15 heat-treated export packaging</li>
                </ul>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border-line">
                <Link to="/products?cat=tonewood" className="flex-1 text-center border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-3 rounded transition-all">
                  View Specs
                </Link>
                <button onClick={() => openRfqDrawer('tonewood')} className="flex-1 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3 rounded transition-all">
                  Request Quote
                </button>
              </div>
            </div>

            {/* Portfolio 3: Custom Luthier Cut Billets */}
            <div className="bg-white border border-border-line rounded-asymmetric p-6 hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden rounded mb-5 bg-navy-dark/5">
                  <img 
                    src="/assets/Custom Billets & Dimensioned Timber.jpg" 
                    alt="Sawmill Yard Quartersawn Billets & Dimensioned Hardwood" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                  Sawmill Custom Cuts
                </span>
                <h3 className="font-headline text-xl sm:text-2xl text-navy-dark mb-2">Custom Billets & Dimensioned Timber</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                  Neck blanks, guitar body blocks, headstock faceplates, and violin/ukulele wood cut to factory production specs.
                </p>
                <ul className="text-xs sm:text-sm text-slate-body space-y-2 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> Strict 90° vertical grain quarter-sawn</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> Moisture barrier sealed log ends</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" /> Industrial bulk volume container orders</li>
                </ul>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border-line">
                <Link to="/products" className="flex-1 text-center border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-3 rounded transition-all">
                  View Specs
                </Link>
                <button onClick={() => openRfqDrawer('tonewood')} className="flex-1 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3 rounded transition-all">
                  Request Quote
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ELABORATED SECTION 1: GUITAR PARTS & LUTHIER CRAFTSMANSHIP DEEP DIVE */}
      <section className="py-20 bg-white border-y border-border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                Luthier Science & Craftsmanship
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-navy-dark leading-tight mb-6">
                Elaborate Guitar Component & Acoustic Tonewood Engineering
              </h2>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6">
                Every acoustic guitar instrument requires strict timber stability, precise density ratios, and superior tonal velocity. We specialize in supplying major international luthier workshops and commercial guitar factories with instrument-grade wooden parts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-bg p-4 rounded border border-border-line">
                  <div className="font-headline text-lg font-bold text-navy-dark flex items-center gap-2 mb-1">
                    <Music className="w-5 h-5 text-cyan-accent" /> Rosewood Fingerboards
                  </div>
                  <p className="text-xs text-muted-text">Selected for rich natural oils, dark purple figure, high durability under fret wear, and warm sustain.</p>
                </div>
                <div className="bg-surface-bg p-4 rounded border border-border-line">
                  <div className="font-headline text-lg font-bold text-navy-dark flex items-center gap-2 mb-1">
                    <Layers className="w-5 h-5 text-cyan-accent" /> Jet-Black Ebony Bridges
                  </div>
                  <p className="text-xs text-muted-text">Dense (1,150 kg/m³), deep jet-black grain without sapwood, pre-sanded for seamless bridge assembly.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-navy-dark text-white p-8 rounded-asymmetric meridian-grid-dark relative">
                <span className="inline-block bg-cyan-accent text-navy-dark font-bold text-xs uppercase tracking-wider px-3 py-1 rounded mb-4">
                  Acoustic Resonance Standard
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold mb-4 text-white">
                  Ultrasonic Speed of Sound Propagation (5,000+ m/s)
                </h3>
                <p className="text-xs sm:text-sm text-azure-light/90 leading-relaxed mb-6">
                  Unlike decorative hardwoods, guitar soundboards and neck billets must transfer acoustic energy with minimal attenuation. Our lab calibrates acoustic speed velocity using non-destructive ultrasonic pulse testing.
                </p>
                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-white/80">Target Moisture Content:</span>
                    <strong className="text-cyan-accent font-mono">8.0% – 10.0% Kiln Dried</strong>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-white/80">Quarter-Sawn Grain Angle:</span>
                    <strong className="text-cyan-accent font-mono">Strict 90° Vertical Cut</strong>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-white/80">Growth Ring Density:</span>
                    <strong className="text-cyan-accent font-mono">18+ Rings / Inch</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Guitar Parts Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-alt-bg p-6 rounded border border-border-line hover:border-cyan-accent transition-all">
              <div className="w-10 h-10 bg-azure-light text-navy-primary rounded flex items-center justify-center font-headline text-lg font-bold mb-4">
                01
              </div>
              <h4 className="font-headline text-lg text-navy-dark font-bold mb-2">Guitar Fingerboards</h4>
              <p className="text-xs text-muted-text leading-relaxed">
                Slot-ready blanks in Indian Rosewood and Ebony. Precision quarter-sawn cut to avoid warping or neck twist under high string tension.
              </p>
            </div>

            <div className="bg-alt-bg p-6 rounded border border-border-line hover:border-cyan-accent transition-all">
              <div className="w-10 h-10 bg-azure-light text-navy-primary rounded flex items-center justify-center font-headline text-lg font-bold mb-4">
                02
              </div>
              <h4 className="font-headline text-lg text-navy-dark font-bold mb-2">Acoustic Soundboard Sets</h4>
              <p className="text-xs text-muted-text leading-relaxed">
                Book-matched top and back sets featuring extraordinary flame, tiger striping, or tight grain figure for premium acoustic guitars.
              </p>
            </div>

            <div className="bg-alt-bg p-6 rounded border border-border-line hover:border-cyan-accent transition-all">
              <div className="w-10 h-10 bg-azure-light text-navy-primary rounded flex items-center justify-center font-headline text-lg font-bold mb-4">
                03
              </div>
              <h4 className="font-headline text-lg text-navy-dark font-bold mb-2">Carved Neck Billets</h4>
              <p className="text-xs text-muted-text leading-relaxed">
                High-density quartersawn neck wood blocks, pre-dried for 180+ days to guarantee structural straightness for electric & acoustic guitars.
              </p>
            </div>

            <div className="bg-alt-bg p-6 rounded border border-border-line hover:border-cyan-accent transition-all">
              <div className="w-10 h-10 bg-azure-light text-navy-primary rounded flex items-center justify-center font-headline text-lg font-bold mb-4">
                04
              </div>
              <h4 className="font-headline text-lg text-navy-dark font-bold mb-2">Bridge & Headstock Blanks</h4>
              <p className="text-xs text-muted-text leading-relaxed">
                Sanded ebony and rosewood bridge stock, headstock overlay veneers, and binding strips cut to millimetric factory tolerances.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ELABORATED SECTION 2: END-TO-END GLOBAL B2B EXPORT ARCHITECTURE & LOGISTICS */}
      <section className="py-20 bg-surface-bg border-t border-border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              International Trade & Logistics Operations
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-navy-dark font-bold">
              End-To-End B2B Export Architecture & Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-muted-text mt-3 leading-relaxed">
              Shipping high-value luthier tonewoods and agricultural commodities globally requires institutional compliance, certified phytosanitary protocols, and multi-port maritime dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Executive Maritime & Compliance Command Hub */}
            <div className="lg:col-span-5 bg-navy-dark text-white p-7 sm:p-8 rounded-2xl border border-border-line/40 flex flex-col justify-between shadow-hover-card meridian-grid-dark relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-cyan-accent/20 border border-cyan-accent/40 text-cyan-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6 font-mono">
                  Export Operations Hub
                </div>
                
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-4">
                  Multi-Port Maritime Despatch & Global Regulatory Passage
                </h3>
                
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                  Operating with direct gate-in privileges across India's premier west and east coast container terminals, ensuring uninterrupted seasonal shipments.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cyan-accent font-bold block mb-1">Active Gateway Ports</span>
                    <p className="text-xs text-white/90 font-medium">JNPT Nhava Sheva • New Mangalore (NMPT) • Chennai Port</p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cyan-accent font-bold block mb-1">Commercial Incoterms</span>
                    <p className="text-xs text-white/90 font-medium">FOB (Indian Ports) • CIF (Global Discharge Ports) • CFR / EXW</p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cyan-accent font-bold block mb-1">Accredited Bodies</span>
                    <p className="text-xs text-white/90 font-medium">CITES Management Authority • Plant Quarantine Govt. of India • FIEO</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                <button
                  onClick={() => openRfqDrawer('tonewood')}
                  className="w-full bg-cyan-accent hover:bg-white text-navy-dark font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow text-center flex items-center justify-center gap-2"
                >
                  Consult Trade Specialist <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: 4 Sleek Horizontal Capability Rows */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              
              {/* Row 1: Phytosanitary */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-border-line hover:border-cyan-accent hover:shadow-sm transition-all flex items-start gap-4">
                <div className="w-11 h-11 bg-azure-light rounded-lg flex items-center justify-center text-navy-primary shrink-0">
                  <FileCheck className="w-5 h-5 text-cyan-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline text-base sm:text-lg text-navy-dark font-bold mb-1">
                    Phytosanitary & Plant Quarantine Clearance
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed mb-2">
                    Every container export lot is inspected by Govt. Plant Quarantine authorities with Methyl Bromide / Heat Treatment certification.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-body">
                    <span className="bg-alt-bg px-2.5 py-1 rounded border border-border-line/70">ISPM-15 Stamped Crates</span>
                    <span className="bg-alt-bg px-2.5 py-1 rounded border border-border-line/70">Pest & Mold Free Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Row 2: CITES & Chain of Custody */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-border-line hover:border-cyan-accent hover:shadow-sm transition-all flex items-start gap-4">
                <div className="w-11 h-11 bg-azure-light rounded-lg flex items-center justify-center text-navy-primary shrink-0">
                  <Shield className="w-5 h-5 text-cyan-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline text-base sm:text-lg text-navy-dark font-bold mb-1">
                    CITES & Legal Chain-of-Custody Compliance
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed mb-2">
                    Full legal timber provenance tracking with Vriksh legality passports, CITES export permits, and Certificate of Origin documentation.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-body">
                    <span className="bg-alt-bg px-2.5 py-1 rounded border border-border-line/70">100% Legal Harvest Audit</span>
                    <span className="bg-alt-bg px-2.5 py-1 rounded border border-border-line/70">Seamless US/EU Customs Passage</span>
                  </div>
                </div>
              </div>

              {/* Row 3: Moisture Lock & Packaging */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-border-line hover:border-cyan-accent hover:shadow-sm transition-all flex items-start gap-4">
                <div className="w-11 h-11 bg-azure-light rounded-lg flex items-center justify-center text-navy-primary shrink-0">
                  <Container className="w-5 h-5 text-cyan-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline text-base sm:text-lg text-navy-dark font-bold mb-1">
                    Heavy-Duty Vacuum Moisture Barrier Packing
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed mb-2">
                    Luthier tonewoods are vacuum-sealed in heavy-gauge polyethylene wraps with industrial silica desiccants inside steel-banded crates.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-body">
                    <span className="bg-alt-bg px-2.5 py-1 rounded border border-border-line/70">Zero Humidity Infiltration</span>
                    <span className="bg-alt-bg px-2.5 py-1 rounded border border-border-line/70">FCL & LCL Palletized Shipping</span>
                  </div>
                </div>
              </div>

              {/* Row 4: Customs & Freight Handling */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-border-line hover:border-cyan-accent hover:shadow-sm transition-all flex items-start gap-4">
                <div className="w-11 h-11 bg-azure-light rounded-lg flex items-center justify-center text-navy-primary shrink-0">
                  <Ship className="w-5 h-5 text-cyan-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline text-base sm:text-lg text-navy-dark font-bold mb-1">
                    End-to-End Maritime Freight & Port Customs
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed mb-2">
                    Direct export dispatches and container shipping with real-time Bill of Lading (B/L) tracking across 45+ international ports.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-body">
                    <span className="bg-alt-bg px-2.5 py-1 rounded border border-border-line/70">Real-time Bill of Lading (B/L)</span>
                    <span className="bg-alt-bg px-2.5 py-1 rounded border border-border-line/70">FOB & CIF Incoterms 2020</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Pipeline Tracer Section */}
      <section className="py-20 bg-alt-bg border-y border-border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              End-To-End Integrity
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-navy-dark">Interactive Export Pipeline & Provenance Tracer</h2>
            <p className="text-sm sm:text-base text-muted-text mt-3">
              From sustainable timber harvesting in the Western Ghats to final international delivery, every step is certified.
            </p>
          </div>

          <PipelineTracer />
        </div>
      </section>
    </div>
  );
}
