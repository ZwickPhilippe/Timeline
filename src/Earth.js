import { useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import EarthDayMap from "./assets/8k_earth_daymap.jpg";
import NormalMap from "./assets/8k_earth_normal_map.jpg";
import CloudMap from "./assets/8k_earth_clouds.jpg";
import { OrbitControls } from "@react-three/drei";
import MoonMap from "./assets/8k_moon.jpg";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Earth(props) {
  const [colorMap, cloudMap, normalMap] = useLoader(TextureLoader, [
    EarthDayMap,
    CloudMap,
    NormalMap,
  ]);

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 4;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.006, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.5}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial color="red"></meshPhongMaterial>
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.5}
          remove
          positions
          from
          mesh
          in
          order
          to
          keep
          it
          moving
          panSpeed={0.1}
          rotateSpeed={10}
        />
      </mesh>
    </>
  );
}
