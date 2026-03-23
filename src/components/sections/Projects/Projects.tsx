// src/components/sections/Projects/Projects.tsx
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from './ProjectCard'
import { Button } from '@/components/ui/Button'
import { PROJECTS, CERTIFICATIONS, PERSONAL } from '@/data/resume'

const ISSUER_ICONS: Record<string, string> = {
  Microsoft: '🔷',
  'Amazon Web Services': '🟠',
}

export function Projects() {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="Projects"
        title="Things I've Built"
        subtitle="A selection of personal and professional projects spanning AI, cloud, backend systems, and computer vision."
      />

      {/* Project grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {PROJECTS.map(project => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* View GitHub CTA */}
      <div className="flex justify-center mb-20">
        <Button href={PERSONAL.github} external variant="outline">
          View GitHub Profile ↗
        </Button>
      </div>

      {/* ── Certifications ── */}
      <div>
        <SectionTitle
          eyebrow="Certifications"
          title="Industry Credentials"
          subtitle="Verified certifications from Microsoft and Amazon Web Services."
        />

        <motion.div
          className="grid sm:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {CERTIFICATIONS.map(cert => (
            <motion.div
              key={cert.code}
              className="card-glass p-6 flex flex-col gap-4 group"
              variants={{
                hidden: { opacity: 0, scale: 0.92, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45 } },
              }}
              whileHover={{
                y: -4,
                borderColor: `${cert.color}44`,
                boxShadow: `0 0 24px ${cert.color}1a`,
              }}
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              transition={{ duration: 0.2 }}
            >
              {/* Issuer row */}
              <div className="flex items-center gap-2">
                <span className="text-xl">{ISSUER_ICONS[cert.issuer] ?? '🎓'}</span>
                <span className="text-[#8a8a8a] text-xs font-medium">{cert.issuer}</span>
              </div>

              {/* Cert name */}
              <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-white transition-colors">
                {cert.name}
              </h3>

              {/* Code badge */}
              <div className="mt-auto pt-3 border-t border-[rgba(255,255,255,0.05)]">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{
                    color: cert.color,
                    borderColor: `${cert.color}40`,
                    backgroundColor: `${cert.color}12`,
                  }}
                >
                  {cert.code}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
