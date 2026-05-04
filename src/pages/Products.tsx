import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, RefreshCw, ChevronDown } from 'lucide-react';
import { products, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync category state when URL changes
  React.useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  const [payloadRange, setPayloadRange] = useState(500);
  const [reachRange, setReachRange] = useState(3500);
  const [sortBy, setSortBy] = useState('featured');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const resetFilters = () => {
    setSelectedCategory('All');
    setPayloadRange(500);
    setReachRange(3500);
    setSortBy('featured');
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      // Assuming 0 reach means infinite/mobile, so we don't filter mobile bases if reach is adjusted, or maybe we do.
      // Logic: if reach > 0, check against slider. If 0, it's mobile base, include it.
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchPayload = p.payload <= payloadRange;
      const matchReach = p.reach === 0 || p.reach <= reachRange;
      return matchCategory && matchPayload && matchReach;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      // Placeholder: reversed order
      result.reverse();
    }

    return result;
  }, [selectedCategory, payloadRange, reachRange, sortBy]);

  return (
    <div className="min-h-screen bg-base pt-24 pb-20">
      {/* Header Banner */}
      <section className="relative pt-32 pb-24 border-b border-light/5 mb-12">
        <div className="absolute inset-0 z-0 bg-surface">
          <img 
            src="https://www.cio.com/wp-content/uploads/2025/02/3829539-0-75501800-1740132217-shutterstock_2482705481.jpg?quality=50&strip=all" 
            alt="Robotics Manufacturing" 
            className="w-full h-full object-cover opacity-[0.25] grayscale mix-blend-luminosity pointer-events-none" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.accent/10%),transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYxbS0yMC0xbTF2MjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] pointer-events-none opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4 animate-fadeUp drop-shadow-md">Home / Products</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-light animate-fadeUp drop-shadow-lg" style={{animationDelay: '100ms'}}>
            ROBOT <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-light drop-shadow-[0_0_15px_rgba(182,216,163,0.3)]">CATALOG</span>
          </h1>
          <p className="font-body text-light/80 text-lg md:text-xl max-w-2xl mt-6 animate-fadeUp drop-shadow-sm" style={{animationDelay: '200ms'}}>
            Browse our comprehensive lineup of industrial and service robots, engineered for the most demanding environments and applications.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mobile Filter Toggle */}
        <div className="flex md:hidden justify-between items-center mb-6">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-light bg-surface px-4 py-2 border border-light/20"
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
          <span className="font-mono text-xs text-light/60">{filteredProducts.length} Results</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className={`w-full md:w-[280px] shrink-0 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-32 space-y-8">
              
              <div className="flex items-center justify-between border-b border-light/10 pb-4">
                <h3 className="font-mono text-sm tracking-widest uppercase text-light">Filters</h3>
                <button onClick={resetFilters} className="text-light/50 hover:text-accent group">
                  <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                </button>
              </div>

              {/* Category */}
              <div>
                <h4 className="font-display font-bold text-light mb-4">Category</h4>
                <div className="space-y-2">
                  {['All', ...CATEGORIES].map(cat => (
                    <label key={cat} className="flex items-center cursor-pointer group">
                      <div className="relative w-4 h-4 border border-light/30 bg-base mr-3 flex items-center justify-center group-hover:border-accent transition-colors">
                        {selectedCategory === cat && <div className="w-2 h-2 bg-accent"></div>}
                      </div>
                      <input 
                        type="radio" 
                        value={cat} 
                        checked={selectedCategory === cat}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value);
                          if (e.target.value === 'All') {
                            setSearchParams({});
                          } else {
                            setSearchParams({ category: e.target.value });
                          }
                        }}
                        className="hidden"
                      />
                      <span className={`font-mono text-xs uppercase tracking-wider ${selectedCategory === cat ? 'text-accent' : 'text-light/70 group-hover:text-light'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payload */}
              <div>
                <h4 className="font-display font-bold text-light mb-4 flex justify-between">
                  Payload 
                  <span className="font-mono text-xs text-accent font-normal">{payloadRange} kg</span>
                </h4>
                <input 
                  type="range" 
                  min="1" max="500" 
                  value={payloadRange} 
                  onChange={(e) => setPayloadRange(Number(e.target.value))}
                  className="w-full accent-accent h-1 bg-surface appearance-none outline-none"
                />
                <div className="flex justify-between font-mono text-[10px] text-light/40 mt-2">
                  <span>0 kg</span>
                  <span>500+ kg</span>
                </div>
              </div>

              {/* Reach */}
              <div>
                <h4 className="font-display font-bold text-light mb-4 flex justify-between">
                  Reach 
                  <span className="font-mono text-xs text-accent font-normal">{reachRange} mm</span>
                </h4>
                <input 
                  type="range" 
                  min="0" max="3500" step="50"
                  value={reachRange} 
                  onChange={(e) => setReachRange(Number(e.target.value))}
                  className="w-full accent-accent h-1 bg-surface appearance-none outline-none"
                />
                <div className="flex justify-between font-mono text-[10px] text-light/40 mt-2">
                  <span>0 mm</span>
                  <span>3500 mm</span>
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-8 border-b border-light/10 pb-4">
              <span className="font-mono text-sm text-light/60">Showing {filteredProducts.length} results</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase text-light/50">Sort by:</span>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-surface border border-light/10 text-light font-mono text-xs px-4 py-2 pr-10 focus:outline-none focus:border-accent rounded-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low-High</option>
                    <option value="price-high">Price: High-Low</option>
                    <option value="newest">Newest Arrivals</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-light/50 pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center border border-dashed border-light/20">
                <p className="font-mono text-light/50 mb-4">No matching robots found.</p>
                <button onClick={resetFilters} className="text-accent underline underline-offset-4 text-sm font-mono tracking-widest uppercase">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i % 10} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
