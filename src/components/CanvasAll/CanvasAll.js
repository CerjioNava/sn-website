import React, { Suspense, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import ModelContent from '../ModelContent/ModelContent';
import { Box } from '@react-three/drei';
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
      camera={{ position: [0, 0, 10], fov: 70 }}
    >
      < Suspense fallback={null} >
        <ModelContent />
        
        {/* <Box args={[5, 5, 5]} /> */}
      </Suspense>
    </Canvas>
  )

}

export default CanvasAll;
