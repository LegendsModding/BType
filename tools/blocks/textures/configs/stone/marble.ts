/**
 * Marble: A metamorphic rock known for its elegant veining on a predominantly white, polished surface.
 * @constant marbleConfig
 */
export const marbleConfig: StoneConfig = {
  name: "marble",
  colors: {
    main: "#F5F5F5",
    secondary: "#E0E0E0",
    tertiary: "#BDC8D9",
    quaternary: "#6C6C6C",
  },
  noise: {
    octaves: 16,
    persistence: 0.7,
    scale: 2.0,
    roughness: 0.6, // Smoother, more polished surface
    lacunarity: 2.0,
    displacement: 0.3,
    frequencyMod: 1.0,
    gradientStrength: 0.0,
    edgeSharpness: 0.7,
    bias: 0,
    contrast: 0.3,
    warp: 0.4,
    ridge: true,
    colorBlendPower: 1.5,
    roughnessRange: [64, 128], // Polished calcite surface
    metalnessRange: [8, 24], // Subtle reflective veining
    layers: [
      {
        octaves: 4,
        persistence: 0.3,
        scale: 4.0,
        roughness: 0.3,
        weight: 0.7,
      },
      {
        octaves: 2,
        persistence: 0.5,
        scale: 0.5,
        roughness: 0.5,
        weight: 0.3,
      },
    ],
  },
};
