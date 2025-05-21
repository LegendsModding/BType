/**
 * Chlorite Schist: Green schist with chlorite minerals
 * @constant schistChloriteConfig
 */
export const schistChloriteConfig: StoneConfig = {
  name: "schist_chlorite",
  colors: {
    main: "#6B8C7B", // Chlorite green
    secondary: "#8CA89E", // Weathered surfaces
    tertiary: "#546B5D", // Mineral banding
    quaternary: "#A3B8AD", // Quartz veins
  },
  noise: {
    octaves: 7,
    persistence: 0.55,
    scale: 2.0,
    roughness: 0.75,
    lacunarity: 2.5,
    foliation: {
      angle: 80,
      frequency: 2.8,
      contrast: 1.35,
    },
    displacement: 0.25,
    contrast: 1.4,
    colorBlendPower: 0.5,
    roughnessRange: [80, 160],
    metalnessRange: [32, 64],
    layers: [
      {
        octaves: 5,
        persistence: 0.75,
        scale: 1.4,
        roughness: 0.65,
        weight: 0.7,
      },
    ],
  },
};
