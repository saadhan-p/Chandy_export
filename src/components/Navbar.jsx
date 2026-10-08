import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatalogueOpen, setMobileCatalogueOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'catalogue' | 'services' | null
  const closeTimeoutRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { openRfqDrawer } = useRfq();

  const handleMouseEnter = (menuName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Catalogue Data
  const mainProducts = [
    { name: 'Rosewood Fingerboards (AAA)', cat: 'tonewood' },
    { name: 'Rosewood Back & Side Sets', cat: 'tonewood' },
    { name: 'Rosewood Headstocks & Bridges', cat: 'tonewood' },
    { name: 'Ebony Fingerboards & Headstocks', cat: 'tonewood' },
    { name: 'Ebony Acoustic Bridges', cat: 'tonewood' },
    { name: 'Rosewood Bowl Blanks & Turnery', cat: 'tonewood' },
    { name: 'Rosewood Knife Scale Handles', cat: 'tonewood' },
  ];

  const otherCategories = [
    { name: 'Raw Green Coffee Beans', cat: 'coffee' },
    { name: 'Drum-Roasted Specialty Coffee', cat: 'coffee' },
    { name: 'Soluble Instant Coffee Granules', cat: 'coffee' },
    { name: 'Plantation Arabica (AA / PB)', cat: 'coffee' },
    { name: 'Robusta Parchment & Cherry', cat: 'coffee' },
    { name: 'All Export Commodities', cat: 'all' },
  ];

  // Services Data
  const processingServices = [
    { name: 'Farmer & Producer Export Sourcing' },
    { name: 'Precision Timber Milling & Quarter-Sawing' },
    { name: 'Coffee Cupping & Custom Roast Profiling' },
    { name: 'Kiln Drying (KD < 10%) & Seasoning' },
  ];

  const logisticsServices = [
    { name: 'International Freight & Container Logistics' },
    { name: 'CITES & Legal Chain-of-Custody Compliance' },
    { name: 'ISPM-15 Heat-Treated Export Crating' },
    { name: 'All Commercial Export Solutions' },
  ];

  const handleCategoryClick = (cat) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    navigate(`/products?cat=${cat}`);
  };

  const handleServiceClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    navigate('/services');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-border-line/70 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 min-h-[88px] flex items-center justify-between">
        
        {/* Official Brand Logo & Title */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
          <img 
            src="/assets/logo.png" 
            alt="Chandys Global Exports Logo" 
            className="h-14 sm:h-16 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col justify-center leading-tight">
            <span className="font-headline text-lg sm:text-xl lg:text-2xl font-bold tracking-wider text-navy-dark group-hover:text-navy-primary transition-colors">
              CHANDYS
            </span>
            <span className="font-headline text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-cyan-accent uppercase">
              GLOBAL EXPORTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          
          {/* Home Link */}
          <Link
            to="/"
            className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
              location.pathname === '/'
                ? 'text-cyan-accent font-bold'
                : 'text-slate-600 hover:text-navy-primary'
            }`}
          >
            Home
            {location.pathname === '/' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-accent rounded-full animate-in fade-in" />
            )}
          </Link>

          {/* 1. CATALOGUE DROPDOWN TRIGGER */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('catalogue')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/products"
              className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center gap-1.5 ${
                location.pathname === '/products' || activeDropdown === 'catalogue'
                  ? 'text-cyan-accent font-bold'
                  : 'text-slate-600 hover:text-navy-primary'
              }`}
            >
              <span>Catalogue</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'catalogue' ? 'rotate-180 text-cyan-accent' : ''}`} />
              
              {/* Bottom active underline bar */}
              {(location.pathname === '/products' || activeDropdown === 'catalogue') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-accent rounded-full animate-in fade-in" />
              )}
            </Link>

            {/* Pointer Triangle Arrow in Site Theme */}
            {activeDropdown === 'catalogue' && (
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[8px] border-b-cyan-accent z-50 pointer-events-none animate-in fade-in"></div>
            )}

            {/* Mega Dropdown Menu for Catalogue */}
            {activeDropdown === 'catalogue' && (
              <div 
                className="absolute top-full -left-28 sm:-left-36 w-[640px] pt-3 z-40 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => handleMouseEnter('catalogue')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-border-line rounded-3xl p-7 shadow-[0_20px_50px_-10px_rgba(0,37,66,0.18)] relative overflow-hidden backdrop-blur-md">
                  
                  {/* Subtle Brand Accent Top Glow */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-accent to-transparent"></div>

                  <div className="grid grid-cols-2 gap-8">
                    
                    {/* LEFT COLUMN: GUITAR TONEWOODS */}
                    <div>
                      <div className="flex items-center gap-3 mb-4 pb-1">
                        <span className="font-mono text-[11px] tracking-widest text-navy-primary uppercase font-bold">
                          GUITAR TONEWOODS & BLANKS
                        </span>
                        <div className="h-px bg-border-line flex-1"></div>
                      </div>

                      <ul className="space-y-2.5">
                        {mainProducts.map((item) => (
                          <li key={item.name}>
                            <button
                              type="button"
                              onClick={() => handleCategoryClick(item.cat)}
                              className="group flex items-center gap-2.5 text-xs text-slate-700 hover:text-navy-primary hover:translate-x-1 transition-all text-left w-full"
                            >
                              <span className="text-cyan-accent font-mono select-none">
                                —
                              </span>
                              <span className="font-medium group-hover:font-semibold leading-tight">
                                {item.name}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT COLUMN: INDIAN COFFEE DIVISION */}
                    <div>
                      <div className="flex items-center gap-3 mb-4 pb-1">
                        <span className="font-mono text-[11px] tracking-widest text-navy-primary uppercase font-bold">
                          INDIAN COFFEE EXPORT DIVISION
                        </span>
                        <div className="h-px bg-border-line flex-1"></div>
                      </div>

                      <ul className="space-y-2.5">
                        {otherCategories.map((item) => (
                          <li key={item.name}>
                            <button
                              type="button"
                              onClick={() => handleCategoryClick(item.cat)}
                              className="group flex items-center gap-2.5 text-xs text-slate-700 hover:text-navy-primary hover:translate-x-1 transition-all text-left w-full"
                            >
                              <span className="text-cyan-accent font-mono select-none">
                                —
                              </span>
                              <span className="font-medium group-hover:font-semibold leading-tight">
                                {item.name}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            )}
          </div>

          {/* 2. SERVICES DROPDOWN TRIGGER */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/services"
              className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center gap-1.5 ${
                location.pathname === '/services' || activeDropdown === 'services'
                  ? 'text-cyan-accent font-bold'
                  : 'text-slate-600 hover:text-navy-primary'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-cyan-accent' : ''}`} />
              
              {/* Bottom active underline bar */}
              {(location.pathname === '/services' || activeDropdown === 'services') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-accent rounded-full animate-in fade-in" />
              )}
            </Link>

            {/* Pointer Triangle Arrow in Site Theme */}
            {activeDropdown === 'services' && (
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[8px] border-b-cyan-accent z-50 pointer-events-none animate-in fade-in"></div>
            )}

            {/* Mega Dropdown Menu for Services */}
            {activeDropdown === 'services' && (
              <div 
                className="absolute top-full -left-28 sm:-left-36 w-[640px] pt-3 z-40 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-border-line rounded-3xl p-7 shadow-[0_20px_50px_-10px_rgba(0,37,66,0.18)] relative overflow-hidden backdrop-blur-md">
                  
                  {/* Subtle Brand Accent Top Glow */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-accent to-transparent"></div>

                  <div className="grid grid-cols-2 gap-8">
                    
                    {/* LEFT COLUMN: PROCESSING & PRODUCER SERVICES */}
                    <div>
                      <div className="flex items-center gap-3 mb-4 pb-1">
                        <span className="font-mono text-[11px] tracking-widest text-navy-primary uppercase font-bold">
                          PROCESSING & SOURCING
                        </span>
                        <div className="h-px bg-border-line flex-1"></div>
                      </div>

                      <ul className="space-y-2.5">
                        {processingServices.map((item) => (
                          <li key={item.name}>
                            <button
                              type="button"
                              onClick={handleServiceClick}
                              className="group flex items-center gap-2.5 text-xs text-slate-700 hover:text-navy-primary hover:translate-x-1 transition-all text-left w-full"
                            >
                              <span className="text-cyan-accent font-mono select-none">
                                —
                              </span>
                              <span className="font-medium group-hover:font-semibold leading-tight">
                                {item.name}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT COLUMN: MARITIME & COMPLIANCE LOGISTICS */}
                    <div>
                      <div className="flex items-center gap-3 mb-4 pb-1">
                        <span className="font-mono text-[11px] tracking-widest text-navy-primary uppercase font-bold">
                          MARITIME & COMPLIANCE LOGISTICS
                        </span>
                        <div className="h-px bg-border-line flex-1"></div>
                      </div>

                      <ul className="space-y-2.5">
                        {logisticsServices.map((item) => (
                          <li key={item.name}>
                            <button
                              type="button"
                              onClick={handleServiceClick}
                              className="group flex items-center gap-2.5 text-xs text-slate-700 hover:text-navy-primary hover:translate-x-1 transition-all text-left w-full"
                            >
                              <span className="text-cyan-accent font-mono select-none">
                                —
                              </span>
                              <span className="font-medium group-hover:font-semibold leading-tight">
                                {item.name}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            )}
          </div>

          {/* About Us Link */}
          <Link
            to="/about"
            className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
              location.pathname === '/about'
                ? 'text-cyan-accent font-bold'
                : 'text-slate-600 hover:text-navy-primary'
            }`}
          >
            About Us
            {location.pathname === '/about' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-accent rounded-full animate-in fade-in" />
            )}
          </Link>

          {/* Contact Link */}
          <Link
            to="/contact"
            className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
              location.pathname === '/contact'
                ? 'text-cyan-accent font-bold'
                : 'text-slate-600 hover:text-navy-primary'
            }`}
          >
            Contact
            {location.pathname === '/contact' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-accent rounded-full animate-in fade-in" />
            )}
          </Link>

        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openRfqDrawer()}
            className="hidden sm:inline-flex items-center gap-2 bg-navy-primary hover:bg-cyan-accent text-white font-body font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Request Quote (RFQ)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-navy-dark hover:text-cyan-accent focus:outline-none transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-border-line px-5 py-6 space-y-3 shadow-xl">
          
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              location.pathname === '/'
                ? 'bg-azure-light text-navy-primary'
                : 'text-slate-body hover:bg-alt-bg'
            }`}
          >
            Home
          </Link>

          {/* Mobile Catalogue Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileCatalogueOpen(!mobileCatalogueOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-body hover:bg-alt-bg"
            >
              <span>Catalogue</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCatalogueOpen ? 'rotate-180 text-cyan-accent' : ''}`} />
            </button>

            {mobileCatalogueOpen && (
              <div className="pl-4 pr-2 py-2 space-y-2 bg-surface-bg rounded-xl my-1 border border-border-line">
                <span className="text-[10px] font-mono font-bold text-navy-primary uppercase px-2 block">
                  Guitar Tonewoods & Blanks
                </span>
                {mainProducts.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => handleCategoryClick(p.cat)}
                    className="block w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-navy-primary font-medium"
                  >
                    — {p.name}
                  </button>
                ))}

                <span className="text-[10px] font-mono font-bold text-navy-primary uppercase px-2 pt-2 block">
                  Indian Coffee Division
                </span>
                {otherCategories.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => handleCategoryClick(p.cat)}
                    className="block w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-navy-primary font-medium"
                  >
                    — {p.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-body hover:bg-alt-bg"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-cyan-accent' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-2 space-y-2 bg-surface-bg rounded-xl my-1 border border-border-line">
                <span className="text-[10px] font-mono font-bold text-navy-primary uppercase px-2 block">
                  Processing & Sourcing
                </span>
                {processingServices.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={handleServiceClick}
                    className="block w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-navy-primary font-medium"
                  >
                    — {s.name}
                  </button>
                ))}

                <span className="text-[10px] font-mono font-bold text-navy-primary uppercase px-2 pt-2 block">
                  Maritime & Compliance Logistics
                </span>
                {logisticsServices.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={handleServiceClick}
                    className="block w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-navy-primary font-medium"
                  >
                    — {s.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              location.pathname === '/about'
                ? 'bg-azure-light text-navy-primary'
                : 'text-slate-body hover:bg-alt-bg'
            }`}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              location.pathname === '/contact'
                ? 'bg-azure-light text-navy-primary'
                : 'text-slate-body hover:bg-alt-bg'
            }`}
          >
            Contact
          </Link>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openRfqDrawer();
              }}
              className="w-full text-center bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow transition-colors"
            >
              Request Quote (RFQ)
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
