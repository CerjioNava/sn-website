
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Kirby(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/kirby.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={3.26}>
          <mesh geometry={nodes.Sphere_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Sphere_1.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Sphere_2.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Sphere_3.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.Sphere_4.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Sphere_5.geometry} material={materials['Material.007']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/kirby.gltf')
