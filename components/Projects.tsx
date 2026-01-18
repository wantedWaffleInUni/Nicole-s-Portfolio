import React, { useState } from 'react';
import Section from './Section';
import Modal from './Modal';
import Placeholder from './Placeholder';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" fullWidth>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-0">
        <div>
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Featured Projects</h2>
          <p className="text-stone-500 max-w-lg">
            Selected works demonstrating strategic planning, marketing execution, and leadership.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-0">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative bg-white border border-stone-100 hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 overflow-hidden"
          >
            {/* Image Container with Placeholder */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-stone-50">
               <Placeholder label={`${project.title} Cover`} height="h-full" className="rounded-none border-0" />
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs uppercase tracking-widest font-medium text-stone-800 z-10 shadow-sm">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                   <h3 className="font-serif text-2xl text-stone-900 group-hover:text-stone-600 transition-colors">
                    {project.title}
                  </h3>
                   <p className="text-stone-400 text-sm mt-1">{project.role}</p>
                </div>
                <span className="p-2 border border-stone-200 rounded-full group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all duration-300">
                  <ArrowRight size={16} />
                </span>
              </div>
              <p className="text-stone-500 line-clamp-2 leading-relaxed text-sm">
                {project.overview}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">{selectedProject.category} • {selectedProject.duration}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-2 mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed">{selectedProject.overview}</p>
            </div>

            {/* Project Gallery Placeholder Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
               <div className="col-span-1 md:col-span-2 h-64">
                  <Placeholder label="Project Highlight Video" icon="video" />
               </div>
               <div className="h-48">
                  <Placeholder label="Campaign Visual 1" />
               </div>
               <div className="h-48">
                  <Placeholder label="Campaign Visual 2" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-100 pt-8">
              <div>
                <h4 className="flex items-center text-sm font-bold text-stone-900 uppercase tracking-wide mb-4">
                  <Layers className="w-4 h-4 mr-2" /> Key Objectives
                </h4>
                <ul className="space-y-2">
                  {selectedProject.objectives.map((obj, i) => (
                    <li key={i} className="text-stone-600 text-sm flex items-start">
                      <span className="mr-2 text-stone-300">•</span> {obj}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                 <h4 className="flex items-center text-sm font-bold text-stone-900 uppercase tracking-wide mb-4">
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedProject.outcomes.map((outcome, i) => (
                    <li key={i} className="text-stone-600 text-sm flex items-start">
                       <span className="mr-2 text-stone-300">•</span> {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3">Skills Applied</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
};

export default Projects;