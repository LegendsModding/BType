/** */
export const serpentineConfig: StoneConfig = {
  name: "serpentine",
  colors: {
    main: "#4A7C5E", // Rich, deep green
    secondary: "#7CB99E", // Lighter, fresh green
    tertiary: "#355E46", // Dark olive for depth
    quaternary: "#6DA37C", // Yellow-green accents
  },
  noise: {
    octaves: 5,
    persistence: 0.65,
    scale: 1.0,
    roughness: 0.75, // Slightly rough texture
    lacunarity: 2.0,
    displacement: 0.3,
    frequencyMod: 6.8,
    gradientStrength: 0.75,
    edgeSharpness: 0.75,
    contrast: 1.2,
    warp: 1.2,
    ridge: true,
    colorBlendPower: 1.1,
    roughnessRange: [32, 96], // Waxy texture
    metalnessRange: [8, 20], // Mineral-like reflections
    crystalline: {
      density: 8, // Dense fibrous crystals
      size: 0.35,
      sharpness: 7,
    },
    layers: [
      { octaves: 4, persistence: 0.6, scale: 1.1, roughness: 0.6, weight: 0.6 },
      { octaves: 3, persistence: 0.5, scale: 0.8, roughness: 0.7, weight: 0.2 },
    ],
  },
};
