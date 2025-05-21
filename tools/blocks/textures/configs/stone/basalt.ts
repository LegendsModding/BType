/**
 * @constant basaltConfig
 * @name basaltConfig
 * @description Enhanced configuration for generating a basalt stone texture.
 *
 * This configuration is designed to capture the deep, dark, and fine-grained nature of basalt,
 * a volcanic rock formed from rapid cooling of basaltic lava. The refined color palette and noise
 * parameters simulate the rugged, porous surface and subtle layering characteristic of basaltic flows.
 * @notes
 * - Colors: A monochromatic, dark palette with nuanced variations to highlight fine grain.
 * - Noise: Detailed parameters that enhance the rough, porous texture and mimic natural lava flow stratification.
 * - Stratification: Prominent layering effects that reflect the geological processes in volcanic rocks.
 * @example
 * // Usage in texture generation:
 * generateStoneTexture(basaltConfig);
 */
export const basaltConfig: StoneConfig = {
  name: "basalt",
  colors: {
    main: "#292929", // Deep, nearly black gray forming the base.
    secondary: "#3A3A3A", // Slightly lighter gray for subtle tonal variation.
    tertiary: "#1F1F1F", // Deep, near-black hue to emphasize shadows.
    quaternary: "#2F2F2F", // Dark accent with a hint of blue undertone for mineral nuances.
  },
  noise: {
    octaves: 4, // Provides ample detail for a rugged, volcanic texture.
    persistence: 0.68, // Moderate detail propagation across octaves.
    scale: 1.0, // Base scale that suits the fine-grained structure.
    roughness: 0.75, // Elevated roughness to simulate a porous, rough surface.
    lacunarity: 2.2, // Standard scaling for natural frequency variation.
    displacement: 0.1, // Increased displacement to mimic lava flow channels.
    frequencyMod: 1.1, // Subtle modulation for natural irregularities.
    gradientStrength: 0.15, // Slight gradient to enhance smooth transitions.
    edgeSharpness: 0.8, // Enhanced sharpness to capture defined volcanic edges.
    bias: -0.05, // Slight negative bias to deepen the overall darkness.
    contrast: 1.0, // Neutral contrast to maintain a consistently dark appearance.
    warp: 0.05, // Minimal warp to preserve fine-grained detail.
    ridge: true, // Enables ridge effects to reinforce the rugged surface.
    colorBlendPower: 1.2, // Smooth blending for subtle color variations.
    roughnessRange: [140, 200], // Tighter range to reflect consistent roughness.
    metalnessRange: [0, 10], // Minimal metalness typical of dense volcanic rock.
    stratification: {
      strength: 0.5, // Prominent layering that simulates lava flow strata.
      layerFrequency: 4, // Multiple layers per tile to enhance geological detail.
      layerWarp: 0.7, // Strong warp to mimic turbulent cooling effects.
    },
    layers: [
      {
        octaves: 3,
        persistence: 0.6,
        scale: 1.2,
        roughness: 0.75,
        weight: 0.6,
      },
    ],
  },
};
