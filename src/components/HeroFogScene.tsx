import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 600;
const FOG_COLOR = new THREE.Color("#4169E1");

// Custom shader for soft glowing particles
const vertexShader = `
  attribute float aScale;
  attribute float aOpacity;
  varying float vOpacity;
  
  void main() {
    vOpacity = aOpacity;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aScale * (200.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  varying float vOpacity;
  
  void main() {
    // Soft circular particle with glow falloff
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    float strength = 1.0 - (dist * 2.0);
    strength = pow(strength, 1.5);
    
    gl_FragColor = vec4(uColor, strength * vOpacity);
  }
`;

function FogParticles() {
  const points = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Generate initial particle data
  const { positions, scales, opacities, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const scales = new Float32Array(PARTICLE_COUNT);
    const opacities = new Float32Array(PARTICLE_COUNT);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Spread particles across a wide volume
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 12;
      positions[i3 + 2] = (Math.random() - 0.5) * 10 - 2;

      // Varying sizes for depth illusion
      scales[i] = Math.random() * 3 + 1;

      // Varying opacity for layered fog feel
      opacities[i] = Math.random() * 0.4 + 0.1;

      // Drift velocities - slow and organic
      velocities[i3] = (Math.random() - 0.5) * 0.008;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.003;
    }

    return { positions, scales, opacities, velocities };
  }, []);

  // Shader material uniforms
  const uniforms = useMemo(
    () => ({
      uColor: { value: FOG_COLOR },
    }),
    []
  );

  // Track mouse position
  const handlePointerMove = useCallback(
    (e: THREE.Event & { clientX?: number; clientY?: number }) => {
      // Normalize mouse to -1..1
      if (typeof window !== "undefined") {
        const event = e as unknown as MouseEvent;
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }
    },
    []
  );

  useFrame((state) => {
    if (!points.current) return;

    const geometry = points.current.geometry;
    const posArray = geometry.attributes.position.array as Float32Array;
    const opacityArray = geometry.attributes.aOpacity.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Base drift movement
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];

      // Sinusoidal swirl for organic movement
      posArray[i3] += Math.sin(time * 0.3 + i * 0.1) * 0.003;
      posArray[i3 + 1] += Math.cos(time * 0.2 + i * 0.15) * 0.002;

      // Mouse influence (subtle push away from cursor)
      const dx = posArray[i3] - mouseRef.current.x * viewport.width * 0.5;
      const dy =
        posArray[i3 + 1] - mouseRef.current.y * viewport.height * 0.5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 4) {
        const force = (4 - dist) * 0.002;
        posArray[i3] += (dx / dist) * force;
        posArray[i3 + 1] += (dy / dist) * force;
      }

      // Wrap particles that drift too far
      if (posArray[i3] > 12) posArray[i3] = -12;
      if (posArray[i3] < -12) posArray[i3] = 12;
      if (posArray[i3 + 1] > 8) posArray[i3 + 1] = -8;
      if (posArray[i3 + 1] < -8) posArray[i3 + 1] = 8;

      // Pulsing opacity
      opacityArray[i] =
        opacities[i] * (0.7 + 0.3 * Math.sin(time * 0.5 + i * 0.3));
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.aOpacity.needsUpdate = true;
  });

  return (
    <group>
      {/* Central volumetric light */}
      <pointLight
        position={[0, 0, 3]}
        color="#4169E1"
        intensity={8}
        distance={20}
        decay={2}
      />
      <pointLight
        position={[-3, 2, 1]}
        color="#2850b8"
        intensity={4}
        distance={15}
        decay={2}
      />
      <pointLight
        position={[3, -1, 2]}
        color="#5a82f0"
        intensity={3}
        distance={12}
        decay={2}
      />

      {/* Ambient fog glow */}
      <ambientLight color="#0a1a3f" intensity={0.5} />

      <points ref={points} onPointerMove={handlePointerMove}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aScale"
            count={PARTICLE_COUNT}
            array={scales}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-aOpacity"
            count={PARTICLE_COUNT}
            array={opacities}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

// Fog cloud meshes for thicker volumetric feel
function FogClouds() {
  const cloudsRef = useRef<THREE.Group>(null);

  const cloudData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6 - 3,
      ] as [number, number, number],
      scale: Math.random() * 3 + 2,
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!cloudsRef.current) return;
    const time = state.clock.elapsedTime;

    cloudsRef.current.children.forEach((cloud, i) => {
      const data = cloudData[i];
      cloud.position.x =
        data.position[0] + Math.sin(time * data.speed + data.offset) * 1.5;
      cloud.position.y =
        data.position[1] + Math.cos(time * data.speed * 0.7 + data.offset) * 0.8;
      
      const material = (cloud as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (material) {
        material.opacity =
          0.06 + 0.04 * Math.sin(time * data.speed * 0.5 + data.offset);
      }
    });
  });

  return (
    <group ref={cloudsRef}>
      {cloudData.map((cloud, i) => (
        <mesh key={i} position={cloud.position}>
          <sphereGeometry args={[cloud.scale, 16, 16]} />
          <meshStandardMaterial
            color="#4169E1"
            transparent
            opacity={0.08}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

const HeroFogScene = () => {
  return (
    <div className="absolute inset-0 bg-[hsl(228,84%,2%)]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        dpr={[1, 2]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "hsl(228, 84%, 2%)" }}
      >
        <color attach="background" args={["#020514"]} />
        <fog attach="fog" args={["#020514", 5, 20]} />
        <FogParticles />
        <FogClouds />
      </Canvas>
    </div>
  );
};

export default HeroFogScene;
