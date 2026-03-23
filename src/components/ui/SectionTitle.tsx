// src/components/ui/SectionTitle.tsx
import { motion } from 'framer-motion'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
const slideRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
const expandBar = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export function SectionTitle({ eyebrow, title, subtitle, centered = false }: SectionTitleProps) {
  const { ref, isInView } = useRevealOnScroll()
  const align = centered ? 'items-center text-center' : 'items-start'

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-3 mb-12 ${align}`}
      variants={stagger}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {eyebrow && (
        <motion.span
          variants={slideRight}
          className="text-[#e50914] text-xs font-semibold uppercase tracking-[0.2em]"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-[#8a8a8a] text-base md:text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={expandBar}
        className={`w-14 h-[3px] bg-[#e50914] rounded-full mt-1 ${centered ? 'mx-auto' : ''}`}
      />
    </motion.div>
  )
}
