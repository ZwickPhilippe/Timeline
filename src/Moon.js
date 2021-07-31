import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React, { useRef } from "react";
import MoonMap from "./assets/8k_moon.jpg";

export function Moon(props) {
  const [moonMap] = useLoader(TextureLoader, [MoonMap]);

  const moonRef = useRef();

  let x = 0;
  let y = Math.PI / 2;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    moonRef.current.rotation.y = elapsedTime / 4;

    x += 0.002;
    y += 0.002;
    moonRef.current.position.z += 0.01 * Math.cos(x);
    moonRef.current.position.x += 0.01 * Math.cos(y);
  });

  return (
    <>
      <mesh position={[4, 0.5, 1]} ref={moonRef}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial map={moonMap} />
      </mesh>
    </>
  );
}
