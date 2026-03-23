// src/components/ui/Button.tsx
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const springTransition = { type: 'spring', stiffness: 400, damping: 25 } as const

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-[#e50914] text-white hover:bg-[#c8070f] shadow-lg shadow-[rgba(229,9,20,0.2)]',
    outline:
      'border border-[#e50914] text-[#e50914] hover:bg-[#e50914] hover:text-white',
    ghost: 'text-[#8a8a8a] hover:text-white hover:bg-white/5',
  }

  const classes = `${base} ${variants[variant]} ${className}`
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: springTransition,
  }

  if (href) {
    return (
      <motion.a
        {...motionProps}
        className={classes}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
