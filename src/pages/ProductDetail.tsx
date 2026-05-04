import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Download, CheckCircle, ArrowLeft, ArrowRight, Server, Zap, Shield, Microchip } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import Modal from '../components/Modal';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-base pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="font-display text-4xl text-light mb-4">Product Not Found</h1>
        <Link to="/products" className="text-accent font-mono uppercase underline">Return to Catalog</Link>
      </div>
    );
  }

  // Related products (same category, exclude self, max 4)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-base pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-8 py-4 border-b border-light/10">
          <div className="flex items-center font-mono text-xs uppercase tracking-widest text-light/50">
            <Link to="/products" className="hover:text-accent">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-light">{product.name}</span>
          </div>
          <Link to="/products" className="flex items-center text-accent text-xs font-mono uppercase hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Link>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-20 items-center mb-32">
          
          {/* Right: Smaller Image (Flipped) */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] bg-surface rounded-[2rem] border border-light/5 overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.accent/10%),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transform transition-all duration-700 group-hover:scale-105"
              />
              
              <div className="absolute top-6 right-6 z-20">
                <div className="font-mono text-[10px] uppercase tracking-widest bg-base/80 backdrop-blur-md text-accent px-3 py-1 rounded-full border border-accent/20">
                   SYS // {product.category}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
                 <div className="font-mono text-xs uppercase tracking-widest text-light font-medium">
                   MDL-{product.id.slice(0, 8)}
                 </div>
                 <div className="font-mono text-[9px] uppercase tracking-widest text-light/40">
                   Authorized Personnel Only
                 </div>
              </div>
            </div>
          </div>

          {/* Left: Content Panel (Flipped) */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
               <span className="w-8 h-1 bg-accent/40 block"></span>
               <span className="font-mono text-xs tracking-widest uppercase text-accent font-medium">Flagship Model</span>
            </div>
            
            <h1 className="font-display font-medium text-5xl lg:text-7xl text-light mb-6 tracking-tight leading-[1.1] group">
              {product.name}
            </h1>
            
            <p className="font-body text-light/60 text-lg lg:text-xl mb-12 leading-relaxed max-w-2xl">
              {product.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-y border-light/5 py-8">
              <div className="flex flex-col">
                <p className="font-mono text-[10px] text-light/40 uppercase tracking-widest mb-2">Max Payload</p>
                <p className="font-display text-2xl text-light">{product.payload} <span className="text-sm text-accent tracking-tighter">KG</span></p>
              </div>
              <div className="flex flex-col border-l border-light/5 pl-6">
                <p className="font-mono text-[10px] text-light/40 uppercase tracking-widest mb-2">Reach</p>
                <p className="font-display text-2xl text-light">{product.reach === 0 ? 'Infinite' : `${product.reach}`} <span className="text-sm text-accent tracking-tighter">{product.reach !== 0 && 'MM'}</span></p>
              </div>
              <div className="flex flex-col border-l border-light/5 pl-6">
                <p className="font-mono text-[10px] text-light/40 uppercase tracking-widest mb-2">Velocity</p>
                <p className="font-display text-2xl text-light">{product.speed}</p>
              </div>
              <div className="flex flex-col border-l border-light/5 pl-6">
                <p className="font-mono text-[10px] text-light/40 uppercase tracking-widest mb-2">Status</p>
                <p className="font-display text-xl text-light flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  Active
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto relative group overflow-hidden inline-flex items-center justify-center px-10 py-4 font-mono text-sm tracking-widest text-base font-medium transition-all duration-300 bg-accent rounded-full hover:bg-light hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Configure System 
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              <Link to="/contact" className="w-full sm:w-auto text-center sm:text-left font-mono text-xs tracking-widest uppercase text-light/50 hover:text-light transition-colors underline underline-offset-8 decoration-light/20 hover:decoration-light">
                Request Datasheet
              </Link>
            </div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="mb-32">
          <div className="flex gap-2 sm:gap-6 border-b border-light/5 mb-12 overflow-x-auto scrollbar-hide pb-px">
            {['Overview', 'Specifications', 'Applications', 'Downloads'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative font-mono text-[10px] sm:text-xs tracking-widest uppercase px-4 sm:px-6 py-4 whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeTab === tab ? 'text-accent' : 'text-light/40 hover:text-light/70'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'Overview' && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"
                >
                  <div>
                    <h3 className="font-display font-medium text-3xl text-light mb-8 tracking-tight">Key Capabilities</h3>
                    <ul className="space-y-6">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-5 group">
                          <div className="w-8 h-8 rounded-full border border-light/10 flex items-center justify-center shrink-0 group-hover:border-accent/50 group-hover:bg-accent/5 transition-colors duration-300">
                             <CheckCircle className="w-4 h-4 text-accent" />
                          </div>
                          <span className="font-body text-light/70 leading-relaxed text-lg pt-1 group-hover:text-light transition-colors">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-surface/40 p-10 lg:p-12 rounded-[2rem] border border-light/5 relative overflow-hidden group hover:bg-surface/60 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/10 transition-colors duration-700 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <h3 className="font-display font-medium text-2xl text-light mb-6 tracking-tight flex items-center gap-4">
                        Intelligent Architecture
                      </h3>
                      <p className="font-body text-light/70 mb-8 leading-relaxed text-lg">
                        Powered by the NEX-OS runtime, this unit connects securely to your local fleet network. It features self-diagnostic capabilities, predictive maintenance alerts, and seamless integration with standard PLC and WMS systems via REST, MQTT, and EtherCAT interfaces.
                      </p>
                      
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-base border border-light/10 flex items-center justify-center shadow-lg">
                           <Server className="w-5 h-5 text-light/50" />
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-base border border-light/10 flex items-center justify-center shadow-lg">
                           <Zap className="w-5 h-5 text-light/50" />
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-base border border-light/10 flex items-center justify-center shadow-lg">
                           <Microchip className="w-5 h-5 text-light/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Specifications' && (
               <motion.div 
                 key="specs"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
                 className="bg-surface/30 border border-light/5 rounded-[2rem] overflow-hidden"
               >
                 <div className="grid grid-cols-1 md:grid-cols-2 p-8 border-b border-light/5 hover:bg-surface/50 transition-colors">
                   <span className="font-mono text-sm text-light/50 uppercase tracking-widest flex items-center gap-3">
                     <span className="w-1 h-4 bg-accent/50 rounded-full block"></span>
                     Kinematics
                   </span>
                   <span className="font-body text-light text-lg mt-2 md:mt-0">{product.category === 'Articulated' || product.category === 'Cobot' ? '6-Axis' : product.category === 'SCARA' ? '4-Axis' : 'Variable/Differential'}</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 p-8 border-b border-light/5 hover:bg-surface/50 transition-colors">
                   <span className="font-mono text-sm text-light/50 uppercase tracking-widest flex items-center gap-3">
                     <span className="w-1 h-4 bg-accent/50 rounded-full block"></span>
                     Repeatability
                   </span>
                   <span className="font-body text-light text-lg mt-2 md:mt-0">± 0.02 mm</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 p-8 border-b border-light/5 hover:bg-surface/50 transition-colors">
                   <span className="font-mono text-sm text-light/50 uppercase tracking-widest flex items-center gap-3">
                     <span className="w-1 h-4 bg-accent/50 rounded-full block"></span>
                     Protection Rating
                   </span>
                   <span className="font-body text-light text-lg mt-2 md:mt-0">IP67 (IP69K Options Available)</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 p-8 hover:bg-surface/50 transition-colors">
                   <span className="font-mono text-sm text-light/50 uppercase tracking-widest flex items-center gap-3">
                     <span className="w-1 h-4 bg-accent/50 rounded-full block"></span>
                     Power Supply
                   </span>
                   <span className="font-body text-light text-lg mt-2 md:mt-0">3-phase 380V (Stationary) / 48V Li-ion (Mobile)</span>
                 </div>
               </motion.div>
              )}

              {activeTab === 'Downloads' && (
               <motion.div 
                 key="downloads"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
                 className="grid grid-cols-1 sm:grid-cols-2 gap-6"
               >
                 {['Datasheet_v2.4.pdf', '3D_CAD_Model.step', 'User_Manual_EN.pdf', 'NEX-OS_Integration_Guide.pdf'].map((doc) => (
                   <div key={doc} className="flex flex-col sm:flex-row sm:items-center justify-between p-8 bg-surface/30 rounded-[2rem] border border-light/5 hover:bg-surface/50 hover:border-accent/30 transition-all duration-300 cursor-pointer group">
                     <span className="font-mono text-sm text-light/80 group-hover:text-accent transition-colors mb-4 sm:mb-0 truncate pr-4">{doc}</span>
                     <div className="w-10 h-10 rounded-full border border-light/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors shadow-lg">
                       <Download className="w-4 h-4 text-light/50 group-hover:text-base transition-colors" />
                     </div>
                   </div>
                 ))}
               </motion.div>
              )}

              {activeTab === 'Applications' && (
               <motion.div 
                 key="apps"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
                 className="p-16 text-center border border-dashed border-light/20 rounded-[2rem] bg-surface/10"
               >
                  <Shield className="w-8 h-8 text-light/20 mx-auto mb-6" />
                  <p className="font-body text-xl text-light/70 mb-2">Application specific configurations restricted.</p>
                  <p className="font-mono text-xs text-accent uppercase tracking-widest">Requires Level 2 Clearance (Contact Sales)</p>
               </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="border-t border-light/10 pt-20">
            <h2 className="font-display font-bold text-3xl text-light mb-10"><span className="text-accent underline underline-offset-8">SIMILAR</span> SYSTEMS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(r => (
                <Link key={r.id} to={`/product/${r.id}`} className="block group">
                  <div className="aspect-[4/3] bg-surface overflow-hidden mb-4 relative">
                     <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                     <img src={r.image} alt={r.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110" />
                  </div>
                  <h4 className="font-display font-bold text-light group-hover:text-accent transition-colors">{r.name}</h4>
                  <p className="font-mono text-[10px] text-light/50 uppercase tracking-widest">{r.payload}kg | {r.reach > 0 ? r.reach + 'mm' : 'Mobile'}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Quote Modal */}
      <Modal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)}>
        <h2 className="font-display font-bold text-3xl text-light mb-2">Request Quote</h2>
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-8 border-b border-light/10 pb-4">
          For: {product.name}
        </p>
        
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Request submitted successfully in preview!"); setIsQuoteModalOpen(false); }}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block font-mono text-[10px] text-light/50 uppercase tracking-widest mb-2">Full Name</label>
              <input required type="text" className="w-full bg-base border border-light/20 px-4 py-3 text-light font-body text-sm focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-light/50 uppercase tracking-widest mb-2">Work Email</label>
              <input required type="email" className="w-full bg-base border border-light/20 px-4 py-3 text-light font-body text-sm focus:outline-none focus:border-accent" />
            </div>
          </div>
          <div>
            <label className="block font-mono text-[10px] text-light/50 uppercase tracking-widest mb-2">Company & Industry</label>
            <input required type="text" className="w-full bg-base border border-light/20 px-4 py-3 text-light font-body text-sm focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block font-mono text-[10px] text-light/50 uppercase tracking-widest mb-2">Project Requirements / Payload Specifics</label>
            <textarea rows={4} className="w-full bg-base border border-light/20 px-4 py-3 text-light font-body text-sm focus:outline-none focus:border-accent resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-accent text-base font-mono font-bold uppercase text-sm tracking-widest py-4 hover:bg-light transition-colors">
            Submit Request
          </button>
        </form>
      </Modal>
    </div>
  );
}
