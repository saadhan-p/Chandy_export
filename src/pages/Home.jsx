import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Award, Layers } from 'lucide-react';
import { useRfq } from '../context/RfqContext';
import FreightCalculator from '../components/FreightCalculator';
import PipelineTracer from '../components/PipelineTracer';

export default function Home() {
  const { openRfqDrawer } = useRfq();

  return (
    <div>
      {/* Hero Section */}
      <section className="meridian-grid-pattern py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-3 block">
                Institutional B2B Commodity Export Portal
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight mb-6">
                Precision Commodity Exports From India To The World
              </h1>
              <p className="text-base sm:text-lg text-muted-text leading-relaxed mb-8">
                Connecting India's finest material heritage—master-grade acoustic guitar tonewoods, single-estate Kodagu specialty coffees, and architectural hardwood veneers—with exacting international buyers.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products"
                  className="inline-flex items-center gap-2 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded transition-all shadow hover:-translate-y-0.5"
                >
                  <span>Explore Portfolios</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openRfqDrawer()}
                  className="inline-flex items-center gap-2 border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider px-6 py-4 rounded transition-all"
                >
                  Request Bulk RFQ
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-6 border-t border-border-line">
                <div>
                  <div className="font-headline text-2xl font-bold text-navy-primary">45+</div>
                  <div className="text-[11px] font-semibold uppercase text-muted-text">Destination Ports</div>
                </div>
                <div>
                  <div className="font-headline text-2xl font-bold text-cyan-accent">100%</div>
                  <div className="text-[11px] font-semibold uppercase text-muted-text">Phytosanitary Passed</div>
                </div>
                <div>
                  <div className="font-headline text-2xl font-bold text-navy-dark">AAA</div>
                  <div className="text-[11px] font-semibold uppercase text-muted-text">Grain & Quality</div>
                </div>
              </div>
            </div>

            {/* Hero Card Showcase */}
            <div>
              <div className="bg-navy-dark p-3 rounded-asymmetric shadow-hover-card">
                <img 
                  src="/assets/hero_banner.jpg" 
                  alt="Chandy's Global Exports B2B Hero Showcase" 
                  className="w-full h-[400px] object-cover rounded rounded-tr-[28px]"
                />
                <div className="p-4 text-white flex items-center justify-between">
                  <div>
                    <div className="font-headline text-sm font-semibold">Maritime Meridian Trade Corridor</div>
                    <div className="text-xs text-azure-light">Direct Dispatches from Nhava Sheva & Cochin Harbor</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-accent/20 border border-cyan-accent/40 rounded text-[11px] font-bold uppercase tracking-wider text-cyan-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse"></span>
                    Active Vessel Load
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commodity Portfolios Section */}
      <section className="py-20 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              Export Material Specializations
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-navy-dark">Our Core Export Portfolios</h2>
            <p className="text-sm sm:text-base text-muted-text mt-3">
              Every commodity batch undergoes acoustic calibration, cupping evaluation, and international phytosanitary grading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Portfolio 1: Tonewoods */}
            <div className="bg-white border border-border-line rounded-asymmetric p-6 hover:border-cyan-accent hover:shadow-hover-card transition-all">
              <div className="h-52 overflow-hidden rounded mb-5">
                <img src="/assets/tonewoods_macro.jpg" alt="Acoustic Guitar Tonewoods" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                Luthier Grade
              </span>
              <h3 className="font-headline text-xl text-navy-dark mb-2">Acoustic Guitar Tonewoods</h3>
              <p className="text-xs text-muted-text leading-relaxed mb-4">
                Master-grade Rosewood fingerboards, ebony acoustic guitar bridges, carved neck billets, and resonant tonewood sets.
              </p>
              <ul className="text-xs text-slate-body space-y-1.5 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> Ultrasonic acoustic resonance tested</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> Kiln-dried to 8% – 10% target moisture</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> FSC Chain-of-Custody compliant</li>
              </ul>
              <div className="flex gap-2">
                <Link to="/products?cat=tonewood" className="flex-1 text-center border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all">
                  View Specs
                </Link>
                <button onClick={() => openRfqDrawer('tonewood')} className="flex-1 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all">
                  Request Quote
                </button>
              </div>
            </div>

            {/* Portfolio 2: Specialty Coffee */}
            <div className="bg-white border border-border-line rounded-asymmetric p-6 hover:border-cyan-accent hover:shadow-hover-card transition-all">
              <div className="h-52 overflow-hidden rounded mb-5">
                <img src="/assets/specialty_coffee.jpg" alt="Kodagu Single Estate Coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                Single Estate Kodagu
              </span>
              <h3 className="font-headline text-xl text-navy-dark mb-2">Specialty Indian Coffee</h3>
              <p className="text-xs text-muted-text leading-relaxed mb-4">
                Shade-grown Arabica and high-altitude Robusta green coffee beans harvested from single estates in Kodagu (Coorg).
              </p>
              <ul className="text-xs text-slate-body space-y-1.5 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> Cupping Score: 84+ SCA Certified</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> GrainPro hermetic export packaging</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> Coffee Board of India Origin Certified</li>
              </ul>
              <div className="flex gap-2">
                <Link to="/products?cat=coffee" className="flex-1 text-center border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all">
                  View Specs
                </Link>
                <button onClick={() => openRfqDrawer('coffee')} className="flex-1 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all">
                  Request Quote
                </button>
              </div>
            </div>

            {/* Portfolio 3: Veneers */}
            <div className="bg-white border border-border-line rounded-asymmetric p-6 hover:border-cyan-accent hover:shadow-hover-card transition-all">
              <div className="h-52 overflow-hidden rounded mb-5">
                <img src="/assets/globe_tonewoods.jpg" alt="Hardwood Veneers & Timber" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                Architectural Grade
              </span>
              <h3 className="font-headline text-xl text-navy-dark mb-2">Hardwood Veneers & Timber</h3>
              <p className="text-xs text-muted-text leading-relaxed mb-4">
                Precision-sliced exotic hardwood veneers, interior joinery billets, and custom architectural timber cut to specs.
              </p>
              <ul className="text-xs text-slate-body space-y-1.5 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> Micro-sliced thickness (0.5mm – 3.0mm)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> Custom book-matched sheet bundling</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent" /> ISPM-15 heat treated export crating</li>
              </ul>
              <div className="flex gap-2">
                <Link to="/products?cat=veneer" className="flex-1 text-center border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all">
                  View Specs
                </Link>
                <button onClick={() => openRfqDrawer('veneer')} className="flex-1 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all">
                  Request Quote
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Pipeline Tracer Section */}
      <section className="py-20 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              End-To-End Integrity
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-navy-dark">Interactive Export Pipeline & Provenance Tracer</h2>
            <p className="text-sm sm:text-base text-muted-text mt-3">
              From estate harvesting in Karnataka to final destination port discharge, every step is certified.
            </p>
          </div>

          <PipelineTracer />
        </div>
      </section>

      {/* Freight Calculator Section */}
      <section className="py-20 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                Logistics Transparency
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-navy-dark mb-6">
                Interactive Freight & FOB Quote Calculator
              </h2>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6">
                Estimate ocean freight charges, FOB port pricing, and estimated transit times for your bulk commodity orders to major destination harbors worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-body">Standard 20ft & 40ft FCL or LCL consolidated container loads</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-body">Includes phytosanitary documentation & export clearance handling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-body">Dedicated logistics officer assigned to every commercial inquiry</span>
                </div>
              </div>
            </div>

            <div>
              <FreightCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Accreditations Banner */}
      <section className="py-16 bg-navy-dark text-white meridian-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            Institutional Performance
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl text-white mb-12">Global Accreditations & Scale</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded text-center">
              <div className="font-headline text-4xl font-bold text-cyan-accent mb-2">99.8%</div>
              <div className="text-xs font-semibold uppercase text-white/80">On-Time Port Loading</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded text-center">
              <div className="font-headline text-4xl font-bold text-cyan-accent mb-2">12,500+</div>
              <div className="text-xs font-semibold uppercase text-white/80">Tonewood Sets Exported</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded text-center">
              <div className="font-headline text-4xl font-bold text-cyan-accent mb-2">1,400 MT</div>
              <div className="text-xs font-semibold uppercase text-white/80">Coffee Dispatched</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded text-center">
              <div className="font-headline text-4xl font-bold text-cyan-accent mb-2">100%</div>
              <div className="text-xs font-semibold uppercase text-white/80">Phytosanitary Passed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
