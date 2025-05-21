/**
 * @constant rhyodaciteConfig
 * @name rhyodaciteConfig
 * @description Configuration for rhyodacite - intermediate volcanic rock.
 * @notes
 * - Colors: Light pink-gray with subtle banding.
 * - Noise: Fine-grained texture with flow patterns.
 */
export const rhyodaciteConfig: StoneConfig = {
  name: "rhyodacite",
  colors: {
    main: "#F2E7E1", // Pale pink base
    secondary: "#E6CFC6", // Golden highlights
    tertiary: "#C8B8B0", // Creamy undertones
    quaternary: "#8A7B73", // Light beige accents
  },
  noise: {
    octaves: 7,
    persistence: 0.6,
    scale: 1.0,
    roughness: 0.25,
    lacunarity: 2.2,
    displacement: 0.2,
    contrast: 0.6,
    warp: 0.3,
    stratification: {
      strength: 0.09,
      layerFrequency: 3,
      layerWarp: 0.25,
    },
    roughnessRange: [60, 100],
    metalnessRange: [20, 40],
  },
};
