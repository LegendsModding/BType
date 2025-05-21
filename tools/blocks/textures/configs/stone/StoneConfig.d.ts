/**
 * @interface StoneConfig
 * @description Configuration for a stone texture including color and noise parameters.
 */
declare interface StoneConfig {
  name: string;
  colors: {
    main: string;
    secondary: string;
    tertiary?: string;
    quaternary?: string;
  };
  noise: {
    octaves: number;
    persistence: number;
    scale: number;
    roughness?: number;
    lacunarity?: number;
    displacement?: number;
    frequencyMod?: number; // Frequency modulation
    gradientStrength?: number; // Gradient noise strength
    edgeSharpness?: number; // Edge sharpness

    /** Additional bias applied to the noise value (uniform offset) */
    bias?: number;
    layers?: {
      octaves: number;
      persistence: number;
      scale: number;
      roughness: number;
      weight: number; // Blending weight for layered noise
    }[];

    /** Contrast adjusts the overall contrast of the noise (1 = neutral) */
    contrast?: number;

    /** Warp warps the coordinates before noise sampling (0 = no warp) */
    warp?: number;

    ridge?: boolean;

    colorBlendPower?: number;

    /** Crystalline structure parameters */
    crystalline?: {
      density: number; // Number of crystal seeds per tile (0-10)
      size: number; // Crystal size (0.1-2.0)
      sharpness: number; // Edge sharpness (1-10)
    };

    /** Stratification parameters */
    stratification?: {
      strength: number; // Layer intensity (0-1)
      layerFrequency: number; // Layers per tile (1-10)
      layerWarp: number; // Layer distortion amount (0-1)
    };

    /** Foliation parameters */
    foliation?: {
      angle: number; // Direction in degrees (0-180)
      frequency: number; // Bands per tile (1-10)
      contrast: number; // Band contrast (0-2)
    };

    roughnessRange?: [number, number]; // [min, max] 0-255
    metalnessRange?: [number, number]; // [min, max] 0-255
  };
}
