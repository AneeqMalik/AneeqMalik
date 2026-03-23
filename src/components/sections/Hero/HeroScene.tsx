// src/components/sections/Hero/HeroScene.tsx
import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import { ParticleField } from './ParticleField'
// No drei imports needed for current scene

// ─── Helix parameters ────────────────────────────────────────────────────
const TURNS = 2.6
const PER_TURN = 11
const N = Math.round(TURNS * PER_TURN) // ~28 nodes per strand
const HEIGHT = 5.0
const RADIUS = 1.4
const NODE_R = 0.065

function helixVec(i: number, phaseOffset: number): THREE.Vector3 {
  const t = i / (N - 1)
  const angle = t * TURNS * Math.PI * 2 + phaseOffset
  return new THREE.Vector3(
    Math.cos(angle) * RADIUS,
    t * HEIGHT - HEIGHT / 2,
    Math.sin(angle) * RADIUS,
  )
}

// ─── DNA Helix ──────────────────────────────────────────────────────────────────
function DnaHelix() {
  const groupRef = useRef<THREE.Group>(null)

  const { posA, posB, backboneA, backboneB, rungs } = useMemo(() => {
    const posA: THREE.Vector3[] = []
    const posB: THREE.Vector3[] = []
    for (let i = 0; i < N; i++) {
      posA.push(helixVec(i, 0))
      posB.push(helixVec(i, Math.PI))
    }

    // Continuous backbone strip for each strand
    const backboneA = new Float32Array(posA.flatMap(p => [p.x, p.y, p.z]))
    const backboneB = new Float32Array(posB.flatMap(p => [p.x, p.y, p.z]))

    // Rungs every 4th node connecting the two strands
    const rungPts: number[] = []
    for (let i = 0; i < N; i += 4) {
      rungPts.push(posA[i].x, posA[i].y, posA[i].z)
      rungPts.push(posB[i].x, posB[i].y, posB[i].z)
    }
    const rungs = new Float32Array(rungPts)

    return { posA, posB, backboneA, backboneB, rungs }
  }, [])

  useFrame(({ pointer, clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    // Slow continuous Y rotation + mouse lean
    groupRef.current.rotation.y = t * 0.28 + pointer.x * 0.5
    groupRef.current.rotation.x = Math.sin(t * 0.38) * 0.08 - pointer.y * 0.22
    // Gentle breathing bob
    groupRef.current.position.y = Math.sin(t * 0.52) * 0.2
  })

  return (
    <group ref={groupRef}>
      {/* Backbone strand A */}
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[backboneA, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#e50914" transparent opacity={0.6} />
      </line>

      {/* Backbone strand B */}
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[backboneB, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#cc0d18" transparent opacity={0.6} />
      </line>

      {/* Cross rungs */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[rungs, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </lineSegments>

      {/* Strand A nodes — bright red */}
      {posA.map((pos, i) => (
        <mesh key={`a${i}`} position={pos}>
          <sphereGeometry args={[NODE_R, 7, 7]} />
          <meshStandardMaterial
            color="#ff1f2e"
            emissive="#e50914"
            emissiveIntensity={2.8}
            roughness={0.1}
            metalness={0}
          />
        </mesh>
      ))}

      {/* Strand B nodes — slightly dimmer */}
      {posB.map((pos, i) => (
        <mesh key={`b${i}`} position={pos}>
          <sphereGeometry args={[NODE_R * 0.85, 7, 7]} />
          <meshStandardMaterial
            color="#cc0d18"
            emissive="#aa0812"
            emissiveIntensity={2.2}
            roughness={0.1}
            metalness={0}
          />
        </mesh>
      ))}
    </group>
  )
}

// ─── Scene ───────────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.08} />
      <pointLight position={[4, 4, 4]} intensity={22} color="#e50914" decay={2} />
      <pointLight position={[-3, -3, 3]} intensity={10} color="#ff4455" decay={2} />

      <DnaHelix />
      <ParticleField count={500} />

      <EffectComposer>
        <Bloom intensity={2.4} luminanceThreshold={0.08} mipmapBlur />
      </EffectComposer>
    </>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────────
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}


