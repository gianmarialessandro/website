import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { Physics, useBox, useSphere } from "@react-three/cannon";

import "./App.css";

function Spin({ children }) {
  const myMesh = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
    myMesh.current.rotation.y = clock.getElapsedTime();
  });
  return <group ref={myMesh}>{children}</group>;
}

const Box = (props) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const { scale, color } = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: active ? "orange" : "hotpink",
  });
  // const props = useSpring({
  //   scale: ,
  //   color:
  // })

  return (
    <a.mesh
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={scale}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <a.meshStandardMaterial color={color} />
    </a.mesh>
  );
};

function Pallina(props) {
  const [ref] = useSphere(() => ({ mass: 0.1, ...props }));
  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

function ReggiPalla(props) {
  const [ref] = useBox(() => ({ ...props }));
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[0.7, 0.25, 0.25]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

function HomeAnimation() {
  return (
    <div className="canvas">
      <Canvas style={{  }}>
        <OrbitControls />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 15]} intensity={0.5} />
        {/* <Physics>
          <Pallina position={[-2, -1, 0]} />
          <ReggiPalla position={[-2, -2, 0]} />
        </Physics> */}
      </Canvas>
    </div>
  );
}

export default HomeAnimation;
