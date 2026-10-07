import React, { useState, useMemo } from 'react';
import {
  Database,
  Code2,
  Cloud,
  BrainCircuit,
  Search,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

const iconMap: Record<string, React.ElementType> = {
  Database,
  Code2,
  Cloud,
  BrainCircuit,
};

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Domains' },
    { id: 'data-engineering', label: 'Data & Databases' },
    { id: 'programming-languages', label: 'Languages' },
    { id: 'cloud-devops', label: 'Cloud & DevOps' },
    { id: 'core-competencies', label: 'Core Competencies' },
  ];

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        // Check if category matches selected tab
        if (selectedFilter !== 'all' && cat.id !== selectedFilter) {
          return null;
        }

        // Filter skills inside by search query if any
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchingSkills = cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              cat.title.toLowerCase().includes(q)
          );
          if (matchingSkills.length === 0) return null;
          return { ...cat, skills: matchingSkills };
        }

        return cat;
      })
      .filter(Boolean) as typeof skillCategories;
  }, [selectedFilter, searchQuery]);

  return (
    <section id="skills" className="py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      {/* Background glow wrapped to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 w-full max-w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills &amp; Proficiencies
          </h2>
          <p className="text-slate-400 font-normal text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Engineered for large-scale data transformation, database optimization, cloud architecture, and competitive algorithmic problem solving.
          </p>
        </div>

        {/* Controls: Search bar and category tabs with consistent vertical alignment and gap-4 */}
        <div className="flex flex-col gap-4 mb-8 w-full max-w-full">
          {/* Real-time search bar */}
          <div className="relative w-full sm:w-80 max-w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PySpark, SQL, Linux..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-900/90 border border-slate-800/60 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/40 transition-all font-normal shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills with horizontal scroll */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedFilter === tab.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800/60 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Grid Cards */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400 font-normal shadow-xl shadow-slate-950/40">
            No skill found matching &quot;{searchQuery}&quot;. Clear your search or try searching for &quot;SQL&quot;, &quot;Python&quot;, &quot;Cloud&quot;.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-full">
            {filteredCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || Database;

              return (
                <TiltCard
                  key={category.id}
                  id={`skill-card-${category.id}`}
                  className="flex flex-col h-full"
                >
                  <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800/60 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-slate-950/40">
                    <div>
                      {/* Category Title & Icon */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-cyan-400 transition-transform group-hover:scale-105">
                          <IconComponent className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {category.title}
                          </h3>
                          <span className="text-xs text-slate-400 font-normal">
                            {category.skills.length} competencies
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 font-normal mb-5 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Minimal, Clean Skill Items: Icon/Bullet + Skill Name with balanced padding */}
                      <div className="space-y-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="px-3 py-2 rounded-xl border border-slate-800/60 bg-slate-950/50 hover:bg-slate-900/80 hover:border-slate-700/80 transition-all flex items-center gap-2.5 group/item"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                                skill.highlight
                                  ? 'bg-cyan-400 group-hover/item:bg-cyan-300'
                                  : 'bg-slate-600 group-hover/item:bg-slate-400'
                              }`}
                            />
                            <span
                              className={`text-xs font-medium transition-colors ${
                                skill.highlight
                                  ? 'text-slate-100 group-hover/item:text-white'
                                  : 'text-slate-300 group-hover/item:text-slate-100'
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
