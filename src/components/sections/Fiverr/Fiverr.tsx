// src/components/sections/Fiverr/Fiverr.tsx
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ServiceCard } from './ServiceCard'
import { Button } from '@/components/ui/Button'
import { CLIENT_PROJECTS } from '@/data/services'
import { PERSONAL } from '@/data/resume'

export function Fiverr() {
  return (
    <section id="clients" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Client Work"
            title="Projects I've Built for Clients"
            subtitle="Real-world experience working with international clients across fintech, AI, cloud, and e-commerce."
          />
          <Button href={PERSONAL.fiverr} external variant="outline" className="flex-shrink-0 mb-12">
            View Fiverr Profile ↗
          </Button>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
        >
          {CLIENT_PROJECTS.map(project => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <ServiceCard service={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          className="mt-12 p-6 rounded-xl border border-[rgba(229,9,20,0.2)] bg-[rgba(229,9,20,0.04)] flex flex-col sm:flex-row items-center gap-4 justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-white font-semibold text-base">Have a project in mind?</p>
            <p className="text-[#8a8a8a] text-sm mt-0.5">Let's discuss requirements, timeline, and how I can help.</p>
          </div>
          <Button href={`mailto:${PERSONAL.email}`} variant="primary">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
