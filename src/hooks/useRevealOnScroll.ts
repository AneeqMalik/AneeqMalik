// src/hooks/useRevealOnScroll.ts
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}
