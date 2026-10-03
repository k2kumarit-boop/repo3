import React, { useState, useMemo } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'automation', label: 'Automation & Systems' },
    { id: 'fullstack', label: 'Full-Stack Software' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'cloud' && (p.category === 'cloud' || p.category === 'infrastructure')) ||
        (selectedCategory === 'automation' && p.category === 'automation') ||
        (selectedCategory === 'fullstack' && p.category === 'fullstack');

      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
              02. Selected Engineering Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Production Systems, Cloud Architectures & Automation Suites
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Real tools built to solve real enterprise bottlenecks across AWS, GCP, and corporate desktop fleets. Click any card to inspect the architecture and code.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech (e.g. AWS, Python)..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900 border border-slate-700/80 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs (Functional segmented controls) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl mb-10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/40 text-slate-400 text-sm">
            No projects matched your criteria "{searchQuery}". Try searching for AWS, GCP, PowerShell, or Python.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-cyan-950/20"
              >
                {/* Visual Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  
                  {/* Category unboxed indicator */}
                  <div className="absolute top-3 left-3 text-[11px] font-semibold tracking-wider uppercase text-cyan-300 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700/60">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Cloud Providers unboxed metadata */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <span>{project.cloudProviders.join(' · ')}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors [text-wrap:balance]">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlights / Outcomes */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                      <span>✓</span>
                      <span className="truncate">{project.outcomes[0]}</span>
                    </div>
                  </div>

                  {/* Tech Stack Unboxed Metadata */}
                  <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < Math.min(3, project.techStack.length - 1) && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-slate-500">+{project.techStack.length - 4}</span>
                    )}
                  </div>

                  {/* Footer Card Row */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-cyan-400 font-medium group-hover:underline flex items-center gap-1">
                      <span>Explore Architecture</span>
                      <span aria-hidden="true">→</span>
                    </span>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-white p-1"
                      title="View GitHub repository"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
