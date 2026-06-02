import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* Procedural basketball: orange sphere with dark seam stripes via custom shader-like
   approach using vertex colors / normal-based bands. Lightweight, no asset load. */

const Basketball = () => {
  const mesh = useRef<THREE.Mesh>(null);

  // Build geometry once
  const geometry = useMemo(() => new THREE.SphereGeometry(1, 96, 96), []);

  // Custom shader material   orange with dark seam lines + soft rim glow
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uOrange: { value: new THREE.Color("#E8651A") },
        uDeep: { value: new THREE.Color("#7a2e08") },
        uSeam: { value: new THREE.Color("#0a0a0a") },
        uRim: { value: new THREE.Color("#FF2020") },
      },
      vertexShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vPos;
        varying vec3 vWorldNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPos = position;
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uOrange;
        uniform vec3 uDeep;
        uniform vec3 uSeam;
        uniform vec3 uRim;
        varying vec3 vNormal;
        varying vec3 vPos;
        varying vec3 vWorldNormal;

        // Smooth seam line helper
        float seam(float v, float w) {
          return smoothstep(w, 0.0, abs(v));
        }

        void main() {
          // Base orange with subtle radial darkening
          float lat = vPos.y;
          float lon = atan(vPos.z, vPos.x);

          // Equator seam
          float s1 = seam(lat, 0.025);
          // Vertical seam (full circle)
          float s2 = seam(vPos.x, 0.025) * step(0.0, vPos.z * 0.0 + 1.0);
          // Two curved seams (pseudo basketball lines)
          float curve = sin(lon * 1.0) * 0.5;
          float s3 = seam(lat - curve * 0.6 + 0.0, 0.022);
          float s4 = seam(lat + curve * 0.6 + 0.0, 0.022);

          float seamMask = clamp(s1 + s2 + s3 + s4, 0.0, 1.0);

          // Surface noise (procedural pebble texture)
          vec3 p = vPos * 30.0;
          float n = fract(sin(dot(floor(p), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
          float pebble = mix(0.92, 1.05, n);

          // Lighting   fake top light
          vec3 lightDir = normalize(vec3(0.4, 1.0, 0.6));
          float diff = max(dot(vNormal, lightDir), 0.0);
          float ambient = 0.35;
          float lighting = ambient + diff * 0.85;

          vec3 base = mix(uDeep, uOrange, lighting) * pebble;

          // Rim red glow
          float rim = pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 2.5);
          base += uRim * rim * 0.5;

          // Apply seams
          vec3 col = mix(base, uSeam, seamMask);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
  }, []);

  useFrame((_, dt) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += dt * 0.35;
    mesh.current.rotation.x = Math.sin(performance.now() * 0.0003) * 0.15;
  });

  return <mesh ref={mesh} geometry={geometry} material={material} />;
};

const GlowRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, 0, -0.5]}>
      <ringGeometry args={[1.6, 1.85, 64]} />
      <meshBasicMaterial color="#CC0000" transparent opacity={0.18} side={THREE.DoubleSide} />
    </mesh>
  );
};

const HeroBasketball = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 6, 5]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-4, -2, -3]} intensity={0.7} color="#FF2020" />
        <Suspense fallback={null}>
          <Basketball />
          <GlowRing />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroBasketball;
