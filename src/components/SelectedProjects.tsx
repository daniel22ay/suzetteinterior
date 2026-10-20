import React, { useState } from 'react';
import { ArrowUpRight, X, Check, MapPin, Layers } from 'lucide-react';
import { AUTHENTIC_PROJECTS } from '../data/content';
import { Project } from '../types';

interface SelectedProjectsProps {
  onOpenBooking: () => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onOpenBooking }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Retail & Boutiques', value: 'Retail' },
    { label: 'Commercial & Health', value: 'Commercial' },
    { label: 'Custom Millwork', value: 'Millwork' },
    { label: 'Office & Condominium', value: 'Office' }
  ];

  const filteredProjects = AUTHENTIC_PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category.toLowerCase().includes(filter.toLowerCase()) || p.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="work" className="py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E2E8F0]">
          <div>
            <span className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.24em] text-[#0D5C63] block mb-3">
              Curated Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#132A2F] leading-tight">
              Selected Work
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#52636D] max-w-md font-light leading-relaxed">
            Realized commercial interiors, bespoke architectural millwork, and retail environments across Ottawa and Ontario.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Project Categories">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={`text-xs uppercase tracking-[0.14em] font-medium px-4 py-2 border transition-all duration-200 ${
                filter === c.value
                  ? 'bg-[#0D5C63] text-white border-[#0D5C63]'
                  : 'bg-white text-[#52636D] border-[#E2E8F0] hover:border-[#0D5C63] hover:text-[#0D5C63]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer flex flex-col bg-white border border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#0D5C63]/50 focus-within:ring-2 focus-within:ring-[#0D5C63]"
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E2E8F0]">
                <img
                  src={project.image}
                  alt={`${project.title} - VISION Interior Design authentic project`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0D5C63] text-[10px] uppercase font-sans-clean font-semibold tracking-[0.16em] px-3 py-1 shadow-sm">
                  {project.category}
                </div>

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-[#0D5C63]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-white text-center">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium block mb-2 text-[#A2E2E8]">
                      View Project Scope
                    </span>
                    <p className="font-serif-luxury text-lg font-medium leading-snug">
                      {project.title}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white border-b border-white pb-0.5">
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#132A2F] group-hover:text-[#0D5C63] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#52636D] line-clamp-2 font-light leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0D5C63]" />
                    <span>{project.location || 'Eastern Ontario'}</span>
                  </span>
                  <span className="font-medium text-[#0D5C63] group-hover:underline">
                    Scope Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project Lightbox Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 bg-[#132A2F]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E8F0] relative"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={activeProject.title}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-[#132A2F] hover:text-[#0D5C63] transition-colors rounded-full shadow-md"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image */}
              <div className="relative aspect-[16/9] w-full bg-[#E2E8F0]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1 text-xs uppercase tracking-[0.16em] font-semibold text-[#0D5C63]">
                  {activeProject.category}
                </div>
              </div>

              {/* Content Breakdown */}
              <div className="p-6 sm:p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-[#64748B] block mb-1">
                  VISION Interior Design Project File
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#132A2F]">
                  {activeProject.title}
                </h3>

                <p className="mt-4 text-[#4A5560] leading-relaxed text-base font-light">
                  {activeProject.summary}
                </p>

                {/* Scope of Work */}
                <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
                  <h4 className="text-xs uppercase font-sans-clean tracking-[0.18em] font-semibold text-[#132A2F] mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#0D5C63]" />
                    <span>Design & Execution Scope</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#475569]">
                        <Check className="w-4 h-4 text-[#0D5C63] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer CTA */}
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#64748B]">
                    Interested in similar commercial or retail solutions?
                  </span>
                  <button
                    onClick={() => {
                      setActiveProject(null);
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D5C63] hover:bg-[#09474D] text-white text-xs uppercase tracking-[0.18em] font-semibold px-6 py-3"
                  >
                    <span>Discuss Similar Space</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
