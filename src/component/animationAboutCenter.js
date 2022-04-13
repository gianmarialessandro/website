import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

import "../about.css";

const Box = (props) => {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const {scale, color } = useSpring({
    scale: hovered ? [2, 2, 2] : [1, 1, 1],
    color: active ? '#42b883' : '#fda403' 
  })

  return (
    <a.mesh 
      {...props}
      onClick={() => { setActive(!active)}}
      onPointerOver={() => {setHovered(true)}}
      onPointerOut={() => {setHovered(false)}}
      scale={scale}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <a.meshStandardMaterial color={color} />
    </a.mesh>
  );
};

function AnimationAboutCenter() {
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

export default AnimationAboutCenter;
