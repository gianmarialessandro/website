import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sky } from "@react-three/drei";
import * as THREE from "three";

import "../App.css";

 
function HomeAnimation() {
  return (
    <Canvas
      style={{}}
      camera={{ position: [0, -15, 25] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 15]} intensity={0.5} />
      <Stars
        radius={25}
        depth={50}
        count={300}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Sky
        distance={1000}
        sunPosition={[-40, 10, 0]}
        inclination={0}
        azimuth={0.25}
      />
    </Canvas>
  );
}

export default HomeAnimation;

