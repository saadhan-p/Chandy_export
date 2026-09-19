import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRfq } from '../context/RfqContext';
import { ShoppingBag, Send } from 'lucide-react';

export default function Products() {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState('all');
  const { openRfqDrawer, addToast } = useRfq();

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setFilter(cat);
  }, [searchParams]);

  const products = [
    {
      id: 1,
      category: 'tonewood',
      title: 'Indian Rosewood Guitar Fingerboards',
      grade: 'Master Grade AAA',
      hsCode: 'HS 4407.99',
      img: '/assets/tonewoods_macro.jpg',
      desc: 'Kiln-dried Dalbergia latifolia guitar fingerboard blanks. Deep dark purple and chocolate grain figure.',
      specs: [
        { label: 'Target Moisture', value: '8% – 10% Kiln Dried' },
        { label: 'Standard Dimensions', value: '520 x 70 x 9 mm' },
        { label: 'Est. FOB Range', value: '$18 – $35 / Set' },
      ],
    },
    {
      id: 2,
      category: 'tonewood',
      title: 'Acoustic Guitar Ebony Bridges & Blanks',
      grade: 'Jet Black AA',
      hsCode: 'HS 4407.99',
      img: '/assets/globe_tonewoods.jpg',
      desc: 'Dense, jet-black ebony acoustic guitar bridge blanks sanded for premium acoustic production lines.',
      specs: [
        { label: 'Density Rating', value: '1,150 kg/m³' },
        { label: 'Surface Quality', value: 'Sanded 400-Grit' },
        { label: 'Est. FOB Range', value: '$12 – $22 / Piece' },
      ],
    },
    {
      id: 3,
      category: 'coffee',
      title: 'Kodagu Plantation AA Arabica (Green)',
      grade: 'SCA 85.5 Cupping',
      hsCode: 'HS 0901.11',
      img: '/assets/specialty_coffee.jpg',
      desc: 'Single-estate shade-grown Arabica green coffee beans from Coorg (Kodagu). Notes of dark chocolate & spice.',
      specs: [
        { label: 'Screen Size', value: 'Screen 17/18 (AA Grade)' },
        { label: 'Packaging', value: '60kg GrainPro Jute Sacks' },
        { label: 'Est. FOB Range', value: '$5,200 – $6,400 / MT' },
      ],
    },
    {
      id: 4,
      category: 'coffee',
      title: 'Whole Roasted Kodagu Reserve Coffee',
      grade: 'Medium Dark Roast',
      hsCode: 'HS 0901.21',
      img: '/assets/specialty_coffee.jpg',
      desc: 'Artisan micro-batch whole roasted Arabica & Robusta coffee packed in nitrogen-flushed valve bags.',
      specs: [
        { label: 'Roast Level', value: 'City+ Medium Roast' },
        { label: 'Shelf Life', value: '12 Months Nitrogen Flushed' },
        { label: 'Est. FOB Range', value: '$9.50 – $14.00 / kg' },
      ],
    },
    {
      id: 5,
      category: 'veneer',
      title: 'Exotic Indian Teak Architectural Veneers',
      grade: 'Crown Cut AA',
      hsCode: 'HS 4408.90',
      img: '/assets/globe_tonewoods.jpg',
      desc: 'Precision-sliced natural Indian Teak decorative veneers for luxury architectural interiors & joinery.',
      specs: [
        { label: 'Thickness', value: '0.55mm Micro-Sliced' },
        { label: 'Sheet Length', value: '2,500mm – 3,200mm' },
        { label: 'Est. FOB Range', value: '$3.80 – $6.50 / m²' },
      ],
    },
    {
      id: 6,
      category: 'tonewood',
      title: 'Book-Matched Acoustic Soundboard Sets',
      grade: 'Flamed Reserve AAA',
      hsCode: 'HS 4407.99',
      img: '/assets/hero_banner.jpg',
      desc: 'Quarter-sawn, book-matched acoustic guitar top and back soundboard sets with extraordinary flame figure.',
      specs: [
        { label: 'Grain Cut', value: 'Strict 90° Quarter-Sawn' },
        { label: 'Acoustic Velocity', value: '5,100+ m/s' },
        { label: 'Est. FOB Range', value: '$45 – $85 / Book Set' },
      ],
    },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div>
      {/* Page Banner */}
      <section className="bg-navy-dark text-white py-14 meridian-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent mb-2 block">
            Export Commodities & Specifications
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mb-4">
            Products & Material Catalogue
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl">
            Browse our full inventory of lab-certified acoustic guitar tonewood sets, Kodagu estate coffees, and sliced hardwood veneers.
          </p>
        </div>
      </section>

      {/* Filter & Catalogue */}
      <section className="py-16 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', name: 'All Portfolios' },
              { id: 'tonewood', name: 'Musical Tonewoods' },
              { id: 'coffee', name: 'Kodagu Specialty Coffee' },
              { id: 'veneer', name: 'Architectural Veneers' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-6 py-2.5 rounded font-bold text-xs uppercase tracking-wider transition-all ${
                  filter === btn.id
                    ? 'bg-navy-primary text-white shadow'
                    : 'bg-white border border-border-line text-slate-body hover:bg-azure-light'
                }`}
              >
                {btn.name}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div key={p.id} className="bg-white border border-border-line rounded-asymmetric p-6 hover:border-cyan-accent hover:shadow-hover-card transition-all">
                <div className="h-52 overflow-hidden rounded mb-5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-azure-light text-navy-primary font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded">
                    {p.grade}
                  </span>
                  <span className="text-xs font-bold text-cyan-accent">{p.hsCode}</span>
                </div>

                <h3 className="font-headline text-xl text-navy-dark mb-2">{p.title}</h3>
                <p className="text-xs text-muted-text leading-relaxed mb-4">{p.desc}</p>

                <div className="bg-alt-bg p-3.5 rounded text-xs space-y-2 mb-6">
                  {p.specs.map((s, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-muted-text">{s.label}:</span>
                      <strong className="text-slate-body">{s.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => addToast(`Sample request for "${p.title}" added! Click Request Quote to finalize.`)}
                    className="flex-1 border border-navy-primary text-navy-primary hover:bg-azure-light font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all"
                  >
                    Order Sample
                  </button>
                  <button 
                    onClick={() => openRfqDrawer(p.category)}
                    className="flex-1 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-all"
                  >
                    RFQ Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
