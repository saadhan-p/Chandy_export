import React, { useState } from 'react';
import { Calculator, Ship, Clock, DollarSign } from 'lucide-react';

export default function FreightCalculator() {
  const [commodity, setCommodity] = useState('coffee');
  const [volume, setVolume] = useState(10);
  const [destination, setDestination] = useState('eu');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    let baseRate = 1200;
    if (commodity === 'tonewood') baseRate = 2800;
    if (commodity === 'coffee') baseRate = 1450;
    if (commodity === 'veneer') baseRate = 1900;

    let destMultiplier = 1.0;
    if (destination === 'eu') destMultiplier = 1.25;
    if (destination === 'us') destMultiplier = 1.40;
    if (destination === 'jp') destMultiplier = 1.35;
    if (destination === 'uae') destMultiplier = 1.10;

    const cifTotal = Math.round(baseRate * volume * destMultiplier);
    const fobTotal = Math.round(baseRate * 0.75 * volume);
    const transit = destination === 'uae' ? 7 : destination === 'eu' ? 18 : 24;

    setResult({ fobTotal, cifTotal, transit });
  };

  return (
    <div className="bg-white border border-border-line rounded-lg p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-azure-light rounded flex items-center justify-center text-cyan-accent">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-headline text-xl text-navy-dark">Quick Tariff & Transit Estimator</h3>
          <p className="text-xs text-muted-text">Instant FOB & CIF ocean freight calculation</p>
        </div>
      </div>

      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
            Select Commodity Portfolio
          </label>
          <select 
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            className="w-full h-11 px-3 text-sm border border-border-line rounded bg-white focus:outline-none focus:border-cyan-accent"
          >
            <option value="coffee">Kodagu Single-Estate Specialty Coffee</option>
            <option value="tonewood">Acoustic Guitar Tonewood Sets</option>
            <option value="veneer">Exotic Architectural Hardwood Veneers</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
              Order Volume (Metric Tons / Sets)
            </label>
            <input 
              type="number" 
              min="1" 
              max="500"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-11 px-3 text-sm border border-border-line rounded focus:outline-none focus:border-cyan-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-body mb-1">
              Destination Harbor
            </label>
            <select 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full h-11 px-3 text-sm border border-border-line rounded bg-white focus:outline-none focus:border-cyan-accent"
            >
              <option value="eu">Rotterdam / Hamburg (EU)</option>
              <option value="us">Los Angeles / New York (USA)</option>
              <option value="jp">Yokohama / Kobe (Japan)</option>
              <option value="uae">Jebel Ali (Dubai, UAE)</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 bg-navy-primary hover:bg-cyan-accent text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow"
        >
          Calculate Freight Preview
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-azure-light/60 border-l-4 border-cyan-accent rounded">
          <h4 className="font-headline text-sm text-navy-dark mb-3">Estimated Freight & FOB Summary</h4>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white p-3 rounded border border-border-line">
              <div className="text-[10px] font-bold text-muted-text uppercase">Est. FOB Port</div>
              <div className="font-headline text-lg font-bold text-navy-primary">${result.fobTotal.toLocaleString()} USD</div>
            </div>
            <div className="bg-white p-3 rounded border border-border-line">
              <div className="text-[10px] font-bold text-muted-text uppercase">Est. CIF Delivered</div>
              <div className="font-headline text-lg font-bold text-cyan-accent">${result.cifTotal.toLocaleString()} USD</div>
            </div>
            <div className="bg-white p-3 rounded border border-border-line">
              <div className="text-[10px] font-bold text-muted-text uppercase">Est. Transit</div>
              <div className="font-headline text-lg font-bold text-navy-dark">{result.transit} Days</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
