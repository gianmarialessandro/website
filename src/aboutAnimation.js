import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MapControls } from "@react-three/drei";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
// import { useSpring, a } from "@react-spring/three";
import Testo1 from "./aboutAnimationText";

import "./about.css";

// function CityMapImg() {
//   const texture = useLoader(TextureLoader, "././textures/city-map.png");
//   // texture.encoding = sRGBEncoding;

//   return (
//     <mesh position={[-4,0,0]}>
//       <planeGeometry args={[1, 1]} />
//       {texture && (
//         <meshBasicMaterial
//           map={texture}
//           toneMapped={false}
//           side={DoubleSide}
//         />
//       )}
//     </mesh>
//   );
// }

function AboutAnimation() {
  return (
    <div className="canvas">
      <Canvas style={{ background: "orange" }}>
        <OrbitControls />
        <MapControls />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 15]} intensity={0.5} />
        {/* <Rettangoli position={[0, -2, 0]} /> */}
        <Testo1 />
      </Canvas>
    </div>
  );
}

export default AboutAnimation;

