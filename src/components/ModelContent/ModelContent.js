import React, { useRef, useState } from 'react';
import { Box, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import Kirbo from '../Kirbo/Kirbo';


const Spin = () => {
    const mesh = useRef(null);
    useFrame(() => mesh.current.rotation.y += 0.01);    

    return (
        <mesh ref={mesh}>
            {/* <Box args={[2, 2, 2]} />
            <meshStandardMaterial attach='material' color={'blue'} /> */}
            <Kirbo />
        </mesh>
    )

}

const ModelContent = () => {

    return (
        <>
            <Spin />
            {/* <Kirbo /> */}
            <OrbitControls />
        </>
    )
}

export default ModelContent;