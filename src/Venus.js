import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import VenusSurface from "./assets/8k_venus_surface.jpg";
import VenusAtomosphere from "./assets/4k_venus_atmosphere.jpg";

export function Venus(props) {
  const [venusMap, venusAtmos] = useLoader(TextureLoader, [
    VenusSurface,
    VenusAtomosphere,
  ]);

  const venusRef = useRef();
  const venusAtmosRef = useRef();
  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime();
    venusRef.current.rotation.y = elapsedTime / 6;
    venusAtmosRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <mesh ref={venusAtmosRef} position={[8, 2.8, -4]}>
        <sphereGeometry args={[1.01, 32, 32]} />
        <meshStandardMaterial
          map={venusAtmos}
          opacity={0.6}
          depthWrite={true}
          transparent={true}
        />
      </mesh>
      <mesh ref={venusRef} position={[8, 2.8, -4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={venusMap} metalness={0.2} roughness={1.2} />
      </mesh>
    </>
  );
}
