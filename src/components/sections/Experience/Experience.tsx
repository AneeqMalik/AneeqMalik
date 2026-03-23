// src/components/sections/Experience/Experience.tsx
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TimelineItem } from './TimelineItem'
import { EXPERIENCE } from '@/data/resume'

export function Experience() {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="Experience"
        title="Where I've Worked"
        subtitle="2+ years across fintech, AI, and cloud — building production systems that scale."
      />

      <div className="max-w-3xl">
        {EXPERIENCE.map((exp, i) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
