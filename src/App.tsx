// src/App.tsx
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero/Hero'
import { About } from '@/components/sections/About/About'
import { Experience } from '@/components/sections/Experience/Experience'
import { Projects } from '@/components/sections/Projects/Projects'
import { Fiverr } from '@/components/sections/Fiverr/Fiverr'
import { Contact } from '@/components/sections/Contact/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Fiverr />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
