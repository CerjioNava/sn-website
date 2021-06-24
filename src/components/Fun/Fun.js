import React, { useRef } from 'react';
import { MapControls, Box, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import Kirbo from '../Kirbo/Kirbo';


const SpinningBox = ({ position, args, color, speed, rot, minmax }) => {
    const ref = useRef(null);
    let moveSpeed = speed;          // Velocidad del movimiento
    const [min, max] = minmax;      // Rango de movimiento
    const posY = position[1];       // posición en Y
    
    useFrame(() => {
        if  (ref.current.position.y < posY-min || ref.current.position.y > posY+max) {
            moveSpeed *= -1;
        }
        ref.current.rotation.x = ref.current.rotation.y += rot;        
        ref.current.position.y -= moveSpeed;        
    });    

    return (
        <>
        <mesh ref={ref} position={position} castShadow>
            <Box args={args}>
                <meshStandardMaterial attach='material' color={color} />
            </Box>            
            {/* <Kirbo /> */}
        </mesh>        
        </>
    )
}



const Fun = () => {

    return (
        <>
            <SpinningBox 
                position={[10, 0, -15]} 
                args={[3, 3, 3]} 
                color='cornflowerblue' 
                speed={0.03}
                rot={0.02} 
                minmax={[1, 2]} 
            />
            <SpinningBox 
                position={[-15, -15, -30]} 
                args={[4, 4, 4]} 
                color='yellow' 
                speed={0.02} 
                rot={-0.015} 
                minmax={[3, 3]} 
            />            
            <MapControls />
            
        </>
    )
}

export default Fun;