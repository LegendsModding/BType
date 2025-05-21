/**
 * @constant daciteConfig
 * @name daciteConfig
 * @description Enhanced configuration for generating a realistic dacite texture.
 *
 * Dacite is a light-colored volcanic rock with a subtle, fine-grained texture and a slightly
 * warm, silica-rich composition. This configuration employs a gentle, warm palette with delicate
 * pinkish-gray and beige tones. The noise parameters are finely tuned to create a naturally
 * grainy and subtly stratified texture that reflects the volcanic origins and mineral composition of dacite.
 * @notes
 * - Colors: A balanced palette of warm light beige, creamy off-white, and muted taupe, inspired by natural dacite.
 * - Noise: Moderate octaves and roughness, with slight displacement and subtle layering, produce a finely grained texture.
 * - Crystalline: Minimal crystalline influence to hint at sparse phenocrysts.
 * - Stratification: Noticeable yet understated layering simulates gentle lava flow bands.
 * @example
 * // Usage in texture generation:
 * generateStoneTexture(daciteConfig);
 */
export const daciteConfig: StoneConfig = {
  name: "dacite",
  colors: {
    main: "#D2B8A3", // Warm light beige with a subtle pinkish undertone.
    secondary: "#E6D3C7", // Soft, creamy off-white for gentle tonal variation.
    tertiary: "#C0A79B", // Muted taupe adding depth and natural contrast.
    quaternary: "#AD958D", // A cool, subtle accent for fine detail.
  },
  noise: {
    octaves: 4, // Sufficient detail for a fine-grained volcanic texture.
    persistence: 0.7, // Strong influence across octaves to capture the rock’s uniformity.
    scale: 1.1, // Slightly smaller scale to accentuate the fine grain.
    roughness: 0.55, // Moderate roughness reflecting a subtly rough volcanic surface.
    lacunarity: 2.0, // Standard frequency scaling for natural texture variation.
    displacement: 0.12, // Modest displacement to simulate natural irregularities.
    frequencyMod: 1.1, // Gentle modulation for organic detail.
    gradientStrength: 0.35, // Smooth gradients for soft transitions between grain boundaries.
    edgeSharpness: 0.65, // Moderately defined edges to maintain a natural, fine-grained look.
    bias: 0, // Neutral bias for balanced tonal distribution.
    contrast: 1.0, // Even contrast to preserve the delicate nature of dacite.
    warp: 0.1, // Mild warp for subtle surface irregularity.
    ridge: false, // No pronounced ridges, keeping the texture uniformly volcanic.
    colorBlendPower: 1.2, // Harmonious blending between the chosen hues.
    roughnessRange: [70, 130], // A balanced range to simulate fine-grained surface variation.
    metalnessRange: [0, 10], // Very low metalness to reflect the silica-rich, non-metallic composition.
    crystalline: {
      density: 3, // Sparse crystal density for occasional phenocryst hints.
      size: 0.4, // Moderately sized crystals that don’t overwhelm the texture.
      sharpness: 5, // Soft crystalline details that blend with the overall grain.
    },
    stratification: {
      strength: 0.2, // Noticeable layering to simulate lava flow bands.
      layerFrequency: 3, // Multiple subtle layers per tile.
      layerWarp: 0.3, // Moderate distortion to reflect turbulent cooling effects.
    },
    layers: [
      {
        octaves: 3,
        persistence: 0.65,
        scale: 1.1,
        roughness: 0.55,
        weight: 0.7,
      },
      {
        octaves: 2,
        persistence: 0.5,
        scale: 0.9,
        roughness: 0.6,
        weight: 0.3,
      },
    ],
  },
};
