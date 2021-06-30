import React, { Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Fun from '../Fun/Fun';
import './CanvasAll.css';

// -------------------------------------------------------------------------------------------

const CanvasAll = () => {
  
  useEffect(() => {
    document.getElementById('canva').style.position = 'fixed';  
    // console.log(window.pageYOffset);  
  })

  function CameraMovement() {
    const { camera } = useThree();    
    camera.position.setZ(1);
    
    return useFrame(() => {
      let posY = -window.pageYOffset/100;
            
      camera.position.setY(posY);
      camera.rotation.x = 0;

      // camera. position.set(0, posY, 1);      
      // console.log(camera.position, camera.rotation);      
    })
  }  

  return (
    <Canvas
      id='canva'
      colorManagment
      concurrent
      camera={{fov: 60, near:0.5, far:3000 }}      
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
