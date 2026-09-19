import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function TickerBar() {
  return (
    <div class="bg-navy-dark text-white/85 text-xs py-2 border-b border-white/10 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div class="flex items-center gap-6 whitespace-nowrap overflow-x-auto no-scrollbar">
          <div class="inline-flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-cyan-accent rounded-full shadow-[0_0_8px_#159BD7]"></span>
            <span>Port Dispatch: Nhava Sheva (INNSA) & Cochin (INCOK) Operations Normal</span>
          </div>
          <div class="inline-flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-cyan-accent rounded-full shadow-[0_0_8px_#159BD7]"></span>
            <span>Tonewood Reserve: Master Grade Rosewood & Ebony Sets Certified</span>
          </div>
          <div class="inline-flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-cyan-accent rounded-full shadow-[0_0_8px_#159BD7]"></span>
            <span>Kodagu Coffee Harvest: AA Grade Single-Estate Arabica Ready</span>
          </div>
        </div>
        <div class="hidden md:flex items-center gap-1 bg-cyan-accent/15 border border-cyan-accent/30 text-cyan-accent px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ISO 9001:2015 Registered Desk</span>
        </div>
      </div>
    </div>
  );
}
