/* eslint-disable no-unused-vars */
// Import Scene Elements
import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { state } from "./store";
import Overlays from "./Overlays/Overlays";
// Scene Visible Elements
import Effects from "./Elements/Effects";
import Floor from "./Elements/Floor";
import Studio from "./Elements/Studio";
import "./style/styles.css";

// 3D MODELS
import Shooting from "./models/Shooting";
import StandOnBall from "./models/StandOnBall";
import Tackle from "./models/Tackle";
import LaPulga from "./models/LaPulga";
import Jude from "./models/Jude";
import Ball from "./models/BallLime";
import ClCup from "./models/ClCup";
import CWCup from "./models/CWCup";
import Cone from "./models/Cone";
import Goat from "./models/GOAT";

// Import Overlays(2D Layouts)
import CustomizationPoints from "./Overlays/CustomizationPoints";
import Pallete from "./Overlays/Pallete";

// Model Toggler Component
import ModelToggler from "./ModelToggler";

// Music
import MusicPlayer from "./Overlays/MusicPlayer";
import songs from "./songs";

// Function to handle zoom-in effect
const zoomIn = (part) => {
  console.log(`Zooming into ${part}`);
  // GSAP animation logic will be added in the next step
};

const Scene = () => {
  const { selectedColor, isMobile } = useSnapshot(state);
  const [activeModel, setActiveModel] = useState("Shooting"); // Default to Shooting

  const handleModelChange = (modelName) => {
    setActiveModel(modelName);
  };

  return (
    <Suspense>
      {/* Overlays-2D-Elements */}
      {/* <Overlays /> */}
      <Pallete />
      {/* <HeroOverlay /> */}

      {/* 3D Scene-Elements */}
      <Canvas
        shadows
        camera={{ position: [5, 0.5, 7], fov: isMobile ? 45 : 25 }}
        style={{ width: "100%", height: "100vh" }}
      >
        <Studio />

        {/* 3D MODELS */}
        {activeModel === "Shooting" && <Shooting />}

        {activeModel === "StandOnBall" && <StandOnBall />}
        {activeModel === "Tackle" && <Tackle />}
        {activeModel === "LaPulga" && (
          <LaPulga transitionColor={selectedColor} />
        )}
        {activeModel === "Jude" && <Jude transitionColor={selectedColor} />}

        {/* Decorative Props */}
        <Ball activeModel={activeModel} />
        <ClCup />
        <CWCup />
        <Cone position={[-2, 0, 0]} />
        <Cone position={[0.1, 0, 2]} />
        <Cone position={[0.5, 0, 2]} />
        <Goat />

        {/* 3D Scene-Elements */}

        <Floor />
        <Effects />
        <CustomizationPoints onZoomIn={zoomIn} />
      </Canvas>
      {/* Overlays */}
      <ModelToggler onModelChange={handleModelChange} />
      <MusicPlayer songs={songs} />
    </Suspense>
  );
};

export default Scene;
