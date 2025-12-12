import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { LayoutGrid } from 'lucide-react';
import { PROJECTS } from '../data';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
            <LayoutGrid className="mr-3 text-cyan-400" />
            Active Projects
          </h1>
          <p className="text-slate-400 max-w-2xl">
            A selection of open-source contributions, infrastructure templates, and cloud architecture implementations.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="text-xs font-mono text-cyan-500 bg-cyan-950/30 px-3 py-1 rounded border border-cyan-900">
            {PROJECTS.length} Repositories Loaded
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* Empty State / Coming Soon Hint */}
      <div className="mt-20 p-8 border border-dashed border-slate-800 rounded-xl text-center bg-slate-900/30">
        <h3 className="text-xl text-slate-300 font-mono mb-2">More projects incoming...</h3>
        <p className="text-slate-500 text-sm">Check back soon for new deployments or ask the AI assistant about my current work.</p>
      </div>
    </div>
  );
};

export default Projects;