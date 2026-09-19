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
    { name: 'Products Catalogue', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Global Reach', path: '/global-reach' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border-line transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 font-headline text-xl font-bold tracking-wider text-navy-dark">
            <div className="w-10 h-10 bg-navy-primary rounded rounded-tr-xl flex items-center justify-center text-cyan-accent text-sm font-bold">
              CGE
            </div>
            <div>
              CHANDY'S <span className="text-cyan-accent">GLOBAL EXPORTS</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-cyan-accent font-bold' : 'text-slate-body hover:text-cyan-accent'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => openRfqDrawer()}
              className="hidden sm:inline-flex items-center gap-2 bg-navy-primary text-white hover:bg-cyan-accent font-body font-bold text-xs uppercase tracking-wider px-5 py-3 rounded transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Request Quote (RFQ)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-navy-dark focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border-line px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-semibold uppercase tracking-wider py-2 ${
                location.pathname === item.path ? 'text-cyan-accent' : 'text-slate-body'
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
            className="w-full text-center bg-navy-primary text-white font-bold text-xs uppercase tracking-wider py-3 rounded"
          >
            Request Quote (RFQ)
          </button>
        </div>
      )}
    </header>
  );
}
