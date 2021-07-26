import logo from "./logo.svg";
import "./App.css";
import Timeline from "./timeline/Timeline";
import { Canvas, useFrame } from "react-three-fiber";
import React, { useRef } from "react";

const SpinningMesh = ({ position, args }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color="pink" />
    </mesh>
  );
};

function App() {
  return (
    <div className="background">
      <Timeline></Timeline>

      <Canvas
        colorMangagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
        style={{ position: "relative", top: 0 }}
      >
        <ambientLight intensity={0.3} />
        <SpinningMesh position={[0, 4, 1]} args={[3, 4, 2]} />
        <SpinningMesh position={[4, 1, 0]} args={[1, 1, 1]} />
        <SpinningMesh position={[2, 4, 3]} args={[1, 1, 1]} />
      </Canvas>
    </div>
  );
}

export default App;
