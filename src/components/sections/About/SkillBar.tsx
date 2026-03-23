// src/components/sections/About/SkillBar.tsx
import { motion } from 'framer-motion'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import type { Skill } from '@/types'

const CATEGORY_COLORS: Record<Skill['category'], string> = {
  frontend: '#e50914',
  backend: '#059669',
  cloud: '#0078d4',
  database: '#7c3aed',
  devops: '#f59e0b',
  languages: '#06b6d4',
  mobile: '#ec4899',
  core: '#e50914',
  tools: '#d97706',
}

export function SkillBar({ skill }: { skill: Skill }) {
  const { ref, isInView } = useRevealOnScroll(0.3)
  const color = CATEGORY_COLORS[skill.category]

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-white text-sm font-medium">{skill.name}</span>
        <span className="text-[#8a8a8a] text-xs tabular-nums">{skill.level}%</span>
      </div>
      <div className="h-1 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  )
}
