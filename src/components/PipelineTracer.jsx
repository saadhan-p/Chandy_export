import React from 'react';
import { TreePine, Microscope, ShieldCheck, Anchor, Globe } from 'lucide-react';

export default function PipelineTracer() {
  const steps = [
    { number: '01', title: 'Sustainable Forestry', desc: 'Ethical timber harvesting & sustainable wood sourcing in Western Ghats.', icon: TreePine },
    { number: '02', title: 'Acoustic & Lab Testing', desc: 'Ultrasonic acoustic resonance testing for tonewoods & moisture calibration.', icon: Microscope },
    { number: '03', title: 'Phytosanitary', desc: 'Fumigation, ISPM-15 heat treatment & plant quarantine clearance.', icon: ShieldCheck },
    { number: '04', title: 'Port Dispatch', desc: 'Customs clearance at Nhava Sheva (INNSA) & Cochin (INCOK) harbors.', icon: Anchor },
    { number: '05', title: 'Global Delivery', desc: 'Ocean freight transport with real-time bill of lading tracking.', icon: Globe },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
      {steps.map((s) => {
        const IconComponent = s.icon;
        return (
          <div key={s.number} className="bg-white border border-border-line p-6 rounded hover:border-cyan-accent hover:bg-azure-light/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="font-headline text-3xl font-bold text-cyan-accent">{s.number}</span>
              <IconComponent className="w-6 h-6 text-navy-primary" />
            </div>
            <h4 className="font-headline text-base text-navy-dark font-semibold mb-2">{s.title}</h4>
            <p className="text-xs text-muted-text leading-relaxed">{s.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
