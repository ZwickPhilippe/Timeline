import logo from "./logo.svg";
import "./App.css";
import Timeline from "./timeline/Timeline";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";
import { TopSection } from "./topSection";

function App() {
  return (
    <div className="background">
      <Timeline></Timeline>
      <div class="space">
        <TopSection />

        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
