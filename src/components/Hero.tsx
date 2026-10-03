import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-900/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-blue-900/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed role metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              <span>{PERSONAL_INFO.name}</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Desktop Support Engineer</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Cloud & Automation</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Bridging Desktop Support Rigor with Cloud & Software Engineering.
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Specialized in operating systems optimization, endpoint automation, and scalable cloud infrastructure across{' '}
              <strong className="font-semibold text-white">Amazon Web Services (AWS)</strong> and{' '}
              <strong className="font-semibold text-white">Google Cloud Platform (GCP)</strong>. Transitioning frontline IT troubleshooting into resilient, self-healing software systems.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-md shadow-cyan-400/20 whitespace-nowrap"
              >
                View Engineering Projects
              </button>

              <button
                onClick={onOpenContact}
                className="px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                Contact Me
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-950/80 hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Claim-to-Proof Adjacency: Key Operational Metrics */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Fidelity Engineering Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group">
              {/* Image Frame */}
              <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <img
                  src="/src/assets/images/engineer_workspace_1791002752728.jpg"
                  alt="Kumar's software engineering and cloud infrastructure workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Bottom Visual Card Content */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Current Specialization</span>
                  <span className="text-emerald-400 font-medium">Enterprise Production</span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Systems Automation & Cloud Operations
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Diagnosing hardware bottlenecks, authoring idempotent PowerShell/Bash pipelines, and building serverless architectures on AWS & GCP.
                </p>

                {/* Quiet unboxed stack listing */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>AWS</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Google Cloud</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>PowerShell Core</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Python</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Bash</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Terraform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
