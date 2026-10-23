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

  // Cycle the active pipeline stage rhythmically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Terminal Container matching the engineering aesthetic */}
      <div className="rounded-3xl bg-[#0B0F17]/95 border border-[#1A2236]/90 shadow-2xl shadow-black/40 md:backdrop-blur-2xl overflow-hidden font-mono">
        {/* Top bar with 3 dots & center title */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#1A2236]/80 bg-[#0F1520]/90 gap-2">
          {/* macOS window dots */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Title with running indicator */}
          <div className="flex items-center gap-2 text-xs text-slate-300 font-mono tracking-wide">
            <span className="text-slate-200 font-semibold">pipeline.py</span>
            <span className="text-slate-400">—</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-400 font-medium text-[11px]">active stream</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-8 space-y-5 sm:space-y-7 bg-[#070A0F]/90">
          {/* Pipeline Visualizer (3 Stages with Animated Flow Connectors) */}
          <div className="flex items-stretch justify-between gap-1.5 sm:gap-3 max-w-lg mx-auto w-full">
            {STAGES.map((stage, index) => {
              const Icon = stage.icon;
              const isCurrent = activeStage === index;

              return (
                <React.Fragment key={stage.id}>
                  {/* Stage Card */}
                  <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                    <div
                      className={`w-full h-full py-3 sm:py-5 px-1.5 sm:px-3 rounded-2xl border transition-all duration-500 flex flex-col items-center justify-center ${
                        isCurrent
                          ? 'bg-[#141B2A] border-cyan-500/40 shadow-[0_0_24px_rgba(22,194,201,0.18)] sm:scale-[1.03]'
                          : 'bg-[#0F1520]/80 border-[#1A2236]/80 hover:border-[#1A2236]'
                      }`}
                    >
                      <div className="mb-1.5 sm:mb-2">
                        <Icon
                          className={`w-5 h-5 sm:w-7 sm:h-7 transition-colors duration-300 ${
                            isCurrent ? 'text-cyan-400' : 'text-slate-400'
                          }`}
                          strokeWidth={1.75}
                        />
                      </div>
                      <span className="text-[11px] sm:text-sm font-semibold text-white tracking-tight mb-0.5 sm:mb-1 w-full px-0.5 leading-tight">
                        {stage.name}
                      </span>
                      <span className="text-[9.5px] sm:text-[11px] text-slate-400 font-mono tracking-tight block text-center w-full px-0.5 leading-tight whitespace-nowrap">
                        {stage.subtext}
                      </span>
                    </div>
                  </div>

                  {/* Flow Connector Line with Animated Moving Data Packets */}
                  {index < STAGES.length - 1 && (
                    <div className="flex-shrink-0 w-2.5 sm:w-12 flex items-center justify-center relative overflow-hidden h-6 self-center">
                      {/* Dashed background track */}
                      <div className="w-full border-t-2 border-dashed border-[#1A2236]" />

                      {/* Moving data packet */}
                      <span
                        className="animate-flow-packet w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#16C2C9]"
                        style={{ animationDelay: `${index * 0.8}s` }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Console / Terminal Log Output */}
          <div className="pt-3 font-mono text-[11px] sm:text-sm leading-relaxed space-y-2 border-t border-[#1A2236]/80 text-left">
            {/* Command */}
            <div className="flex items-center gap-2 text-slate-200 overflow-x-auto">
              <span className="text-cyan-400 font-bold select-none shrink-0">$</span>
              <span className="text-slate-100 font-medium whitespace-nowrap">spark-submit --master local[*] etl_job.py</span>
            </div>

            {/* Log lines */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-semibold text-[10px] sm:text-xs tracking-wider select-none shrink-0 font-mono">[INFO]</span>
                <span className="text-slate-300 break-words">extracting 1.2M rows from operational landing zone...</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-semibold text-[10px] sm:text-xs tracking-wider select-none shrink-0 font-mono">[INFO]</span>
                <span className="text-slate-300 break-words">transforming, deduplicating &amp; partitioning Parquet...</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-semibold text-[10px] sm:text-xs tracking-wider select-none shrink-0 font-mono">[OK]</span>
                <span className="text-slate-100 font-medium break-words">
                  persisted <span className="text-cyan-400 font-mono">→</span> warehouse.analytics_fact_sales (latency: 182ms)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
