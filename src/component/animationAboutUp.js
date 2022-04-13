import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

import "../about.css";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

function AnimationAboutUp() {
  return (
    <Canvas style={{}}>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 15]} intensity={0.5} />
      <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={4} // XYZ rotation intensity, defaults to 1
        floatIntensity={5} // Up/down float intensity, defaults to 1
      >
        <Box />
      </Float>
    </Canvas>
  );
}

export default AnimationAboutUp;
