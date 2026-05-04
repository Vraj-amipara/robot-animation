import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Cpu, Network, ShieldCheck, Target, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products, CATEGORIES } from '../data/products';
import { ScrollAnimation, ScrollTranslateX, ScrollTranslateY, ScrollScale } from '../components/ui/scroll-animation';
import { TestimonialSlider } from '../components/ui/testimonial-slider-1';

import SelectedWork from '../components/SelectedWork';

const CA_IMAGES = [
 'https://www.kuka.com/-/media/kuka-corporate/images/products/mobility/mobile-platforms/amr-autonomous-mobile-platforms-teaser-1400x788.jpg?rev=-1&w=1400&hash=6477EAF2DDC6EAB5B28150DD6507C239',
    'https://miro.medium.com/1*b7bvLpqrJ-1LPzbfLkxuLw.jpeg',
    'https://qviro.com/blog/wp-content/uploads/2023/09/automatica-microsite-tx2-200-711x400.webp',
    'https://www.evsint.com/wp-content/uploads/2025/07/89e5887bb88f49898c464b6003fdefc0.webp',
    'https://www.therobotreport.com/wp-content/uploads/2025/08/LimX-Oli-featured.jpg',
    'https://onexia.com/wp-content/uploads/2024/10/UR30-palletizer-1-scaled-1.jpg',
    'https://www.servomagazine.com/uploads/main/SV_0422_BotsinBrief_Figure11.jpg',
    'https://cdn1.vogel.de/YiKfKgRBlXxvPWYCeZv7X-MnFRA=/fit-in/800x0/p7i.vogel.de/wcms/d9/a6/d9a68b7e328801dd565824ae9fcf57d4/0125913174v2.jpeg',
];

const STATS = [
  { label: 'Robots Deployed', value: 500, suffix: '+' },
  { label: 'Uptime', value: 98.7, suffix: '%' },
  { label: 'Countries', value: 40, suffix: '+' },
  { label: 'AI Support', value: 24, suffix: '/7' },
];

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    affiliation: "Global Motors",
    quote: "NEXORA's articulated line reduced our assembly errors by 90%. Exceptional build quality and AI integration.",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Marcus Chen",
    affiliation: "Prime Fulfillment",
    quote: "The AMR fleet deployment was seamless. Facility throughput increased 40% in quarter one.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Dr. Elena Rostova",
    affiliation: "SilicaTech",
    quote: "Unparalleled precision. The SCARA systems are now the backbone of our PCB manufacturing.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Alex Sterling",
    affiliation: "Aerocorp Systems",
    quote: "Nexora provides unparalleled support and durability. Our autonomous drones have operated 24/7 with zero downtime.",
    imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=120&fit=crop&q=80",
  }
];

