import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Microscope } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function About() {
  const { openRfqDrawer } = useRfq();

  return (
    <div>
      <section className="bg-navy-dark text-white py-14 meridian-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            Institutional Heritage & Quality Discipline
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-4">
            Provenance, Engineering & Trust
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            Rooted in the pristine Western Ghats of Kodagu (Coorg), Karnataka, Chandy's Global Exports bridges India's rich material heritage with exacting B2B standards.
          </p>
        </div>
      </section>

      <section className="py-16 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="bg-navy-dark p-3 rounded-asymmetric shadow-hover-card">
              <img 
                src="/assets/about_banner.jpg" 
                alt="Kodagu Estate Laboratory" 
                className="w-full h-[400px] object-cover rounded rounded-tr-[28px]"
              />
            </div>

            <div>
              <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                Our Foundation
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-navy-dark mb-6">
                Bridging Artisanal Provenance With Global Commerce
              </h2>
              <p className="text-sm text-muted-text leading-relaxed mb-4">
                Founded with a vision to institutionalize India's specialized agricultural and timber exports, Chandy's Global Exports operates as a premier B2B trading house.
              </p>
              <p className="text-sm text-muted-text leading-relaxed mb-6">
                Our operations span shade-grown coffee plantations in the mist-covered hills of Kodagu, specialized timber drying and quarter-sawing facilities in Karnataka, and dedicated export desks at Nhava Sheva (Mumbai) and Cochin ports.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/products" className="w-full sm:w-auto text-center bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all">
                  Explore Portfolios &rarr;
                </Link>
                <Link to="/contact" className="w-full sm:w-auto text-center border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all">
                  Contact Leadership
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              Uncompromising Quality Controls
            </span>
            <h2 className="font-headline text-3xl text-navy-dark">Laboratory Testing & Grading Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border-line p-6 rounded-asymmetric">
              <Microscope className="w-8 h-8 text-cyan-accent mb-4" />
              <h3 className="font-headline text-lg text-navy-dark mb-2">01. Ultrasonic Resonance</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                All acoustic guitar tonewood billets undergo ultrasonic velocity measurement to guarantee longitudinal elasticity (&gt;5,000 m/s).
              </p>
            </div>

            <div className="bg-white border border-border-line p-6 rounded-asymmetric">
              <Award className="w-8 h-8 text-cyan-accent mb-4" />
              <h3 className="font-headline text-lg text-navy-dark mb-2">02. SCA Cupping Protocol</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                Licensed Q-Graders evaluate every Kodagu green coffee harvest for moisture content (11%–12%) and sensory cupping scores (84+ SCA).
              </p>
            </div>

            <div className="bg-white border border-border-line p-6 rounded-asymmetric">
              <ShieldCheck className="w-8 h-8 text-cyan-accent mb-4" />
              <h3 className="font-headline text-lg text-navy-dark mb-2">03. ISPM-15 Treatment</h3>
              <p className="text-xs text-muted-text leading-relaxed">
                All export wooden crating and palleted shipments undergo certified heat treatment (HT 56°C for 30 min) per ISPM-15 protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
