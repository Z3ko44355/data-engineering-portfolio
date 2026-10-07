import React, { useState } from 'react';
import {
  ExternalLink,
  Terminal,
  Play,
  CheckCircle2,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { formatBoldText } from '../utils/formatText';
import { TiltCard } from './TiltCard';

export const ProjectsSection: React.FC = () => {
  const currentProject = projects[0];

  // ETL Lab Simulator state
  const [etlRunning, setEtlRunning] = useState<boolean>(false);
  const [etlLogs, setEtlLogs] = useState<string[]>([
    '$ python etl_pipeline_runner.py --dataset sales_raw.csv --engine pyspark',
    '✓ Initialized PySpark Session (App: DE_Lab_ETL)',
    '✓ Ready for batch execution...',
  ]);

  const runEtlSimulation = () => {
    if (etlRunning) return;
    setEtlRunning(true);
    setEtlLogs([
      '$ python etl_pipeline_runner.py --dataset raw_transactions.json --engine pyspark',
      '[*] [STAGE 1/4] Extracting 50,000 raw transaction records from landing zone...',
    ]);

    setTimeout(() => {
      setEtlLogs((prev) => [
        ...prev,
        '✓ [EXTRACT] 50,000 records loaded into PySpark DataFrame.',
        '[*] [STAGE 2/4] Executing cleaning rules: regex scrubbing, NULL imputation, UTC timestamp standardizing...',
        '✓ [CLEAN] 1,420 malformed rows quarantined. 48,580 clean records retained.',
      ]);
    }, 1200);

    setTimeout(() => {
      setEtlLogs((prev) => [
        ...prev,
        '[*] [STAGE 3/4] Transforming: computing rolling revenue aggregations & customer lifetime value...',
        '✓ [TRANSFORM] Spark partition shuffle completed in 412ms across 4 worker threads.',
      ]);
    }, 2400);

    setTimeout(() => {
      setEtlLogs((prev) => [
        ...prev,
        '[*] [STAGE 4/4] Writing output to target warehouse as snappy-compressed columnar Parquet files...',
        '✓ [LOAD] 48,580 records persisted to /warehouse/analytics_sales/date=2026-09-09/.',
        '⭐ [PIPELINE SUCCESS] Total latency: 3.42s | Data Integrity: 100% | Zero Data Loss.',
      ]);
      setEtlRunning(false);
    }, 3800);
  };

  return (
    <section id="projects" className="py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      {/* Glow background wrapped to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full" aria-hidden="true">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 blur-[160px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 max-w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 font-normal text-sm sm:text-base mt-2 max-w-2xl">
            Selected engineering implementations spanning distributed PySpark ETL pipelines, structured transformations, and analytical warehouses.
          </p>
        </div>

        {/* Featured Project Showcase */}
        {currentProject && (
          <div className="max-w-5xl mx-auto w-full">
            <TiltCard id="project-card-etl" className="w-full">
              <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-slate-900/80 border border-slate-800/60 hover:border-slate-700/80 shadow-xl shadow-slate-950/40 transition-all flex flex-col justify-between group backdrop-blur-xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Details, Metrics & Pillars */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Header tags */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
                          Big Data &amp; ETL Pipelines
                        </span>
                        <span className="text-xs text-slate-400">
                          DataCamp &amp; IBM Roadmap
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                        {currentProject.title}
                      </h3>

                      <p className="text-slate-300 font-normal text-sm sm:text-base leading-relaxed mb-6">
                        {formatBoldText(currentProject.details)}
                      </p>

                      {/* Metrics Highlights */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {currentProject.metrics?.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/60 text-center"
                          >
                            <div className="text-xs sm:text-sm font-bold text-emerald-400">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-slate-400 uppercase mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Key Architecture Highlights */}
                      <div className="space-y-2.5 mb-6">
                        <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider block mb-1">
                          Architectural Pillars:
                        </span>
                        {currentProject.architectureHighlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{formatBoldText(hl)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/60">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800/60 text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Interactive Terminal & Actions */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    {/* Interactive Terminal / ETL Runner */}
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800/60 shadow-inner max-w-full overflow-hidden flex flex-col">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-800/60 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="text-slate-200 font-semibold text-xs sm:text-sm truncate">Interactive ETL Runner</span>
                        </div>
                        <button
                          type="button"
                          onClick={runEtlSimulation}
                          disabled={etlRunning}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${
                            etlRunning
                              ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                              : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {etlRunning ? (
                            <>
                              <div className="w-2.5 h-2.5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                              <span>Running...</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-2.5 h-2.5 fill-current" />
                              <span>Run Sample Pipeline</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="font-mono space-y-1.5 min-h-[160px] text-xs text-slate-300 leading-relaxed overflow-x-auto max-w-full break-words px-1 py-1">
                        {etlLogs.map((log, lIdx) => (
                          <div
                            key={lIdx}
                            className={`break-words ${
                              log.includes('SUCCESS')
                                ? 'text-emerald-400 font-bold'
                                : log.startsWith('$')
                                ? 'text-cyan-300'
                                : log.startsWith('✓')
                                ? 'text-emerald-300'
                                : 'text-slate-300'
                            }`}
                          >
                            {log}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions / GitHub Link */}
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-medium text-slate-200">Open Source Repository</div>
                        <div className="text-[11px] text-slate-400">DataCamp &amp; IBM Professional Repositories</div>
                      </div>

                      <a
                        href="https://github.com/Z3ko44355"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 flex items-center gap-2 transition-colors shrink-0"
                      >
                        <span>Explore Source</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        )}
      </div>
    </section>
  );
};
