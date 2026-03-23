// src/components/sections/Fiverr/ServiceCard.tsx
import { motion } from 'framer-motion'
import type { ClientProject } from '@/types'

export function ServiceCard({ service }: { service: ClientProject }) {
  return (
    <motion.div
      className="card-glass p-6 flex flex-col gap-4 group"
      whileHover={{ y: -4, borderColor: 'rgba(229,9,20,0.3)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Icon */}
      <div className="text-3xl">{service.icon}</div>

      {/* Title */}
      <h3 className="text-white font-semibold text-base leading-tight group-hover:text-[#e50914] transition-colors duration-200">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#8a8a8a] text-sm leading-relaxed flex-1 line-clamp-3">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-[rgba(255,255,255,0.05)] text-[#8a8a8a]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Outcome footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.05)]">
        <span className="text-[#e50914] text-xs font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e50914]" />
          {service.outcome}
        </span>
        <a
          href={service.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8a8a8a] text-xs hover:text-white transition-colors"
          aria-label={`View ${service.title} on Fiverr`}
        >
          View on Fiverr ↗
        </a>
      </div>
    </motion.div>
  )
}
