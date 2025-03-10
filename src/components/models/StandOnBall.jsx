/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import TransitionMaterial from "../MeshTransitionMaterial/MeshTransitionMaterial"; // Adjust path if needed
import { state } from "../store";
import * as THREE from "three";

export default function StandOnBall(props) {
  const { nodes, materials } = useGLTF("/StandOnBall.glb");
  const [selectedPart, setSelectedPart] = useState(null);

  // Material name mapping
  const materialNameMapping = {
    Shoulder_FRONT_1931: "Shirt Shoulders",
    Short_FRONT_1921: "Shorts",
    Bottom_Socks_FRONT_1951: "Sock Bottom",
    Collar_FRONT_1926: "Collar",
    Shirt_FRONT_1911: "Main Shirt Area",
    Lower_Shirt_FRONT_1936: "Lower Shirt Area",
    Socks_FRONT_1916: "Socks",
    Upper_Socks_FRONT_1946: "Upper Socks Part",
    Model: "Manniquin Skin",
    Waist_FRONT_1941: "Waist",
    Sleeve_END: "Sleeve End",
  };

  // Convert materials object to array for dynamic mapping
  const materialEntries = Object.entries(materials);

  // Handle part selection
  const handlePartClick = (matName, material) => {
    console.log("Selected Part:", matName);

    if (selectedPart) {
      materials[selectedPart].emissive.set(0x000000);
    }

    setSelectedPart(matName);
    state.selectedPart = materialNameMapping[matName] || matName; // Use friendly name or original if not found
    materials[matName].emissive = new THREE.Color(0xffffff);
    materials[matName].emissiveIntensity = 0.5;
  };

  // Click outside the model to deselect
  const handleDeselect = () => {
    if (selectedPart) {
      materials[selectedPart].emissive.set(0x000000);
      setSelectedPart(null);
      state.selectedPart = null;
    }
  };

  return (
    <group {...props} dispose={null} onPointerMissed={handleDeselect}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
        {materialEntries.map(([matName, material], index) => {
          const meshNode = Object.values(nodes).find(
            (node) => node.material === material
          );
          if (!meshNode) return null;

          return (
            <mesh
              key={index}
              geometry={meshNode.geometry}
              material={material}
              onClick={(e) => {
                e.stopPropagation(); // Prevent deselecting immediately
                handlePartClick(matName, material);
              }}
              receiveShadow
            >
              <TransitionMaterial
                transitionColor={
                  selectedPart === matName
                    ? state.selectedColor
                    : material.color
                }
                sheen={1}
                transitionTime={0.4}
              />
            </mesh>
          );
        })}
      </group>
      <mesh
        geometry={nodes.Stand_On_Ball001.geometry}
        material={materials.Sleeve_END}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.06}
        onClick={(e) => {
          e.stopPropagation();
          handlePartClick("Sleeve_END", materials.Sleeve_END);
        }}
      >
        <TransitionMaterial
          transitionColor={
            selectedPart === "Sleeve_END"
              ? state.selectedColor
              : materials.Sleeve_END.color
          }
          sheen={1}
          transitionTime={0.4}
        />
      </mesh>
      <mesh
        geometry={nodes.Stand_On_Ball002.geometry}
        material={materials.Sleeve_END}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.06}
        onClick={(e) => {
          e.stopPropagation();
          handlePartClick("Sleeve_END", materials.Sleeve_END);
        }}
      >
        <TransitionMaterial
          transitionColor={
            selectedPart === "Sleeve_END"
              ? state.selectedColor
              : materials.Sleeve_END.color
          }
          sheen={1}
          transitionTime={0.4}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/StandOnBall.glb");
