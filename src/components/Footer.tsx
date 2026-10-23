import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1A2236]/80 bg-[#0B0F17]/95 py-8 relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copyright & systems status */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-mono">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">{personalInfo.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400 font-mono text-[11px] tracking-wide">Data Systems Active • Egypt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
