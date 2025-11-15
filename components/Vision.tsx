import React, { useRef } from 'react';
import type { CoreValue } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CoreValueCard: React.FC<{ value: CoreValue, icon: React.ReactNode }> = ({ value, icon }) => (
  <div className="flex items-start space-x-4">
    <div className="text-[var(--secondary-color)] mt-1">{icon}</div>
    <div>
      <h4 className="text-lg font-bold text-white font-orbitron">{value.title}</h4>
      <p className="text-slate-400">{value.description}</p>
    </div>
  </div>
);

const Vision: React.FC = () => {
  const coreValues: CoreValue[] = [
    { title: 'Immortality through Innovation', description: 'Creating systems that evolve beyond limitations.' },
    { title: 'Integrity in Engineering', description: 'Precision, transparency, and excellence in every line of code.' },
    { title: 'Human-Centric Future', description: 'Designing technology that empowers, not replaces, humanity.' },
    { title: 'Sustainability', description: 'Building technology that lasts — environmentally, socially, and digitally.' },
  ];
  
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = useIntersectionObserver(headerRef, { threshold: 0.2 });
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentVisible = useIntersectionObserver(contentRef, { threshold: 0.2 });

  return (
    <section id="vision" className="py-20 sm:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white font-orbitron scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>Our Vision</h2>
          <p className={`mt-4 text-lg max-w-3xl mx-auto text-slate-300 scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            To build an immortal digital future — where technology doesn’t just keep up with change, but defines it.
          </p>
          <div className={`w-24 h-1 bg-[var(--primary-color)] mx-auto mt-6 scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}></div>
        </div>

        <div ref={contentRef} className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-center scroll-fade-in ${isContentVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-white mb-8 font-orbitron">Our Core Values</h3>
                <div className="space-y-6">
                    {coreValues.map((value, index) => (
                        <CoreValueCard key={index} value={value} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3.055 11.99 2.667 2.667a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 0 1.414 0l2.667-2.667m-18 0a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" /></svg>} />
                    ))}
                </div>
            </div>
            <div className="lg:col-span-2 bg-slate-900/50 p-8 rounded-lg border border-[var(--border-color)]">
                <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                    To create timeless technology — solutions that adapt, scale, and stand the test of time, transforming the way the world connects, computes, and communicates.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;