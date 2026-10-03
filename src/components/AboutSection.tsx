import React from 'react';
import { PERSONAL_INFO, TESTIMONIALS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            01. Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            From Hardware Registers to Cloud Serverless: Why Support Grounding Matters
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Many software engineers only experience systems through high-level abstractions. My foundation was forged on the enterprise floor: diagnosing corrupted filesystems, troubleshooting DNS timeouts with packet analyzers, and dissecting blue screen crash dumps.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/50 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">
              Root-Cause Operating System Rigor
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              When a service fails, I don't just reboot—I query system event logs, trace PID handles, and audit file permissions. This low-level OS mastery directly translates to bulletproof container and VM configurations.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/50 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">
              Dual-Cloud Agility (AWS & GCP)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Skilled in translating requirements into AWS services (EC2, Lambda, S3, IAM) and Google Cloud Platform (Compute Engine, Cloud Run, Cloud Storage). I design with cost governance and high availability in mind.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/50 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">
              Ruthless Manual Toil Elimination
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              If an administrative task must be executed twice, it deserves a script. I write clean, modular PowerShell, Bash, and Python automation to replace manual human clicking with version-controlled code.
            </p>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Peer Endorsements / Testimonials */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 relative">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Operational Impact & Peer Validation
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <blockquote key={idx} className="space-y-4 border-l-2 border-cyan-500/40 pl-5">
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <footer className="text-xs">
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-slate-400">
                    <span>{t.organization}</span>
                    <span aria-hidden="true" className="mx-1.5">·</span>
                    <span>{t.relation}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
