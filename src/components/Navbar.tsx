import React, { useState, useEffect } from 'react';
import { Database, Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between w-full min-w-0 gap-2 md:gap-3 lg:gap-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-none min-w-0 shrink-0"
            aria-label="Zakaria Ahmed - Data Engineer"
          >
            {!logoFailed && (
              <img
                src="https://i.postimg.cc/g2rMhXmV/Gemini-Generated-Image-fouvbcfouvbcfouv-nobg-preview-photiu-ai.png"
                alt="Zakaria Ahmed Logo"
                referrerPolicy="no-referrer"
                className="h-9.5 sm:h-10 md:h-8.5 lg:h-9 w-auto object-contain mr-2.5 sm:mr-3 md:mr-2 transition-transform hover:scale-105 duration-200 shrink-0"
                onError={(e) => {
                  setLogoFailed(true);
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 whitespace-nowrap">
              <span className="font-bold text-base sm:text-base md:text-sm lg:text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors truncate">
                Zakaria Ahmed
              </span>
              <span className="text-slate-600 font-normal hidden lg:inline">|</span>
              <span className="text-xs lg:text-sm text-cyan-400 font-medium whitespace-nowrap hidden lg:inline">
                Data Engineer
              </span>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5 shrink-0" title="Active & Available"></span>
            </div>
          </a>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center gap-1 md:gap-1.5 lg:gap-2 text-xs lg:text-sm bg-slate-900/80 border border-slate-800/80 rounded-full px-2.5 lg:px-4 py-1 lg:py-1.5 backdrop-blur-md shrink-0 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2 md:px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(22,194,201,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop & Tablet Action CTAs */}
            <div className="hidden md:flex items-center">
              <button
                onClick={onOpenResume}
                id="navbar-resume-btn"
                type="button"
                className="px-3 py-1.5 lg:px-3.5 lg:py-2 text-xs lg:text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl flex items-center gap-1.5 lg:gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button - Strictly bounded within padding */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              type="button"
              className="md:hidden shrink-0 p-2 sm:p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white focus:outline-none active:scale-95 transition-all shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-3 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-xl flex flex-col gap-1.5 w-full max-w-full overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/25'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                </a>
              );
            })}
            <div className="pt-2.5 mt-1 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center gap-2 border border-slate-700/60"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Contact Zakaria</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
