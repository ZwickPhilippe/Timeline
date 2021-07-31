import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import SaturnMap from "./assets/8k_saturn.jpg";
import { Plane, Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export function Saturn(props) {
  const [saturnMap] = useLoader(TextureLoader, [SaturnMap]);

  return (
    <>
      <mesh>
        <ringGeometry args={(1, 1, 8)} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>

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
    </>
  );
}
