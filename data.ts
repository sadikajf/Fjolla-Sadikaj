import { Project, NavItem } from './types';

export const PROFILE = {
  name: "Cloud_Eng",
  role: "Senior DevOps Cloud Engineer",
  logoText: "CLOUD_ENG", // Text displayed in the Navbar
  tagline: "Automating the Future of Infrastructure",
  status: "Operational", // System status indicator
  heroDescription: "Cloud Native Engineer specialized in building scalable, resilient, and secure infrastructure. Transforming code into production-ready environments.",
  about: {
    intro: "I am a passionate DevOps Cloud Engineer dedicated to automating the mundane and architecting the extraordinary. With a strong foundation in Linux systems and a love for cloud-native technologies, I help organizations build resilient infrastructure that scales effortlessly.",
    philosophy: "My philosophy involves \"Everything as Code.\" If it's not checked into git, it doesn't exist. I specialize in AWS, Kubernetes, and CI/CD methodologies, constantly learning new tools to improve developer experience."
  },
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "contact@example.com"
  }
};

export const SKILLS = {
  backend: [
    { name: "Python (Boto3, Flask)", level: 90 },
    { name: "Go (Golang)", level: 85 },
    { name: "Bash / Shell Scripting", level: 95 },
    { name: "TypeScript / Node.js", level: 75 }
  ],
  infrastructure: [
    { name: "Terraform / Terragrunt", level: 95 },
    { name: "Ansible", level: 85 },
    { name: "Docker & Kubernetes", level: 90 },
    { name: "Helm Charts", level: 85 }
  ]
};

export const PROJECTS: Project[] = [
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

// This helper generates the system prompt for the AI based on your profile
export const GENERATE_SYSTEM_PROMPT = () => `
You are an AI assistant representing ${PROFILE.name}, a ${PROFILE.role}.
Your persona is professional, technical, yet approachable.
You reside in a web terminal on their portfolio site.

The Engineer's Profile:
- Role: ${PROFILE.role}
- Philosophy: ${PROFILE.about.philosophy}

Key Skills:
- Backend: ${SKILLS.backend.map(s => s.name).join(', ')}
- Infrastructure: ${SKILLS.infrastructure.map(s => s.name).join(', ')}

Projects available to discuss:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Goal: Answer questions about the engineer's background, technical skills, and availability for hire. 
Keep answers concise, strictly text-based (markdown is okay), and relevant to tech.
If asked about specific projects, mention that they can be found on the 'Projects' page.
`;
