/* eslint-disable react/prop-types */
import { useState } from "react";
import { Html } from "@react-three/drei";
import Tooltip from "./Tooltip";
import "./Tooltip.css";

const CustomizationPoints = ({ onZoomIn }) => {
  const [hovered, setHovered] = useState(null);

  // ✅ Manually defined 3D positions for each point
  const points = [
    { id: 1, name: "Jersey", position: [0, 1.2, 0.1] }, // ✅ Shirt area
    { id: 2, name: "Shorts", position: [0, 0.65, 0.15] }, // ✅ Shorts area
    { id: 3, name: "Socks", position: [0, 0.1, 0.2] }, // ✅ Socks area
  ];

  return (
    <group>
      {points.map((point) => (
        <Html
          key={point.id}
          position={point.position} // ✅ Manual 3D positions
          center
          distanceFactor={4}
          className="point"
          onClick={() => onZoomIn(point.id)}
        >
          <div
            className="point-trigger"
            onMouseEnter={() => {
              console.log("Mouse Entered", point.id); // Debugging hover
              setHovered(point.id);
            }}
            onMouseLeave={() => {
              console.log("Mouse Left", point.id); // Debugging hover
              setHovered(null);
            }}
          />
          {point.id}
          {hovered === point.id && (
            <Tooltip text={point.name} position={[-15, -84]} />
          )}
        </Html>
      ))}
    </group>
  );
};

export default CustomizationPoints;