function AnimatedStat({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let Observer: IntersectionObserver;
    if (ref.current) {
        Observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                let start = 0;
                const duration = 2000;
                const increment = value / (duration / 16);
                const timer = setInterval(() => {
                    start += increment;
                    if(start >= value) {
                        setCount(value);
                        clearInterval(timer);
                    } else {
                        setCount(start);
                    }
                }, 16);
                Observer.disconnect();
            }
        });
        Observer.observe(ref.current);
    }
    return () => Observer?.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center p-8 border-r border-light/10 last:border-0 relative group">
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="font-display font-bold text-4xl md:text-5xl text-light mb-2">
        {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
      </div>
      <div className="font-mono text-xs text-accent uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-base pb-20 overflow-x-hidden">
      <HeroSection />

      {/* Stats Bar */}
      <section className="bg-surface border-t border-accent relative z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <AnimatedStat key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-display font-bold text-4xl text-light">
              <span className="text-accent mr-4">/</span>OUR ROBOT LINEUP
            </h2>
            <Link to="/products" className="font-mono text-sm uppercase tracking-widest text-light/70 hover:text-accent transition-colors flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <Link to={`/products?category=${cat}`} key={cat} className="group relative block aspect-[4/5] bg-surface overflow-hidden">
                <img 
                  src={CA_IMAGES[i]} 
                  alt={cat} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Techy Grid Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHYxbS00MC0xbTF2NDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Animated Corner Brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-transparent group-hover:border-accent transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-transparent group-hover:border-accent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-transparent group-hover:border-accent transition-colors duration-500"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-transparent group-hover:border-accent transition-colors duration-500"></div>

                {/* Number Indicator */}
                <div className="absolute top-6 right-6 font-mono text-[10px] text-light/20 group-hover:text-accent transform group-hover:-translate-y-2 transition-all duration-500">
                  0{i + 1}
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-display font-bold text-3xl text-light/80 group-hover:text-light mb-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    {cat}
                  </h3>
                  
                  <div className="overflow-hidden h-8 mb-4">
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest translate-y-[200%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      System Class // 0{i + 1}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-xs font-bold font-mono text-light/80 uppercase tracking-wider group-hover:text-accent transition-colors overflow-hidden">
                    <span className="w-0 group-hover:w-8 h-[1px] bg-accent mr-0 group-hover:mr-3 transition-all duration-500 ease-out"></span>
                    <span className="transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 whitespace-nowrap">Explore Lineup</span>
                    <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500 delay-100" />
                  </div>
                </div>

                {/* Border effect */}
                <div className="absolute inset-0 border border-light/5 group-hover:border-accent/40 transition-colors duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section (Diagonal clip-path) */}
      <section className="relative py-32 bg-surface clip-diagonal my-20">
        {/* Style for clip-diagonal: see global css or inline here */}
        <div style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }} className="absolute inset-0 bg-surface"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDB2NDBtMjAtMjBoLTQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-light/10">
            <div className="py-8 lg:p-8">
              <Cpu className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-display font-bold text-2xl text-light mb-4">Neural Architecture</h3>
              <p className="font-body text-light/70 text-sm leading-relaxed">
                Proprietary AI core processes 1M+ environmental variables per second, allowing unprecedented autonomous adaptability in chaotic spaces.
              </p>
            </div>
            <div className="py-8 lg:p-8 lg:pl-12">
              <Target className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-display font-bold text-2xl text-light mb-4">Sub-mm Precision</h3>
              <p className="font-body text-light/70 text-sm leading-relaxed">
                Direct-drive motors and optical encoders ensure absolute repeatability, even at maximum payload capacity across thousands of cycles.
              </p>
            </div>
            <div className="py-8 lg:p-8 lg:pl-12">
              <Network className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-display font-bold text-2xl text-light mb-4">Swarm Intelligence</h3>
              <p className="font-body text-light/70 text-sm leading-relaxed">
                NEX-OS enables seamless fleet coordination. Units share map data and intent in real-time to avoid deadlocks and optimize routing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Scroll Animation */}
      <ScrollAnimation className="overflow-hidden bg-base relative z-20" spacerClass="h-[0vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 mb-4">
          <h2 className="font-display font-bold text-4xl text-light">
            <span className="text-accent mr-4">/</span>FEATURED SERIES
          </h2>
        </div>
        <ScrollTranslateY 
          yRange={[0, 0]} 
          inputRange={[0, 1]} 
          className="sticky top-20 flex flex-col justify-center items-center overflow-hidden gap-1"
        >
          {/* Row 1 (Moves Left to Right or Right to Left) */}
          <div className="w-full pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
            <ScrollTranslateX
              xRange={['-80%', '0%']}
              inputRange={[0, 1]}
              className="origin-bottom flex flex-nowrap gap-6"
            >
              {products.slice(0, 4).map((product, i) => (
                <div key={product.id} className="min-w-[300px] md:min-w-[380px] shrink-0">
                  <ProductCard product={product} index={i} />
                </div>
              ))}
            </ScrollTranslateX>
          </div>
          
          {/* Between Text */}
          <ScrollScale
            inputRange={[0, 0.5]}
            scaleRange={[1.2, 1]}
            className="w-full flex flex-col justify-center text-center items-center mx-auto origin-center py-16 md:py-24 px-4 overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-body font-medium tracking-tight text-light whitespace-nowrap">
              Architecting the <span className="text-accent">future</span> of automation
            </h2>
          </ScrollScale>

          {/* Row 2 (Moves Right to Left or Left to Right) */}
          <div className="w-full pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
            <ScrollTranslateX
              inputRange={[0, 1]}
              xRange={['0%', '-80%']}
              className="flex flex-nowrap gap-6 origin-top"
            >
              {products.slice(4, 7).map((product, i) => (
                <div key={product.id} className="min-w-[300px] md:min-w-[380px] shrink-0">
                  <ProductCard product={product} index={i} />
                </div>
              ))}
              
              {/* View All Card */}
              <div className="min-w-[300px] md:min-w-[380px] shrink-0">
                <Link 
                  to="/products"
                  className="group block relative bg-base border border-light/5 overflow-hidden transition-all duration-500 hover:border-accent/40 flex flex-col h-[420px] cursor-pointer items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                  
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-transparent group-hover:border-accent/60 transition-all duration-500 z-20 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-accent/60 transition-all duration-500 z-20 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-accent/60 transition-all duration-500 z-20 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-transparent group-hover:border-accent/60 transition-all duration-500 z-20 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 rounded-full border border-light/10 flex items-center justify-center mb-6 group-hover:border-accent group-hover:scale-110 transition-all duration-500 bg-surface">
                      <ChevronRight className="w-6 h-6 text-light group-hover:text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-light group-hover:text-accent transition-colors mb-2">View Full Catalog</h3>
                    <p className="font-mono text-xs text-light/50 tracking-widest uppercase">Explore 12+ More Series</p>
                  </div>
                  
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                      className="w-full h-full object-cover filter grayscale mix-blend-overlay"
                      alt="Background Grid"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base via-base/80 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
                </Link>
              </div>
            </ScrollTranslateX>
          </div>
        </ScrollTranslateY>
      </ScrollAnimation>

      {/* Selected Work Hover Section */}
      <SelectedWork />

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden bg-base border-t border-light/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-8 mt-12">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-light text-center">
            TRUSTED BY <span className="text-accent">INDUSTRY LEADERS</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-0 lg:px-8 relative z-10">
          <TestimonialSlider reviews={REVIEWS} />
        </div>
      </section>
    </div>
  );
}
