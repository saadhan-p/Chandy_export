import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/75 pt-16 pb-8 border-t-4 border-cyan-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Official Logo & Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
              <img 
                src="/assets/logo.png" 
                alt="Chandy's Global Exports Official Logo" 
                className="h-16 sm:h-20 w-auto object-contain bg-white/95 p-2 rounded-lg shadow-sm"
              />
              <div className="flex flex-col justify-center leading-tight">
                <span className="font-headline text-xl font-bold tracking-wider text-white">
                  CHANDY'S
                </span>
                <span className="font-headline text-xs tracking-[0.2em] font-semibold text-cyan-accent uppercase">
                  GLOBAL EXPORTS
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-white/70">
              Authoritative B2B exporter of acoustic guitar tonewoods, Kodagu single-estate coffee, and fine architectural veneers from India.
            </p>
          </div>

          {/* Col 2: Portfolios */}
          <div>
            <h4 className="font-headline text-base text-white font-semibold mb-4 tracking-wider">Export Portfolios</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/products?cat=tonewood" className="hover:text-cyan-accent transition-colors">Acoustic Guitar Tonewoods</Link></li>
              <li><Link to="/products?cat=coffee" className="hover:text-cyan-accent transition-colors">Kodagu Specialty Coffee</Link></li>
              <li><Link to="/products?cat=veneer" className="hover:text-cyan-accent transition-colors">Architectural Veneers</Link></li>
              <li><Link to="/services" className="hover:text-cyan-accent transition-colors">Custom Milling & Slicing</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-headline text-base text-white font-semibold mb-4 tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services" className="hover:text-cyan-accent transition-colors">Export Services</Link></li>
              <li><Link to="/about" className="hover:text-cyan-accent transition-colors">Company Provenance</Link></li>
              <li><Link to="/why-us" className="hover:text-cyan-accent transition-colors">Why Work With Us</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-accent transition-colors">Contact & RFQ Builder</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="font-headline text-base text-white font-semibold mb-4 tracking-wider">Export Desk & Ports</h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
              <span>Bangalore & Kodagu, Karnataka, India</span>
            </div>
            <div className="flex items-start gap-2">
              <Anchor className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
              <span>Ports: Nhava Sheva (Mumbai) & Cochin Port</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-accent flex-shrink-0" />
              <span>trade@chandysglobal.com</span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>&copy; 2026 Chandy's Global Exports. All Rights Reserved.</div>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-cyan-accent">Privacy Policy</Link>
            <Link to="#" className="hover:text-cyan-accent">Terms of Trade</Link>
            <Link to="#" className="hover:text-cyan-accent">Phytosanitary Standards</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
