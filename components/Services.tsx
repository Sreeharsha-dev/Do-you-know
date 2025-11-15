import React, { useState, useRef } from 'react';
import type { Service } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services: Service[] = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 8l1.88 1.88M14.12 14.12 16 16M8 16l1.88-1.88M14.12 9.88 16 8M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" /></svg>,
        title: 'AI & Machine Learning',
        description: 'We architect immortal intelligence. Our systems don\'t just learn; they evolve, adapt, and predict the future, creating autonomous frameworks that redefine industry benchmarks.',
        keyCapabilities: [
            'Agentic AI & Autonomous Systems',
            'Predictive Analytics & Forecasting',
            'Generative AI Solutions',
            'Reinforcement Learning Models',
        ],
        image: 'https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=2070&auto=format&fit=crop',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 1 0-9.78 2.096A4.001 4.001 0 0 0 3 15Z" /></svg>,
        title: 'Cloud & Infrastructure',
        description: 'The digital backbone of tomorrow, built today. We design resilient, infinitely scalable, and hyper-performant cloud ecosystems that ensure your legacy is always online.',
        keyCapabilities: [
            'Multi-Cloud & Hybrid Architectures',
            'Serverless Computing & Edge AI',
            'Infrastructure as Code (IaC)',
            'High-Performance Computing (HPC)',
        ],
        image: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070&auto=format&fit=crop',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" /></svg>,
        title: 'Cybersecurity',
        description: 'Digital fortresses for an age of uncertainty. We embed AI-driven, proactive defense mechanisms into the core of your infrastructure, neutralizing threats before they materialize.',
        keyCapabilities: [
            'AI-Powered Threat Intelligence',
            'Zero Trust Architecture Implementation',
            'Decentralized Identity Management',
            'Quantum-Resistant Cryptography',
        ],
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>,
        title: 'Product Engineering',
        description: 'From ephemeral concepts to enduring digital realities. We engineer robust, future-proof products that deliver timeless value, merging elegant design with high-fidelity performance.',
        keyCapabilities: [
            'Full-Lifecycle Product Development',
            'Microservices & API-First Design',
            'User Experience (UX) & Interface (UI) Innovation',
            'DevOps & Continuous Integration/Delivery (CI/CD)',
        ],
        image: 'https://images.unsplash.com/photo-1556761175-57738b584a1e?q=80&w=1974&auto=format&fit=crop',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 7.5 3 11.25l3.75 3.75m10.5-7.5L21 11.25l-3.75 3.75M10.5 21l3-18" /></svg>,
        title: 'Data Science & Automation',
        description: 'Transforming raw data into perpetual motion. We leverage advanced data science to build self-optimizing, intelligent automation systems that drive relentless efficiency and unlock new frontiers.',
        keyCapabilities: [
            'Big Data Analytics & Visualization',
            'Intelligent Process Automation (IPA)',
            'Real-Time Data Streaming & Processing',
            'Causal Inference & Experimentation Platforms',
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
];

const Services: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = services[activeIndex];

    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderVisible = useIntersectionObserver(headerRef, { threshold: 0.2 });
    const contentRef = useRef<HTMLDivElement>(null);
    const isContentVisible = useIntersectionObserver(contentRef, { threshold: 0.2 });

    return (
        <section id="services" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div ref={headerRef} className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold text-white font-orbitron scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>Our Core Capabilities</h2>
                     <p className={`mt-4 text-lg max-w-3xl mx-auto text-slate-400 scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                        We don't just offer services; we engineer the future. Explore our domains of expertise.
                    </p>
                    <div className={`w-24 h-1 bg-[var(--primary-color)] mx-auto mt-6 scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}></div>
                </div>

                <div ref={contentRef} className={`flex flex-col lg:flex-row gap-12 scroll-fade-in ${isContentVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                    {/* Left side: Tabs */}
                    <div className="lg:w-1/3">
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={service.title}>
                                    <button
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-full text-left p-4 rounded-md transition-all duration-300 border-l-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-color)] focus:ring-[var(--primary-color)] ${
                                            activeIndex === index
                                                ? 'bg-slate-900/70 border-[var(--primary-color)] text-white shadow-lg'
                                                : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-900/50 hover:text-white'
                                        }`}
                                    >
                                        <h3 className="font-orbitron font-bold text-lg">{service.title}</h3>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right side: Content */}
                    <div className="lg:w-2/3">
                        <div key={activeIndex} className="bg-slate-900/50 p-8 rounded-lg border border-[var(--border-color)] fade-in">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="relative group flex-shrink-0">
                                  <div className="text-[var(--primary-color)]">
                                    {activeService.icon}
                                  </div>
                                  <div
                                    role="tooltip"
                                    className="absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/2 transform rounded-md bg-slate-900/80 px-3 py-1.5 text-sm text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                                  >
                                    {activeService.title}
                                    <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-slate-900/80"></div>
                                  </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">{activeService.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{activeService.description}</p>
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <img 
                                    src={activeService.image} 
                                    alt={`${activeService.title} service visual representation`} 
                                    className="w-full h-64 object-cover rounded-md border border-slate-700"
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-white mb-4 font-orbitron">Key Capabilities:</h4>
                                <ul className="space-y-3">
                                    {activeService.keyCapabilities.map((cap) => (
                                        <li key={cap} className="flex items-center">
                                            <svg className="h-5 w-5 text-[var(--secondary-color)] mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 12 2 2 4-4m-5 8a9 9 0 1 1-8-5.192" />
                                            </svg>
                                            <span className="text-slate-400">{cap}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;