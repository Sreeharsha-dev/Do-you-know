import React from 'react';

const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <footer className="bg-black/50 border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <a href="#" className="inline-block rounded-sm text-2xl font-bold font-orbitron text-white transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[var(--primary-color)]">
              WRIM<span className="text-[var(--primary-color)]">.</span>
            </a>
            <p className="text-sm text-slate-400 mt-1 transition-colors duration-300 hover:text-slate-300">© {new Date().getFullYear()} WRIM Technologies. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="rounded-sm p-1 text-slate-300 hover:text-[var(--primary-color)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[var(--primary-color)]">About</a>
            <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="rounded-sm p-1 text-slate-300 hover:text-[var(--primary-color)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[var(--primary-color)]">Services</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="rounded-sm p-1 text-slate-300 hover:text-[var(--primary-color)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[var(--primary-color)]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;