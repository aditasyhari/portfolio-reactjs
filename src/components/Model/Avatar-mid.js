/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
// import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../avatar-mid.glb')
  // const { nodes, materials, animations } = useGLTF("../../../avatar-mid.glb");
  // const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={nodes.EyeLeft.material}
        skeleton={nodes.EyeLeft.skeleton}
      />
      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={nodes.EyeRight.material}
        skeleton={nodes.EyeRight.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hands.geometry}
        material={nodes.Wolf3D_Hands.material}
        skeleton={nodes.Wolf3D_Hands.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Shirt.geometry}
        material={materials.Wolf3D_Shirt}
        skeleton={nodes.Wolf3D_Shirt.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={nodes.Wolf3D_Head.material}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  )
}

useGLTF.preload('../../../avatar-mid.glb')
