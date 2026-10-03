import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand mark & copyright */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#"
              className="text-base font-bold text-white hover:text-cyan-400 transition-colors"
            >
              {PERSONAL_INFO.name}
            </a>
            <p className="text-xs text-slate-500">
              © {currentYear} Kumar. Software Engineering, Cloud Architecture (AWS & GCP) & Desktop Support Automation.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-slate-200 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-slate-200 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-200 transition-colors">
              Cloud & Skills
            </a>
            <a href="#automation-lab" className="hover:text-slate-200 transition-colors">
              Automation Lab
            </a>
            <a href="#github" className="hover:text-slate-200 transition-colors">
              GitHub Repos
            </a>
            <a href="#experience" className="hover:text-slate-200 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-slate-200 transition-colors">
              Contact
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
