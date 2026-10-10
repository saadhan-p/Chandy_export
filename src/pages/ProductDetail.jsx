import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  MapPin, 
  Trees, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Package, 
  Layers, 
  Gauge, 
  Flame, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { productsData, getProductBySlug } from '../data/productsData';
import { useRfq } from '../context/RfqContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { openRfqDrawer } = useRfq();

  const product = getProductBySlug(slug) || productsData[0];

  // Related products (excluding the current one)
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden pb-16">
      
      {/* Top Header & Breadcrumb Banner */}
      <section className="bg-navy-dark text-white py-8 sm:py-10 meridian-grid-dark border-b border-border-line/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-accent hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Product Catalogue</span>
            </button>

            <nav className="flex items-center gap-2 text-xs text-white/60 font-medium">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-white">Catalogue</Link>
              <span>/</span>
              <span className="text-cyan-accent">{product.title}</span>
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/30">
              <Sparkles className="w-3 h-3" /> {product.grade}
            </span>
            <span className="text-xs font-mono text-white/70">
              Botanical: <em className="text-white italic">{product.botanicalName}</em>
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            {product.title}
          </h1>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section className="py-10 sm:py-14 meridian-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Premium Image Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-border-line rounded-3xl p-3 shadow-md overflow-hidden group">
                <div className="relative h-[360px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-alt-bg">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-navy-dark/90 backdrop-blur-sm text-cyan-accent px-3 py-1.5 rounded-xl text-xs font-mono font-bold border border-cyan-accent/30">
                    {product.grade}
                  </div>
                </div>
              </div>

              {/* Provenance & Sourcing Badge */}
              <div className="bg-white border border-border-line rounded-2xl p-4 flex items-center gap-3 text-xs">
                <MapPin className="w-5 h-5 text-cyan-accent flex-shrink-0" />
                <div>
                  <span className="font-bold text-navy-dark block">Harvest & Milling Origin:</span>
                  <span className="text-muted-text">{product.origin}</span>
                </div>
              </div>

              {/* Supply Chain Verification */}
              <div className="bg-azure-light/60 border border-cyan-accent/30 rounded-2xl p-4 flex items-center gap-3 text-xs text-navy-dark">
                <ShieldCheck className="w-5 h-5 text-cyan-accent flex-shrink-0" />
                <div>
                  <span className="font-bold block">CITES & Legal Chain-of-Custody</span>
                  <span className="text-slate-600 text-[11px]">100% verified legal export documentation with Vriksh timber passports.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Direct Quotation (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Overview & Description */}
              <div className="bg-white border border-border-line rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-line">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent font-bold">
                      Material Profile
                    </span>
                    <h2 className="font-headline text-2xl font-bold text-navy-dark">
                      Product Overview
                    </h2>
                  </div>
                  <span className="px-3 py-1 bg-surface-bg rounded-lg text-xs font-mono font-bold text-slate-700 border border-border-line">
                    {product.commonName}
                  </span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {product.detailedDesc}
                </p>

                {/* Key Quality Highlights */}
                <div className="pt-3">
                  <h3 className="text-xs font-bold text-navy-dark uppercase tracking-wider mb-3">
                    Key Material Highlights:
                  </h3>
                  <div className="space-y-2">
                    {product.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-6 border-t border-border-line flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openRfqDrawer(product.category)}
                    className="flex-1 py-3.5 px-6 bg-cyan-accent hover:bg-cyan-hover text-navy-dark font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Quotation (RFQ)</span>
                  </button>

                  <button
                    onClick={() => navigate('/contact')}
                    className="py-3.5 px-6 border border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <span>Contact Export Desk</span>
                  </button>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-white border border-border-line rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-headline text-lg font-bold text-navy-dark mb-4 pb-2 border-b border-border-line flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-cyan-accent" />
                  <span>Technical & Dimensional Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="bg-surface-bg p-3.5 rounded-xl border border-border-line flex flex-col">
                      <span className="text-muted-text text-[11px] uppercase tracking-wider font-semibold">
                        {s.label}
                      </span>
                      <strong className="text-navy-dark font-mono text-sm mt-0.5">
                        {s.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Production & Seasoning Protocol */}
      <section className="py-12 bg-surface-bg border-y border-border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-cyan-accent block mb-1">
              Industrial Manufacturing Discipline
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-navy-dark">
              Seasoning & Quality Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every timber component passes through our integrated Virajpet sawmill and computerized dehumidification seasoning chambers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-border-line shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-azure-light text-navy-primary flex items-center justify-center font-bold font-mono">
                01
              </div>
              <h3 className="font-headline text-base font-bold text-navy-dark">
                Quarter-Sawn Grain Selection
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Logs are individually graded and sliced strictly perpendicular to annual growth rings (90° quarter), ensuring maximum structural rigidity and stability under heavy tension.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border-line shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-azure-light text-navy-primary flex items-center justify-center font-bold font-mono">
                02
              </div>
              <h3 className="font-headline text-base font-bold text-navy-dark">
                Automated Moisture Control (&lt;10%)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computer-controlled low-temperature drying cycles slowly release cellular tension, reducing internal moisture down to 8.0%–10.0% to prevent post-export warping.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border-line shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-azure-light text-navy-primary flex items-center justify-center font-bold font-mono">
                03
              </div>
              <h3 className="font-headline text-base font-bold text-navy-dark">
                Wax Sealing & ISPM-15 Crating
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All component end-grains receive hot paraffin wax sealing to halt ambient moisture reabsorption, packed into heat-treated wooden crates for international container transit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Applications & Packaging Standards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Applications */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border-line shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-border-line">
                <Trees className="w-5 h-5 text-cyan-accent" />
                <h3 className="font-headline text-lg font-bold text-navy-dark">
                  Primary Applications
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packaging Standard */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border-line shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-border-line">
                <Package className="w-5 h-5 text-cyan-accent" />
                <h3 className="font-headline text-lg font-bold text-navy-dark">
                  Export Packaging & Protection
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {product.packaging}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 bg-surface-bg border border-border-line rounded-lg text-[11px] font-mono text-slate-700">
                  ISPM-15 Heat Treated
                </span>
                <span className="px-2.5 py-1 bg-surface-bg border border-border-line rounded-lg text-[11px] font-mono text-slate-700">
                  Desiccant Protected
                </span>
                <span className="px-2.5 py-1 bg-surface-bg border border-border-line rounded-lg text-[11px] font-mono text-slate-700">
                  Full CITES Verification
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      <section className="py-12 bg-surface-bg border-t border-border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-border-line">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-accent font-bold">
                More Components
              </span>
              <h2 className="font-headline text-2xl font-bold text-navy-dark">
                Related Luthier Tonewoods
              </h2>
            </div>
            <Link 
              to="/products"
              className="text-xs font-bold uppercase tracking-wider text-navy-primary hover:text-cyan-accent flex items-center gap-1 group"
            >
              <span>View All 9 Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div 
                key={rel.id}
                onClick={() => navigate(`/products/${rel.slug}`)}
                className="bg-white border border-border-line rounded-2xl p-4 shadow-sm hover:border-cyan-accent hover:shadow-hover-card transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 w-full rounded-xl overflow-hidden bg-alt-bg mb-4">
                    <img 
                      src={rel.img} 
                      alt={rel.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-accent uppercase block mb-1">
                    {rel.grade}
                  </span>
                  <h3 className="font-headline text-base font-bold text-navy-dark group-hover:text-cyan-accent transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {rel.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-line flex items-center justify-between text-xs font-bold text-navy-primary group-hover:text-cyan-accent">
                  <span>View Product Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
