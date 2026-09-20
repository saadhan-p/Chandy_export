import React, { useState, useEffect } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Clock, 
  Globe2, 
  Anchor, 
  ShieldCheck, 
  ExternalLink,
  Radio,
  ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [currentTime, setCurrentTime] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFacility, setActiveFacility] = useState('blr');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('trade@chandysglobal.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Top Telemetry / Status Ticker (Responsive Minimalist Bar) */}
      <div className="bg-[#011424] text-white/80 border-b border-white/10 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 text-xs font-mono">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Desk Operational Indicator & Clock */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase truncate">
              Desk Online
            </span>
            <span className="text-white/30 hidden xs:inline">|</span>
            <span className="text-white/70 text-[10px] sm:text-[11px] truncate">
              IST: <strong className="text-cyan-accent font-semibold">{currentTime || '10:45:00 PM'}</strong>
            </span>
          </div>

          {/* Timezone Reference Matrix (Desktop / Tablet) */}
          <div className="hidden lg:flex items-center gap-4 text-[11px] text-white/50">
            <span>Dubai <strong className="text-white/80">GST -1.5h</strong></span>
            <span>London <strong className="text-white/80">BST -4.5h</strong></span>
            <span>Hamburg <strong className="text-white/80">CET -3.5h</strong></span>
            <span>Tokyo <strong className="text-white/80">JST +3.5h</strong></span>
          </div>

          {/* Guaranteed SLA Badge */}
          <div className="text-[10px] sm:text-[11px] text-cyan-accent font-semibold tracking-wide whitespace-nowrap flex-shrink-0">
            24h Firm Quote SLA
          </div>
        </div>
      </div>

      {/* Main Asymmetric Canvas */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* LEFT MONOLITH: Architectural Trade Desk (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Monolith Card */}
            <div className="bg-[#021B30] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-white/10 shadow-[0_20px_50px_rgba(0,18,34,0.4)] relative overflow-hidden">
              
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -top-32 -right-32 w-72 h-72 bg-cyan-accent/20 rounded-full blur-[4rem] pointer-events-none"></div>
              <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-[#0d82b8]/15 rounded-full blur-[4rem] pointer-events-none"></div>

              {/* Monograph Header */}
              <div className="relative z-10 space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/10">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono tracking-widest text-cyan-accent uppercase">
                  <Globe2 className="w-3 h-3 flex-shrink-0" /> Direct Origin Export
                </div>
                
                <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight sm:leading-[1.08]">
                  Direct Commodity <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-sky-200 to-white">
                    Dispatch Hub.
                  </span>
                </h1>
                
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed pt-1">
                  Procure verified single-origin tonewoods, estate-graded specialty coffees, and architectural teak directly from harvest origin to international deepwater ports.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="relative z-10 space-y-3 mb-6 sm:mb-8">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/50 block">
                  Rapid Direct Channels
                </span>

                {/* Click-to-copy Email Pill */}
                <div 
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-accent/50 cursor-pointer transition-all duration-200 group gap-2"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-cyan-accent/10 text-cyan-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] text-white/50 block font-mono">Official Trade Inbox</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-accent transition-colors font-mono truncate block">
                        trade@chandysglobal.com
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    {copiedEmail ? (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 sm:px-2.5 py-1 rounded-lg border border-emerald-500/40">
                        <Check className="w-3 h-3" /> Copied
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-white/60 group-hover:text-white bg-white/5 px-2 sm:px-2.5 py-1 rounded-lg">
                        <Copy className="w-3 h-3" /> Copy
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Phone / WhatsApp */}
                <a 
                  href="tel:+918041228900"
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-accent/50 transition-all duration-200 group gap-2"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-cyan-accent/10 text-cyan-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] text-white/50 block font-mono">Bangalore Trade Desk (Voice)</span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-accent transition-colors font-mono truncate block">
                        +91 (80) 4122 8900
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </a>
              </div>

              {/* Physical Facility Coordinates */}
              <div className="relative z-10 space-y-3 pt-5 sm:pt-6 border-t border-white/10">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-white/50">
                    Operating Facilities
                  </span>
                  
                  {/* Location Switcher Pills */}
                  <div className="flex gap-1 p-0.5 rounded-lg bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveFacility('blr')}
                      className={`px-2 py-0.5 rounded transition-colors ${activeFacility === 'blr' ? 'bg-cyan-accent text-navy-dark font-bold' : 'text-white/60 hover:text-white'}`}
                    >
                      BLR HQ
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveFacility('kdg')}
                      className={`px-2 py-0.5 rounded transition-colors ${activeFacility === 'kdg' ? 'bg-cyan-accent text-navy-dark font-bold' : 'text-white/60 hover:text-white'}`}
                    >
                      KODAGU MILLS
                    </button>
                  </div>
                </div>

                {activeFacility === 'blr' ? (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-white flex items-center gap-1.5 text-xs sm:text-sm">
                        <Building2 className="w-3.5 h-3.5 text-cyan-accent flex-shrink-0" /> Global Headquarters
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] text-cyan-accent/80 whitespace-nowrap">13.0358° N, 77.5970° E</span>
                    </div>
                    <p className="text-white/70 leading-relaxed text-[11px] sm:text-xs">
                      Outer Ring Road, Hebbal, Bengaluru, Karnataka 560024, India
                    </p>
                    <div className="text-[9px] sm:text-[10px] text-white/40 pt-1 font-mono">
                      Export Desk • Port Liaison • Contract Finalization
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-white flex items-center gap-1.5 text-xs sm:text-sm">
                        <MapPin className="w-3.5 h-3.5 text-cyan-accent flex-shrink-0" /> Timber & Coffee Works
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] text-cyan-accent/80 whitespace-nowrap">12.4244° N, 75.7382° E</span>
                    </div>
                    <p className="text-white/70 leading-relaxed text-[11px] sm:text-xs">
                      Kodagu Estate, Madikeri, Coorg, Karnataka 571201, India
                    </p>
                    <div className="text-[9px] sm:text-[10px] text-white/40 pt-1 font-mono">
                      Kiln Drying • Coffee Milling & Grading • Timber Slicing
                    </div>
                  </div>
                )}
              </div>

              {/* Transit Ports Footer Banner */}
              <div className="relative z-10 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] text-white/50 font-mono">
                <span className="flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-cyan-accent flex-shrink-0" /> Exit Ports:
                </span>
                <span className="text-white/80">Mangalore (NMPT) · Chennai Sea</span>
              </div>

            </div>

            {/* Quick Export Credential Micro-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-sm">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase text-cyan-accent font-bold block mb-1">01 / Compliance</span>
                <h4 className="font-bold text-xs text-slate-900 mb-0.5">CITES & Phytosanitary</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 leading-normal">Full legal chain-of-custody certified with every shipment.</p>
              </div>

              <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-sm">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase text-cyan-accent font-bold block mb-1">02 / Assurance</span>
                <h4 className="font-bold text-xs text-slate-900 mb-0.5">Moisture & Cup Scoring</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 leading-normal">Kiln-dried &lt; 10% test report and Q-grader specialty coffee sheet.</p>
              </div>
            </div>

          </div>

          {/* RIGHT CANVAS: Interactive Specification Dossier (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>
      </div>

    </div>
  );
}
