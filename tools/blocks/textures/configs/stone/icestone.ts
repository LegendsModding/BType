/**
 * @constant icestoneConfig
 * @name icestoneConfig
 * @description Configuration for icestone - fictional pure ice rock.
 * @notes
 * - Colors: Transparent blue with glassy texture.
 * - Noise: Ultra-smooth with crack patterns.
 */
export const icestoneConfig: StoneConfig = {
  name: "icestone",
  colors: {
    main: "#E6F3FF", // Clear ice
    secondary: "#CCE6FF", // Glacial blue
    tertiary: "#B3D9FF", // Depth accents
    quaternary: "#A0C9FF", // Refractive edges
  },
  noise: {
    octaves: 6,
    persistence: 1.5,
    scale: 2.0,
    roughness: 1.1,
    lacunarity: 2.0,
    contrast: 0.8,
    warp: 0.1,
    colorBlendPower: 1.7,
    metalnessRange: [80, 100],
    roughnessRange: [40, 80],
  },
};
