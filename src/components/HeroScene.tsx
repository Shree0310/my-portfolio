"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

function DistortedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  // Track mouse position
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1
      mouseY.current = -(e.clientY / window.innerHeight) * 2 + 1
    })
  }

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate based on time
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15

      // Subtle mouse interaction
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouseY.current * 0.2,
        0.05
      )
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        mouseX.current * 0.2,
        0.05
      )
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 128, 128]} />
        <MeshDistortMaterial
          color="#9333ea"
          attach="material"
          distort={0.45}
          speed={1.6}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ec4899" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
          <pointLight position={[0, 0, 5]} intensity={1} color="#f43f5e" />

          {/* 3D Object */}
          <DistortedSphere />

          {/* Environment */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
