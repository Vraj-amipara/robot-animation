import React, { useEffect, useState } from 'react';
import { Hexagon } from 'lucide-react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setRemoved(true), 500); // Wait for fade out
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-base flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative">
        <Hexagon className="w-20 h-20 text-light/10 animate-spin-slow absolute" style={{ animationDuration: '8s' }} />
        <Hexagon className="w-20 h-20 text-accent animate-pulse relative z-10" />
        
        {/* Scanning line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent to-transparent h-[10px] w-full animate-scanline mix-blend-screen overflow-hidden"></div>
      </div>
      
      <h1 className="mt-8 font-display font-bold text-3xl tracking-[0.2em] text-light overflow-hidden">
        <span className="inline-block animate-fadeUp" style={{ animationDelay: '0.2s' }}>N</span>
        <span className="inline-block animate-fadeUp" style={{ animationDelay: '0.3s' }}>E</span>
        <span className="inline-block animate-fadeUp" style={{ animationDelay: '0.4s' }}>X</span>
        <span className="inline-block animate-fadeUp" style={{ animationDelay: '0.5s' }}>O</span>
        <span className="inline-block animate-fadeUp" style={{ animationDelay: '0.6s' }}>R</span>
        <span className="inline-block animate-fadeUp" style={{ animationDelay: '0.7s' }}>A</span>
        <span className="text-accent inline-block animate-fadeUp" style={{ animationDelay: '0.8s' }}>.</span>
      </h1>
      
      <div className="mt-8 w-48 h-[1px] bg-light/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-accent animate-[ticker_1.5s_ease-in-out_forwards] w-full origin-left scale-x-0"></div>
      </div>
    </div>
  );
}
