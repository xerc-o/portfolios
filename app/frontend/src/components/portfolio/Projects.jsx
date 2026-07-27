import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg-warm border-b border-rule fade-in-slide delay-200">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-ink tracking-tight">
            Selected Work
          </h2>
        </div>

        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-row px-2 py-10 flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-bg-alt border-b border-transparent hover:border-accent transition-all ${index !== 0 ? 'border-t border-t-rule' : ''}`}
            >
              {/* Title & Link */}
              <div className="md:w-1/3 flex flex-col items-start pt-1">
                <h3 className="text-xl font-bold text-ink mb-2">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-mono text-ink-faint group-hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Project
                  </a>
                )}
              </div>

              {/* Description & Tags */}
              <div className="md:w-2/3 flex flex-col items-start">
                <p className="text-base text-ink-muted mb-6 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-ink-muted bg-bg-alt border border-rule px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
