import React, { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { useSpring, a } from "@react-spring/three";
import * as THREE from "three";
import { Physics, useBox, useSphere } from "@react-three/cannon";

import "./App.css";
// import { hover } from "@testing-library/user-event/dist/hover";

const Sfera = (props) => {

  return (
    <mesh
      {...props}
    >
      <sphereBufferGeometry attach='geometry' args={[2, 60, 60]} />
      <meshStandardMaterial attach='material' {...props} />
    </mesh>
  )
}



function HomeAnimation() {
  return (
    <Canvas
      style={{}}
      camera={{ position: [0, 0, 25] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 15]} intensity={0.5} />
      <Sfera position={[0, -8, 0]} color={'hotpink'} />
    </Canvas>
  );
}

export default HomeAnimation;

// function Spin({ children }) {
//   const myMesh = useRef();
//   useFrame(() => {
//     myMesh.current.rotation.z += Math.PI * 2 + 0.008;
//     // myMesh.current.rotation.z += Math.PI * 2 + 0.000008;
//   });
//   return <group ref={myMesh}>{children}</group>;
// }

// function SpinSun({ children }) {
//   const myMesh = useRef();
//   useFrame(() => {
//     myMesh.current.position.z += 0.1;
//   });
//   return <group ref={myMesh}>{children}</group>;
// }

// function SpinReverse({ children }) {
//   const myMesh = useRef();
//   useFrame(({ clock }) => {
//     myMesh.current.rotation.z += Math.PI * 2 - 0.008;
//     // myMesh.current.rotation.z += Math.PI * 2 - 0.000008;
//   });
//   return <group ref={myMesh}>{children}</group>;
// }

// const Sphere = (props) => {
//   const [hovered, setHovered] = useState(false);
//   const [active, setActive] = useState(false);
//   const { scale, color, position } = useSpring({
//     // scale: hovered ? [0.6, 32, 32] : [0.3, 32, 32],
//     color: hovered ? "darkorange" : "gold",
//     position: active ? [12, -6, 15] : [-12, -6, -55],
//   });

//   return (
//     <a.mesh
//       {...props}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//       onClick={() => setActive(!active)}
//       // scale={scale}
//       position={position}
//     >
//       <sphereBufferGeometry args={[32, 60, 60]} />
//       <a.meshStandardMaterial color={color} />
//     </a.mesh>
//   );
// };

// const Cone = (props) => {
//   const [hovered, setHovered] = useState(false);
//   const [active, setActive] = useState(false);
//   const { rotation, color, position } = useSpring({
//     // scale: hovered ? [0.6, 32, 32] : [0.3, 32, 32],
//     color: hovered ? "purple" : "firebrick",
//     position: active ? [8, -3, -3] : [-8, 6, -2],
//     rotation: active ? [5, 1, 3] : [0, 0, 0],
//   });

//   return (
//     <a.mesh
//       {...props}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//       onClick={() => setActive(!active)}
//       rotation={rotation}
//       position={position}
//     >
//       <coneBufferGeometry args={[0.7, 3, 60]} />
//       <a.meshStandardMaterial color={color} />
//     </a.mesh>
//   );
// };

// const Box = (props) => {
//   const [hovered, setHovered] = useState(false);
//   const [active, setActive] = useState(false);
//   const { scale, color, position, rotation } = useSpring({
//     scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
//     color: hovered ? "green" : "blue",
//     position: active ? [-6, -6, -2] : [9, 5, -6],
//     rotation: hovered ? [12, 3, 6] : [4, 1, 1],
//   });

//   return (
//     <a.mesh
//       {...props}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//       onClick={() => setActive(!active)}
//       scale={scale}
//       position={position}
//       rotation={rotation}
//     >
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <a.meshStandardMaterial color={color} />
//     </a.mesh>
//   );
// };
