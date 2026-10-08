import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Mail, MapPin, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/75 pt-16 pb-8 border-t-4 border-cyan-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Official Logo & Brand Provenance */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img 
                src="/assets/logo.png" 
                alt="Chandy's Global Exports Official Logo" 
                className="h-16 sm:h-20 w-auto object-contain bg-white/95 p-2 rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col justify-center leading-tight">
                <span className="font-headline text-xl font-bold tracking-wider text-white group-hover:text-cyan-accent transition-colors">
                  CHANDY'S
                </span>
                <span className="font-headline text-xs tracking-[0.2em] font-semibold text-cyan-accent uppercase">
                  GLOBAL EXPORTS
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-white/70">
              Direct B2B exporter of Indian Rosewood & Ebony acoustic tonewoods, single-estate Kodagu coffees, and precision sawmill processing from the Western Ghats, Karnataka, India.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-accent/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-cyan-accent flex-shrink-0" />
              <span>CITES & Vriksh Verified Supply Chain</span>
            </div>
          </div>

          {/* Col 2: Active Product Portfolios */}
          <div>
            <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-white/10 flex items-center justify-between">
              <span>Export Portfolios</span>
              <span className="text-[10px] font-mono text-cyan-accent">CATALOGUE</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/products?cat=tonewood" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Rosewood Fingerboards (AAA)</span>
                </Link>
              </li>
              <li>
                <Link to="/products?cat=tonewood" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Rosewood Back & Side Sets</span>
                </Link>
              </li>
              <li>
                <Link to="/products?cat=tonewood" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Ebony Fingerboards & Bridges</span>
                </Link>
              </li>
              <li>
                <Link to="/products?cat=tonewood" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Turning Bowl Blanks & Scales</span>
                </Link>
              </li>
              <li>
                <Link to="/products?cat=coffee" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Kodagu Specialty Coffee Beans</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/products" className="text-cyan-accent hover:text-white font-semibold flex items-center gap-1 group text-[11px] uppercase tracking-wider">
                  <span>View Full Product Catalogue</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Processing & Quick Links */}
          <div>
            <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-white/10 flex items-center justify-between">
              <span>Services & Company</span>
              <span className="text-[10px] font-mono text-cyan-accent">SOLUTIONS</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Farmer & Producer Export Sourcing</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Precision Timber Milling & KD</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Coffee Cupping & Roast Profiling</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Maritime & Container Logistics</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                  <span className="text-cyan-accent text-[10px] group-hover:translate-x-0.5 transition-transform">—</span>
                  <span>Sawmill & Wood Factory (About Us)</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/contact" className="text-cyan-accent hover:text-white font-semibold flex items-center gap-1 group text-[11px] uppercase tracking-wider">
                  <span>Request Custom B2B RFQ</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations Desk */}
          <div className="space-y-3.5 text-xs">
            <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-white/10 flex items-center justify-between">
              <span>Export Desk</span>
              <span className="text-[10px] font-mono text-cyan-accent">OPERATIONS</span>
            </h4>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
              <div className="leading-snug">
                <span className="font-semibold text-white block">Timber & Processing Works:</span>
                <span className="text-white/70">Virajpet, Kodagu (Coorg), Karnataka 571218, India</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Anchor className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
              <div className="leading-snug">
                <span className="font-semibold text-white block">Exit Seaports:</span>
                <span className="text-white/70">New Mangalore Port (NMPT) & Chennai Port</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Mail className="w-4 h-4 text-cyan-accent flex-shrink-0" />
              <a href="mailto:trade@chandysglobal.com" className="hover:text-cyan-accent transition-colors font-mono text-white/90">
                trade@chandysglobal.com
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-cyan-accent flex-shrink-0" />
              <span className="text-white/90 font-mono">+91 (80) 4122 8900</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
          <div>&copy; 2026 Chandy's Global Exports. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-[11px]">
            <span className="text-white/50">CITES Certificate of Origin Compliant</span>
            <span className="text-white/50">ISPM-15 Heat Treated Packaging</span>
            <span className="text-white/50">Phytosanitary & Plant Quarantine Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
