import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import MarsSurface from "./assets/8k_mars.jpg";

export function Mars(props) {
  const [marsMap] = useLoader(TextureLoader, [MarsSurface]);

  const marsRef = useRef();

  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime();
    marsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <mesh ref={marsRef} position={[-12, 0, -7]}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial map={marsMap} metalness={0.2} roughness={1.2} />
      </mesh>
    </>
  );
}
