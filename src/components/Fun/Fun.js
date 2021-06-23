import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import Kirbo from '../Kirbo/Kirbo';
// import Ak47comp from '../Ak47comp/Ak47comp';


const Spin = () => {
    const mesh1 = useRef(null);
    var move = 0.02;
    
    useFrame(() => {

        if  (mesh1.current.position.y < -1 || mesh1.current.position.y > 1) {
            move *= -1;
        }
        mesh1.current.rotation.y += 0.005;        
        mesh1.current.position.y -= move;
        
    });    

    return (
        <>
        <mesh ref={mesh1} position={[10, 0, 0]} >
            <Kirbo />
        </mesh>        
        </>
    )
}

const Fun = () => {

    return (
        <>
            <Spin />
            <OrbitControls />
        </>
    )
}

export default Fun;