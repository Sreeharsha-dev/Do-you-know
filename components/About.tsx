import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  BookOpen,
  Codepen,
  Cpu,
  Rocket,
} from 'lucide-react';

const aboutItems = [
  {
    Icon: BookOpen,
    title: "Our Philosophy",
    description: "Building transformative digital legacies that outlast time and redefine industries.",
  },
  {
    Icon: Codepen,
    title: "End-to-End Engineering",
    description: "Crafting scalable, futuristic systems from initial concept to full-scale deployment.",
  },
  {
    Icon: Cpu,
    title: "Core Technologies",
    description: "Specializing in AI, Cloud, and next-gen development to build the impossible.",
  },
  {
    Icon: Rocket,
    title: "The Mission: Immortality",
    description: "Our ultimate goal is to create technology that endures, evolves, and inspires.",
  }
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-32 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center mb-16 scroll-fade-in ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-orbitron">
            <span className="text-[var(--primary-color)]">Immortality</span> Through Innovation
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-slate-400" style={{ transitionDelay: '200ms' }}>
             WRIM Technologies—short for “We Are Immortals”—is a next-generation technology company built on the belief that innovation should outlast time. We create intelligent, adaptive, and future-ready digital ecosystems that redefine how businesses, systems, and humans interact with technology.
          </p>
          <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto mt-6" style={{ transitionDelay: '300ms' }}></div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto scroll-fade-in ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          {aboutItems.map((item, index) => (
            <div 
              key={item.title} 
              className="bg-slate-900/50 border border-[var(--border-color)] p-6 rounded-lg transition-all duration-300 hover:border-[var(--primary-color)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start md:items-center gap-4">
                <item.Icon className="h-10 w-10 text-[var(--primary-color)] flex-shrink-0 mt-1 md:mt-0" />
                <div>
                  <h3 className="text-xl font-bold text-white font-orbitron">{item.title}</h3>
                  <p className="mt-2 text-slate-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;