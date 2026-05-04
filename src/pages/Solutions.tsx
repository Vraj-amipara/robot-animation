import React from 'react';
import { solutions } from '../data/solutions';
import { Factory, Hospital, Tractor, HardHat, Package, Rocket, ArrowRight, Target, Workflow, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const IconMap: Record<string, React.ElementType> = {
  Factory,
  Hospital,
  Tractor,
  HardHat,
  Package,
  Rocket
};

export default function Solutions() {
  return (
    <div className="min-h-screen bg-base pt-24 pb-20">
      
      {/* Header */}
      <section className="relative px-6 lg:px-8 mx-auto mb-20 pt-32 pb-24 border-b border-light/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://radii.co/wp-content/uploads/2025/03/radii-agibot-robotics-00.jpg" 
            alt="Technical Background" 
            className="w-full h-full object-cover opacity-[0.15] grayscale pointer-events-none" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.accent/10%),transparent_50%)] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md mb-6"
          >
             <Briefcase className="w-4 h-4 text-accent" />
             <span className="font-mono text-xs text-accent uppercase tracking-wider">Industry Solutions</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-medium text-5xl md:text-7xl tracking-tight text-light max-w-5xl leading-tight"
          >
            Engineering for <span className="text-accent italic font-light drop-shadow-[0_0_15px_rgba(182,216,163,0.3)]">specialized environments</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content Area: Alternating Sections */}
      <div className="flex flex-col gap-32 pb-32">
        {solutions.map((solution, index) => {
          const Icon = IconMap[solution.icon];
          const isEven = index % 2 === 0;

          return (
            <section key={solution.id} className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                
                {/* Image Side */}
                <div className="w-full lg:w-5/12 relative">
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-square group">
                    <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                    <img 
                      src={solution.heroImage} 
                      alt={solution.industry} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Floating industry badge */}
                    <div className={`absolute bottom-6 left-6 z-20 bg-base/90 backdrop-blur-md border border-light/10 p-4 md:p-6 rounded-2xl flex items-center gap-3 md:gap-4`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                      <h3 className="font-display font-medium text-xl md:text-2xl text-light tracking-tight">{solution.industry}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12 py-2 lg:py-6">
                  {/* The Challenge */}
                  <div className="mb-10 lg:mb-12">
                    <div className="flex items-center gap-2 mb-3 lg:mb-4 text-light/50 font-mono text-[10px] lg:text-xs uppercase tracking-widest">
                       <Target className="w-4 h-4 text-accent" /> The Challenge
                    </div>
                    <p className="font-body text-light/70 text-base md:text-lg lg:text-xl leading-relaxed">{solution.problem}</p>
                  </div>

                  {/* NEXORA Solution */}
                  <div className="mb-10 lg:mb-12 p-6 lg:p-8 border border-accent/20 bg-accent/5 rounded-3xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[50px] rounded-full pointer-events-none"></div>
                    <div className="flex items-center gap-2 mb-3 lg:mb-4 text-accent font-mono text-[10px] lg:text-xs uppercase tracking-widest">
                       <Workflow className="w-4 h-4" /> NEXORA Solution
                    </div>
                    <p className="font-body text-light/90 text-base md:text-lg lg:text-xl leading-relaxed relative z-10">{solution.solution}</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 xl:gap-6 mb-10 lg:mb-12">
                    {solution.stats.map((stat, i) => (
                      <div key={i} className="border-t border-light/10 pt-3 lg:pt-4">
                         <div className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-light mb-1">{stat.value}</div>
                         <div className="font-mono text-[8px] md:text-[10px] text-accent uppercase tracking-widest leading-tight opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Case Study */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 lg:pb-8 border-b border-light/10">
                     <div className="flex-1">
                        <span className="font-mono text-[9px] lg:text-[10px] text-accent uppercase tracking-widest block mb-2">Case Study /// {solution.caseStudy.client}</span>
                        <p className="font-body text-sm lg:text-base text-light/60 leading-relaxed pr-4">{solution.caseStudy.description}</p>
                     </div>
                     <Link to="/contact" className="shrink-0 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-light/20 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 group">
                        <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>

                </div>
              </motion.div>
            </section>
          );
        })}
      </div>
      
      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="p-12 md:p-20 rounded-[3rem] border border-light/10 relative overflow-hidden group">
          <img 
             src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80" 
             alt="Robotics background" 
             className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
          />
          <div className="absolute inset-0 bg-base/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.accent/20%),transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-xl">
              <h2 className="font-display font-medium text-4xl md:text-5xl text-light mb-4 tracking-tight drop-shadow-md">Need a custom solution?</h2>
              <p className="font-body text-light/80 text-xl leading-relaxed drop-shadow-sm">Discuss your operational requirements with our engineers. We build for the extreme.</p>
            </div>
            <Link to="/contact" className="shrink-0 inline-flex items-center gap-3 bg-light text-base px-10 py-5 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-accent hover:text-light transition-all duration-300">
              Consult an Engineer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
