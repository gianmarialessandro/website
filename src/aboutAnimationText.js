import React, { useState } from "react";
import { extend } from "@react-three/fiber";
import { Text } from "troika-three-text";
import fonts from "./fonts";
import { useSpring, a } from "@react-spring/three";

// Register Text as a react-three-fiber element
extend({ Text });

const testoAbout =
  "Based in Berlin, I have an interest in animations and creating intuitive and dynamic user experiences. I am looking at the whole frontend spectrum but would also like to develop on the backend side.";
function Text1() {
  const [hovered, setHovered] = useState(false);
  // const { color } = useSpring({
  //   color: hovered ? "orange" : "#e3e3e3",
  // });

  const [opts] = useState({
    font: "Comfortaa",
    fontSize: 0.25,
    color: "#455d7a",
    maxWidth: 3.5,
    lineHeight: 1.5,
    letterSpacing: 0,
    textAlign: "center",
    materialType: "MeshStandardMaterial",
  });

  return (
    <text
      position-z={0}
      position-x={0}
      //   rotation={rotation}
      {...opts}
      text={testoAbout}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
      //   onClick={() => window.open("https://gianmarialessandro.com/", "_blank")}
    >
      {opts.materialType === "MeshPhongMaterial" ? (
        <meshStandardMaterial attach="material" color={opts.color} />
      ) : null}
    </text>
  );
}

function Testo1() {
  return (
    <>
      <Text1 />
    </>
  );
}

export default Testo1;
