/**
 * Soapstone: Talc-rich metamorphic rock with greasy feel
 * @constant soapstoneConfig
 */
export const soapstoneConfig: StoneConfig = {
  name: "soapstone",
  colors: {
    main: "#A3A38C", // Characteristic soapstone gray
    secondary: "#C2C2B0", // Weathered surfaces
    tertiary: "#8C8C75", // Mineral veining
    quaternary: "#D9D9C7", // Talc-rich areas
  },
  noise: {
    octaves: 5,
    persistence: 0.6,
    scale: 1.5,
    roughness: 0.4,
    lacunarity: 2.0,
    displacement: 0.35,
    contrast: 0.8,
    warp: 0.78,
    colorBlendPower: 1.5,
    frequencyMod: 0.3,
    roughnessRange: [32, 64],
    metalnessRange: [16, 32],
    layers: [
      {
        octaves: 4,
        persistence: 0.65,
        scale: 1.1,
        roughness: 0.45,
        weight: 0.8,
      },
    ],
  },
};
