import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', href: '#', icon: <Instagram size={32} /> },
  { name: 'Twitter', href: '#', icon: <Twitter size={32} /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin size={32} /> },
  { name: 'Email', href: 'mailto:contact@wrim.tech', icon: <Mail size={32} /> },
];

const immortalQuotes = [
    "Some build for today. We script for *eternity*.",
    "Build a *legacy*, not just a product. That is the path to immortality.",
    "Our ambition is to architect systems that achieve digital *permanence*.",
    "In the face of time, we choose to build the *eternal*. What will you build?",
    "Let's forge a future where your impact isn't a memory, but a living *legacy*.",
    "The ultimate innovation is creating something truly *timeless*.",
    "Beyond today lies the dawn of the *immortal* digital age. Let's build it."
];

const Contact: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const isHeaderVisible = useIntersectionObserver(headerRef, { threshold: 0.2 });
  const areSocialsVisible = useIntersectionObserver(socialRef, { threshold: 0.2 });
  const isQuoteVisible = useIntersectionObserver(quoteRef, { threshold: 0.8 });
  const isButtonVisible = useIntersectionObserver(buttonRef, { threshold: 0.8 });
  
  const typedQuote = useTypingEffect(immortalQuotes);
  
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white font-orbitron scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`}>Get In Touch</h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto text-slate-400 scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            Ready to build your legacy? Let's start the conversation.
          </p>
          <div className={`w-24 h-1 bg-[var(--primary-color)] mx-auto mt-6 scroll-fade-in ${isHeaderVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <blockquote 
            ref={quoteRef}
            className={`text-xl md:text-2xl text-slate-300 font-light italic border-l-4 border-[var(--primary-color)] pl-6 py-2 my-12 text-left min-h-[120px] md:min-h-[140px] scroll-fade-in ${isQuoteVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
             <span>{typedQuote}</span>
             <span className="blinking-cursor"></span>
            <span className="block text-right text-lg text-slate-400 not-italic mt-2">— Let's build your legacy, together.</span>
          </blockquote>

          <a
            ref={buttonRef}
            href="/advanced-form.html"
            className={`inline-block px-10 py-4 bg-[var(--primary-color)] text-black font-bold uppercase tracking-widest rounded-sm transform transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_var(--primary-color)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-[var(--bg-color)] focus:ring-white scroll-fade-in ${isButtonVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '600ms' }}
          >
            Start a Project Inquiry
          </a>
          
          <div className="my-16 flex items-center justify-center" aria-hidden="true">
            <div className="w-1/3 border-t border-[var(--border-color)]"></div>
            <p className="px-4 text-slate-400 tracking-widest text-sm uppercase">Connect With Us</p>
            <div className="w-1/3 border-t border-[var(--border-color)]"></div>
          </div>

          <div ref={socialRef} className="flex justify-center space-x-6 md:space-x-8">
            {socialLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`text-slate-400 hover:text-[var(--primary-color)] hover:scale-110 transition-all duration-300 transform scroll-fade-in ${areSocialsVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
                aria-label={`Visit our ${link.name} page`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;