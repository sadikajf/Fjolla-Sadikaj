import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CloudLightning, Server, Shield, Activity, GitBranch } from 'lucide-react';
import { NavItem } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            System Status: Operational
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Automating the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Future of Infrastructure
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
            Cloud Native Engineer specialized in building scalable, resilient, and secure infrastructure. 
            Transforming code into production-ready environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to={NavItem.PROJECTS}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              View Deployments
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
            <NavLink 
              to={NavItem.ABOUT}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Read Docs
            </NavLink>
          </div>
        </div>
      </section>

      {/* Feature Grid / Core Competencies */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Competencies</h2>
            <p className="text-slate-400">Architecting robust solutions for modern problems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CloudLightning,
                title: "Cloud Native",
                desc: "Expertise in AWS and GCP services, utilizing serverless and managed services for optimal performance."
              },
              {
                icon: GitBranch,
                title: "CI/CD Pipelines",
                desc: "Building automated delivery pipelines using GitHub Actions, Jenkins, and ArgoCD."
              },
              {
                icon: Server,
                title: "Infrastructure as Code",
                desc: "Provisioning reproducible infrastructure with Terraform, Ansible, and Crossplane."
              },
              {
                icon: Activity,
                title: "Observability",
                desc: "Implementing deep system visibility with Prometheus, Grafana, and ELK stack."
              },
              {
                icon: Shield,
                title: "DevSecOps",
                desc: "Integrating security best practices early in the development lifecycle."
              },
              {
                icon: Server,
                title: "Container Orchestration",
                desc: "Managing microservices at scale using Kubernetes, Helm, and Istio."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;