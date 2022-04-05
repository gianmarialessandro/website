import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, useSphere, useBox, usePlane } from "@react-three/cannon";
import {
  fixArkanoidPage,
  clearPortfolioPage,
  clearAboutPage,
  clearContactPage,
  clearHomePage,
} from "./utils";

import "./arkanoid.css";

function Ball({ args = [0.5, 32, 32] }) {
  const { viewport } = useThree();
  //   console.log(viewport);
  const [ref, api] = useSphere(() => ({ args: [0.5], mass: 1 }));
  // console.log(viewport)
  // // Invisible plane, if hit it respawns the ball
  usePlane(() => ({
    position: [0, -viewport.height, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      api.position.set(0, 0, 0);
      api.velocity.set(0, 10, 0);
    },
  }));
  return (
    <mesh ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Paddle({ args = [2, 0.5, 1] }) {
  const [ref, api] = useBox(() => ({ args }));
  useFrame((state) => {
    api.position.set(
      (state.mouse.x * state.viewport.width) / 2,
      -state.viewport.height / 2.5,
      0
    );
    api.rotation.set(0, 0, (state.mouse.x * Math.PI) / 5);
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
}

function Enemy({ args = [2, 0.5, 1], color, ...props }) {
  const [ref] = useBox(() => ({ args, ...props }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function EnemySmall({ args = [0.7, 0.3, 1], color, ...props }) {
  const [ref] = useBox(() => ({ args, ...props }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Bar({ args = [0.5, 2, 1], color, ...props }) {
  const [ref] = useBox(() => ({ args, ...props }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const Arkanoid = () => {
  useEffect(() => {
    clearPortfolioPage();
    clearContactPage();
    clearAboutPage();
    clearHomePage();
    fixArkanoidPage();
    document.body.style.overflow = "hidden";
  }, []);
  // const { viewport } = useThree();

  return (
    <div className="main-Arkanoid">
      <nav className="navBarArkanoid">
        <ul>
          <li className="out">
            <img
              src="./img/icons/navbarBlue.png"
              alt="navBar"
              width="40vh"
              height="40vh"
            />
            <div className="inhouse">
              <Link className="a" to="/">
                HOME
              </Link>
              <Link className="a" to="/portfolio">
                PORTFOLIO
              </Link>
              <Link className="a" to="/about">
                ABOUT
              </Link>
              <Link className="a" to="/contact">
                CONTACT
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <Canvas
        camera={{ position: [0, 5, 12], fov: 55 }}
        style={{ background: "#242438" }}
        performance={{ min: 0.1, max: 1 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} />
        <Physics
          gravity={[0, -30, 0]}
          defaultContactMaterial={{ restitution: 1.1 }}
        >
          <Ball />
          <Paddle />
          <Enemy color="mediumpurple" position={[2, 1, 0]} />
          <Enemy color="hotpink" position={[5, 3.5, 0]} />
          <Enemy color="green" position={[-2, 3.5, 0]} />

          <EnemySmall color="royalblue" position={[-8.5, 5, 0]} />
          <Enemy color="orange" position={[8.5, 5, 0]} />
          <EnemySmall color="red" position={[3, 5, 0]} />
          <Enemy color="saddlebrown" position={[-3.5, 5, 0]} />

          <Enemy color="darkorange" position={[-5.5, -0.5, 0]} />
          <Enemy color="navy" position={[7.5, 0.5, 0]} /> 
          <EnemySmall color="blueviolet" position={[-11.5, -2, 0]} />
          <EnemySmall color="limegreen" position={[5.5, -1, 0]} />
          <Enemy color="darkred" position={[-8.5, 1, 0]} />

          <Bar color="deeppink" position={[-9, -1, 0]} />
          <Bar color="cyan" position={[-10, 3.5, 0]} />
          <Bar color="bisque" position={[10, -2, 0]} />
          <Bar color="silver" position={[9, 3.5, 0]} />


        </Physics>
      </Canvas>
    </div>
  );
};

export default Arkanoid;
