import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const CloudSkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            03. Technical Competencies & Cloud Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            AWS, Google Cloud & Systems Automation Matrix
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A battle-tested repertoire developed across live enterprise helpdesk triage, server virtualization, and production cloud environments.
          </p>
        </div>

        {/* Cloud Providers Showcase Banner: AWS vs Google Cloud */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* AWS Card */}
          <div className="p-7 rounded-2xl border border-amber-900/30 bg-gradient-to-br from-amber-950/20 via-slate-900/60 to-slate-900/80 space-y-5">
            <div className="flex items-center justify-between border-b border-amber-900/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 font-mono text-sm">
                  AWS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Amazon Web Services</h3>
                  <div className="text-xs text-amber-400/90 font-mono">Infrastructure, Compute & Serverless</div>
                </div>
              </div>
              <span className="text-xs text-slate-400">Production Tested</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Architecting secure VPC topologies, managing EC2 fleet auto-scaling, provisioning S3 bucket lifecycle rules, and writing Python serverless event handlers on AWS Lambda.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key AWS Capabilities
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span><strong>EC2 & Auto Scaling</strong> (AMI, EBS)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span><strong>AWS Lambda</strong> (Python handlers)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span><strong>S3 & Glacier</strong> (Archival lifecycle)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span><strong>IAM & KMS</strong> (Least privilege)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span><strong>VPC Networking</strong> (Subnets, NAT)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span><strong>Systems Manager</strong> (SSM Run Cmd)</span>
                </div>
              </div>
            </div>
          </div>

          {/* GCP Card */}
          <div className="p-7 rounded-2xl border border-blue-900/30 bg-gradient-to-br from-blue-950/20 via-slate-900/60 to-slate-900/80 space-y-5">
            <div className="flex items-center justify-between border-b border-blue-900/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 font-mono text-sm">
                  GCP
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Google Cloud Platform</h3>
                  <div className="text-xs text-blue-400/90 font-mono">Containers, Microservices & Governance</div>
                </div>
              </div>
              <span className="text-xs text-slate-400">Production Tested</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Deploying containerized microservices on Cloud Run, managing Google Compute Engine VM fleets, administering Google Cloud IAM service accounts, and centralized logging.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key GCP Capabilities
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">›</span>
                  <span><strong>Compute Engine (GCE)</strong> (Custom images)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">›</span>
                  <span><strong>Cloud Run & Functions</strong> (Serverless)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">›</span>
                  <span><strong>Cloud Storage</strong> (gsutil automation)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">›</span>
                  <span><strong>Google Cloud IAM</strong> (Workload Identity)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">›</span>
                  <span><strong>Cloud Logging</strong> (Pub/Sub exports)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">›</span>
                  <span><strong>gcloud CLI</strong> (Automated deployments)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Category Tabs */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === idx
                    ? 'bg-slate-800 text-white border border-slate-700'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active Tab Detailed Breakdown */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_CATEGORIES[activeTab].items.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/60 space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
