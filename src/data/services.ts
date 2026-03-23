// src/data/services.ts
import type { ClientProject } from '@/types'

const FIVERR_PROFILE = 'https://www.fiverr.com/aneeqkarim'

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 'fintech-systems',
    title: 'Fintech & Banking Systems',
    description:
      'Engineered secure financial APIs with RBAC, encryption, and low-latency transaction processing for enterprise-grade banking clients.',
    icon: '🏦',
    outcome: 'Enterprise-grade security',
    tags: ['Node.js', 'Security', 'RBAC', 'REST API'],
    href: FIVERR_PROFILE,
  },
  {
    id: 'full-stack-web',
    title: 'Full-Stack Web Applications',
    description:
      'Delivered production-grade React + Node.js web applications for clients across SaaS, healthcare, and real-estate verticals.',
    icon: '🌐',
    outcome: '10+ apps shipped',
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    href: FIVERR_PROFILE,
  },
  {
    id: 'cloud-native',
    title: 'Cloud-Native Platforms',
    description:
      'Architected and deployed cloud-native solutions using Microsoft Azure services including CosmosDB, Functions, and Blob Storage.',
    icon: '☁️',
    outcome: 'Azure-powered at scale',
    tags: ['Microsoft Azure', 'CosmosDB', 'Docker', 'Kubernetes'],
    href: FIVERR_PROFILE,
  },
  {
    id: 'ai-integrations',
    title: 'AI & ML Integrations',
    description:
      'Integrated AI capabilities into client products — from computer vision pipelines to LLM-powered document automation systems.',
    icon: '🤖',
    outcome: 'ML-powered products',
    tags: ['Python', 'OpenCV', 'AI/ML', 'APIs'],
    href: FIVERR_PROFILE,
  },
  {
    id: 'ecommerce-platforms',
    title: 'E-Commerce Platforms',
    description:
      'Built high-performance e-commerce backends with Redis caching, async processing, and third-party payment & messaging integrations.',
    icon: '🛒',
    outcome: 'High-traffic optimized',
    tags: ['Node.js', 'Redis', 'Payments', 'Scalability'],
    href: FIVERR_PROFILE,
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description:
      'Developed cross-platform mobile applications with React Native and Flutter for clients requiring both iOS and Android coverage.',
    icon: '📱',
    outcome: 'Cross-platform delivery',
    tags: ['React Native', 'Flutter', 'Dart', 'Mobile'],
    href: FIVERR_PROFILE,
  },
]
