import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group block relative bg-base border border-light/5 overflow-hidden transition-all duration-500 hover:border-accent/40 flex flex-col h-[420px] cursor-pointer"
    >
      {/* Background Gradient Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
      
      {/* Animated Corner Brackets for tech aesthetic */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-transparent group-hover:border-accent/60 transition-all duration-500 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-accent/60 transition-all duration-500 z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-accent/60 transition-all duration-500 z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-transparent group-hover:border-accent/60 transition-all duration-500 z-20 pointer-events-none" />

      {/* Image Section */}
      <div className="relative h-[220px] w-full overflow-hidden bg-surface flex items-center justify-center border-b border-light/5 z-10 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-80 z-10" />
        
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="object-cover w-full h-full transform transition-all duration-700 group-hover:scale-105 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 absolute inset-0" 
        />
        
        {/* Top-level Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <span className="bg-base/90 backdrop-blur-md text-[10px] font-mono px-3 py-1 text-accent border border-accent/20 tracking-widest uppercase shadow-xl">
            {product.category}
          </span>
        </div>
        
        {/* Model Identifier Line */}
        <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono tracking-widest text-light/40 uppercase">
          MDL-{product.id.slice(0, 4)}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col relative z-20 bg-base/50">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-bold text-xl text-light/90 group-hover:text-light transition-colors line-clamp-1">{product.name}</h3>
          <ArrowUpRight className="w-5 h-5 text-light/30 group-hover:text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
        </div>
        
        {/* Compact Spec Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4 mt-2">
          <div className="flex flex-col border-l-2 border-light/10 pl-3 group-hover:border-accent/40 transition-colors duration-300">
            <span className="text-[9px] font-mono tracking-widest text-light/40 uppercase mb-0.5">Payload</span>
            <span className="font-mono text-sm text-light/80">{product.payload} kg</span>
          </div>
          <div className="flex flex-col border-l-2 border-light/10 pl-3 group-hover:border-accent/40 transition-colors duration-300">
            <span className="text-[9px] font-mono tracking-widest text-light/40 uppercase mb-0.5">Reach</span>
            <span className="font-mono text-sm text-light/80">{product.reach > 0 ? `${product.reach} mm` : 'Mobile'}</span>
          </div>
        </div>

        <p className="font-body text-sm text-light/50 line-clamp-2 mt-auto group-hover:text-light/70 transition-colors duration-300">
          {product.description}
        </p>
        
        {/* Bottom Hover Line effect */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
      </div>
      
      {/* Hidden Link covering the card */}
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-30">
        <span className="sr-only">View {product.name} details</span>
      </Link>
    </motion.div>
  );
}
