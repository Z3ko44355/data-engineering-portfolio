import React, { useState } from 'react';
import { Database, Play, CheckCircle2, Cpu, HardDrive, BarChart3, Layers, Sparkles } from 'lucide-react';

export const DataPipelineGraphic: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('System Idle – Ready to trigger data pipeline simulation');

  const pipelineStages = [
    {
      id: 0,
      title: '1. Ingestion Layer',
      subtitle: 'Raw Data Sources',
      tech: 'APIs, CSV, DB Logs, Streams',
      icon: Layers,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      detail: 'Extracting heterogeneous operational data from Cafe POS, relational snapshots, and transactional logs.',
    },
    {
      id: 1,
      title: '2. Processing & ETL',
      subtitle: 'Distributed Compute Engine',
      tech: 'PySpark, Python, Pandas',
      icon: Cpu,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      detail: 'Distributed transformations, deduplication, schema validation, type casting, and heavy aggregations.',
    },
    {
      id: 2,
      title: '3. Data Storage & Warehouse',
      subtitle: 'Normalized & Columnar',
      tech: 'SQL Server, Parquet, MySQL',
      icon: Database,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      detail: 'Relational 3NF schemas with ACID guarantees alongside partitioned Parquet files for fast analytical scans.',
    },
    {
      id: 3,
      title: '4. Analytics & Consumption',
      subtitle: 'Business Intelligence & BI',
      tech: 'SQL Queries, Real-time Metrics',
      icon: BarChart3,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      detail: 'Optimized stored procedures, low-latency dashboard queries, inventory forecasting, and financial reports.',
    },
  ];

  const handleSimulate = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setStatusMessage('Stage 1/4: Ingesting raw cafe and transactional datasets...');

    setTimeout(() => {
      setActiveStep(1);
      setStatusMessage('Stage 2/4: PySpark transformations & SQL optimization in progress...');
    }, 1200);

    setTimeout(() => {
      setActiveStep(2);
      setStatusMessage('Stage 3/4: Writing partitioned Parquet files and updating SQL Server tables...');
    }, 2400);

    setTimeout(() => {
      setActiveStep(3);
      setStatusMessage('Stage 4/4: Pipeline executed successfully! Analytical metrics updated with zero data loss.');
      setIsRunning(false);
    }, 3600);
  };

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden">
      {/* Background accent lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            End-to-End Data Engineering Pipeline
          </h3>
          <p className="text-xs text-slate-400 mt-1 font-normal">
            Architectural paradigm implemented across DEPI &amp; NTI projects (Ingest → Transform → Store → Serve)
          </p>
        </div>

        <button
          type="button"
          onClick={handleSimulate}
          disabled={isRunning}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
            isRunning
              ? 'bg-slate-800 text-slate-400 border border-slate-700 cursor-not-allowed'
              : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30'
          }`}
        >
          {isRunning ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <span>Executing Pipeline...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Simulate Pipeline Stream</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Pipeline Stages Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {pipelineStages.map((stage, idx) => {
          const Icon = stage.icon;
          const isCurrent = activeStep === stage.id;
          const isPassed = activeStep > stage.id;

          return (
            <div
              key={stage.id}
              onClick={() => setActiveStep(stage.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer relative group ${
                isCurrent
                  ? `${stage.bgColor} ${stage.borderColor} shadow-[0_0_20px_rgba(22,194,201,0.2)] ring-1 ring-cyan-400/40`
                  : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              {/* Connector indicator for desktop */}
              {idx < pipelineStages.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isPassed ? 'bg-cyan-400' : 'bg-slate-700'
                    }`}
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-9 h-9 rounded-lg ${stage.bgColor} ${stage.borderColor} border flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${stage.color}`} />
                </div>
                {isPassed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : isCurrent ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                ) : (
                  <span className="text-[10px] font-mono text-slate-500">#{stage.id + 1}</span>
                )}
              </div>

              <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {stage.title}
              </h4>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">{stage.subtitle}</p>

              <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                <span className="text-[10px] font-mono font-medium text-cyan-300/80 block truncate">
                  {stage.tech}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Detail Console Box */}
      <div className="relative z-10 mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-300">
          <HardDrive className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{pipelineStages[activeStep].detail}</span>
        </div>
        <div className="text-[11px] text-slate-400 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-850">
          Status: <span className="text-emerald-400">{statusMessage}</span>
        </div>
      </div>
    </div>
  );
};
