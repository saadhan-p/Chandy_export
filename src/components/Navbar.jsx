import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';
import { useRfq } from '../context/RfqContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openRfqDrawer } = useRfq();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Catalogue', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-3 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all">
      <div className="bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg shadow-navy-dark/5 rounded-full px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-tr from-navy-dark via-navy-primary to-cyan-accent text-cyan-accent rounded-full flex items-center justify-center shadow-sm border border-white/20">
            <Compass className="w-5 h-5 text-cyan-accent group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <div className="font-headline text-base sm:text-lg font-bold tracking-wider text-navy-dark group-hover:text-navy-primary transition-colors">
            CHANDY'S <span className="text-cyan-accent">GLOBAL</span>
          </div>
        </Link>

        {/* Desktop Navigation Menu (Pill Bar) */}
        <nav className="hidden lg:flex items-center gap-1 bg-alt-bg/90 p-1 rounded-full border border-border-line/70">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-navy-dark shadow-sm border border-border-line text-cyan-accent'
                    : 'text-muted-text hover:text-navy-primary hover:bg-white/60'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openRfqDrawer()}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-navy-primary via-navy-dark to-cyan-accent hover:from-cyan-accent hover:to-navy-primary text-white font-body font-bold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md shadow-navy-dark/15 hover:shadow-cyan-accent/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Request Quote (RFQ)</span>
            <ArrowRight className="w-3.5 h-3.5" />
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
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-border-line rounded-2xl p-5 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
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
            className="w-full text-center bg-gradient-to-r from-navy-primary to-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow"
          >
            Request Quote (RFQ)
          </button>
        </div>
      )}
    </header>
  );
}
