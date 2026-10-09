import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useRfq } from '../context/RfqContext';
import { Coffee, CheckCircle2, Award, ShieldCheck, MapPin, Layers, Music, Package, FileText, Check, ArrowRight, Shield, Sparkles, Sliders, Flame, Gauge, Trees } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function Products() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const { openRfqDrawer, addToast } = useRfq();

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setFilter(cat);
  }, [searchParams]);

  // Main Focus: Master Guitar & Wood Components from centralized data
  const products = productsData;

  // 9 Commercial Indian Coffee Grades Data (Kept intact for dedicated coffee page)
  const coffeeGrades = [
    {
      name: 'Plantation A',
      tagline: "India's most exported washed Arabica",
      type: 'Arabica · Washed',
      screen: '17/64 inch',
      cupScore: '82 to 85',
      defects: 'Max 8% broken',
      moisture: '10% to 12%',
      desc: 'The benchmark grade of Indian washed Arabica. Balanced acidity, medium body, smooth chocolate and nutty notes. Foundation for premium blends across Europe and North America.',
      badge: 'Most Exported',
    },
    {
      name: 'Plantation AA',
      tagline: 'Large bean premium washed Arabica',
      type: 'Arabica · Washed',
      screen: '18/64 inch',
      cupScore: '83 to 86',
      defects: 'Max 4% broken',
      moisture: '10% to 12%',
      desc: 'Premium tier of Indian washed Arabica. Larger beans, denser cup, and a more refined flavour profile. Preferred by specialty roasters and single-origin programmes.',
      badge: 'Premium Grade',
    },
    {
      name: 'Plantation PB',
      tagline: 'Washed Arabica Peaberry',
      type: 'Arabica · Peaberry',
      screen: '6.5+ mm',
      cupScore: '84 to 87',
      defects: 'Max 4% broken',
      moisture: '10% to 12%',
      desc: 'Naturally occurring peaberries formed when one seed develops inside a cherry. Denser, flavour-concentrated cup with bright acidity. Highly prized in specialty coffee.',
      badge: 'Rare Peaberry',
    },
    {
      name: 'Arabica Cherry AA',
      tagline: 'Natural (sun-dried) Arabica',
      type: 'Arabica · Natural',
      screen: '18/64 inch',
      cupScore: '82 to 85',
      defects: 'Max 5% broken',
      moisture: '10% to 12%',
      desc: 'Naturally processed Arabica dried intact in cherry fruit, producing a fruitier, fuller-bodied cup with strong sweetness. Ideal for espresso body & crema.',
      badge: 'Natural Process',
    },
    {
      name: 'Robusta Parchment AAA',
      tagline: 'Extra-large washed Robusta',
      type: 'Robusta · Washed',
      screen: '19/64 inch',
      cupScore: '80 to 83',
      defects: 'Max 3% broken',
      moisture: '10% to 12%',
      desc: 'The largest washed Robusta grade from India. Big, uniform beans with thick crema, chocolate and nutty notes. Choice for high-end espresso blends.',
      badge: 'Extra Large',
    },
    {
      name: 'Robusta Kaapi Royale',
      tagline: 'Premium washed Robusta Parchment A',
      type: 'Robusta · Washed',
      screen: '17/64 inch',
      cupScore: '78 to 82',
      defects: 'Max 5% broken',
      moisture: '10% to 12%',
      desc: 'Sold internationally as Kaapi Royale. Clean cup, bold and powerful with reduced harshness. The Robusta of choice for premium Italian espresso blenders.',
      badge: 'Kaapi Royale',
    },
    {
      name: 'Robusta Parchment AB',
      tagline: 'Commercial washed Robusta',
      type: 'Robusta · Washed',
      screen: '15/64 to 17/64 inch',
      cupScore: '76 to 80',
      defects: 'Max 8% broken',
      moisture: '10% to 12%',
      desc: 'Mixed-screen washed Robusta combining A and B sizes for cost-effective commercial blends. Reliable supply, consistent cup, balanced body.',
      badge: 'Commercial Base',
    },
    {
      name: 'Robusta Cherry AA',
      tagline: 'Natural (sun-dried) Robusta premium',
      type: 'Robusta · Natural',
      screen: '18/64 inch',
      cupScore: '78 to 82',
      defects: 'Max 5% broken',
      moisture: '10% to 12%',
      desc: 'Premium sun-dried Robusta with full-bodied, earthy flavour and pronounced sweetness. Strong crema, low acidity. Popular in Mediterranean espresso.',
      badge: 'Natural Robusta',
    },
    {
      name: 'Robusta Cherry AB',
      tagline: 'Commercial natural Robusta',
      type: 'Robusta · Natural',
      screen: '15/64 to 17/64 inch',
      cupScore: '76 to 80',
      defects: 'Max 8% broken',
      moisture: '10% to 12%',
      desc: 'High-volume natural-process Robusta combining A and B sizes. The workhorse Robusta for instant coffee manufacture and large-scale commercial blends.',
      badge: 'High Volume',
    },
  ];

  // Complete Indian Coffee Board Reference Table Data
  const coffeeBoardTable = [
    {
      section: 'Arabica · Plantation (Washed / Wet Processed)', rows: [
        { code: 'PL AAA', name: 'Plantation AAA (Mysore Nuggets)', screen: '19/64" (7.5 mm+)', cup: '83-86 cup', use: 'Specialty single-origin, premium retail' },
        { code: 'PL AA', name: 'Plantation AA', screen: '18/64" (7.1 mm)', cup: '83-86 cup', use: 'Premium retail, specialty blends' },
        { code: 'PL A', name: 'Plantation A', screen: '17/64" (6.75 mm)', cup: '82-85 cup', use: 'Most exported, versatile blends' },
        { code: 'PL B', name: 'Plantation B', screen: '16/64" (6.35 mm)', cup: '80-83 cup', use: 'Commercial blends, value retail' },
        { code: 'PL C', name: 'Plantation C', screen: '15/64" (5.95 mm)', cup: '78-82 cup', use: 'Bulk commercial' },
        { code: 'PL PB', name: 'Plantation Peaberry', screen: '6.5 mm+', cup: '84-87 cup', use: 'Specialty single-origin' },
        { code: 'PL PB Bold', name: 'Plantation Peaberry Bold', screen: '7 mm+', cup: '85-88 cup', use: 'Premium specialty' },
        { code: 'PL Bulk', name: 'Plantation Bulk', screen: 'Mixed sizes', cup: '75-79 cup', use: 'Industrial blends, instant' },
      ]
    },
    {
      section: 'Arabica · Cherry (Natural / Dry Processed)', rows: [
        { code: 'AC AAA', name: 'Mysore Nuggets Extra Bold', screen: '19/64" (7.5 mm+)', cup: '83-86 cup', use: 'Flagship specialty Arabica' },
        { code: 'AC AA', name: 'Arabica Cherry AA', screen: '18/64"', cup: '82-85 cup', use: 'Espresso blends, premium roasting' },
        { code: 'AC A', name: 'Arabica Cherry A', screen: '17/64"', cup: '80-83 cup', use: 'Commercial blends, body component' },
        { code: 'AC B', name: 'Arabica Cherry B', screen: '16/64"', cup: '78-81 cup', use: 'Value blends' },
        { code: 'AC PB', name: 'Arabica Cherry Peaberry', screen: '6.5 mm+', cup: '82-86 cup', use: 'Specialty natural peaberry' },
        { code: 'AC Bulk', name: 'Arabica Cherry Bulk', screen: 'Mixed sizes', cup: '75-79 cup', use: 'Industrial blends, instant' },
      ]
    },
    {
      section: 'Robusta · Parchment (Washed / Wet Processed)', rows: [
        { code: 'PR AAA', name: 'Robusta Parchment AAA', screen: '19/64" (7.5 mm+)', cup: '80-83 cup', use: 'Premium espresso blends' },
        { code: 'PR AA', name: 'Robusta Parchment AA', screen: '18/64"', cup: '79-82 cup', use: 'Premium espresso component' },
        { code: 'PR A', name: 'Robusta Kaapi Royale', screen: '17/64"', cup: '78-82 cup', use: 'Flagship washed Robusta' },
        { code: 'PR AB', name: 'Robusta Parchment AB', screen: '15/64 to 17/64"', cup: '76-80 cup', use: 'Commercial espresso, instant base' },
        { code: 'PR B', name: 'Robusta Parchment B', screen: '14/64 to 15/64"', cup: '75-78 cup', use: 'Commercial blends' },
        { code: 'PR C', name: 'Robusta Parchment C', screen: 'Below 14/64"', cup: '72-77 cup', use: 'Value blends, industrial' },
        { code: 'PR PB Bold', name: 'Robusta Parchment Peaberry Bold', screen: '7 mm+', cup: '80-83 cup', use: 'Specialty Robusta peaberry' },
        { code: 'PR PB', name: 'Robusta Parchment Peaberry', screen: '6 mm+', cup: '78-81 cup', use: 'Specialty espresso component' },
      ]
    },
    {
      section: 'Robusta · Cherry (Natural / Dry Processed)', rows: [
        { code: 'RC AAA', name: 'Robusta Cherry AAA', screen: '19/64" (7.5 mm+)', cup: '79-82 cup', use: 'Premium natural Robusta' },
        { code: 'RC AA', name: 'Robusta Cherry AA', screen: '18/64"', cup: '78-82 cup', use: 'Natural espresso, body builder' },
        { code: 'RC A', name: 'Robusta Cherry A', screen: '17/64"', cup: '76-80 cup', use: 'Mid-tier commercial' },
        { code: 'RC AB', name: 'Robusta Cherry AB', screen: '15/64 to 17/64"', cup: '76-80 cup', use: 'Commercial workhorse, instant' },
        { code: 'RC B', name: 'Robusta Cherry B', screen: '14/64 to 15/64"', cup: '74-78 cup', use: 'Industrial blends' },
      ]
    }
  ];

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-navy-dark text-white py-14 sm:py-16 meridian-grid-dark text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Export Commodities & Material Catalogue
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white mb-4">
            Master Guitar Components & Timber Catalogue
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-3xl leading-relaxed mx-auto">
            Direct B2B exporter of master-grade luthier tonewoods (Rosewood & Ebony fingerboards, bridges, back & side sets, headstocks, bowl blanks, and knife handles).
          </p>
        </div>
      </section>

      {/* Primary Category Filter Pills */}
      <section className="py-2.5 sm:py-5 bg-surface-bg border-b border-border-line sticky top-0 lg:top-[88px] z-30 backdrop-blur-md bg-surface-bg/95 transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-center gap-1.5 sm:gap-3 overflow-x-auto no-scrollbar py-0.5 px-0.5">
            {[
              { id: 'all', name: 'All Products' },
              { id: 'tonewood', name: 'Guitar Parts & Tonewoods' },
              { id: 'coffee', name: 'Indian Coffee Division' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`whitespace-nowrap px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-200 flex-shrink-0 ${
                  filter === btn.id
                    ? 'bg-navy-primary text-white shadow-sm ring-1 sm:ring-2 ring-cyan-accent/50'
                    : 'bg-white border border-border-line text-slate-body hover:bg-azure-light active:scale-95'
                }`}
              >
                <span>{btn.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GUITAR PARTS INTRO & INFORMATION FEATURE SECTION */}
      {(filter === 'all' || filter === 'tonewood') && (
        <section className="py-12 sm:py-16 bg-azure-light/30 border-b border-border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-border-line rounded-2xl sm:rounded-asymmetric p-4 sm:p-8 lg:p-12 shadow-sm">
              <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-10">
                <span className="font-headline text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                  Luthier Science & Timber Heritage
                </span>
                <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl text-navy-dark font-bold mb-3 sm:mb-4 leading-tight">
                  Master-Grade Guitar Tonewoods & Precision Wooden Components
                </h2>
                <p className="text-xs sm:text-base text-muted-text leading-relaxed">
                  Chandys Global Exports is an authoritative B2B supply house of master-grade acoustic guitar tonewoods, guitar part blanks, and fine woodturnery stock. Sourced ethically from sustainable forestry reserves in South India, our timber selection specializes in premier <strong>Indian Rosewood (Dalbergia latifolia)</strong> and jet-black <strong>Ebony (Diospyros ebeneum)</strong>. Every component is sawn, seasoned, and lab-calibrated for exacting luthier workshops and commercial instrument factories worldwide.
                </p>
              </div>

              {/* 4 Technical Pillars 2x2 Grid on Mobile, 4 Columns on Desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 pt-4 border-t border-border-line">
                
                {/* Pillar 1 */}
                <div className="bg-surface-bg p-3 sm:p-5 rounded-xl border border-border-line/70 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-azure-light text-navy-primary rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-accent" />
                    </div>
                    <h3 className="font-headline text-xs sm:text-base text-navy-dark font-bold mb-1 leading-tight">
                      90° Quarter-Sawn Cut
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-text leading-snug">
                      Strict vertical grain cut ensuring 5,200+ m/s acoustic velocity & zero neck twist under tension.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-surface-bg p-3 sm:p-5 rounded-xl border border-border-line/70 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-azure-light text-navy-primary rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-accent" />
                    </div>
                    <h3 className="font-headline text-xs sm:text-base text-navy-dark font-bold mb-1 leading-tight">
                      8–10% Kiln Drying
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-text leading-snug">
                      Controlled kiln seasoning to equilibrium moisture, preventing warping, checking, or fret sprout.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-surface-bg p-3 sm:p-5 rounded-xl border border-border-line/70 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-azure-light text-navy-primary rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-accent" />
                    </div>
                    <h3 className="font-headline text-xs sm:text-base text-navy-dark font-bold mb-1 leading-tight">
                      CITES & Legal CoC
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-text leading-snug">
                      100% legal harvest verification with Vriksh timber passports and CITES export clearance.
                    </p>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="bg-surface-bg p-3 sm:p-5 rounded-xl border border-border-line/70 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-azure-light text-navy-primary rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-accent" />
                    </div>
                    <h3 className="font-headline text-xs sm:text-base text-navy-dark font-bold mb-1 leading-tight">
                      Ultrasonic Testing
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-text leading-snug">
                      Pulse density calibration testing guarantees structural acoustic resonance before export dispatch.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* MAIN SECTION 1: GUITAR PARTS & TONEWOOD CATALOGUE (CLEAN 2x2 MOBILE / 3x3 DESKTOP GRID) */}
      {(filter === 'all' || filter === 'tonewood') && (
        <section className="py-10 sm:py-16 meridian-grid-pattern">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
              <span className="font-headline text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                Master Luthier Inventory (9 Products)
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl text-navy-dark font-bold leading-tight">
                Rosewood & Ebony Component Catalogue
              </h2>
              <p className="text-xs sm:text-base text-muted-text mt-2 leading-relaxed">
                Explore our full catalogue of luthier guitar components, turnery blanks, and sliced veneers below.
              </p>
            </div>

            {/* NEAT 2-COL MOBILE / 3-COL DESKTOP PRODUCT CARDS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white border border-border-line rounded-xl md:rounded-asymmetric p-2.5 md:p-6 lg:p-7 hover:border-cyan-accent hover:shadow-hover-card transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Widescreen Boxed Image Container (Clickable) */}
                    <Link
                      to={`/products/${p.slug}`}
                      className="block h-28 sm:h-36 md:h-52 w-full overflow-hidden rounded-lg mb-2.5 md:mb-5 bg-alt-bg border border-border-line/70 cursor-pointer relative"
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Desktop Hover Details Badge */}
                      <span className="hidden md:inline-block absolute bottom-2 right-2 bg-navy-dark/90 backdrop-blur-sm text-cyan-accent text-[11px] font-mono font-bold px-2.5 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details →
                      </span>
                    </Link>

                    {/* Desktop Header Badges */}
                    <div className="hidden md:flex items-center justify-between mb-3">
                      <span className="bg-azure-light text-navy-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded">
                        {p.grade}
                      </span>
                    </div>

                    {/* Product Title (Clickable) */}
                    <h3 className="font-headline text-xs sm:text-sm md:text-xl lg:text-2xl text-navy-dark font-bold leading-snug mb-0.5 md:mb-2">
                      <Link
                        to={`/products/${p.slug}`}
                        className="hover:text-cyan-accent transition-colors line-clamp-1 md:line-clamp-none"
                        title={p.title}
                      >
                        {p.title}
                      </Link>
                    </h3>

                    {/* Botanical Subtitle */}
                    <span className="text-[10px] sm:text-xs font-mono text-cyan-accent block mb-1.5 md:mb-2 truncate">
                      {p.botanicalName}
                    </span>

                    {/* Mobile Product Description Paragraph */}
                    <p className="md:hidden text-[10px] sm:text-xs text-muted-text leading-snug mb-3 line-clamp-3">
                      {p.desc}
                    </p>

                    {/* Desktop Product Description */}
                    <p className="hidden md:block text-xs sm:text-sm text-muted-text leading-relaxed mb-5">
                      {p.desc}
                    </p>

                    {/* Desktop Full 2x2 Specifications Grid */}
                    <div className="hidden md:grid bg-alt-bg p-3.5 sm:p-4 rounded-lg text-xs grid-cols-2 gap-2 mb-5 border border-border-line/80">
                      {p.specs.map((s, idx) => (
                        <div key={idx} className="bg-white p-2 rounded border border-border-line/50 flex flex-col">
                          <span className="text-muted-text text-[10px] uppercase tracking-wider font-medium">{s.label}</span>
                          <strong className="text-slate-body font-mono font-semibold text-xs truncate mt-0.5">{s.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Action CTA Button */}
                  <div className="md:hidden pt-2 border-t border-border-line">
                    <Link
                      to={`/products/${p.slug}`}
                      className="w-full bg-navy-primary hover:bg-cyan-accent text-white font-bold text-[10px] uppercase tracking-wider py-2 rounded-lg transition-all text-center flex items-center justify-center gap-1 shadow-sm active:scale-95"
                    >
                      <span>View Specs</span>
                    </Link>
                  </div>

                  {/* Desktop Action CTA Buttons (Dual Buttons) */}
                  <div className="hidden md:flex pt-4 border-t border-border-line flex-row gap-2.5">
                    <Link
                      to={`/products/${p.slug}`}
                      className="flex-1 border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all text-center flex items-center justify-center"
                    >
                      <span>Details & Specs</span>
                    </Link>
                    <button
                      onClick={() => openRfqDrawer('tonewood')}
                      className="flex-1 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* MAIN SECTION 2: DEDICATED INDIAN COFFEE EXPORT DIVISION (ONLY VISIBLE WHEN FILTER === 'COFFEE') */}
      {filter === 'coffee' && (
        <div className="bg-white border-t border-border-line">

          {/* COFFEE SECTION INTRO & INDUSTRY FACTS */}
          <section className="py-16 bg-alt-bg border-b border-border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                    India · 7th Largest Coffee Exporter Globally
                  </span>
                  <h2 className="font-headline text-3xl sm:text-5xl font-bold text-navy-dark leading-tight mb-6">
                    Indian Coffee Export Division
                  </h2>
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6">
                    India produces approximately <strong>350,000 to 370,000 tonnes of coffee annually</strong>, exporting around 70% to over 60 countries including Italy, Germany, Belgium, Russia, the United States, and the Middle East. The Western Ghats coffee belt (Coorg, Chikmagalur, Wayanad) sits at 700 to 1,800 metres with rich volcanic soil and a unique shade cultivation tradition under silver oak canopy.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border-line pt-6">
                    <div>
                      <div className="font-headline text-2xl font-bold text-navy-primary">7th</div>
                      <div className="text-[11px] font-semibold text-muted-text uppercase">Global Export Rank</div>
                    </div>
                    <div>
                      <div className="font-headline text-2xl font-bold text-cyan-accent">370K MT</div>
                      <div className="text-[11px] font-semibold text-muted-text uppercase">Annual Production</div>
                    </div>
                    <div>
                      <div className="font-headline text-2xl font-bold text-navy-dark">~70%</div>
                      <div className="text-[11px] font-semibold text-muted-text uppercase">Export Share</div>
                    </div>
                    <div>
                      <div className="font-headline text-2xl font-bold text-navy-primary">1,800m</div>
                      <div className="text-[11px] font-semibold text-muted-text uppercase">Max Altitude</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-navy-dark text-white p-6 sm:p-8 rounded-asymmetric meridian-grid-dark border border-white/10 shadow-lg">
                    <span className="inline-block bg-cyan-accent text-navy-dark font-bold text-xs uppercase tracking-wider px-3 py-1 rounded mb-4">
                      Coffee Board & ICO Registered
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-white mb-4">
                      Standardized Indian Coffee Classifications
                    </h3>
                    <p className="text-xs sm:text-sm text-azure-light/90 leading-relaxed mb-6">
                      Every export consignment is Q-graded, SCA cup scored, and packed in GrainPro-lined 60kg jute bags for moisture-proof transit. Sample-first policy with estate traceability.
                    </p>
                    <button
                      onClick={() => openRfqDrawer('coffee')}
                      className="w-full py-3.5 bg-cyan-accent hover:bg-cyan-hover text-navy-dark font-bold text-xs uppercase tracking-wider rounded transition-all shadow"
                    >
                      Request Coffee Export Pricing & Samples
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3 COFFEE BEAN PRODUCT FORMAT LINES */}
          <section className="py-16 meridian-grid-pattern border-b border-border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                  Product Line Formats
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl text-navy-dark">
                  3 Core Coffee Product Formats
                </h2>
                <p className="text-xs sm:text-sm text-muted-text mt-2">
                  From raw green beans for international roasters to custom-roasted whole beans and 100% pure instant coffee.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Product 01: Green Coffee */}
                <div className="bg-white border border-border-line p-6 sm:p-8 rounded-asymmetric hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="h-48 overflow-hidden rounded-lg mb-5 bg-alt-bg border border-border-line/70">
                      <img
                        src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80"
                        alt="Unroasted Raw Green Coffee Beans"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                      Product 01 · Raw Green Coffee
                    </span>
                    <h3 className="font-headline text-2xl text-navy-dark mb-2 font-bold">Green Coffee Beans</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                      Hand-harvested raw unroasted green coffee from estates at 800 to 1,500m altitude in Coorg & Chikmagalur. Available in Plantation A/AA/PB and Robusta Parchment/Cherry.
                    </p>
                    <div className="bg-alt-bg p-4 rounded text-xs space-y-2 mb-6 border border-border-line/60">
                      <div className="flex justify-between"><span className="text-muted-text">Varieties:</span><strong className="text-slate-body">Arabica & Robusta</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">Processing:</span><strong className="text-slate-body">Washed / Natural / Honey</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">Moisture:</span><strong className="text-slate-body">10% to 12% Target</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">MOQ:</span><strong className="text-slate-body">1 x 20ft FCL (18-20 MT)</strong></div>
                    </div>
                  </div>
                  <button onClick={() => openRfqDrawer('coffee')} className="w-full bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition-all">
                    Request Green Coffee Quote
                  </button>
                </div>

                {/* Product 02: Roasted Coffee */}
                <div className="bg-white border border-border-line p-6 sm:p-8 rounded-asymmetric hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="h-48 overflow-hidden rounded-lg mb-5 bg-alt-bg border border-border-line/70">
                      <img
                        src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
                        alt="Freshly Drum-Roasted Specialty Coffee Beans"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                      Product 02 · Drum Roasted Coffee
                    </span>
                    <h3 className="font-headline text-2xl text-navy-dark mb-2 font-bold">Roasted Coffee Beans</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                      Drum-roasted to your exact profile within 5 days of approval, nitrogen-flushed in valve bags for maximum freshness. Custom Agtron levels from 25 (dark) to 70 (light).
                    </p>
                    <div className="bg-alt-bg p-4 rounded text-xs space-y-2 mb-6 border border-border-line/60">
                      <div className="flex justify-between"><span className="text-muted-text">Base:</span><strong className="text-slate-body">100% Arabica / Robusta / Blend</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">Roast Levels:</span><strong className="text-slate-body">Light / Medium / Dark</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">Shelf Life:</span><strong className="text-slate-body">12 to 18 Months</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">MOQ:</span><strong className="text-slate-body">200 kg Per Roast Profile</strong></div>
                    </div>
                  </div>
                  <button onClick={() => openRfqDrawer('coffee')} className="w-full bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition-all">
                    Request Roasted Quote
                  </button>
                </div>

                {/* Product 03: Instant Coffee */}
                <div className="bg-white border border-border-line p-6 sm:p-8 rounded-asymmetric hover:border-cyan-accent hover:shadow-hover-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="h-48 overflow-hidden rounded-lg mb-5 bg-alt-bg border border-border-line/70">
                      <img
                        src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80"
                        alt="Pure Soluble Agglomerated Instant Coffee Granules"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="inline-block bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded mb-3">
                      Product 03 · Soluble Instant Coffee
                    </span>
                    <h3 className="font-headline text-2xl text-navy-dark mb-2 font-bold">Instant Coffee</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                      Manufactured from 100% Karnataka coffee blends. Spray-dried smooth granules or agglomerated crystals with 100% solubility in hot & cold water within 5 seconds.
                    </p>
                    <div className="bg-alt-bg p-4 rounded text-xs space-y-2 mb-6 border border-border-line/60">
                      <div className="flex justify-between"><span className="text-muted-text">Format:</span><strong className="text-slate-body">Spray Dried / Agglomerated</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">Moisture:</span><strong className="text-slate-body">Below 4.0%</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">Shelf Life:</span><strong className="text-slate-body">24 Months Sealed</strong></div>
                      <div className="flex justify-between"><span className="text-muted-text">MOQ:</span><strong className="text-slate-body">500 kg Per Batch</strong></div>
                    </div>
                  </div>
                  <button onClick={() => openRfqDrawer('coffee')} className="w-full bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition-all">
                    Request Instant Quote
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* 9 COMMERCIAL GRADES OF INDIAN COFFEE (3x3 MATRIX ON MOBILE / RICH CARDS ON DESKTOP) */}
          <section className="py-10 sm:py-16 bg-white border-b border-border-line">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
                <span className="font-headline text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                  Export Grade Portfolio
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-navy-dark font-bold leading-tight">
                  9 Commercial Grades of Indian Coffee
                </h2>
                <p className="text-xs sm:text-sm text-muted-text mt-2">
                  The primary export grades requested by international roasters and importers. All sample-first with SCA cup scoring before dispatch.
                </p>
              </div>

              {/* MOBILE 3x3 MATRIX GRID */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:hidden">
                {coffeeGrades.map((g, idx) => (
                  <div
                    key={idx}
                    onClick={() => openRfqDrawer('coffee')}
                    className="bg-white border border-slate-200/90 hover:border-cyan-accent active:scale-[0.97] rounded-xl p-2 flex flex-col justify-between cursor-pointer transition-all shadow-[0_2px_6px_rgba(0,0,0,0.03)]"
                  >
                    <div>
                      {/* Grade Title */}
                      <h4 className="font-headline text-[10px] sm:text-[11px] font-bold text-navy-dark leading-snug line-clamp-1">
                        {g.name}
                      </h4>

                      {/* Single Line Subtitle */}
                      <p className="text-[7.5px] sm:text-[8px] text-cyan-accent font-medium leading-tight truncate mb-2">
                        {g.tagline}
                      </p>

                      {/* 2x2 Specifications Grid */}
                      <div className="grid grid-cols-2 gap-1 mb-2">
                        <div className="bg-slate-50 border border-slate-100 rounded-md p-1 text-center">
                          <span className="text-[6.5px] font-semibold uppercase tracking-tight text-slate-400 block leading-tight">Screen</span>
                          <span className="text-[8px] font-mono font-bold text-navy-dark truncate block leading-tight">{g.screen.replace(' inch', '').replace(' to ', '-')}</span>
                        </div>
                        <div className="bg-azure-light/60 border border-cyan-accent/20 rounded-md p-1 text-center">
                          <span className="text-[6.5px] font-semibold uppercase tracking-tight text-navy-primary block leading-tight">SCA Cup</span>
                          <span className="text-[8px] font-mono font-bold text-cyan-accent truncate block leading-tight">{g.cupScore.replace(' to ', '-')}</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 rounded-md p-1 text-center">
                          <span className="text-[6.5px] font-semibold uppercase tracking-tight text-slate-400 block leading-tight">Defects</span>
                          <span className="text-[7.5px] font-mono font-medium text-slate-700 truncate block leading-tight">{g.defects.replace(' broken', '')}</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 rounded-md p-1 text-center">
                          <span className="text-[6.5px] font-semibold uppercase tracking-tight text-slate-400 block leading-tight">Moist.</span>
                          <span className="text-[7.5px] font-mono font-medium text-slate-700 truncate block leading-tight">{g.moisture.replace(' to ', '-')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Action Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openRfqDrawer('coffee');
                      }}
                      className="w-full bg-navy-primary hover:bg-cyan-accent text-white font-bold text-[8px] uppercase tracking-wider py-1.5 rounded-lg transition-all text-center shadow-xs"
                    >
                      Quote
                    </button>
                  </div>
                ))}
              </div>

              {/* DESKTOP RICH CARDS GRID (3x3 on LG, 2-col on MD) */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeGrades.map((g, idx) => (
                  <div key={idx} className="bg-alt-bg border border-border-line rounded p-6 hover:border-cyan-accent transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-azure-light text-navy-primary font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                          {g.type}
                        </span>
                        <span className="bg-cyan-accent/20 text-navy-dark font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                          {g.badge}
                        </span>
                      </div>

                      <h3 className="font-headline text-xl text-navy-dark font-bold mb-1">{g.name}</h3>
                      <div className="text-xs font-semibold text-cyan-accent mb-3">{g.tagline}</div>
                      <p className="text-xs text-muted-text leading-relaxed mb-4">{g.desc}</p>

                      <div className="bg-white p-3 rounded text-xs space-y-1.5 mb-4 border border-border-line/80">
                        <div className="flex justify-between"><span className="text-muted-text">Screen Size:</span><strong className="text-slate-body">{g.screen}</strong></div>
                        <div className="flex justify-between"><span className="text-muted-text">SCA Cup Score:</span><strong className="text-cyan-accent font-bold">{g.cupScore}</strong></div>
                        <div className="flex justify-between"><span className="text-muted-text">Defect Standard:</span><strong className="text-slate-body">{g.defects}</strong></div>
                        <div className="flex justify-between"><span className="text-muted-text">Moisture Content:</span><strong className="text-slate-body">{g.moisture}</strong></div>
                      </div>
                    </div>

                    <button
                      onClick={() => openRfqDrawer('coffee')}
                      className="w-full border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all"
                    >
                      Inquire Grade Specs
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* EVERY INDIAN COFFEE BOARD GRADE IN ONE TABLE */}
          <section className="py-16 meridian-grid-pattern border-b border-border-line">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                  Official Coffee Board Classification
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl text-navy-dark">
                  Every Indian Coffee Board Grade (Complete Reference Table)
                </h2>
                <p className="text-xs sm:text-sm text-muted-text mt-2">
                  Comprehensive reference table covering Arabica and Robusta across Washed (Plantation/Parchment) and Natural (Cherry) processing methods.
                </p>
              </div>

              <div className="bg-white border border-border-line rounded-xl shadow-sm overflow-hidden">
                <div className="sm:hidden bg-azure-light/60 px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-navy-primary border-b border-border-line">
                  ↔ Swipe sideways to view full grade columns
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-navy-dark text-white font-headline text-xs uppercase tracking-wider">
                        <th className="p-3.5 sm:p-4 border-b border-white/10">Grade Code</th>
                        <th className="p-3.5 sm:p-4 border-b border-white/10">Trade Name</th>
                        <th className="p-3.5 sm:p-4 border-b border-white/10">Screen Size</th>
                        <th className="p-3.5 sm:p-4 border-b border-white/10">Typical Cup Score</th>
                        <th className="p-3.5 sm:p-4 border-b border-white/10">Target Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-line">
                      {coffeeBoardTable.map((sec, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <tr className="bg-azure-light/60 font-bold text-navy-primary uppercase text-[11px]">
                            <td colSpan="5" className="px-4 py-2.5 tracking-wider">
                              {sec.section}
                            </td>
                          </tr>
                          {sec.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-alt-bg/80 transition-colors">
                              <td className="p-3.5 font-bold font-mono text-cyan-accent">{row.code}</td>
                              <td className="p-3.5 font-semibold text-slate-body">{row.name}</td>
                              <td className="p-3.5 text-muted-text">{row.screen}</td>
                              <td className="p-3.5 font-bold text-navy-primary">{row.cup}</td>
                              <td className="p-3.5 text-muted-text">{row.use}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* TECHNICAL SPECIFICATIONS TESTED PER SHIPMENT (HIDDEN ON MOBILE, VISIBLE ON DESKTOP) */}
          <section className="hidden md:block py-16 bg-navy-dark text-white meridian-grid-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
                  Quality Control Protocols
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl text-white">
                  Technical Specifications Tested Per Shipment
                </h2>
                <p className="text-xs sm:text-sm text-azure-light/80 mt-2">
                  Every export container is tested at NABL accredited coffee testing laboratories prior to issuance of phytosanitary certificates and container seal loading.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded">
                  <div className="text-cyan-accent font-headline text-lg font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 1. Moisture Content
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Strictly calibrated to <strong>10.0% – 12.0%</strong> target moisture to prevent mold development or bean shrinkage during ocean transit.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded">
                  <div className="text-cyan-accent font-headline text-lg font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 2. Defect Count & Blacks %
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Full triage inspection for black beans, sour beans, chips, and shell defects in strict accordance with Coffee Board export norms.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded">
                  <div className="text-cyan-accent font-headline text-lg font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 3. Screen Size Retention
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Mechanical sieve grading ensuring <strong>90%+ retention</strong> on target screen sizes (Screen 19/18/17/16/15 inch).
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded">
                  <div className="text-cyan-accent font-headline text-lg font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 4. SCA Cupping Score
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Certified Q-Grader cupping evaluation for aroma, acidity, body, sweetness, clean cup, and balance prior to dispatch.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded">
                  <div className="text-cyan-accent font-headline text-lg font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 5. Bulk Density & Moisture Barrier
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Uniform bulk density (g/L) testing and hermetic <strong>GrainPro 60kg jute bag packaging</strong> for maximum voyage integrity.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded">
                  <div className="text-cyan-accent font-headline text-lg font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 6. Quarantine & ICO Documentation
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Complete Phytosanitary certification, Methyl Bromide / Heat Fumigation stamp, Certificate of Origin, and ICO Marks.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      )}
    </div>
  );
}
