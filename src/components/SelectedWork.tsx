import React, { useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const WORKS = [
  {
    id: 'omni-arm Robot',
    title: 'omni-arm Robot',
    desc: 'Versatile robotic manipulator for precision assembly.',
    year: '2024',
    image: 'https://thinkrobotics.com/cdn/shop/articles/Untitled_design_2_ee7d0f73-0545-474d-b597-82d00603958f.png?v=1765910003',
  },
  {
    id: 'Humanoid Robot',
    title: 'Humanoid Robot',
    desc: 'Autonomous drone for facility surveillance and mapping.',
    year: '2024',
    image: 'https://www.thedailyupside.com/wp-content/uploads/2025/02/cio_humanoid-robot_02-10-25_iStock-iLexx.png',
  },
  {
    id: 'humanoid robot race while Tesla',
    title: 'humanoid robot race while Tesla',
    desc: 'Heavy-duty automated guided vehicle for scalable logistics.',
    year: '2023',
    image: 'https://fastly.restofworld.org/uploads/2026/02/GettyImages-2258978610.jpg?width=800&dpr=2&crop=16:9',
  },
  {
    id: 'ong Live the Atlas Robot',
    title: 'Ong Live the Atlas Robot',
    desc: 'Centralized AI control systems for manufacturing swarms.',
    year: '2023',
    image: 'https://media.wired.com/photos/661fea6a440f32c413c45c75/3:2/w_2560%2Cc_limit/New%2520atlas.jpg',
  }
];

export default function SelectedWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // center the image (assuming w-[240px] h-[160px] -> offset 120, 80)
    mouseX.set(e.clientX - 120);
    mouseY.set(e.clientY - 80);
  };

  return (
    <section 
      className="relative py-12 md:py-16 bg-base overflow-hidden flex justify-center"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full max-w-3xl px-6 relative z-10">
        <h2 className="text-xs md:text-sm font-mono tracking-widest text-light/50 mb-8 uppercase border-b border-light/10 pb-4">
          Hardware & Software Innovations
        </h2>
        
        <div className="flex flex-col">
          {WORKS.map((work, index) => (
            <div 
              key={work.id}
              className="group relative flex flex-row items-center justify-between py-6 md:py-8 border-b border-light/10 cursor-pointer transition-colors hover:bg-surface/40 px-6 -mx-6 rounded-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col gap-2 relative z-10 w-full md:w-auto">
                <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-light transition-colors group-hover:text-accent">
                      {work.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-light/50 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out group-hover:text-accent" />
                </div>
                <p className="font-body text-light/60 text-sm md:text-base">
                  {work.desc}
                </p>
              </div>
              <span className="font-mono text-sm text-light/40 relative z-10 hidden md:block group-hover:text-accent/60 transition-colors">
                {work.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Hover Image */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 overflow-hidden w-[240px] h-[160px] rounded-xl shadow-2xl border border-light/10 bg-surface hidden lg:block"
        style={{
          x: springX,
          y: springY,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
      >
        {WORKS.map((work, index) => (
          <img
            key={work.id}
            src={work.image}
            alt={work.title}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-500",
              hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
            )}
          />
        ))}
      </motion.div>
    </section>
  );
}
