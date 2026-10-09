import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, Wrench, Building2, MessageSquareText } from 'lucide-react';

export default function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Catalogue', path: '/products', icon: Layers },
    { name: 'Services', path: '/services', icon: Wrench },
    { name: 'About', path: '/about', icon: Building2 },
    { name: 'Contact', path: '/contact', icon: MessageSquareText },
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation" 
      className="fixed bottom-4 inset-x-0 z-40 flex justify-center px-6 pointer-events-none lg:hidden"
    >
      {/* Floating Glassmorphic Pill */}
      <div className="pointer-events-auto bg-navy-dark/95 backdrop-blur-xl border border-white/15 p-1.5 rounded-full shadow-[0_12px_36px_rgba(0,37,66,0.45)] flex items-center justify-around gap-1 w-full max-w-xs">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = 
            item.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(item.path);

          return (
            <Link
              key={item.name}
              to={item.path}
              aria-label={item.name}
              title={item.name}
              className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 relative select-none ${
                isActive
                  ? 'bg-cyan-accent text-navy-dark shadow-md shadow-cyan-accent/30 scale-105'
                  : 'text-white/70 hover:text-white hover:bg-white/10 active:scale-95'
              }`}
            >
              <Icon className="w-5 h-5 transition-transform duration-200" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
