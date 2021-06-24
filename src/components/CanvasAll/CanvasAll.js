import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Fun from '../Fun/Fun';
import './CanvasAll.css';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three'


const CanvasAll = () => {

  const cameraRef = useRef(null);

  useEffect(() => {
    document.getElementById('canva').style.position = 'fixed';  
    console.log(window.pageYOffset);  
  })

  function CameraMovement() {
    const { camera } = useThree()    
    camera.position.setZ(1);

    return useFrame(() => {
      camera.position.setY(window.pageYOffset/1000)
      // camera.translateY(window.pageYOffset/1000)
      // console.log(camera.position)      
    })
  }  

  return (
    <Canvas
      id='canva'
      colorManagment
      concurrent
      camera={{ fov: 70 }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight 
          castShadow
          position={[0, 10, 0]} 
          intensity={2} 
        />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />        
      <pointLight position={[0, -10, 5]} intensity={0.5} />
      <pointLight position={[10, 5, 0]} intensity={0.5} />
      
      <Suspense fallback={null} >
        <Fun />        
      </Suspense>
      <CameraMovement />
    </Canvas>
  )

}

export default CanvasAll;
