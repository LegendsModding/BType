/**
 * @constant micaChloriteConfig
 * @name micaChloriteConfig
 * @description Configuration for chlorite mica - a green mica variant.
 * @notes
 * - Colors: Green-gray with metallic sheen.
 * - Noise: Flaky texture with subtle green undertones.
 */
export const micaChloriteConfig: StoneConfig = {
  name: "mica_chlorite",
  colors: {
    main: "#6B8E23", // Olive green base
    secondary: "#8FBC8F", // Pale green highlight
    tertiary: "#556B2F", // Dark green shadow
    quaternary: "#95F094", // Mint green shimmer
  },
  noise: {
    octaves: 10,
    persistence: 0.85,
    scale: 1.5,
    roughness: 1.95,
    lacunarity: 2.0,
    frequencyMod: 0.7,
    edgeSharpness: 0.9,
    contrast: 0.8,
    warp: 0.2,
    ridge: false,
    colorBlendPower: 0.6,
    stratification: {
      strength: 0.15,
      layerFrequency: 4.0,
      layerWarp: 0,
    },
    roughnessRange: [30, 70],
    metalnessRange: [64, 96],
  },
};
