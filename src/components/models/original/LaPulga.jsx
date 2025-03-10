/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 LaPulga.glb 
*/

import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/LaPulga.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.059}>
        <mesh
          geometry={nodes["2_1"].geometry}
          material={materials.Waist_FRONT_1941}
        />
        <mesh
          geometry={nodes["2_2"].geometry}
          material={materials.Short_FRONT_1921}
        />
        <mesh
          geometry={nodes["2_3"].geometry}
          material={materials.Bottom_Socks_FRONT_1951}
        />
        <mesh
          geometry={nodes["2_4"].geometry}
          material={materials.Collar_FRONT_1926}
        />
        <mesh
          geometry={nodes["2_5"].geometry}
          material={materials.Shoulder_FRONT_1931}
        />
        <mesh
          geometry={nodes["2_6"].geometry}
          material={materials.Shirt_FRONT_1911}
        />
        <mesh
          geometry={nodes["2_7"].geometry}
          material={materials.Lower_Shirt_FRONT_1936}
        />
        <mesh
          geometry={nodes["2_8"].geometry}
          material={materials.Socks_FRONT_1916}
        />
        <mesh
          geometry={nodes["2_9"].geometry}
          material={materials.Upper_Socks_FRONT_1946}
        />
        <mesh geometry={nodes["2_10"].geometry} material={materials.Model} />
      </group>
      <mesh
        geometry={nodes["2001"].geometry}
        material={materials.Sleeve_END}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.059}
      />
      <mesh
        geometry={nodes["2002"].geometry}
        material={materials.Sleeve_END}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.059}
      />
    </group>
  );
}

useGLTF.preload("/LaPulga.glb");
