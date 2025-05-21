/**
 * @constant sleetstoneConfig
 * @name sleetstoneConfig
 * @description Configuration for sleetstone - fictional icy sedimentary rock.
 * @notes
 * - Colors: Gray with blue sleet inclusions.
 * - Noise: Layered ice and sediment mixture.
 */
export const sleetstoneConfig: StoneConfig = {
  name: "sleetstone",
  colors: {
    main: "#D7E5E3", // Slate gray
    secondary: "#A6D8D2", // Ice blue veins
    tertiary: "#9FD3CC", // Sleet pockets
    quaternary: "#D1E1E1", // Meltwater streaks
  },
  noise: {
    octaves: 5,
    persistence: 0.7,
    scale: 2.0,
    roughness: 0.6,
    lacunarity: 2.5,
    displacement: 0.2,
    contrast: 0.9,
    colorBlendPower: 2.2,
    warp: 0.3,
    stratification: {
      strength: 0.25,
      layerFrequency: 3.2,
      layerWarp: 0.4,
    },
    roughnessRange: [120, 180],
    metalnessRange: [10, 30],
  },
};
