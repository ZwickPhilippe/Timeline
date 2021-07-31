import logo from "./logo.svg";
import "./App.css";
import Timeline from "./timeline/Timeline";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Earth } from "./Earth";
import { Stars } from "@react-three/drei";

import { TopSection } from "./topSection";
import { Moon } from "./Moon";
import { Venus } from "./Venus";
import { Saturn } from "./Saturn";
import { Mars } from "./Mars";

function App() {
  return (
    // <div className="background">
    //   <Timeline></Timeline>
    //   <div class="space">
    //     <TopSection />

    //     <Canvas>
    //       <Suspense fallback={null}>
    //         <Earth />
    //       </Suspense>
    //     </Canvas>
    //   </div>
    // </div>
    <React.Fragment>
      <div class="spaceField1">
        <Canvas>
          <Suspense fallback={null}>
            <pointLight color="white" position={[30, 20, 5]} intensity={1.6} />
            <Stars
              count={20000}
              radius={300}
              depth={60}
              saturation={0}
              fade={true}
              factor={7}
            />
            <Earth />
            <Moon />
          </Suspense>
        </Canvas>
      </div>
      <div class="spaceField2">
        <Canvas shadowMap shadows={true}>
          <Suspense fallback={null}>
            <pointLight
              color="white"
              position={[30, 20, 5]}
              intensity={1.6}
              castShadow
            />
            <Stars
              count={20000}
              radius={300}
              depth={60}
              saturation={0}
              fade={true}
              factor={7}
            />
            <Venus />
            <Mars />
          </Suspense>
        </Canvas>
      </div>
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <h1 style={{ color: "white" }}>
          My Journey as Developer: Philippe Zwick{" "}
        </h1>
        <p style={{ marginTop: "-1%" }}>
          Press Tags to show/hide Timeline-Steps{" "}
        </p>
      </div>
      <Timeline></Timeline>
    </React.Fragment>
  );
}

export default App;
