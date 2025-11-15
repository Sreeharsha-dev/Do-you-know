import React, { useState, useEffect } from 'react';
import { MenuContainer, MenuItem } from './ui/fluid-menu';
import { Menu as MenuIcon, X, Info, LayoutGrid, Eye, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', icon: <Info size={24} strokeWidth={1.5} /> },
    { href: '#services', label: 'Services', icon: <LayoutGrid size={24} strokeWidth={1.5} /> },
    { href: '#vision', label: 'Vision', icon: <Eye size={24} strokeWidth={1.5} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={24} strokeWidth={1.5} /> },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleMobileNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/50 backdrop-blur-md border-b border-[var(--border-color)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="rounded-sm text-2xl font-bold font-orbitron text-white transition-all duration-300 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-color)] focus:ring-[var(--primary-color)]">
          WRIM<span className="text-[var(--primary-color)]">.</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="rounded-sm px-1 text-slate-300 hover:text-[var(--primary-color)] transition-colors duration-300 tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-color)] focus:ring-[var(--primary-color)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Fluid Menu */}
        <div className="md:hidden">
            <MenuContainer>
              <MenuItem 
                icon={
                  <div className="relative w-6 h-6 text-white">
                    <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                      <MenuIcon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                      <X size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                } 
              />
              {navLinks.map((link) => (
                  <MenuItem 
                      key={link.href} 
                      icon={<div className="text-white">{link.icon}</div>} 
                      onClick={() => handleMobileNavClick(link.href)} 
                  />
              ))}
            </MenuContainer>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;