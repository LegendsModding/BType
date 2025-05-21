/**
 * @constant diamondConfig
 * @name diamondConfig
 * @description Configuration for generating a realistic diamond texture.
 *
 * Diamond is a naturally transparent, crystalline substance known for its highly reflective surface.
 * This configuration aims to capture the brilliance and clarity of diamond, focusing on subtle color
 * variations, strong reflectivity, and finely tuned crystalline facets. The noise settings are carefully
 * tuned to simulate the way light refracts and reflects within the facets of a cut diamond.
 * @notes
 * - Colors: A combination of pure white and light blue-gray highlights, evoking the clarity and brilliance of diamond.
 * - Noise: Low roughness with sharp edge definition to simulate the smooth, polished, faceted nature of the gem.
 * - Crystalline: Sharp facets with moderate density to mimic the diamond’s iconic cut and shine.
 * - Layering: Layers add subtle internal texture to simulate the way light interacts with diamond's internal structure.
 * @example
 * // Usage in texture generation:
 * generateStoneTexture(diamondConfig);
 */
export const diamondConfig: StoneConfig = {
  name: "diamond",
  colors: {
    main: "#F0F0F0", // A near-white base, representing the clarity of diamond.
    secondary: "#FFFFFF", // Pure white highlights for reflective facets.
    tertiary: "#B8B8B8", // Soft gray for internal depth and shadowing.
    quaternary: "#D0E0E8", // Light blue-gray accent to enhance the cool, reflective nature.
  },
  noise: {
    octaves: 11,
    persistence: 2.0,
    scale: 4.0,
    roughness: 1.0,
    lacunarity: 2.0,
    contrast: 1.5,
    warp: 0.4,
    metalnessRange: [60, 80],
    roughnessRange: [40, 80],
    layers: [
      {
        octaves: 3,
        persistence: 0.5,
        scale: 1.0,
        roughness: 0.15,
        weight: 0.6,
      },
    ],
  },
};
