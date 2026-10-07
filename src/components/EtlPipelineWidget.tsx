import React, { useState, useEffect } from 'react';
import { Database, Filter, LayoutGrid } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  subtext: string;
  icon: React.ElementType;
}

const STAGES: Stage[] = [
  {
    id: 'extract',
    name: 'extract',
    subtext: 'raw source',
    icon: Database,
  },
  {
    id: 'transform',
    name: 'transform',
    subtext: 'clean · model',
    icon: Filter,
  },
  {
    id: 'load',
    name: 'load',
    subtext: 'warehouse',
    icon: LayoutGrid,
  },
];

export const EtlPipelineWidget: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [logProgress, setLogProgress] = useState<number>(3); // All 3 visible or animating in

  // Cycle the active pipeline stage rhythmically to match the live video feel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Terminal Container matching the video layout */}
      <div className="rounded-3xl bg-[#091117]/95 border border-slate-800/80 shadow-2xl backdrop-blur-2xl overflow-hidden font-mono">
        {/* Top bar with 3 dots & center title */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-b border-slate-800/80 gap-2">
          {/* macOS window dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]/85 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]/85 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]/85 inline-block" />
          </div>

          {/* Title with running indicator */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs text-slate-300 font-mono tracking-wide">
            <span className="text-slate-200 font-semibold">pipeline.py</span>
            <span className="text-slate-600">—</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-400 font-medium">running</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-8 space-y-5 sm:space-y-7">
          {/* Pipeline Visualizer (3 Stages with Animated Flow Connectors) */}
          <div className="flex items-center justify-between gap-1 sm:gap-3 max-w-lg mx-auto w-full">
            {STAGES.map((stage, index) => {
              const Icon = stage.icon;
              const isCurrent = activeStage === index;

              return (
                <React.Fragment key={stage.id}>
                  {/* Stage Card */}
                  <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                    <div
                      className={`w-full py-3.5 sm:py-5 px-1 sm:px-3 rounded-xl sm:rounded-2xl border transition-all duration-500 flex flex-col items-center justify-center ${
                        isCurrent
                          ? 'bg-[#0f1d27] border-[#16c2c9]/50 shadow-[0_0_20px_rgba(22,194,201,0.2)] scale-[1.02]'
                          : 'bg-[#0b141c]/90 border-[#1a2a35] hover:border-slate-700'
                      }`}
                    >
                      <div className="mb-1.5 sm:mb-2.5">
                        <Icon
                          className={`w-5 h-5 sm:w-7 sm:h-7 transition-colors duration-300 ${
                            isCurrent ? 'text-[#16c2c9]' : 'text-[#16c2c9]/80'
                          }`}
                          strokeWidth={1.75}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white tracking-tight mb-0.5 sm:mb-1 truncate w-full px-0.5">
                        {stage.name}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono tracking-tight block text-center truncate w-full px-0.5">
                        {stage.subtext}
                      </span>
                    </div>
                  </div>

                  {/* Flow Connector Line with Animated Moving Data Packets */}
                  {index < STAGES.length - 1 && (
                    <div className="flex-shrink-0 w-3 sm:w-12 flex items-center justify-center relative overflow-hidden h-5 sm:h-6 mx-0.5 sm:mx-1">
                      {/* Dashed background track */}
                      <div className="w-full border-t-2 border-dashed border-[#1a2d38]" />

                      {/* Moving data packet */}
                      <span
                        className="animate-flow-packet w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#16c2c9] shadow-[0_0_8px_#16c2c9]"
                        style={{ animationDelay: `${index * 0.8}s` }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Console / Terminal Log Output */}
          <div className="pt-2 font-mono text-xs sm:text-sm leading-relaxed space-y-2 border-t border-[#14222c]/80 text-left">
            {/* Command */}
            <div className="flex items-center gap-2 text-slate-200">
              <span className="text-[#16c2c9] font-bold select-none">$</span>
              <span className="text-slate-100 font-medium">spark-submit etl_job.py</span>
            </div>

            {/* Log lines */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-start gap-2">
                <span className="text-[#f59e0b] font-semibold text-[11px] sm:text-xs tracking-wider select-none shrink-0">[INFO]</span>
                <span className="text-slate-300 break-words">extracting 1.2M rows from source...</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#f59e0b] font-semibold text-[11px] sm:text-xs tracking-wider select-none shrink-0">[INFO]</span>
                <span className="text-slate-300 break-words">transforming &amp; deduplicating...</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-semibold text-[11px] sm:text-xs tracking-wider select-none shrink-0">[OK]</span>
                <span className="text-slate-100 font-medium break-words">
                  loaded <span className="text-[#16c2c9] font-mono">→</span> analytics.fact_sales
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
