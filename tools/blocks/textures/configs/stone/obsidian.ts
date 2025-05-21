/**
 * Obsidian: A naturally glassy volcanic rock with a smooth, highly reflective surface and subtle fracture patterns.
 * @constant obsidianConfig
 */
export const obsidianConfig: StoneConfig = {
  name: "obsidian",
  colors: {
    main: "#3D2B40", // Nearly pure black with a hint of depth
    secondary: "#161616", // Very dark gray, minimal contrast
    tertiary: "#2A1A30", // Deep purple-black for subtle volcanic hues
    quaternary: "#0A0A0A", // Muted violet hint for fractured reflections
  },
  noise: {
    octaves: 2, // Less turbulence, smoother glassy surfaces
    persistence: 0.5,
    scale: 2.0, // Slightly increased scale for depth
    roughness: 0.3, // Smooth but not perfect
    lacunarity: 2.0,
    bias: 0.0,
    contrast: 0.4,
    colorBlendPower: 2.0,
    frequencyMod: 0.75,
    edgeSharpness: 0.4,

    roughnessRange: [180, 255], // Less rough than typical stone, but retains microfractures
    metalnessRange: [90, 140], // Slightly more reflectivity than default stone, ensuring the glossy obsidian effect
  },
};
