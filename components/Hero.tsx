
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CybercoreBackground from './ui/CybercoreBackground';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"] // Animate as the section scrolls from top to bottom of viewport
  });
    
  // Staggered fade out and parallax effect
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const subtitleOpacity = useTransform(scrollYProgress, [0.1, 0.6], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const buttonOpacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0]);
  const buttonY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={heroRef} id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <CybercoreBackground />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <motion.h1 
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-widest font-orbitron">
          WRIM Technologies
        </motion.h1>
        <motion.p 
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className="mt-6 text-lg md:text-2xl text-slate-300 max-w-4xl font-light italic">
          “We don’t just build technology. We build <span className="text-[var(--primary-color)] font-normal not-italic">legacies</span>.”
        </motion.p>
        <motion.a 
          style={{ opacity: buttonOpacity, y: buttonY }}
          href="#about"
          onClick={(e) => handleScrollTo(e, '#about')}
          className="mt-10 px-8 py-3 bg-[var(--primary-color)] text-black font-bold uppercase tracking-widest rounded-sm transform transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_var(--primary-color)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-[var(--bg-color)] focus:ring-white"
        >
          Discover More
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;