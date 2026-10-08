import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

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
              Direct B2B exporter of Indian Rosewood & Ebony acoustic tonewoods, single-estate Kodagu coffees, and precision sawmill processing from Karnataka, India.
            </p>
          </div>

          {/* Col 2: Active Product Portfolios */}
          <div>
            <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-white/10">
              Export Portfolios
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
            </ul>
          </div>

          {/* Col 3: Processing & Quick Links */}
          <div>
            <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-white/10">
              Services & Company
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
            </ul>
          </div>

          {/* Col 4: Contact & Operations Desk */}
          <div className="space-y-3.5 text-xs">
            <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-white/10">
              Contact & Desk
            </h4>
            
            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-cyan-accent flex-shrink-0" />
              <a href="tel:+919353927123" className="hover:text-cyan-accent transition-colors font-mono text-white/90">
                +91 9353927123
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-cyan-accent flex-shrink-0" />
              <a href="mailto:chandysglobalexports@gmail.com" className="hover:text-cyan-accent transition-colors font-sans text-white/90 break-all">
                chandysglobalexports@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
              <div className="leading-snug text-white/70">
                Hi Tech Wood Industries, Kodagu, Karnataka, India – 571218
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/60 text-center">
          &copy; 2026 Chandy's Global Exports. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
