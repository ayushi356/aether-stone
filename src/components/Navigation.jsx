import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Approach', href: '#approach' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-5 flex items-center justify-between ${
        scrolled
          ? 'bg-[#060709]/85 backdrop-blur-md border-b border-white/8 py-4 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      {/* Studio Brand Monogram with rectangular edges */}
      <a href="#" className="flex items-center gap-3.5 group">
        <div className="w-8 h-8 rounded-none border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-[#38bdf8] transition-colors">
          <div className="w-3.5 h-3.5 border-t border-l border-[#38bdf8] group-hover:rotate-45 transition-transform duration-300" />
        </div>
        <div className="flex flex-col">
          <span className="font-display text-sm tracking-[0.2em] text-[#f8fafc] font-medium group-hover:text-cyan-300 transition-colors">
            AETHER & MONOLITH
          </span>
          <span className="font-sans-clean text-[9px] tracking-[0.25em] text-[#38bdf8] uppercase font-light">
            Architecture & Spatial Design
          </span>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-[12px] font-sans-clean tracking-[0.18em] text-[#f8fafc]/75 uppercase">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-cyan-300 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#38bdf8] after:transition-all"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Primary Action Button: More transparent with rectangular edges */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#contact"
          className="btn-start-project text-xs rounded-none"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Mobile Menu Trigger with rectangular edges */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-none border border-white/20 text-[#f8fafc] hover:bg-white/5"
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Drawer with rectangular edges */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#060709] border-b border-white/10 p-6 flex flex-col gap-5 md:hidden shadow-2xl rounded-none">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-sans-clean tracking-wider text-[#f8fafc] uppercase py-1 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-start-project w-full text-center mt-2 rounded-none"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
