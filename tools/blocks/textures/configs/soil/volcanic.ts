/**
 * @name volcanicSoilConfig
 * @description Soil texture configuration for Volcanic Soil, characterized by dark, deep red‐brown hues reminiscent of cooled lava.
 * @notes Designed to evoke the rugged, heat‐baked environment of volcanic regions.
 * @see SoilTextureConfig
 * @example
 * // Use volcanicSoilConfig for areas near active volcanoes.
 */
export const volcanicSoilConfig: SoilTextureConfig = {
  name: "volcanic",
  noise: {
    scale: 3.0,
    octaves: 6,
    persistence: 0.6,
    lacunarity: 2.0,
    contrast: 1.2,
    bias: 0.1,
    colorBlendPower: 1.0,
  },
  colors: {
    primary: "#3A1F1F", // Deep burnt red
    secondary: "#5A3333", // Charred red-brown
    tertiary: "#7B4C4C", // Faded lava tone
  },
};
