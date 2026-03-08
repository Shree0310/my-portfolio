import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  varying float vElevation;
  varying vec2  vUv;
  varying vec3  vNormal;

  void main() {
    vUv     = uv;
    vNormal = normal;

    // ✅ mixed axes — breaks the sync that causes breathing
    float wave1 = sin(position.x * 2.5 + position.y * 1.5 + uTime * 0.6) * 0.06;
    float wave2 = sin(position.y * 2.0 + position.z * 1.8 - uTime * 0.5) * 0.05;
    float wave3 = sin(position.z * 3.0 + position.x * 2.2 + uTime * 0.8) * 0.04;

    float elevation = wave1 + wave2 + wave3;

    vec3 displaced = position + normal * elevation;
    vElevation = elevation;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`

const fragmentShader = `
  uniform vec3  uColorA;
  uniform vec3  uColorB;
  uniform vec3  uColorC;
  uniform float uTime;

  varying float vElevation;
  varying vec2  vUv;
  varying vec3  vNormal;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vNormal);
    float fresnel = 1.0 - abs(dot(normalize(vNormal), viewDir));
    fresnel = pow(fresnel, 2.5);

    // color gradient on the rim
    float t1 = clamp((vElevation + 0.3) / 0.6, 0.0, 1.0);
    float t2 = vUv.y + sin(uTime * 0.4) * 0.2;

    vec3 rimColor = mix(uColorA, uColorB, t1);
    rimColor = mix(rimColor, uColorC, clamp(t2, 0.0, 1.0));

    // inside fill color — light neutral
    vec3 fillColor = vec3(0.96, 0.94, 0.91);   // warm white

    // blend: rim at edges, fill at center
    vec3 color = mix(fillColor, rimColor, fresnel * 2.0);

    gl_FragColor = vec4(color, 0.5);   // fully opaque now
  }
`

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(() => ({
    uTime:   { value: 0 },
    uColorA: { value: new THREE.Color('#c77dff') },  // soft purple
    uColorB: { value: new THREE.Color('#e18db3') },  // rose
    uColorC: { value: new THREE.Color('#4cc9f0') },
  }), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    uniforms.uTime.value = t;

    // slow auto rotation — feels alive
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.65, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}
function OrbGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
  const t = clock.getElapsedTime();
  const breathScale = 1 + Math.sin(t * 0.8) * 0.06;
  ref.current!.scale.setScalar(breathScale);

  // fade in and out
  const mat = ref.current!.material as THREE.MeshBasicMaterial;
  mat.opacity = 0.1 + Math.sin(t * 0.8) * 0.08;
});

  return (
    <mesh ref={ref} position={[0,0,0.7]}>
      <circleGeometry args={[0.55, 256]} />
      <meshBasicMaterial 
        color="#4f46e5" 
        transparent 
        opacity={1}
        depthWrite={false}
      />
    </mesh>
  );
}

function OrbRing({
  radius = 0.85,
  tubeRadius = 0.008,
  opacity = 0.5,
  color = '#4338ca', 
  speed = 0.8
}:{
  radius?: number,
  tubeRadius?: number,
  opacity?: number,
  color?: string,
  speed?: number
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
  const t = clock.getElapsedTime();
  // bigger pulse range: 0.03 → 0.06
  const breathScale = 1 + Math.sin(t * 0.8) * 0.06;
  ringRef.current!.scale.setScalar(breathScale);
});

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, tubeRadius, 16, 256]} />
      {/*                   👆 radius  👆 tube thickness  👆 segments = smooth circle */}
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

const VoiceLoader = () => {
  return(
      <div className="flex h-36 w-36 overflow-x-hidden">
        <div className="flex-1 h-full min-w-0">
            <Canvas
              camera={{ position: [0, 0, 2.5], fov: 50 }}
              gl={{ alpha: true }}
              className="w-full h-full"
            >          
              <ambientLight intensity={0.2} />
              <WaveMesh/>
              <OrbGlow /> 
              <OrbRing color='#4338ca'/>
            </Canvas>
        </div>
      </div>
    );
};

export default VoiceLoader;
