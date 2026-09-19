import React from 'react';
import { Globe, Ship, FileCheck, CheckCircle2 } from 'lucide-react';

export default function GlobalReach() {
  const ports = [
    { region: 'North America', title: 'USA & Canada', dest: 'Los Angeles, Long Beach, New York / New Jersey, Vancouver.', time: '22 – 26 Days' },
    { region: 'Western Europe', title: 'Europe & UK', dest: 'Rotterdam (Netherlands), Hamburg (Germany), Antwerp, Felixstowe (UK).', time: '16 – 20 Days' },
    { region: 'Asia-Pacific', title: 'Japan & East Asia', dest: 'Yokohama, Kobe, Busan (South Korea), Singapore.', time: '12 – 16 Days' },
    { region: 'Middle East', title: 'UAE & GCC Region', dest: 'Jebel Ali (Dubai, UAE), Dammam (Saudi Arabia), Hamad Port (Qatar).', time: '5 – 8 Days' },
  ];

  return (
    <div>
      <section className="bg-navy-dark text-white py-14 meridian-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            Worldwide Logistics & Port Corridors
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-4">
            Global Reach & Supply Chain
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            Direct ocean container routes linking India's major deep-water ports with international distribution hubs.
          </p>
        </div>
      </section>

      <section className="py-16 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              Trade Hubs Served
            </span>
            <h2 className="font-headline text-3xl text-navy-dark">Primary Ocean Destination Harbors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ports.map((p, idx) => (
              <div key={idx} className="bg-white border border-border-line p-6 rounded-asymmetric hover:border-cyan-accent hover:shadow-hover-card transition-all">
                <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                  {p.region}
                </span>
                <h3 className="font-headline text-lg text-navy-dark mb-2">{p.title}</h3>
                <p className="text-xs text-muted-text mb-4 leading-relaxed">{p.dest}</p>
                <div className="text-xs font-semibold text-slate-body">Average Transit: {p.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
              Regulatory Transparency
            </span>
            <h2 className="font-headline text-3xl text-navy-dark">Standard International Documentation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-border-line p-6 rounded">
              <h3 className="font-headline text-xl text-navy-dark mb-4">1. Phytosanitary & Botanical Clearance</h3>
              <ul className="space-y-3 text-xs text-slate-body">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" /> <strong>Official Phytosanitary Certificate:</strong> Issued by Plant Quarantine Authority of India.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" /> <strong>ISPM-15 Fumigation Compliance:</strong> Heat-treated wooden crates & pallets stamped HT 56°C.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" /> <strong>Non-GMO & Heavy Metal Certificate:</strong> Required for coffee bean shipments entering EU/US.</li>
              </ul>
            </div>

            <div className="bg-white border border-border-line p-6 rounded">
              <h3 className="font-headline text-xl text-navy-dark mb-4">2. Shipping & Customary Trade Documents</h3>
              <ul className="space-y-3 text-xs text-slate-body">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" /> <strong>Clean On-Board Ocean Bill of Lading (B/L):</strong> Issued by Maersk, MSC, or Hapag-Lloyd lines.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" /> <strong>Commercial Invoice & Packing List:</strong> Itemized net/gross weights and HS codes.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" /> <strong>Certificate of Origin (COO):</strong> Issued by Chamber of Commerce & Coffee Board of India.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
