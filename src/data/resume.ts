// src/data/resume.ts
import type { Skill, Experience, SocialLink, Project } from '@/types'

export const PERSONAL = {
  name: 'Aneeq Malik',
  title: 'Software Engineer',
  tagline: 'Building scalable, high-performance applications across fintech, AI, and cloud platforms.',
  email: 'aneeqkarimmalik@gmail.com',
  location: 'Karachi, Pakistan 🇵🇰',
  phone: '+92 31 967 46084',
  availableForWork: true,
  about: `Software Engineer with 2+ years of experience designing scalable, high-performance applications across fintech, AI, and cloud platforms. Strong foundation in data structures, system design, and backend engineering. Proven ability to build secure, distributed systems, optimize performance, and deliver production-grade solutions in fast-paced environments.`,
  github: 'https://github.com/AneeqMalik',
  fiverr: 'https://www.fiverr.com/aneeqkarim',
  linkedin: 'https://linkedin.com/in/aneeq-fayyaz-karim-malik',
} as const

export const STATS = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Shipped', value: '10+' },
  { label: 'Clients Served', value: '20+' },
  { label: 'GitHub Repos', value: '30+' },
] as const

export const SKILLS: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 92, category: 'frontend' },
  { name: 'React.js / Angular', level: 90, category: 'frontend' },
  { name: 'Node.js / Express.js', level: 82, category: 'backend' },
  { name: 'REST API Design', level: 85, category: 'backend' },
  { name: 'Microsoft Azure', level: 80, category: 'cloud' },
  { name: 'Docker / Kubernetes', level: 72, category: 'devops' },
  { name: 'MongoDB / CosmosDB', level: 78, category: 'database' },
  { name: 'Python / C++', level: 75, category: 'languages' },
  { name: 'Data Structures & Algorithms', level: 85, category: 'core' },
  { name: 'System Design', level: 78, category: 'core' },
]

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-techlogix',
    role: 'Software Engineer',
    company: 'Techlogix',
    period: 'May 2025 – Present',
    location: 'Karachi, Pakistan',
    type: 'full-time',
    bullets: [
      'Engineered scalable banking systems handling secure financial operations for a leading enterprise client.',
      'Designed and integrated high-reliability APIs ensuring low latency and fault tolerance.',
      'Implemented role-based access control (RBAC) and encryption mechanisms for financial data security.',
      'Optimized backend services and improved overall system performance.',
      'Collaborated in code reviews and architectural discussions.',
    ],
  },
  {
    id: 'exp-shispare',
    role: 'Associate Software Engineer',
    company: 'Shispare',
    period: 'May 2024 – Apr 2025',
    location: 'Karachi, Pakistan',
    type: 'full-time',
    bullets: [
      'Developed scalable frontend systems using React and Angular, reducing page load time by 20%.',
      'Built reusable UI architecture that improved development velocity across teams.',
      'Handled multiple concurrent projects ensuring high-quality, on-time delivery.',
    ],
  },
  {
    id: 'exp-dencity',
    role: 'Software Engineer',
    company: 'Dencity.AI',
    period: 'Sep 2023 – Jul 2024',
    location: 'Paris, France (Remote)',
    type: 'full-time',
    bullets: [
      'Built cloud-native applications leveraging Microsoft Azure services (CosmosDB, Functions, Blob Storage).',
      'Designed geospatial features using Google Maps APIs for an urban density AI platform.',
      'Improved frontend performance and UX using Angular and React.',
    ],
  },
  {
    id: 'exp-freelance',
    role: 'Freelance Software Engineer',
    company: 'Self-Employed (Fiverr)',
    period: '2022 – 2024',
    location: 'Remote',
    type: 'freelance',
    bullets: [
      'Delivered 20+ production web applications for international clients across healthcare, e-commerce, and SaaS.',
      'Built full-stack solutions with React, Node.js, and cloud integrations tailored to client requirements.',
      'Maintained top-rated freelancer status with consistent 5-star reviews and high repeat-client rate.',
    ],
  },
]

export const CERTIFICATIONS = [
  { name: 'Microsoft Azure Fundamentals', code: 'AZ-900', issuer: 'Microsoft', color: '#0078d4' },
  { name: 'Microsoft Azure AI Fundamentals', code: 'AI-900', issuer: 'Microsoft', color: '#0078d4' },
  { name: 'Introduction to Cloud 101', code: 'AWS Educate', issuer: 'Amazon Web Services', color: '#ff9900' },
]

export const PROJECTS: Project[] = [
  {
    id: 'medscribe',
    title: 'MedScribe',
    category: 'AI / Healthcare',
    icon: '🏥',
    description:
      'AI-powered system that automates medical documentation, reducing manual transcription overhead for healthcare providers.',
    highlights: [
      'Automated medical documentation using NLP/AI pipelines',
      'Designed secure authentication and HIPAA-compliant patient data handling',
      'Implemented real-time notification system for clinical updates',
    ],
    tags: ['Node.js', 'AI/ML', 'Authentication', 'Real-time', 'REST API'],
    github: 'https://github.com/AneeqMalik',
  },
  {
    id: 'dentskan',
    title: 'DentSkan',
    category: 'AI / Computer Vision',
    icon: '🦷',
    description:
      'AI dental diagnosis system that scans and identifies dental diseases using image processing and computer vision.',
    highlights: [
      'Built scanning pipeline for diagnosing dental diseases from images',
      'Applied computer vision techniques for anomaly detection using OpenCV',
      'Improved diagnosis speed and accuracy over manual review baselines',
    ],
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing', 'AI/ML'],
    github: 'https://github.com/AneeqMalik',
  },
  {
    id: 'attendance-system',
    title: 'Facial Attendance System',
    category: 'Computer Vision',
    icon: '👁️',
    description:
      'Real-time facial recognition system that automates employee attendance tracking, eliminating manual check-in.',
    highlights: [
      'Built real-time face detection and recognition pipeline in C# with OpenCV',
      'Automated attendance tracking with persistent storage and reporting',
      'Designed modular face detection and recognition stages for extensibility',
    ],
    tags: ['C#', '.NET', 'OpenCV', 'Computer Vision', 'Real-time'],
    github: 'https://github.com/AneeqMalik',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Backend / Scalability',
    icon: '🛒',
    description:
      'High-performance e-commerce backend engineered to handle high concurrent traffic with caching and async processing.',
    highlights: [
      'Designed scalable backend architecture for high concurrent load',
      'Optimized throughput using Redis caching and async job processing',
      'Integrated payment gateways and third-party messaging services',
    ],
    tags: ['Node.js', 'Redis', 'REST API', 'Docker', 'Payments'],
    github: 'https://github.com/AneeqMalik',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: PERSONAL.github, icon: 'github' },
  { label: 'LinkedIn', href: PERSONAL.linkedin, icon: 'linkedin' },
  { label: 'Fiverr', href: PERSONAL.fiverr, icon: 'fiverr' },
]
