import React from 'react';
import { Database, Cloud, Flame } from 'lucide-react';

export const FloatingTechIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 w-full max-w-full" aria-hidden="true">
      {/* 1. Python Floating Badge - Top Left */}
      <div className="hidden xl:flex absolute top-20 sm:top-24 left-3 sm:left-10 lg:left-20 animate-float-slow">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-900/85 border border-slate-800/80 shadow-lg backdrop-blur-md">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md sm:rounded-lg bg-gradient-to-tr from-sky-500 to-amber-400/80 flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-slate-950">
            Py
          </div>
          <span className="text-xs font-medium text-slate-200">Python</span>
        </div>
      </div>

      {/* 2. SQL Server Floating Badge - Top Right */}
      <div className="hidden xl:flex absolute top-20 sm:top-24 right-3 sm:right-12 lg:right-24 animate-float-reverse">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-900/85 border border-slate-800/80 shadow-lg backdrop-blur-md">
          <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
          <span className="text-xs font-medium text-slate-200">SQL Server</span>
        </div>
      </div>

      {/* 3. PySpark Floating Badge - Mid/Bottom Left */}
      <div className="hidden xl:flex absolute bottom-32 left-4 xl:left-16 animate-float-reverse" style={{ animationDelay: '1.5s' }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/85 border border-slate-800/80 shadow-lg backdrop-blur-md">
          <Flame className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-medium text-cyan-300">PySpark</span>
        </div>
      </div>

      {/* 4. Cloud (NTI) Floating Badge - Bottom Right */}
      <div className="hidden xl:flex absolute bottom-28 right-6 xl:right-20 animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/85 border border-slate-800/80 shadow-lg backdrop-blur-md">
          <Cloud className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-medium text-slate-200">Cloud (NTI)</span>
        </div>
      </div>
    </div>
  );
};
