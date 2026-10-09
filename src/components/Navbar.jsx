import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'catalogue' | 'services' | null
  const closeTimeoutRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { openRfqDrawer } = useRfq();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    navigate(`/products?cat=${cat}`);
  };

  const handleServiceClick = () => {
    setActiveDropdown(null);
    navigate('/services');
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
      isScrolled 
        ? '-translate-y-full lg:translate-y-0 opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto lg:bg-white/90 lg:backdrop-blur-xl lg:border-b lg:border-border-line/60 lg:shadow-[0_4px_20px_rgba(0,37,66,0.06)]' 
        : 'translate-y-0 opacity-100 pointer-events-auto bg-white border-b border-border-line/70 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 lg:py-2.5 min-h-[84px] sm:min-h-[96px] lg:min-h-[88px] flex items-center justify-center lg:justify-between">
        
        {/* Official Brand Logo & Title (Enlarged and Centered on Mobile, Left-aligned on Desktop) */}
        <Link to="/" className="flex items-center gap-3.5 sm:gap-4 group mx-auto lg:mx-0">
          <img 
            src="/assets/logo.png" 
            alt="Chandys Global Exports Logo" 
            className="h-16 sm:h-20 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col justify-center leading-tight text-left">
            <span className="font-headline text-2xl sm:text-3xl lg:text-3xl font-bold tracking-wider text-navy-dark group-hover:text-navy-primary transition-colors">
              CHANDYS
            </span>
            <span className="font-headline text-[11px] sm:text-xs tracking-[0.28em] font-bold text-cyan-accent uppercase mt-0.5">
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

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => openRfqDrawer()}
            className="inline-flex items-center gap-2 bg-navy-primary hover:bg-cyan-accent text-white font-body font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}

