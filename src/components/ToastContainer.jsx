import React from 'react';
import { useRfq } from '../context/RfqContext';
import { CheckCircle2 } from 'lucide-react';

export default function ToastContainer() {
  const { toasts } = useRfq();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm">
      {toasts.map((toast) => (
        <div 
          key={toast.id}
          className="bg-navy-dark text-white p-4 rounded border-l-4 border-cyan-accent shadow-hover-card flex items-center gap-3 animate-bounce-short"
        >
          <CheckCircle2 className="w-5 h-5 text-cyan-accent flex-shrink-0" />
          <div className="text-xs">{toast.message}</div>
        </div>
      ))}
    </div>
  );
}
