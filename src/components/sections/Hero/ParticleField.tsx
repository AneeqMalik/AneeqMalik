// src/components/sections/Hero/ParticleField.tsx
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
}

// ─── Inner orbit ring: tight band of bright particles circling the core ───────
function InnerOrbitParticles() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const n = 140
    const arr = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2
      // Slight random radius variation for a band, not a perfect ring
      const r = 1.75 + (Math.random() - 0.5) * 0.28
      arr[i * 3] = Math.cos(angle) * r
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.18
      arr[i * 3 + 2] = Math.sin(angle) * r
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t * 0.55
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.12
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.048} color="#ff3040" transparent opacity={0.85} sizeAttenuation />
    </points>
  )
}

// ─── Outer sphere-shell field ─────────────────────────────────────────────────
export function ParticleField({ count = 700 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Distribute on a sphere shell, radius 4.5–9.5
      const r = 4.5 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const t = clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.022
    pointsRef.current.rotation.x = t * 0.007
  })

  return (
    <>
      <InnerOrbitParticles />
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.022} color="#e50914" transparent opacity={0.5} sizeAttenuation />
      </points>
    </>
  )
}
