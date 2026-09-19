import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openRfqDrawer } = useRfq();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Catalogue', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-xl border-b border-border-line/70 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 min-h-[88px] flex items-center justify-between">
        
        {/* Official Brand Logo & Title */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
          <img 
            src="/assets/logo.png" 
            alt="Chandy's Global Exports Logo" 
            className="h-14 sm:h-16 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col justify-center leading-tight">
            <span className="font-headline text-lg sm:text-xl lg:text-2xl font-bold tracking-wider text-navy-dark group-hover:text-navy-primary transition-colors">
              CHANDY'S
            </span>
            <span className="font-headline text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-cyan-accent uppercase">
              GLOBAL EXPORTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-accent font-bold'
                    : 'text-slate-600 hover:text-navy-primary'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-accent rounded-full animate-in fade-in" />
                )}
              </Link>
            );
          })}
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
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-border-line px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                location.pathname === item.path
                  ? 'bg-azure-light text-navy-primary'
                  : 'text-slate-body hover:bg-alt-bg'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openRfqDrawer();
            }}
            className="w-full text-center bg-navy-primary text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow"
          >
            Request Quote (RFQ)
          </button>
        </div>
      )}
    </header>
  );
}
