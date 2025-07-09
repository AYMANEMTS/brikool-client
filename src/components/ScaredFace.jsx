import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

function Face() {
    const faceRef = React.useRef()

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        faceRef.current.rotation.y = Math.sin(t * 0.5) * 0.2
    })

    return (
        <group ref={faceRef}>
            {/* Head */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#ffe0bd" />
            </mesh>

            {/* Eyes */}
            {[[-0.6, 0.5], [0.6, 0.5]].map(([x, y], i) => (
                <mesh key={i} position={[x, y, 1.2]}>
                    <sphereGeometry args={[0.25, 16, 16]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            ))}

            {/* Pupils */}
            {[[-0.6, 0.5], [0.6, 0.5]].map(([x, y], i) => (
                <mesh key={i} position={[x, y, 1.3]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            ))}

            {/* Eyebrows */}
            {[[-0.6, 0.9], [0.6, 0.9]].map(([x, y], i) => (
                <mesh key={i} position={[x, y, 1.1]} rotation={[0, 0, x > 0 ? -0.5 : 0.5]}>
                    <boxGeometry args={[0.5, 0.1, 0.1]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            ))}

            {/* Mouth (open scream) */}
            <mesh position={[0, -0.5, 1.3]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
                <meshStandardMaterial color="black" />
            </mesh>
        </group>
    )
}

export default function ScaredFaceScene() {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} shadows>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 3, 3]} intensity={1} castShadow />
                <Float speed={2} rotationIntensity={0.6} floatIntensity={0.3}>
                    <Face />
                </Float>
                <OrbitControls />
            </Canvas>
        </div>
    )
}
