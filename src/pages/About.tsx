import React, { useRef } from 'react';
import { Activity, Shield, Users, Zap, Compass, Target, ArrowRight, Hexagon, Linkedin, Twitter } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

const TIMELINE = [
  { year: '2015', title: 'Foundation', desc: 'NEXORA founded in MIT research lab focused on deterministic motion planning.' },
  { year: '2020', title: 'First Deployment', desc: 'NX-Titan 6D deployed in automotive assembly, achieving 99.9% uptime.' },
  { year: '2023', title: 'NEX-OS Launch', desc: 'Released proprietary AI operating system for unified swarm control.' },
  { year: '2025', title: 'Humanoid Era', desc: 'Introduced NX-Atlas, the first commercially viable multi-modal humanoid.' }
];

const VALUES = [
  { icon: Shield, title: 'Uncompromising Safety', desc: 'We build systems that work alongside humans. Safety is not a feature, it is our architecture.' },
  { icon: Zap, title: 'Absolute Precision', desc: 'We measure success in micrometers and milliseconds. Engineering rigor is paramount.' },
  { icon: Users, title: 'Human Augmentation', desc: 'We don\'t seek to replace humans, but to elevate human potential by automating the dull and dangerous.' },
  { icon: Activity, title: 'Continuous Evolution', desc: 'Through OTA updates, our robots wake up smarter tomorrow than they were today.' }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-base pt-24 pb-20 overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 lg:px-8 border-b border-light/5">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F505_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F505_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md mb-8"
          >
             <Compass className="w-4 h-4 text-accent" />
             <span className="font-mono text-xs text-accent uppercase tracking-wider">Our Mission</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-medium text-5xl md:text-7xl lg:text-8xl tracking-tight text-light mb-8 max-w-5xl"
          >
            Building the <span className="text-accent italic font-light">synthetic workforce</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-light/60 text-lg md:text-2xl max-w-3xl leading-relaxed"
          >
            We are a collective of engineers, roboticists, and AI researchers dedicated to pushing the boundary of what machines can do in the physical world.
          </motion.p>
        </div>
      </section>

      {/* Values Section (Bento Grid Style) */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-light tracking-tight mb-4">Core Principles</h2>
            <p className="font-body text-light/50 max-w-xl text-lg">The foundational beliefs that guide our engineering, product design, and company culture.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VALUES.map((val, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className="bg-surface/50 border border-light/5 p-10 rounded-[2rem] hover:bg-surface hover:border-accent/30 transition-all duration-500 group flex flex-col relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/5 blur-[60px] rounded-full group-hover:bg-accent/10 transition-colors duration-500"></div>
              
              <div className="w-14 h-14 rounded-full bg-base border border-light/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-accent/50 group-hover:text-accent transition-all duration-500 relative z-10">
                <val.icon className="w-6 h-6 text-light/50 group-hover:text-accent transition-colors duration-500" />
              </div>
              
              <div className="relative z-10">
                <h3 className="font-display font-medium text-2xl text-light mb-4 tracking-tight">{val.title}</h3>
                <p className="font-body text-light/60 text-lg leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-surface/30 border-y border-light/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-light tracking-tight mb-4">Our Journey</h2>
          </div>
          
          <div className="relative">
            {/* Horizontal Line (Desktop) */}
            <div className="hidden md:block absolute top-[44px] left-0 right-0 h-px bg-light/10">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-accent origin-left"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {TIMELINE.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  key={i} 
                  className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start group"
                >
                  {/* Vertical Line (Mobile) */}
                  {i !== TIMELINE.length - 1 && (
                    <div className="block md:hidden absolute top-24 bottom-[-3rem] left-1/2 -translate-x-1/2 w-px bg-light/10"></div>
                  )}

                  <div className="w-24 h-24 rounded-full bg-base border border-light/20 flex items-center justify-center font-display font-medium text-xl text-light mb-8 group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_30px_rgba(174,183,132,0.15)] transition-all duration-500 relative z-20">
                    <div className="absolute inset-2 rounded-full border border-dashed border-light/10 group-hover:border-accent/40 group-hover:animate-[spin_10s_linear_infinite]"></div>
                    {item.year}
                  </div>
                  
                  <h3 className="font-display font-medium text-2xl text-light mb-3 tracking-tight">{item.title}</h3>
                  <p className="font-body text-light/60 text-base leading-relaxed md:max-w-[240px]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-light tracking-tight mb-4">Leadership</h2>
            <p className="font-body text-light/50 max-w-xl text-lg">The minds driving the future of automation.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', name: 'James Carter', role: 'Chief Executive Officer', bio: 'Former VP of Robotics at TechNova. 15+ years scaling hardware startups to global enterprises.' },
            { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', name: 'Dr. Sarah Lin', role: 'Head of AI', bio: 'Ph.D. from MIT CSAIL. Pioneered novel sensor fusion algorithms. Holds 12 patents in autonomous navigation.' },
            { img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', name: 'Marcus Vance', role: 'VP Hardware', bio: 'Lead mechanical engineer for the Mars Rover program. Obsessed with extreme reliability and sub-mm precision.' },
            { img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', name: 'Elena Rostova', role: 'Operations Director', bio: 'Expert in global supply chain and lean manufacturing. Ensured scalable production of NEXORA series.' }
          ].map((member, i) => (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               key={i} 
               className="group [perspective:1000px] h-[400px] w-full cursor-pointer"
             >
                <div className="relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
                  
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-2xl border border-light/5 overflow-hidden filter grayscale group-hover:grayscale-0 transition-opacity">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h4 className="font-display font-medium text-2xl text-light tracking-tight mb-1">{member.name}</h4>
                      <p className="font-mono text-[10px] text-accent uppercase tracking-widest">{member.role}</p>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl border border-accent/20 bg-surface flex flex-col justify-center items-center text-center p-8">
                    <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center mb-6 bg-accent/5">
                       <Hexagon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-display font-medium text-xl text-light mb-1">{member.name}</h4>
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6">{member.role}</p>
                    <p className="font-body text-light/60 text-sm leading-relaxed mb-8">{member.bio}</p>
                    
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full border border-light/10 flex items-center justify-center text-light/50 hover:text-light hover:border-light/30 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full border border-light/10 flex items-center justify-center text-light/50 hover:text-light hover:border-light/30 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border border-light/10 relative overflow-hidden group"
        >
          <img 
             src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" 
             alt="Tech background" 
             className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
          />
          <div className="absolute inset-0 bg-base/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.accent/20%),transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="font-display font-medium text-4xl md:text-5xl text-light mb-6 tracking-tight drop-shadow-md">Join the revolution</h2>
            <p className="font-body text-light/80 text-lg md:text-xl mb-10 max-w-xl mx-auto drop-shadow-sm">We are always looking for exceptional talent to help us build the next generation of autonomous systems.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-light text-base px-10 py-5 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-accent hover:text-light transition-all duration-300">
              View open roles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
