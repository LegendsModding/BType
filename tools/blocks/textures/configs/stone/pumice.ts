/**
 * @constant pumiceConfig
 * @name pumiceConfig
 * @description Configuration for pumice - highly vesicular volcanic rock.
 * @notes
 * - Colors: Pale gray with frothy texture.
 * - Noise: Extreme roughness and porosity.
 */
export const pumiceConfig: StoneConfig = {
  name: "pumice",
  colors: {
    main: "#D3D3D3", // Light gray matrix
    secondary: "#C0C0C0", // Bubble walls
    tertiary: "#A9A9A9", // Darker vesicles
    quaternary: "#E0E0E0", // Weathered edges
  },
  noise: {
    octaves: 7,
    persistence: 0.95,
    scale: 2.0,
    roughness: 1.5,
    lacunarity: 3.0,
    displacement: 0.5,
    contrast: 0.5,
    colorBlendPower: 0.9,
    warp: 1.4,
    frequencyMod: 1.1,
    roughnessRange: [180, 240],
    metalnessRange: [0, 5],
    layers: [
      {
        octaves: 3,
        persistence: 0.6,
        scale: 0.5,
        roughness: 1.4,
        weight: 0.7,
      },
    ],
  },
};
