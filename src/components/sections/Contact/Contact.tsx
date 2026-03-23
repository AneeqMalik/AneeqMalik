// src/components/sections/Contact/Contact.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { PERSONAL, SOCIAL_LINKS } from '@/data/resume'

// ─── EmailJS config ──────────────────────────────────────────────────────────
// Sign up at https://emailjs.com, create a service + template, paste the IDs below.
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? 'YOUR_PUBLIC_KEY'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

const INPUT_BASE =
  'w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-white placeholder-[#8a8a8a] text-sm outline-none focus:border-[#e50914] transition-colors duration-200 resize-none'

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setSubmitStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    data.name,
          from_email:   data.email,
          subject:      data.subject,
          message:      data.message,
          to_email:     PERSONAL.email,
        },
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="Contact"
        title="Let's Build Something Great"
        subtitle="Have a project, opportunity, or just want to say hi? My inbox is always open."
        centered
      />

      <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
        {/* ── Left: contact info ── */}
        <motion.div
          className="md:col-span-2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[#8a8a8a] text-xs uppercase tracking-widest mb-1">Email</p>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-white text-sm hover:text-[#e50914] transition-colors"
            >
              {PERSONAL.email}
            </a>
          </div>

          <div>
            <p className="text-[#8a8a8a] text-xs uppercase tracking-widest mb-1">Based in</p>
            <p className="text-white text-sm">{PERSONAL.location}</p>
          </div>

          <div>
            <p className="text-[#8a8a8a] text-xs uppercase tracking-widest mb-3">Socials</p>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8a8a8a] text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#e50914] group-hover:scale-150 transition-transform" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: form ── */}
        <motion.form
          className="md:col-span-3 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
                className={INPUT_BASE}
                aria-label="Your name"
              />
              {errors.name && (
                <p className="text-[#e50914] text-xs">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                })}
                placeholder="your@email.com"
                type="email"
                className={INPUT_BASE}
                aria-label="Your email"
              />
              {errors.email && (
                <p className="text-[#e50914] text-xs">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register('subject', { required: 'Subject is required' })}
              placeholder="Subject"
              className={INPUT_BASE}
              aria-label="Message subject"
            />
            {errors.subject && (
              <p className="text-[#e50914] text-xs">{errors.subject.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              {...register('message', {
                required: 'Message is required',
                minLength: { value: 20, message: 'At least 20 characters' },
              })}
              placeholder="Tell me about your project…"
              rows={5}
              className={INPUT_BASE}
              aria-label="Your message"
            />
            {errors.message && (
              <p className="text-[#e50914] text-xs">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              disabled={submitStatus === 'sending'}
              variant="primary"
            >
              {submitStatus === 'sending' ? 'Sending…' : 'Send Message →'}
            </Button>

            {submitStatus === 'success' && (
              <motion.p
                className="text-green-400 text-sm"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent — I'll get back to you soon!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                className="text-[#e50914] text-sm"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Try emailing me directly.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
