import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Linkedin, Twitter, Youtube, Github, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-base relative overflow-hidden pt-24 pb-12 border-t border-light/5">
      {/* Light Shard/Glow at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-light/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand & Copyright */}
        <div className="mb-20">
          <Link to="/" className="flex items-center gap-3 mb-10 text-light">
            <Hexagon className="w-8 h-8" />
            <span className="font-display font-medium text-2xl tracking-tight">
              NEXORA.
            </span>
          </Link>
          <p className="font-body text-light/60 text-sm max-w-md mb-10 leading-relaxed">
            Intelligent robotics and autonomous systems designed for a bold new automated world. Precision engineered. AI powered.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 font-body text-light/40 text-sm">
            <p>© {new Date().getFullYear()} NEXORA Robotics. All rights reserved.</p>
          </div>
        </div>

        {/* Bottom Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div>
            <h4 className="font-body font-medium text-light mb-6 text-sm">Products</h4>
            <ul className="space-y-4">
              {['AMR & AGV', 'Articulated Arms', 'SCARA Systems', 'Humanoids', 'Collaborative', 'Autonomous'].map(item => (
                <li key={item}>
                  <Link to="/products" className="font-body text-sm text-light/60 hover:text-light transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-medium text-light mb-6 text-sm">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Technology', 'Industry Solutions', 'Careers', 'Press', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="font-body text-sm text-light/60 hover:text-light transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-medium text-light mb-6 text-sm">Social Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-light/60 hover:text-light transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-light/60 hover:text-light transition-colors">
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-light/60 hover:text-light transition-colors">
                  <Youtube className="w-4 h-4" /> Youtube
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-light/60 hover:text-light transition-colors">
                  <Github className="w-4 h-4" /> Github
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-medium text-light mb-6 text-sm">Legal & Newsletter</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a href="#" className="font-body text-sm text-light/60 hover:text-light transition-colors">Privacy Policy</a>
              <a href="#" className="font-body text-sm text-light/60 hover:text-light transition-colors">Terms of Service</a>
            </div>
            
            <form className="relative flex flex-col mt-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-surface border border-light/10 rounded-lg font-body text-sm px-4 py-3 pr-12 text-light focus:outline-none focus:border-light/30 transition-colors placeholder:text-light/40"
              />
              <button className="absolute right-1 top-1 bottom-1 aspect-square rounded-md bg-light/10 text-light hover:bg-light hover:text-base transition-colors flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}
