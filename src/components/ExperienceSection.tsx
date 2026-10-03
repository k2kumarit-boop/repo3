import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            05. Career Progression & Real-World Operations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Desktop Support Engineering to Cloud & Automation Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A track record of taking frontline operational bottlenecks and systematically solving them with automated pipelines, fleet policies, and cloud infrastructure.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-800/60">
          {EXPERIENCE_LIST.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.role}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-8 group`}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-sm shadow-cyan-400/50 mt-6 z-10" />

                {/* Content Card */}
                <div className="ml-10 md:ml-0 md:w-[calc(50%-2rem)] w-full">
                  <div className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-all duration-300 space-y-4 shadow-lg">
                    {/* Role & Period unboxed */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                      <span className="font-semibold text-cyan-400 font-mono">
                        {exp.period}
                      </span>
                      <span>
                        {exp.type} · {exp.location}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-slate-300">
                        {exp.organization}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Achievements bullets */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Key Operational Achievements
                      </div>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold shrink-0">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Tech Stack unboxed */}
                    <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5 text-xs text-slate-400 font-mono">
                      {exp.coreTech.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {i < exp.coreTech.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
