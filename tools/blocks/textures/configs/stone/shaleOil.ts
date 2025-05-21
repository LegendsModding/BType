/**
 * @constant shaleOilConfig
 * @name shaleOilConfig
 * @description Configuration for oil shale - organic-rich mudstone.
 * @notes
 * - Colors: Dark brown with oily iridescence.
 * - Noise: Porous texture with waxy appearance.
 */
export const shaleOilConfig: StoneConfig = {
  name: "shale_oil",
  colors: {
    main: "#1A1A1A", // Dark chocolate
    secondary: "#5C3D3B", // Saddle brown
    tertiary: "#495B58", // Sienna
    quaternary: "#2D2C2A", // Pale gold,
  },
  noise: {
    octaves: 7,
    persistence: 0.6,
    scale: 2.5,
    roughness: 1.4,
    lacunarity: 2.2,
    displacement: 0.1,
    contrast: 0.9,
    warp: 0.2,
    colorBlendPower: 1.5,
    foliation: {
      angle: -95,
      frequency: 5,
      contrast: 1.7,
    },
    roughnessRange: [80, 140],
    metalnessRange: [0, 10],
  },
};
