import React from 'react';
import { Terminal, Cpu, Code2, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
        About Me
      </h1>

      <div className="prose prose-invert prose-lg mb-12">
        <p className="text-slate-300 leading-relaxed">
          I am a passionate DevOps Cloud Engineer dedicated to automating the mundane and architecting the extraordinary. 
          With a strong foundation in Linux systems and a love for cloud-native technologies, I help organizations 
          build resilient infrastructure that scales effortlessly.
        </p>
        <p className="text-slate-300 leading-relaxed mt-4">
          My philosophy involves "Everything as Code." If it's not checked into git, it doesn't exist. 
          I specialize in AWS, Kubernetes, and CI/CD methodologies, constantly learning new tools to improve developer experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Terminal className="mr-2 text-cyan-400 h-5 w-5" />
            Backend & Scripting
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>Python (Boto3, Flask)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>Go (Golang)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>Bash / Shell Scripting</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>TypeScript / Node.js</li>
          </ul>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Cpu className="mr-2 text-cyan-400 h-5 w-5" />
            Infrastructure
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Terraform / Terragrunt</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Ansible</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Docker & Kubernetes</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Helm Charts</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-slate-400 mb-6">Currently open to new opportunities and collaborations.</p>
        <div className="flex justify-center space-x-4">
           <a href="https://github.com" className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors flex items-center">
             <Code2 className="mr-2 h-4 w-4" /> GitHub
           </a>
           <a href="https://linkedin.com" className="px-6 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded transition-colors flex items-center">
             <Globe className="mr-2 h-4 w-4" /> LinkedIn
           </a>
        </div>
      </div>
    </div>
  );
};

export default About;