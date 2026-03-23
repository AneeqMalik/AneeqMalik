// src/components/sections/Hero/Hero.tsx
import { useState, useEffect, type ReactElement } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { PERSONAL, SOCIAL_LINKS } from '@/data/resume'

const TECH_STACK = ['React', 'TypeScript', 'Node.js', 'Azure', 'Docker', 'Python']

// ─── Typewriter cursor for role title ────────────────────────────────────────
function TypewriterText({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCount(c => {
          if (c >= text.length) { clearInterval(intervalId); return c }
          return c + 1
        })
      }, 55)
    }, startDelay)
    return () => { clearTimeout(timeoutId); clearInterval(intervalId) }
  }, [text, startDelay])

  return (
    <>
      {text.slice(0, count)}
      {count < text.length && (
        <motion.span
          className="inline-block w-0.5 h-[0.9em] bg-[#e50914] ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          aria-hidden="true"
        />
      )}
    </>
  )
}

// ─── Social icon SVGs (inline — no extra dependency) ────────────────────────
const ICONS: Record<string, ReactElement> = {
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  fiverr: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.25 16.25v-10h-10v10h10zm0-12.5A2.5 2.5 0 0 1 18.75 6.25v11.5a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5V6.25a2.5 2.5 0 0 1 2.5-2.5h10zm-5 2.5h2.5v2.5h-2.5V6.25zm-3.75 0h2.5v1.25H8.75a1.25 1.25 0 0 0-1.25 1.25v6.25H5.625V8.75A2.5 2.5 0 0 1 8.125 6.25h-.625zm3.75 3.75v5h-2.5v-5h2.5zm3.75 0v5h-2.5v-5h2.5z" />
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
}

// ─── Stagger animation variant ───────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Subtle radial glow behind content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(229,9,20,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto w-full px-6 py-24 flex flex-col items-center text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {PERSONAL.availableForWork && (
            <motion.div variants={itemVariants} className="mb-6 flex justify-center">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e50914]/30 bg-[#e50914]/8 text-[#e50914] text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4"
          >
            <span className="text-white">{PERSONAL.name.split(' ')[0]} </span>
            <span className="text-gradient">{PERSONAL.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[#8a8a8a] text-lg md:text-xl font-medium mb-3 tabular-nums"
          >
            <TypewriterText text={PERSONAL.title} startDelay={900} />
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[#8a8a8a] text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6"
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* Tech stack floating pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-8">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-[#8a8a8a] cursor-default"
                initial={{ opacity: 0, scale: 0.75, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 1.1 + i * 0.08, ease: 'backOut' }}
                whileHover={{
                  borderColor: 'rgba(229,9,20,0.5)',
                  color: '#ffffff',
                  scale: 1.06,
                  transition: { duration: 0.15 },
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-8">
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="outline">
              Get in Touch
            </Button>
          </motion.div>

          {/* GitHub stats badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-8">
            <img
              src="https://github-readme-stats.vercel.app/api?username=AneeqMalik&show_icons=true&hide_border=true&bg_color=00000000&title_color=e50914&icon_color=e50914&text_color=8a8a8a&hide_title=true&count_private=true"
              alt="GitHub Stats"
              height={80}
              className="rounded-lg h-20"
              loading="lazy"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=AneeqMalik&layout=compact&hide_border=true&bg_color=00000000&title_color=e50914&text_color=8a8a8a&hide_title=true"
              alt="Top Languages"
              height={80}
              className="rounded-lg h-20"
              loading="lazy"
            />
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-4">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#8a8a8a] hover:text-white transition-colors duration-200"
              >
                {ICONS[link.icon]}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[#8a8a8a] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#e50914] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
