import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Kirbo(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('kirbo.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.surfaceShader1SG} />
      </group>
    </group>
  )
}

useGLTF.preload('kirbo.gltf')
