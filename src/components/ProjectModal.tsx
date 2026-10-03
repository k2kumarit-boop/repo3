import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl text-slate-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{project.cloudProviders.join(' & ')}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Visual Banner */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-[16/8] bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-950/50 space-y-2">
            <h4 className="text-sm font-semibold text-rose-400 uppercase tracking-wider">
              The Operational Problem
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-950/50 space-y-2">
            <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
              The Engineering Solution
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
            Architecture & Implementation
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.architectureDetails}
          </p>
        </div>

        {/* Quantified Outcomes */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Quantified Engineering Outcomes
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.outcomes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Code Snippet (if available) */}
        {project.commandSnippet && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">{project.commandSnippet.title}</span>
              <span className="uppercase text-[10px] tracking-wider text-slate-500 font-mono">
                {project.commandSnippet.shell}
              </span>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
              <code>{project.commandSnippet.code}</code>
            </pre>
          </div>
        )}

        {/* Tech Stack Unboxed Metadata */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            Technologies & Tools
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono">
            {project.techStack.map((tech, i) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {i < project.techStack.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
