import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
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

const CorniceOrizzontale = (props) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[5.5, 0.3, 0.3]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
};

const CorniceVerticale = (props) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[0.3, 3, 0.3]} />
      <meshStandardMaterial color={"royalblue"} />
    </mesh>
  );
};

function AboutAnimation() {
  return (
    <Canvas style={{}}>
      {/* <OrbitControls /> */}
      <MapControls />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 15]} intensity={0.5} />
      <PresentationControls>
        <CorniceOrizzontale position={[0, -2, 0]} />
        <CorniceOrizzontale position={[0, 2, 0]} />
        <CorniceVerticale position={[-2.6, 0, 0]} />
        <CorniceVerticale position={[2.6, 0, 0]} />
        <Testo1 />
      </PresentationControls>
    </Canvas>
  );
}

export default AboutAnimation;
