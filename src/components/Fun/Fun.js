import React, { useRef } from 'react';
import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


// import Kirbo from '../Kirbo/Kirbo';
// import Kirby from '../Kirby/Kirby';

// -------------------------------------------------------------------------------------------

const SpinningBox = ({ position, args, color, speed, rot, minmax }) => {
    const ref = useRef(null);
    let moveSpeed = speed;          // Velocidad del movimiento
    const [min, max] = minmax;      // Rango de movimiento
    const posY = position[1];       // posición en Y
    let argss = args;
    
    useFrame(() => {
        if  (ref.current.position.y < posY-min || ref.current.position.y > posY+max) {
            moveSpeed *= -1;
        }
        ref.current.rotation.x = ref.current.rotation.y += rot;        
        ref.current.position.y -= moveSpeed;
    });

    if (document.getElementById('canva').clientWidth < 580)
        argss = args.map(arg => arg*1.25);

    return (
        <>
        <mesh ref={ref} position={position} castShadow>
            <Box args={argss}>
                <meshStandardMaterial attach='material' color={color} />
            </Box>           
        </mesh>        
        </>
    )
}



const Fun = () => {

    return (
        <>
            {/* Blue box RIGHT */}
            <SpinningBox 
                position={[10, 0, -15]} 
                args={[3, 3, 3]} 
                color='#4F7BFF' 
                speed={0.015}
                rot={0.01} 
                minmax={[1, 2]} 
            />
            {/* Red box LEFT */}
            <SpinningBox 
                position={[-16, 10, -40]} 
                args={[3.5, 3.5, 3.5]} 
                color='#FF4F7B' 
                speed={-0.02} 
                rot={-0.02} 
                minmax={[4, 4]} 
            />
            {/* Yellow box LEFT */}
            <SpinningBox 
                position={[-12, -10, -20]}
                args={[3, 3, 3]} 
                color='#7BFF4F' 
                speed={0.03} 
                rot={-0.025} 
                minmax={[4, 3]} 
            />
            {/* Red box RIGHT */}
            <SpinningBox 
                position={[15, -22, -35]} 
                args={[4, 4, 4]} 
                color='#FF4F7B' 
                speed={0.02} 
                rot={0.02} 
                minmax={[5, 5]} 
            />
            {/* Blue box LEFT DOWN */}
            <SpinningBox 
                position={[-10, -50, -35]} 
                args={[3.5, 3.5, 3.5]} 
                color='#4F7BFF' 
                speed={0.015}
                rot={0.01} 
                minmax={[2, 3]} 
            />

            {/* <Box position={[0, -1, -25]}  />   */}
            {/* <mesh 
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]} 
                position={[0, -15, -30]}
            >
                <Plane args={[20, 20]} />
                <meshStandardMaterial attach='material' color='orange' />
            </mesh>           */}
            {/* <OrbitControls /> */}
            
        </>
    )
}

export default Fun;