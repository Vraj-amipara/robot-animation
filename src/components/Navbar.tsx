import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES } from '../data/products';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasMega: true },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Technology', path: '/technology' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const MEGA_MENU_IMAGES = [
    'https://www.kuka.com/-/media/kuka-corporate/images/products/mobility/mobile-platforms/amr-autonomous-mobile-platforms-teaser-1400x788.jpg?rev=-1&w=1400&hash=6477EAF2DDC6EAB5B28150DD6507C239',
    'https://miro.medium.com/1*b7bvLpqrJ-1LPzbfLkxuLw.jpeg',
    'https://qviro.com/blog/wp-content/uploads/2023/09/automatica-microsite-tx2-200-711x400.webp',
    'https://www.evsint.com/wp-content/uploads/2025/07/89e5887bb88f49898c464b6003fdefc0.webp',
    'https://www.therobotreport.com/wp-content/uploads/2025/08/LimX-Oli-featured.jpg',
    'https://onexia.com/wp-content/uploads/2024/10/UR30-palletizer-1-scaled-1.jpg',
    'https://www.servomagazine.com/uploads/main/SV_0422_BotsinBrief_Figure11.jpg',
    'https://cdn1.vogel.de/YiKfKgRBlXxvPWYCeZv7X-MnFRA=/fit-in/800x0/p7i.vogel.de/wcms/d9/a6/d9a68b7e328801dd565824ae9fcf57d4/0125913174v2.jpeg',
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-base/95 backdrop-blur-md border-b border-light/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Hexagon className="text-accent w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
              <span className="font-display font-bold text-2xl tracking-wider text-light">
                NEXORA<span className="text-accent">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseLeave={() => {
                    if (link.hasMega) setMegaMenuOpen(false);
                  }}
                >
                  <Link
                    to={link.path}
                    className={`font-body text-sm uppercase tracking-widest font-medium transition-colors hover:text-accent ${
                      location.pathname === link.path ? 'text-accent' : 'text-light/80'
                    }`}
                    onMouseEnter={() => {
                      if (link.hasMega) setMegaMenuOpen(true);
                    }}
                  >
                    {link.name}
                  </Link>
                  {/* Underline animation */}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-accent transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                  
                  {/* Mega Menu Overlay */}
                  {link.hasMega && megaMenuOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px] opacity-0 animate-fadeUp z-50">
                      <div className="bg-surface/95 backdrop-blur-xl border border-light/10 p-6 grid grid-cols-4 gap-4 rounded shadow-2xl">
                        {CATEGORIES.map((cat, i) => (
                          <Link 
                            key={cat} 
                            to={`/products?category=${cat}`}
                            onClick={() => setMegaMenuOpen(false)}
                            className="flex flex-col p-3 hover:bg-base/80 rounded transition-colors group/cat border border-transparent hover:border-light/10 relative overflow-hidden"
                          >
                            <div className="w-full aspect-video rounded bg-base/50 mb-3 overflow-hidden relative border border-light/10 group-hover/cat:border-accent/50 transition-colors">
                              <img 
                                src={MEGA_MENU_IMAGES[i]} 
                                alt={cat} 
                                className="w-full h-full object-cover filter grayscale opacity-60 group-hover/cat:grayscale-0 group-hover/cat:opacity-100 group-hover/cat:scale-110 transition-all duration-500" 
                              />
                            </div>
                            <span className="text-sm font-bold text-light/80 group-hover/cat:text-accent font-display">{cat}</span>
                            <span className="text-[10px] font-mono text-light/40 group-hover/cat:text-light/60 uppercase mt-1 tracking-widest">Series 0{i + 1}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-2.5 font-mono text-sm tracking-widest text-base font-bold uppercase transition-all duration-300 bg-accent hover:bg-light hover:text-base cursor-pointer"
              >
                <span className="absolute inset-0 border-2 border-accent transition-all duration-300 group-hover:scale-110 group-hover:opacity-0 hidden" />
                Get Quote
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-light hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Slide In) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-base/95 backdrop-blur-3xl z-[100] flex flex-col justify-center items-center h-screen w-full overflow-hidden md:hidden"
          >
            {/* Background Animation for Mobile Menu */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] border-[1px] border-accent/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] border-[1px] border-accent/30 rounded-full border-dashed"
              />
              <motion.div className="absolute inset-0 text-accent/5 flex items-center justify-center">
                 <Hexagon strokeWidth={0.2} className="w-[80vw] h-[80vw] animate-pulse" />
              </motion.div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
            </div>

            <button 
              className="absolute top-6 right-6 text-light hover:text-accent transition-colors p-2 z-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center space-y-6 w-full px-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative group font-display font-medium text-xl md:text-2xl uppercase tracking-widest transition-colors drop-shadow-sm ${
                      location.pathname === link.path ? 'text-accent' : 'text-light/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-accent transition-all duration-300 ${
                        location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block px-10 py-4 border border-accent/50 text-accent font-mono text-sm uppercase tracking-widest hover:bg-accent hover:text-base transition-colors"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
