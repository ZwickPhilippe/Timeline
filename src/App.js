import logo from "./logo.svg";
import "./App.css";
import Timeline from "./timeline/Timeline";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function App() {
  return (
    <div className="background">
      <Timeline></Timeline>
      <Canvas>
        <Suspense fallback={null}></Suspense>
      </Canvas>
    </div>
  );
}

export default App;
