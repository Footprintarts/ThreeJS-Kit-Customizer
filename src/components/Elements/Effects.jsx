/* eslint-disable no-unused-vars */
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  HueSaturation,
  SMAA,
  Vignette,
} from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer>
      <SMAA />
      <Bloom
        mipmapBlur
        luminanceThreshold={0.9}
        levels={9}
        intensity={0.15}
        radius={0.9}
        luminanceSmoothing={0}
      />
      <Bloom
        mipmapBlur
        radius={0.5}
        luminanceThreshold={0.3}
        levels={4}
        intensity={0.2}
      />
      <Vignette offset={0.5} darkness={0.4} />
    </EffectComposer>
  );
};

export default Effects;
