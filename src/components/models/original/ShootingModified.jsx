/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import TransitionMaterial from "../../MeshTransitionMaterial/MeshTransitionMaterial";
import { state } from "../../store";
import * as THREE from "three";

export default function Shooting({ transitionColor }, props) {
  const { nodes, materials } = useGLTF("/Shooting.glb");
  const [selectedPart, setSelectedPart] = useState(null);

  // Material name mapping
  const materialNameMapping = {
    Shoulder_FRONT_1931: "Shirt Shoulders",
    Short_FRONT_1921: "Shorts",
    Bottom_Socks_FRONT_1951: "Sock Bottom",
    Collar_FRONT_1926: "Collar",
    "Shirt_FRONT_1911.001": "Main Shirt Area",
    Lower_Shirt_FRONT_1936: "Lower Shirt Area",
    Socks_FRONT_1916: "Socks",
    Upper_Socks_FRONT_1946: "Upper Socks Part",
    "Model.001": "Manniquin Skin",
  };

  // ✅ Convert materials object to array for dynamic mapping
  const materialEntries = Object.entries(materials);

  // ✅ Handle part selection
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

  // ✅ Click outside the model to deselect
  const handleDeselect = () => {
    if (selectedPart) {
      materials[selectedPart].emissive.set(0x000000);
      setSelectedPart(null);
      state.selectedPart = null;
    }
  };

  return (
    <group {...props} dispose={null} onPointerMissed={handleDeselect}>
      <group
        position={[0, -0.23, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.012}
      >
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
    </group>
  );
}

useGLTF.preload("/Shooting.glb");
