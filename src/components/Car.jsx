/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 car.gltf
Author: mk2design (https://sketchfab.com/mk2design)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-lowpoly-generic-suv-edc994ad28ed438cb365c0e0389ac177
Title: *FREE* Lowpoly Generic SUV
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/Car.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[78.27, 38.02, 146.79]}>
          <mesh geometry={nodes.Wheel_FL_Texture_0.geometry} material={materials.Texture} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-77.24, 38.02, 146.79]}>
          <mesh geometry={nodes.Wheel_FR_Texture_0.geometry} material={materials.Texture} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[78.27, 38.02, -139.22]}>
          <mesh geometry={nodes.Wheel_RL_Texture_0.geometry} material={materials.Texture} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-77.24, 38.02, -139.22]}>
          <mesh geometry={nodes.Wheel_RR_Texture_0.geometry} material={materials.Texture} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <mesh geometry={nodes.Interior_Interior_0.geometry} material={materials.Interior} position={[-0.11, 101.55, -53.87]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Glass_Glass_0.geometry} material={materials.Glass} position={[-0.11, 106.87, -1.1]} rotation={[-Math.PI / 2, 0, 0]} />
        <group position={[-0.11, 93.82, -1.82]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Body_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Body_Texture_0.geometry} material={materials.Texture} />
        </group>
        <mesh geometry={nodes.Shadow_Shadow_0.geometry} material={materials.Shadow} position={[4.03, 0, -2]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Details_Texture_0.geometry} material={materials.Texture} position={[-0.11, 89.58, -1.28]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Car.gltf')

export default Model