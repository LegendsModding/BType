/**
 * @constant ignimbriteConfig
 * @name ignimbriteConfig
 * @description Configuration for generating a realistic ignimbrite texture.
 *
 * Ignimbrite is a volcanic rock formed from pyroclastic flows, often with a pumice-like
 * appearance. The updated color scheme features light, warm tans and creamy accents, while the
 * noise settings include moderate roughness with stratified layering to simulate the banded,
 * porous nature of ignimbrite.
 * @example
 * generateStoneTexture(ignimbriteConfig);
 */
export const ignimbriteConfig: StoneConfig = {
  name: "ignimbrite",
  colors: {
    main: "#D9B08C", // Light tan base.
    secondary: "#C6A67B", // Deeper tan accent.
    tertiary: "#E3C9A8", // Creamy, soft tone.
    quaternary: "#B08D68", // Earthy brown for subtle accents.
  },
  noise: {
    octaves: 5,
    persistence: 0.6,
    scale: 1.5,
    roughness: 0.75,
    lacunarity: 2.8,
    displacement: 0.15,
    frequencyMod: 1.2,
    gradientStrength: 0.5,
    edgeSharpness: 0.8,
    bias: 0.05,
    contrast: 1.1,
    warp: 0.15,
    ridge: false,
    colorBlendPower: 1.2,
    stratification: {
      strength: 0.55,
      layerFrequency: 5,
      layerWarp: 0.35,
    },
    roughnessRange: [120, 180],
    metalnessRange: [0, 8],
  },
};
