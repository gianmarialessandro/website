import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Cloud, Sky, Float } from "@react-three/drei";
import * as THREE from "three";
// import { Physics, useBox, useSphere } from "@react-three/cannon";

import "../App.css";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}
 
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
      {/* <Float 
        speed={30} // Animation speed, defaults to 1
        rotationIntensity={40} // XYZ rotation intensity, defaults to 1
        floatIntensity={10} // Up/down float intensity, defaults to 1
      >
        <Box />
      </Float>  */}
    </Canvas>
  );
}

export default HomeAnimation;

