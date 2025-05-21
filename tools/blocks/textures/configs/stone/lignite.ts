/**
 * @constant ligniteConfig
 * @name ligniteConfig
 * @description Configuration for generating a realistic lignite texture.
 *
 * Lignite is a low-grade coal with a carbonaceous, crumbly texture and dark, earthy tones.
 * The updated colors feature deep, dark browns and near–charcoal accents to capture its
 * fossilized organic matter, while the noise settings simulate a coarse, stratified, and
 * carbon-rich surface.
 * @example
 * generateStoneTexture(ligniteConfig);
 */
export const ligniteConfig: StoneConfig = {
  name: "lignite",
  colors: {
    main: "#4B3F2F", // Dark brown base, reflecting carbonaceous matter.
    secondary: "#5C4D3C", // Slightly lighter dark brown for subtle variation.
    tertiary: "#7A6A55", // Muted earthy tone for grain detail.
    quaternary: "#6B5A48", // Deep charcoal accent for added depth.
  },
  noise: {
    octaves: 4,
    persistence: 0.6,
    scale: 1.4,
    roughness: 0.75,
    lacunarity: 2.5,
    displacement: 0.2,
    frequencyMod: 1.1,
    gradientStrength: 0.5,
    edgeSharpness: 0.8,
    bias: 0,
    contrast: 1.0,
    warp: 0.1,
    ridge: false,
    colorBlendPower: 1.1,
    stratification: {
      strength: 0.5,
      layerFrequency: 6,
      layerWarp: 0.4,
    },
    roughnessRange: [200, 255],
    metalnessRange: [0, 8],
  },
};
