// src/components/sections/Projects/ProjectCard.tsx
import { motion } from 'framer-motion'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="card-glass p-6 flex flex-col gap-4 group h-full"
      whileHover={{
        y: -6,
        borderColor: 'rgba(229,9,20,0.35)',
        boxShadow: '0 0 28px rgba(229,9,20,0.12)',
      }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl leading-none">{project.icon}</span>
          <div>
            <h3 className="text-white font-semibold text-base leading-tight group-hover:text-[#e50914] transition-colors duration-200">
              {project.title}
            </h3>
            <span className="text-[#8a8a8a] text-xs mt-0.5 block">{project.category}</span>
          </div>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-[#8a8a8a] hover:text-white transition-colors text-xs px-2 py-1 rounded border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] shrink-0"
          >
            GitHub ↗
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-[#8a8a8a] text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5 flex-1">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-[#8a8a8a] text-xs leading-relaxed">
            <span className="text-[#e50914] shrink-0 mt-0.5">▸</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(255,255,255,0.05)]">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-[#e50914]/8 text-[#e50914] border border-[#e50914]/15"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
