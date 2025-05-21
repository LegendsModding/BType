/**
 * @constant rhyoliteConfig
 * @name rhyoliteConfig
 * @description Configuration for rhyolite - high-silica volcanic rock.
 * @notes
 * - Colors: Light pink with flow bands and pumiceous texture.
 * - Noise: Fine-grained with subtle layering.
 */
export const rhyoliteConfig: StoneConfig = {
  name: "rhyolite",
  colors: {
    main: "#F8F6F3", // Golden base
    secondary: "#EDE4DC", // Peach tones
    tertiary: "#D4B8A8", // Beige bands
    quaternary: "#BFA19B", // Cream highlights
  },
  noise: {
    octaves: 12,
    persistence: 0.5,
    scale: 0.8,
    roughness: 0.65,
    lacunarity: 2.2,
    displacement: 0.3,
    contrast: 0.15,
    frequencyMod: 2.2,
    warp: 0.1,
    roughnessRange: [50, 90],
    metalnessRange: [30, 50],
  },
};
