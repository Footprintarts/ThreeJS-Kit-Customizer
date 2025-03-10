/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ClCup.glb 
*/

import { useGLTF } from "@react-three/drei";

export default function ClCup(props) {
  const { nodes, materials } = useGLTF("/ClCup.glb");

  // Material: Cup_mat
  materials.Cup_mat.color.set("#f7f7f7");
  materials.Cup_mat.emissive.set("#000000");
  materials.Cup_mat.roughness = 0.3;
  materials.Cup_mat.metalness = 0.8;

  // Material: Cup_mat.001
  nodes.cup_high.material = materials.Cup_mat;
  nodes.handles_high.material = materials.Cup_mat;

  return (
    <group {...props} dispose={null} scale={0.3} position={[1, 0, 1.2]}>
      {/* Handles */}
      <mesh
        geometry={nodes.handles_low.geometry}
        material={materials.Cup_mat}
        position={[0, 0.8, 0]}
      />

      {/* Main Cup */}
      <mesh
        geometry={nodes.cup_high.geometry}
        material={nodes.cup_high.material}
      />
    </group>
  );
}

useGLTF.preload("/ClCup.glb");
