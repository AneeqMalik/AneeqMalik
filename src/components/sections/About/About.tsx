// src/components/sections/About/About.tsx
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SkillBar } from './SkillBar'
import { PERSONAL, SKILLS, STATS } from '@/data/resume'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

export function About() {
  const { ref: statsRef, isInView: statsVisible } = useRevealOnScroll()

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="About Me"
        title="Software Engineer Building for Scale"
        subtitle="Strong foundation in backend systems, cloud infrastructure, and frontend engineering."
      />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* ── Left: bio + stats + certs ── */}
        <div className="flex flex-col gap-8">
          <motion.p
            className="text-[#8a8a8a] leading-relaxed text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {PERSONAL.about}
          </motion.p>

          {/* Stats grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="card-glass p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl font-extrabold text-[#e50914] leading-none">{stat.value}</p>
                <p className="text-[#8a8a8a] text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Location badge */}
          <p className="text-[#8a8a8a] text-sm flex items-center gap-2">
            <span>📍</span>
            <span>{PERSONAL.location}</span>
          </p>
        </div>

        {/* ── Right: skills ── */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-muted font-semibold text-sm uppercase tracking-widest mb-2">
              Technical Skills
            </h3>
            {SKILLS.map(skill => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* GitHub Streak badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-muted font-semibold text-sm uppercase tracking-widest mb-3">
              GitHub Activity
            </h3>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=AneeqMalik&hide_border=true&background=00000000&ring=e50914&fire=e50914&currStreakLabel=e50914&sideLabels=8a8a8a&currStreakNum=ffffff&sideNums=ffffff&dates=8a8a8a"
              alt="GitHub Streak"
              className="rounded-lg w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
