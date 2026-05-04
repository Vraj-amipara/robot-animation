import React, { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SUBTITLES = [
  "Autonomous Mobile Robots",
  "Collaborative Robots",
  "AI-Powered Humanoids",
  "Smart AGV Systems"
];

export default function HeroSection() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timerId = setTimeout(() => {
        const currentFullText = SUBTITLES[subtitleIndex];
        if (isDeleting) {
            setDisplayText(prev => prev.slice(0, -1));
            if (displayText === '') {
                setIsDeleting(false);
                setSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
            }
        } else {
            setDisplayText(currentFullText.slice(0, displayText.length + 1));
            if (displayText === currentFullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            }
        }
    }, isDeleting ? 40 : 100);
    return () => clearTimeout(timerId);
  }, [displayText, isDeleting, subtitleIndex]);

  return (
    <section className="relative h-screen bg-base overflow-hidden flex flex-col items-center justify-center">
      {/* Immersive 3D Spline Experience */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-base">
            <div className="w-12 h-12 rounded-full border-2 border-accent border-t-transparent animate-spin"></div>
          </div>
        }>
          <Spline scene="https://prod.spline.design/gY4XnSiipSaPlzLC/scene.splinecode" />
        </Suspense>
        {/* Subtle radial gradient to ensure text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full pt-20 flex flex-col items-center text-center pointer-events-none">
          
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface/30 backdrop-blur-md border border-light/10 mb-6 animate-fadeUp">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-light/80">Next-Gen Industry 4.0</span>
        </div>
        
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-light mb-6 tracking-tighter animate-fadeUp drop-shadow-lg" style={{animationDelay: '100ms'}}>
          INTELLIGENT <span className="text-transparent" style={{ WebkitTextStroke: '1px #AEB784', textShadow: 'none' }}>ROBOTICS</span><br/>
          FOR AN AUTOMATED WORLD
        </h1>
        
        <div className="h-6 mb-8 flex justify-center items-center animate-fadeUp drop-shadow-md" style={{animationDelay: '200ms'}}>
          <p className="font-mono text-sm md:text-base text-white h-full flex items-center bg-white/10 px-2 py-1 rounded backdrop-blur-sm">
            {displayText}
            <span className="inline-block w-2 bg-accent h-4 ml-1 animate-pulse"></span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp pointer-events-auto" style={{animationDelay: '300ms'}}>
          <Link 
            to="/products"
            className="group relative inline-flex items-center justify-center px-6 py-3 font-mono text-xs md:text-sm tracking-widest text-base font-bold uppercase transition-all duration-300 bg-accent hover:bg-light hover:text-base backdrop-blur-sm"
          >
            Explore Products
            <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link 
            to="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-3 font-mono text-xs md:text-sm tracking-widest text-light font-bold uppercase transition-all duration-300 border border-light/20 hover:border-accent hover:bg-surface/50 backdrop-blur-sm"
          >
            <Play className="mr-3 w-3 h-3 text-accent transition-transform group-hover:scale-110" />
            Watch Demo
          </Link>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-accent/90 backdrop-blur text-base py-2 border-y border-base font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold z-20">
        <div className="whitespace-nowrap animate-ticker flex w-max">
            {/* Duplicated for smooth infinite sliding */}
            <div className="flex">
                <span className="px-4">AMR •</span>
                <span className="px-4">AGV •</span>
                <span className="px-4">COBOT •</span>
                <span className="px-4">SCARA •</span>
                <span className="px-4">HUMANOID •</span>
                <span className="px-4">ARTICULATED •</span>
                <span className="px-4">HYBRID •</span>
                <span className="px-4">AUTONOMOUS •</span>
            </div>
            <div className="flex">
                <span className="px-4">AMR •</span>
                <span className="px-4">AGV •</span>
                <span className="px-4">COBOT •</span>
                <span className="px-4">SCARA •</span>
                <span className="px-4">HUMANOID •</span>
                <span className="px-4">ARTICULATED •</span>
                <span className="px-4">HYBRID •</span>
                <span className="px-4">AUTONOMOUS •</span>
            </div>
            <div className="flex">
                <span className="px-4">AMR •</span>
                <span className="px-4">AGV •</span>
                <span className="px-4">COBOT •</span>
                <span className="px-4">SCARA •</span>
                <span className="px-4">HUMANOID •</span>
                <span className="px-4">ARTICULATED •</span>
                <span className="px-4">HYBRID •</span>
                <span className="px-4">AUTONOMOUS •</span>
            </div>
            <div className="flex">
                <span className="px-4">AMR •</span>
                <span className="px-4">AGV •</span>
                <span className="px-4">COBOT •</span>
                <span className="px-4">SCARA •</span>
                <span className="px-4">HUMANOID •</span>
                <span className="px-4">ARTICULATED •</span>
                <span className="px-4">HYBRID •</span>
                <span className="px-4">AUTONOMOUS •</span>
            </div>
        </div>
      </div>
    </section>
  );
}
