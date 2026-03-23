// src/components/layout/Footer.tsx
import { PERSONAL, SOCIAL_LINKS } from '@/data/resume'

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-base mb-1">
            <span className="text-[#e50914]">A</span>
            {PERSONAL.name.slice(1)}
          </p>
          <p className="text-[#8a8a8a] text-sm">
            © {new Date().getFullYear()} {PERSONAL.name}. Built with React & Three.js
          </p>
        </div>

        <nav className="flex gap-6" aria-label="Social links">
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a8a] hover:text-white text-sm transition-colors duration-200"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
