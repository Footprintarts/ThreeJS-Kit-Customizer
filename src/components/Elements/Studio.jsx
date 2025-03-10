/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls } from "@react-three/drei";
const Studio = () => {
  return (
    <>
      <color attach="background" args={["#1c1c1c"]} />
      <fog attach="fog" args={["#1c1c1c", 10, 20]} />
      <OrbitControls
        minDistance={6}
        maxDistance={10}
        autoRotate
        autoRotateSpeed={-0.45}
        target={[0, 0.5, 0]}
        minPolarAngle={1.3}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
      />

      <directionalLight
        position={[-2, 2, 1]}
        castShadow
        shadow-mapSize-width={256}
        intensity={2}
        shadow-bias={-0.0001}
      />

      <Environment preset="warehouse" environmentIntensity={0.8} />
    </>
  );
};

export default Studio;
