// src/components/sections/Experience/TimelineItem.tsx
import { motion } from 'framer-motion';
import type { Experience } from '@/types';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const TYPE_BADGE: Record<Experience['type'], { label: string; colors: string }> = {
  'full-time': { label: 'Full-time', colors: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  freelance: { label: 'Freelance', colors: 'bg-[#e50914]/10 text-[#e50914] border-[#e50914]/20' },
  contract: { label: 'Contract', colors: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  'part-time': { label: 'Part-time', colors: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
}

interface TimelineItemProps {
  experience: Experience
  isLast?: boolean
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  const { ref, isInView } = useRevealOnScroll()
  const badge = TYPE_BADGE[experience.type]

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Vertical line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-3 h-3 rounded-full border-2 border-[#e50914] bg-[#0a0a0a] z-10 mt-1"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        {!isLast && (
          <motion.div
            className="w-px flex-1 min-h-[2rem] mt-1"
            style={{ background: 'linear-gradient(to bottom, rgba(229,9,20,0.4), rgba(229,9,20,0.05))' }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        className="card-glass p-6 mb-8 flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{experience.role}</h3>
            <p className="text-[#e50914] text-sm font-medium mt-0.5">{experience.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[#8a8a8a] text-xs">{experience.period}</span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${badge.colors}`}
            >
              {badge.label}
            </span>
          </div>
        </div>

        <p className="text-[#8a8a8a] text-xs mb-3 flex items-center gap-1">
          <span>📍</span>
          {experience.location}
        </p>

        <ul className="flex flex-col gap-2">
          {experience.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              className="flex gap-2 text-[#8a8a8a] text-sm leading-relaxed"
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.07, ease: 'easeOut' }}
            >
              <span className="text-[#e50914] flex-shrink-0 mt-0.5">▸</span>
              {bullet}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
