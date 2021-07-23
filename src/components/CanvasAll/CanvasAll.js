import React, { Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Fun from '../Fun/Fun';
import './CanvasAll.css';

// -------------------------------------------------------------------------------------------

const CanvasAll = () => {
    
    useEffect(() => {
        document.getElementById('canva').style.position = 'fixed';  
    })
    
    function CameraMovement() {
        const { camera } = useThree();    
        camera.position.setZ(1);
        
        let posY = 0;
        let posZ = 0;
        
        return useFrame(() => {
            
            if (document.getElementById('canva').clientWidth < 580) {
                posZ = 25;
                posY = -window.pageYOffset/50 - 5;
            } else {
                posY = -window.pageYOffset/100;
                posZ = -3 + (1920-document.getElementById("canva").offsetWidth)/150;
            }
            
            camera.position.setY(posY);
            camera.rotation.x = 0;
            camera.position.setZ(posZ);
        })
    }  
    
    return (
        <Canvas
            colorManagment
            concurrent
            camera={{fov: 60, near: 0.5, far:3000 }}
            id='canva'
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
    