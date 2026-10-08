import React, { useState } from 'react';
import { TreePine, Microscope, ShieldCheck, Anchor, Globe, CheckCircle2, ArrowRight, MapPin, Award, FileText, ChevronRight } from 'lucide-react';

export default function PipelineTracer() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Sustainable Forestry',
      tag: 'Origin Sourcing',
      location: 'Western Ghats & Kodagu, Karnataka',
      icon: TreePine,
      summary: 'Ethical timber harvesting & shade-grown coffee sourcing adhering to sustainable forestry reserves.',
      details: [
        'Government-approved state forest timber auction sourcing',
        'Vriksh Timber Legality Assessment Verification',
        'Geo-tagged origin tracing from source plantations'
      ],
      compliance: 'Vriksh Legal Origin & CITES Permitted',
    },
    {
      number: '02',
      title: 'Acoustic & Lab Testing',
      tag: 'Technical Calibration',
      location: 'Karnataka Milling Facility',
      icon: Microscope,
      summary: 'Ultrasonic acoustic resonance testing for tonewoods and moisture calibration down to 8–10%.',
      details: [
        'Ultrasonic velocity pulse testing (5,000+ m/s propagation)',
        'Computerized radio-frequency moisture meter inspection',
        'Strict 90° vertical grain quarter-sawing verification'
      ],
      compliance: 'KD 8-10% EMC & Velocity Certified',
    },
    {
      number: '03',
      title: 'Phytosanitary & Quarantine',
      tag: 'Govt Inspection',
      location: 'Central Plant Quarantine Station',
      icon: ShieldCheck,
      summary: 'Government Plant Quarantine authority inspection, Methyl Bromide fumigation, and ISPM-15 certification.',
      details: [
        'Official Govt. of India Phytosanitary Certificate issued',
        'ISPM-15 compliant heat treatment stamp on wooden packaging',
        'Zero pest, bark, or microbial contamination guarantee'
      ],
      compliance: 'ISPM-15 Heat-Treated & Phytosanitary Pass',
    },
    {
      number: '04',
      title: 'Moisture Lock & Packing',
      tag: 'Export Packaging',
      location: 'Export Container Freight Station',
      icon: Anchor,
      summary: 'Heavy-gauge vacuum polyethylene sealing with industrial silica gel desiccants inside steel-banded crates.',
      details: [
        'Multi-layer vacuum wrap barrier preventing maritime humidity',
        'Heavy-duty ISPM-15 export wooden crates with metal banding',
        'Palletized FCL/LCL forklift-ready consolidation'
      ],
      compliance: 'Zero-Moisture Infiltration Guarantee',
    },
    {
      number: '05',
      title: 'Global Port Delivery',
      tag: 'Maritime Logistics',
      location: 'Mangalore / JNPT Nhava Sheva Harbor',
      icon: Globe,
      summary: 'Ocean freight transport with real-time Bill of Lading tracking to North America, Europe, Asia & Middle East.',
      details: [
        'Direct vessel bookings on tier-1 maritime shipping lines',
        'Full digital trade docket: Bill of Lading, Certificate of Origin, CITES',
        'FOB & CIF Incoterms 2020 customs clearance support'
      ],
      compliance: 'Direct Ocean B/L & Customs Cleared',
    },
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="mt-8 max-w-6xl mx-auto">
      {/* Connected Interactive Stepper Header */}
      <div className="bg-white border border-border-line rounded-2xl p-4 sm:p-6 shadow-sm mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={s.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3.5 sm:p-4 rounded-xl transition-all duration-300 relative border flex flex-col justify-between ${
                  isActive
                    ? 'bg-navy-dark text-white border-navy-dark shadow-md scale-[1.02]'
                    : isCompleted
                    ? 'bg-azure-light/40 border-cyan-accent/40 text-navy-dark hover:bg-azure-light'
                    : 'bg-surface-bg border-border-line/70 text-slate-body hover:border-border-line hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive
                        ? 'bg-cyan-accent text-navy-dark'
                        : isCompleted
                        ? 'bg-navy-primary text-white'
                        : 'bg-border-line/60 text-muted-text'
                    }`}
                  >
                    STEP {s.number}
                  </span>
                  <IconComp
                    className={`w-4 h-4 ${
                      isActive ? 'text-cyan-accent' : isCompleted ? 'text-navy-primary' : 'text-muted-text'
                    }`}
                  />
                </div>
                <div className="font-headline font-bold text-xs sm:text-sm line-clamp-1">{s.title}</div>
                <div className={`text-[10px] mt-1 ${isActive ? 'text-cyan-accent/90' : 'text-muted-text'}`}>
                  {s.tag}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detailed Inspector Panel */}
      <div className="bg-navy-dark text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-cyan-accent/20 shadow-hover-card meridian-grid-dark relative overflow-hidden">
        {/* Background glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Stage Info & Description */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="bg-cyan-accent text-navy-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-mono">
                Stage {current.number} of 05
              </span>
              <span className="flex items-center gap-1.5 text-xs text-azure-light font-medium bg-white/10 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-cyan-accent" />
                {current.location}
              </span>
            </div>

            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-cyan-accent/20 border border-cyan-accent/40 flex items-center justify-center text-cyan-accent shrink-0">
                <CurrentIcon className="w-5 h-5" />
              </span>
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
              {current.summary}
            </p>

            {/* Checkpoint Highlights */}
            <div className="space-y-2.5">
              {current.details.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Certificate Badge & Navigation */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-cyan-accent text-xs font-bold uppercase tracking-widest mb-3">
                <Award className="w-4 h-4" /> Compliance Benchmark
              </div>
              <div className="font-headline text-lg sm:text-xl font-bold text-white mb-2">
                {current.compliance}
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                All accompanying phytosanitary dockets, laboratory resonance readings, and bill of lading consignments are cryptographically archived and verified before dispatch.
              </p>
            </div>

            {/* Step Next/Prev Controller */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="text-xs font-semibold text-white/70 hover:text-white px-3 py-2 rounded hover:bg-white/5 transition-all"
              >
                ← Previous Stage
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="inline-flex items-center gap-1.5 bg-cyan-accent hover:bg-white text-navy-dark font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-all shadow"
              >
                Next Stage <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

