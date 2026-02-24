import React, { Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Fun from "../Fun/Fun";
import "./CanvasAll.css";

const CanvasAll = () => {
  useEffect(() => {
    const el = document.getElementById("canva");
    if (el) el.style.position = "fixed";
  }, []);

  function CameraMovement() {
    const { camera } = useThree();
    camera.position.setZ(1);

    let posY = 0;
    let posZ = 0;

    return useFrame(() => {
      const el = document.getElementById("canva");
      if (!el) return;
      if (el.clientWidth < 580) {
        posZ = 25;
        posY = -window.pageYOffset / 50 - 5;
      } else {
        posY = -window.pageYOffset / 100;
        posZ = -3 + (1920 - el.offsetWidth) / 150;
      }
      camera.position.setY(posY);
      camera.rotation.x = 0;
      camera.position.setZ(posZ);
    });
  }

  return (
    <Canvas
      id="canva"
      camera={{ fov: 60, near: 0.5, far: 3000 }}
      gl={{ alpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor(0xf0ffff); // azure, mismo tono claro que el body
      }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={2} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 5]} intensity={0.5} />
      <pointLight position={[10, 5, 0]} intensity={0.5} />

      <Suspense fallback={null}>
        <Fun />
      </Suspense>
      <CameraMovement />
    </Canvas>
  );
};

export default CanvasAll;
