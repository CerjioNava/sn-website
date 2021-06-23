import React, { Suspense, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import Fun from '../Fun/Fun';
import './CanvasAll.css';


const CanvasAll = () => {

  useEffect(() => {
    document.getElementById('canva').style.position = 'fixed';
  })
  

  return (
    <Canvas
      id='canva'
      colorManagment
      concurrent
      camera={{ position: [0, 0, 15], fov: 70 }}
    >
      <ambientLight intensity={1} />
      <directionalLight 
          castShadow
          position={[0, 10, 0]} 
          intensity={2} 
        />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />        
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      
      <Suspense fallback={null} >
        <Fun />        
      </Suspense>
    </Canvas>
  )

}

export default CanvasAll;
