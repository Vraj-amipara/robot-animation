import React, { useRef } from 'react';
import { Database, Network, Eye, Cpu, Zap, Radio, ChevronRight, Layers, Box, Microchip } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';

const TECH_STACK = [
  { icon: Eye, name: 'Computer Vision', desc: 'Real-time 3D spatial awareness using advanced LiDAR and stereo camera arrays.', colSpan: 'md:col-span-2' },
  { icon: Network, name: 'SLAM Navigation', desc: 'Simultaneous Localization and Mapping for unstructured, dynamic environments.', colSpan: 'md:col-span-1' },
  { icon: Cpu, name: 'ROS2 Framework', desc: 'Built on industry-standard Robot Operating System 2 for extreme reliability and security.', colSpan: 'md:col-span-1' },
  { icon: Zap, name: 'Edge AI Inference', desc: 'Sub-millisecond inference running locally on internal GPUs, requiring no cloud connection.', colSpan: 'md:col-span-2' },
  { icon: Database, name: 'Digital Twin', desc: 'Real-time 1:1 simulation inside NEX-OS for predictive analytics and safe testing.', colSpan: 'md:col-span-2' },
  { icon: Radio, name: 'Fleet Sync', desc: 'Swarm telemetry orchestration using 5G and dedicated MQTT brokers.', colSpan: 'md:col-span-1' },
];

export default function Technology() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotateCore = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="min-h-screen bg-base pt-24 pb-20 overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 lg:px-8 border-b border-light/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://fastly.restofworld.org/uploads/2026/02/GettyImages-2258978610.jpg?width=800&dpr=2&crop=16:9" 
            alt="AI Edge Technology" 
            className="w-full h-full object-cover opacity-[0.15] grayscale pointer-events-none" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.accent/10%),transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F505_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F505_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md mb-8"
          >
            <Microchip className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-wider">The Engine of Nexora</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-light mb-8 max-w-5xl drop-shadow-lg"
          >
            Intelligence designed for <span className="text-accent italic font-light drop-shadow-[0_0_15px_rgba(182,216,163,0.3)]">the edge</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-light/80 text-lg md:text-2xl max-w-3xl leading-relaxed drop-shadow-sm"
          >
            NEX-OS is our proprietary neural architecture. It enables robots to not just execute programmed instructions, but truly perceive, understand, and adapt to unpredictable environments in real-time.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-light tracking-tight mb-4">Core Architecture</h2>
            <p className="font-body text-light/50 max-w-xl text-lg">The foundation of every NEXORA robot is built on six technological pillars, working in unison at millisecond latency.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {TECH_STACK.map((tech, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className={`bg-surface/50 border border-light/5 p-10 rounded-[2rem] hover:bg-surface hover:border-accent/30 transition-all duration-500 group flex flex-col justify-between overflow-hidden relative ${tech.colSpan}`}
            >
              <div className="absolute -inset-20 bg-accent/5 opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700 pointer-events-none"></div>
              
              <tech.icon className="w-12 h-12 text-accent mb-auto group-hover:scale-110 transition-transform duration-500 relative z-10" strokeWidth={1.5} />
              <div className="relative z-10 mt-12">
                <h3 className="font-display font-medium text-3xl text-light mb-4 tracking-tight">{tech.name}</h3>
                <p className="font-body text-light/60 text-lg leading-relaxed">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Abstract Diagram Section */}
      <section className="py-32 border-y border-light/5 relative bg-surface/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Visual Side */}
            <div className="relative h-[600px] flex items-center justify-center rounded-[2rem] border border-light/5 bg-base overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.accent/10%),transparent_70%)]"></div>
              
              <motion.div 
                style={{ rotate: rotateCore }}
                className="relative w-96 h-96 flex items-center justify-center"
              >
                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-light/10 rounded-full border-dashed opacity-50"></div>
                <div className="absolute inset-8 border border-accent/20 rounded-full border-dashed"></div>
                <div className="absolute inset-16 border border-light/10 rounded-full opacity-50"></div>
                
                {/* Central Core */}
                <div className="absolute w-32 h-32 bg-base border border-accent flex items-center justify-center rounded-[2rem] shadow-[0_0_50px_rgba(174,183,132,0.2)]">
                  <span className="font-display font-medium text-xl text-accent tracking-tight">NEX-OS</span>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute top-0 w-4 h-4 bg-light rounded-full shadow-[0_0_15px_#fff]"></div>
                <div className="absolute bottom-16 right-4 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_#AEB784]"></div>
                <div className="absolute top-20 left-4 w-2 h-2 bg-light/50 rounded-full"></div>
              </motion.div>
            </div>

            {/* Text Side */}
            <div>
              <h2 className="font-display font-medium text-4xl lg:text-5xl text-light mb-12 tracking-tight">The Perception Loop</h2>
              <div className="space-y-12">
                {[
                  { icon: Eye, title: '01. Perception', desc: 'Sensor fusion merges LiDAR, ultrasonic, and stereo camera arrays into a continuous, real-time 3D semantic map.' },
                  { icon: Layers, title: '02. Cognition', desc: 'NEX-OS neural networks classify objects, predict human trajectories, and understand the contextual semantic meaning of the workspace.' },
                  { icon: Box, title: '03. Execution', desc: 'Predictive motion planning calculates optimal, collision-free kinematics and translates them into micromotor torque adjustments.' }
                ].map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    key={item.title} 
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-surface border border-light/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-light/50 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-2xl text-light mb-3 tracking-tight">{item.title}</h4>
                      <p className="font-body text-light/60 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="p-12 md:p-20 rounded-[3rem] border border-light/10 relative overflow-hidden group"
        >
          <img 
             src="https://images.unsplash.com/photo-1548611635-b6e7827d5d08?auto=format&fit=crop&w=1200&q=80" 
             alt="Technology background" 
             className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
          />
          <div className="absolute inset-0 bg-base/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.accent/20%),transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="font-display font-medium text-4xl md:text-5xl text-light mb-10 tracking-tight drop-shadow-md">Ready to see it in action?</h2>
            <Link to="/products" className="inline-flex items-center gap-3 bg-accent text-base px-10 py-5 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-light hover:gap-5 transition-all duration-300">
              Explore our robots <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
