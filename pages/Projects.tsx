import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';
import { LayoutGrid } from 'lucide-react';

const Projects: React.FC = () => {
  // Placeholder data - easy for the user to update later
  const projects: Project[] = [
    {
      id: '1',
      title: 'Kubernetes Cluster Automation',
      description: 'Automated EKS cluster provisioning using Terraform and Ansible with built-in monitoring stack.',
      tags: ['Terraform', 'AWS', 'Kubernetes', 'Prometheus'],
      imageUrl: 'https://picsum.photos/seed/k8s/800/600',
      githubUrl: 'https://github.com',
      demoUrl: '#'
    },
    {
      id: '2',
      title: 'Serverless Data Pipeline',
      description: 'Event-driven ETL pipeline processing 1TB+ daily data using AWS Lambda and Kinesis.',
      tags: ['AWS Lambda', 'Python', 'DynamoDB'],
      imageUrl: 'https://picsum.photos/seed/aws/800/600',
      githubUrl: 'https://github.com'
    },
    {
      id: '3',
      title: 'Multi-Region Service Mesh',
      description: 'Implemented Istio service mesh across multiple regions for high availability and traffic splitting.',
      tags: ['Istio', 'GKE', 'Networking'],
      imageUrl: 'https://picsum.photos/seed/mesh/800/600',
      githubUrl: 'https://github.com'
    },
    {
      id: '4',
      title: 'GitOps Workflow System',
      description: 'Full GitOps implementation with ArgoCD for synchronizing cluster state with Git repositories.',
      tags: ['ArgoCD', 'GitOps', 'Helm'],
      imageUrl: 'https://picsum.photos/seed/gitops/800/600',
      githubUrl: 'https://github.com'
    }
  ];

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
            {projects.length} Repositories Loaded
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
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