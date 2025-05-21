/* eslint-disable no-console */

/**
 * @module SoilGrassTextureGenerator
 * @description
 *   This module generates tileable 16×16 textures for soils, grasses, and a blended
 *   soil/grass texture. Colors and noise parameters are fully configurable to allow
 *   both realistic and fictional designs.
 * @see {@link https://github.com/Automattic/node-canvas|node-canvas} for the canvas API
 */

import * as fs from "fs";
import * as path from "path";

import { createCanvas, Canvas } from "canvas";

import {
  adobeGrassConfig,
  alpineGrassConfig,
  bituminousGrassConfig,
  blazegrassConfig,
  blossomGrassConfig,
  blueFescueGrassConfig,
  bogGrassConfig,
  cloverGrassConfig,
  duneGrassConfig,
  duskGrassConfig,
  fenGrassConfig,
  fluvialGrassConfig,
  frostbiteGrassConfig,
  greenGrassConfig,
  heatherGrassConfig,
  heathGrassConfig,
  humidifernGrassConfig,
  jungleGrassConfig,
  lemongrassConfig,
  mossyGrassConfig,
  mudGrassConfig,
  myceliumGrassConfig,
  netherCrimsonGrassConfig,
  oasisGrassConfig,
  paleGrassConfig,
  peatyGrassConfig,
  prairieGrassConfig,
  rainforestGrassConfig,
  redSandGrassConfig,
  regularGrassConfig,
  rustgrassConfig,
  sandGrassConfig,
  savannaGrassConfig,
  sporeGrassConfig,
  stonyGrassConfig,
  swampGrassConfig,
  tundraGrassConfig,
  wildGrassConfig,
  xericGrassConfig,
} from "../soilGrassConfigs/grassConfigs.ts";
import {
  adobeSoilConfig,
  alluvialSoilConfig,
  ashSoilConfig,
  blossomSoilConfig,
  calicheSoilConfig,
  claySoilConfig,
  crackedEarthSoilConfig,
  cursedSoilConfig,
  ferruginousSoilConfig,
  forestSoilConfig,
  glacialSoilConfig,
  humusSoilConfig,
  lamprophyreSoilConfig,
  leafMulchSoilConfig,
  limestoneSoilConfig,
  loamySoilConfig,
  manaInfusedSoilConfig,
  mossySoilConfig,
  mudSoilConfig,
  myceliumSoilConfig,
  peatyMudstoneSoilConfig,
  peatySoilConfig,
  redSandySoilConfig,
  regularSoilConfig,
  richLoamySoilConfig,
  sandySoilConfig,
  slagSoilConfig,
  sporeSoilConfig,
  swampSoilConfig,
  tarSoilConfig,
  verdantSoilConfig,
  volcanicSoilConfig,
  weatheredSoilConfig,
} from "../soilGrassConfigs/soilConfigs.ts";

const TILE_SIZE = 16;
const OUTPUT_DIR = "output/soil_grass";

/**
 * @function ensureDir
 * @name ensureDir
 * @description Ensures that the given directory exists, creating it recursively if needed.
 * @param {string} dirPath The directory path to ensure.
 * @example
 * ensureDir("output/textures");
 */
function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

/**
 * @function wrapCoord
 * @name wrapCoord
 * @description Wraps a coordinate value to a given period for seamless tiling.
 * @param {number} n The coordinate value.
 * @param {number} [period=TILE_SIZE] The period to wrap around.
 * @returns {number} The wrapped coordinate.
 * @example
 * const wrapped = wrapCoord(18, 16); // returns 2
 */
function wrapCoord(n: number, period: number = TILE_SIZE): number {
  return ((n % period) + period) % period;
}

/**
 * @function tileableNoise
 * @name tileableNoise
 * @description Generates a tileable noise value between 0 and 1 using sine/cosine functions.
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 * @param {number} frequency Frequency multiplier for the noise.
 * @param {number} [phaseX=0] Phase offset for the x component.
 * @param {number} [phaseY=0] Phase offset for the y component.
 * @param {number} [period=TILE_SIZE] The tiling period.
 * @returns {number} A noise value between 0 and 1.
 * @example
 * const noiseVal = tileableNoise(5, 10, 1.5);
 */
function tileableNoise(
  x: number,
  y: number,
  frequency: number,
  phaseX: number = 0,
  phaseY: number = 0,
  period: number = TILE_SIZE,
): number {
  x = wrapCoord(x, period);
  y = wrapCoord(y, period);
  const nx = x / period;
  const ny = y / period;
  const noiseX = Math.sin(nx * Math.PI * 2 * frequency + phaseX);
  const noiseY = Math.cos(ny * Math.PI * 2 * frequency + phaseY);
  return (noiseX * noiseY + 1) / 2;
}

/**
 * @function mulberry32
 * @name mulberry32
 * @description A simple, seeded pseudo-random number generator.
 * @param {number} initialSeed The initial seed value.
 * @returns {() => number} A function that returns a pseudo-random number between 0.5 and 1.5.
 * @example
 * const prng = mulberry32(12345);
 * const randomValue = prng();
 */
function mulberry32(initialSeed: number): () => number {
  let t = initialSeed + 0x6d2b79f5;
  return () => {
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t = (t + Math.imul(t ^ (t >>> 7), t | 61)) ^ t;
    return (t >>> 0) / 4294967296 + 0.5;
  };
}

/**
 * @function generateNoiseMap
 * @name generateNoiseMap
 * @description Generates a 2D noise map (array of numbers between 0 and 1) using multiple octaves.
 * @param {TextureNoiseConfig} config Noise configuration.
 * @param {number} seed Seed for random generation.
 * @returns {number[][]} A 2D array (TILE_SIZE×TILE_SIZE) representing noise values.
 * @example
 * const noiseMap = generateNoiseMap({ scale: 1, octaves: 3, persistence: 0.5, lacunarity: 2 }, 12345);
 */
function generateNoiseMap(
  config: TextureNoiseConfig,
  seed: number,
): number[][] {
  const noiseMap: number[][] = [];
  const prng = mulberry32(seed);
  for (let y = 0; y < TILE_SIZE; y++) {
    noiseMap[y] = [];
    for (let x = 0; x < TILE_SIZE; x++) {
      let amplitude = 1;
      let frequency = 1;
      let noiseValue = 0;
      let maxAmplitude = 0;
      for (let o = 0; o < config.octaves; o++) {
        const n = tileableNoise(
          x / config.scale,
          y / config.scale,
          frequency,
          prng() * Math.PI * 2,
          prng() * Math.PI * 2,
        );
        noiseValue += n * amplitude;
        maxAmplitude += amplitude;
        amplitude *= config.persistence;
        frequency *= config.lacunarity;
      }
      noiseValue /= maxAmplitude;
      if (config.displacement) {
        noiseValue +=
          config.displacement *
          tileableNoise(x, y, 1.0, prng() * Math.PI * 2, prng() * Math.PI * 2);
      }
      if (config.bias) {
        noiseValue += config.bias;
      }
      if (config.contrast !== undefined) {
        noiseValue = 0.5 + config.contrast * (noiseValue - 0.5);
      }
      noiseValue = Math.max(0, Math.min(1, noiseValue));
      noiseMap[y][x] = noiseValue;
    }
  }
  return noiseMap;
}

/**
 * @function blendChannel
 * @name blendChannel
 * @description Blends two color channel values (0–255) based on a blend factor.
 * @param {number} a First channel value.
 * @param {number} b Second channel value.
 * @param {number} t Blend factor (0 to 1).
 * @returns {number} Blended channel value (0–255).
 * @example
 * const blended = blendChannel(255, 100, 0.3);
 */
function blendChannel(a: number, b: number, t: number): number {
  return Math.max(0, Math.min(255, Math.floor(a * t + b * (1 - t))));
}

/**
 * @function computeColorFromNoise
 * @name computeColorFromNoise
 * @description Computes a hexadecimal color based on a noise value and a color configuration.
 * @param {number} noiseVal Noise value (0 to 1).
 * @param {TextureColorConfig} config Color configuration.
 * @param {number} [colorBlendPower=1] Exponent to adjust the blend factor.
 * @returns {string} Hexadecimal color string.
 * @example
 * const color = computeColorFromNoise(0.7, { primary: "#A0522D", secondary: "#8B4513" }, 2);
 */
function computeColorFromNoise(
  noiseVal: number,
  config: TextureColorConfig,
  colorBlendPower: number = 1,
): string {
  /**
   *
   * @param color
   * @returns {number}
   */
  const parseColor = (color: string): number => parseInt(color.slice(1), 16);
  const main = parseColor(config.primary);
  const secondary = parseColor(config.secondary);
  const blendFactor = Math.pow(noiseVal, colorBlendPower);
  let r = blendChannel(
    (main >> 16) & 0xff,
    (secondary >> 16) & 0xff,
    blendFactor,
  );
  let g = blendChannel(
    (main >> 8) & 0xff,
    (secondary >> 8) & 0xff,
    blendFactor,
  );
  let b = blendChannel(main & 0xff, secondary & 0xff, blendFactor);
  if (config.tertiary) {
    const tertiary = parseColor(config.tertiary);
    const tertiaryWeight = Math.max(
      0,
      Math.min(1, Math.sin(noiseVal * Math.PI)),
    );
    r = blendChannel(r, (tertiary >> 16) & 0xff, tertiaryWeight);
    g = blendChannel(g, (tertiary >> 8) & 0xff, tertiaryWeight);
    b = blendChannel(b, tertiary & 0xff, tertiaryWeight);
  }
  if (config.quaternary) {
    const quaternary = parseColor(config.quaternary);
    const quaternaryWeight = Math.max(
      0,
      Math.min(1, Math.cos((noiseVal - 0.5) * Math.PI * 2)),
    );
    r = blendChannel(r, (quaternary >> 16) & 0xff, quaternaryWeight);
    g = blendChannel(g, (quaternary >> 8) & 0xff, quaternaryWeight);
    b = blendChannel(b, quaternary & 0xff, quaternaryWeight);
  }
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
  return `#${hex}`;
}

/**
 * @function createColorCanvas
 * @name createColorCanvas
 * @description Creates a canvas and paints each pixel based on the noise map and a color configuration.
 * @param {number[][]} noiseMap 2D array of noise values.
 * @param {TextureColorConfig} colorConfig Color configuration.
 * @returns {Canvas} A canvas containing the colored texture.
 * @example
 * const canvas = createColorCanvas(noiseMap, { primary: "#A0522D", secondary: "#8B4513" });
 */
function createColorCanvas(
  noiseMap: number[][],
  colorConfig: TextureColorConfig,
  colorBlendPower: number = 1,
): Canvas {
  const canvas = createCanvas(TILE_SIZE, TILE_SIZE);
  const ctx = canvas.getContext("2d");
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const noiseVal = noiseMap[y][x];
      ctx.fillStyle = computeColorFromNoise(noiseVal, colorConfig, colorBlendPower);
      ctx.fillRect(x, y, 1, 1);
    }
  }
  return canvas;
}

/**
 * @function createNormalMap
 * @name createNormalMap
 * @description Creates a normal map canvas from the provided noise map.
 * @param {number[][]} noiseMap 2D array of noise values.
 * @returns {Canvas} A canvas containing the computed normal map.
 * @example
 * const normalCanvas = createNormalMap(noiseMap);
 */
function createNormalMap(noiseMap: number[][]): Canvas {
  const canvas = createCanvas(TILE_SIZE, TILE_SIZE);
  const ctx = canvas.getContext("2d");
  const strength = 0.2;
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const xPrev = wrapCoord(x - 1);
      const xNext = wrapCoord(x + 1);
      const yPrev = wrapCoord(y - 1);
      const yNext = wrapCoord(y + 1);
      const dx = noiseMap[y][xNext] - noiseMap[y][xPrev];
      const dy = noiseMap[yNext][x] - noiseMap[yPrev][x];
      const normalX = -dx * strength;
      const normalY = -dy * strength;
      const normalZ = 1.0;
      const length = Math.sqrt(normalX ** 2 + normalY ** 2 + normalZ ** 2);
      const nx = normalX / length;
      const ny = normalY / length;
      const nz = normalZ / length;
      const r = Math.round((nx + 1) * 0.5 * 255);
      const g = Math.round((ny + 1) * 0.5 * 255);
      const b = Math.round((nz + 1) * 0.5 * 255);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  return canvas;
}

/**
 * @function createMRMap
 * @name createMRMap
 * @description Creates a metalness/roughness (MR) map canvas from the noise map.
 * @param {number[][]} noiseMap 2D array of noise values.
 * @returns {Canvas} A canvas containing the MR map.
 * @example
 * const mrCanvas = createMRMap(noiseMap);
 */
function createMRMap(noiseMap: number[][]): Canvas {
  const canvas = createCanvas(TILE_SIZE, TILE_SIZE);
  const ctx = canvas.getContext("2d");
  const roughnessRange: [number, number] = [0, 255];
  const metalnessRange: [number, number] = [0, 255];
  const f0 = 128;
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const n = noiseMap[y][x];
      const roughness = Math.round(
        n * (roughnessRange[1] - roughnessRange[0]) + roughnessRange[0],
      );
      const metalness = Math.round(
        n * (metalnessRange[1] - metalnessRange[0]) + metalnessRange[0],
      );
      ctx.fillStyle = `rgb(${roughness}, ${metalness}, ${f0})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  return canvas;
}

/**
 * @function generateSoilTexture
 * @name generateSoilTexture
 * @description Generates a soil texture (color, normal, and MR maps) from the provided configuration and seed.
 * @param {SoilTextureConfig} config Soil texture configuration.
 * @param {number} seed Seed for noise generation.
 * @returns {{ colorCanvas: Canvas, normalCanvas: Canvas, mrCanvas: Canvas }} An object containing the generated canvases.
 * @example
 * const soilTexture = generateSoilTexture(soilConfig, 12345);
 */
function generateSoilTexture(
  config: SoilTextureConfig,
  seed: number,
): { colorCanvas: Canvas; normalCanvas: Canvas; mrCanvas: Canvas } {
  const noiseMap = generateNoiseMap(config.noise, seed);
  const colorCanvas = createColorCanvas(
    noiseMap,
    config.colors,
    config.noise.colorBlendPower,
  );
  const normalCanvas = createNormalMap(noiseMap);
  const mrCanvas = createMRMap(noiseMap);
  return { colorCanvas, normalCanvas, mrCanvas };
}

/**
 * @function generateGrassTexture
 * @name generateGrassTexture
 * @description Generates a grass texture (color, normal, and MR maps) from the provided configuration and seed.
 * @param {GrassTextureConfig} config Grass texture configuration.
 * @param {number} seed Seed for noise generation.
 * @returns {{ colorCanvas: Canvas, normalCanvas: Canvas, mrCanvas: Canvas }} An object containing the generated canvases.
 * @example
 * const grassTexture = generateGrassTexture(grassConfig, 12345);
 */
function generateGrassTexture(
  config: GrassTextureConfig,
  seed: number,
): { colorCanvas: Canvas; normalCanvas: Canvas; mrCanvas: Canvas } {
  const noiseMap = generateNoiseMap(config.noise, seed);
  const colorCanvas = createColorCanvas(
    noiseMap,
    config.colors,
    config.noise.colorBlendPower,
  );
  const normalCanvas = createNormalMap(noiseMap);
  const mrCanvas = createMRMap(noiseMap);
  return { colorCanvas, normalCanvas, mrCanvas };
}

/**
 * @function generateBlendTexture
 * @name generateBlendTexture
 * @description Generates a blended texture by combining soil and grass textures using noise-based blending.
 * @param {Canvas} soilCanvas Canvas of the soil texture.
 * @param {Canvas} grassCanvas Canvas of the grass texture.
 * @param {number} seed Seed for generating the blending noise.
 * @param {BlendTextureConfig} blendConfig Blend configuration.
 * @returns {Canvas} A canvas containing the blended texture.
 * @example
 * const blendCanvas = generateBlendTexture(soilCanvas, grassCanvas, 12345, blendConfig);
 */
function generateBlendTexture(
  soilCanvas: Canvas,
  grassCanvas: Canvas,
  seed: number,
  blendConfig: BlendTextureConfig,
): Canvas {
  const blendCanvas = createCanvas(TILE_SIZE, TILE_SIZE);
  const ctx = blendCanvas.getContext("2d");
  const soilCtx = soilCanvas.getContext("2d");
  const grassCtx = grassCanvas.getContext("2d");
  const prng = mulberry32(seed);
  // Generate a blend factor per pixel based on tileable noise and blend configuration.
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const blendNoise = tileableNoise(
        x,
        y,
        blendConfig.blendNoiseFrequency,
        prng() * Math.PI * 2,
        prng() * Math.PI * 2,
      );
      // Calculate a smooth blend factor using the threshold and smoothness.
      const factor = Math.max(
        0,
        Math.min(
          1,
          (blendNoise - blendConfig.blendThreshold) *
            blendConfig.blendSmoothness +
            0.5,
        ),
      );
      // Retrieve soil and grass pixel data.
      const soilData = soilCtx.getImageData(x, y, 1, 1).data;
      const grassData = grassCtx.getImageData(x, y, 1, 1).data;
      // Blend each color channel.
      const r = blendChannel(soilData[0], grassData[0], factor);
      const g = blendChannel(soilData[1], grassData[1], factor);
      const b = blendChannel(soilData[2], grassData[2], factor);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  return blendCanvas;
}

/* ======================================================================
   NEW FEATURE: Grass Block Side Texture Generation with Configurable Shape
   ====================================================================== */

/**
 * @function generateGrassSideTexture
 * @name generateGrassSideTexture
 * @description
 *   Generates a tileable side texture for grass blocks, featuring a natural grass band at the top.
 *   The grass band’s height and color vary per column using tileable noise to create a non-uniform,
 *   organic appearance. In addition, new configuration options on the grass config allow you to
 *   adjust the noise parameters that determine the band shape. These options include:
 *     - `sideTexture.minHeight`: Minimum height (in pixels) of the grass band (default: 4).
 *     - `sideTexture.maxHeight`: Maximum height (in pixels) of the grass band (default: 8).
 *     - `sideTexture.bandFrequency`: Frequency for the noise controlling band height variation (default: 0.2).
 *     - `sideTexture.pixelNoiseFrequency`: Frequency for the per-pixel noise that varies the grass color (default: 1.0).
 *
 *   Optionally, the grass band can be composited on top of an existing soil texture.
 * @param {GrassTextureConfig} grassConfig The configuration for the grass texture (which may include sideTexture options).
 * @param {number} seed Seed for noise generation.
 * @param {Canvas} [baseSoilCanvas] Optional soil texture canvas to use as the base beneath the grass band.
 * @returns {Canvas} A canvas containing the generated grass side texture.
 * @example
 * // Generate a standalone grass side texture (no underlying dirt):
 * const grassSide = generateGrassSideTexture(grassConfig, 12345);
 *
 * // Generate a grass side texture composited on top of a soil texture:
 * const soilTexture = generateSoilTexture(soilConfig, 12345).colorCanvas;
 * const compositeGrassSide = generateGrassSideTexture(grassConfig, 12345, soilTexture);
 */
function generateGrassSideTexture(
  grassConfig: GrassTextureConfig,
  seed: number,
  baseSoilCanvas?: Canvas,
): Canvas {
  const canvas = createCanvas(TILE_SIZE, TILE_SIZE);
  const ctx = canvas.getContext("2d");

  // If a base soil texture is provided, use it as the background.
  if (baseSoilCanvas) {
    ctx.drawImage(baseSoilCanvas, 0, 0, TILE_SIZE, TILE_SIZE);
  } else {
    // Otherwise, clear the canvas (leaving transparent background).
    ctx.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
  }

  // Use configurable options from the grass config (if provided) to determine the grass band shape.
  const sideOptions =
    (grassConfig.sideTexture as {
      minHeight?: number;
      maxHeight?: number;
      bandFrequency?: number;
      pixelNoiseFrequency?: number;
    }) || {};

  const minGrassHeight = sideOptions.minHeight ?? 4; // default minimum height: 4 pixels
  const maxGrassHeight = sideOptions.maxHeight ?? 8; // default maximum height: 8 pixels
  const bandFrequency = sideOptions.bandFrequency ?? 0.2; // default noise frequency for band height
  const pixelNoiseFrequency = sideOptions.pixelNoiseFrequency ?? 1.0; // default per-pixel noise frequency

  // Create a PRNG for this function using the seed.
  const prng = mulberry32(seed);

  // For each column, determine a variable grass band height and paint the band.
  for (let x = 0; x < TILE_SIZE; x++) {
    // Use tileable noise to compute a per-column band height.
    const bandNoise = tileableNoise(
      x,
      0,
      bandFrequency,
      prng() * Math.PI * 2,
      prng() * Math.PI * 2,
      TILE_SIZE,
    );
    const bandHeight = Math.floor(
      minGrassHeight + bandNoise * (maxGrassHeight - minGrassHeight),
    );

    // For each pixel in the grass band, compute a slightly varying color.
    for (let y = 0; y < bandHeight; y++) {
      // Compute per-pixel noise for color variation using the configurable frequency.
      const pixelNoise = tileableNoise(
        x,
        y,
        pixelNoiseFrequency,
        prng() * Math.PI * 2,
        prng() * Math.PI * 2,
        TILE_SIZE,
      );
      const color = computeColorFromNoise(pixelNoise, grassConfig.colors);
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  return canvas;
}

/**
 * @function GenerateGrassSide
 * @name GenerateGrassSide
 * @description
 *   Generates and saves a standalone grass side texture based on the given grass configuration.
 *   In this mode, only the natural grass band is drawn (with no dirt behind it).
 * @param {GrassTextureConfig} config The grass texture configuration.
 * @param {number} seed The seed for noise generation.
 * @example
 * GenerateGrassSide(grassConfig, 12345);
 */
const GenerateGrassSide = (config: GrassTextureConfig, seed: number) => {
  const name = config.name;
  const grassSideCanvas = generateGrassSideTexture(config, seed);
  const grassSideTiling = generateTilingGrid(grassSideCanvas);

  const grassSideFile = path.join(OUTPUT_DIR, `tex_grassSide_${name}_d.png`);
  const grassSideTilingFile = path.join(
    OUTPUT_DIR,
    `grassSide_${name}_tiling.png`,
  );

  fs.writeFileSync(grassSideFile, grassSideCanvas.toBuffer("image/png"));
  fs.writeFileSync(grassSideTilingFile, grassSideTiling.toBuffer("image/png"));
};

/**
 * @function GenerateGrassSideComposite
 * @name GenerateGrassSideComposite
 * @description
 *   Generates and saves a composite grass side texture by overlaying the natural grass band on top
 *   of a soil texture. This is useful when you want a grass side that is built upon a specific soil configuration.
 * @param {SoilTextureConfig} soilConfig The soil texture configuration.
 * @param {GrassTextureConfig} grassConfig The grass texture configuration.
 * @param {number} seed The seed for noise generation.
 * @example
 * GenerateGrassSideComposite(soilConfig, grassConfig, 12345);
 */
const GenerateGrassSideComposite = (
  soilConfig: SoilTextureConfig,
  grassConfig: GrassTextureConfig,
  seed: number,
) => {
  const soilName = soilConfig.name;
  const grassName = grassConfig.name;

  // Generate the soil texture.
  const soilTexture = generateSoilTexture(soilConfig, seed);
  // Composite the grass side band on top of the soil texture.
  const grassSideCanvas = generateGrassSideTexture(
    grassConfig,
    seed,
    soilTexture.colorCanvas,
  );
  const grassSideTiling = generateTilingGrid(grassSideCanvas);

  const compositeFile = path.join(
    OUTPUT_DIR,
    `tex_grassSide_${soilName}_${grassName}_d.png`,
  );
  const compositeTilingFile = path.join(
    OUTPUT_DIR,
    `grassSide_${soilName}_${grassName}_tiling.png`,
  );

  fs.writeFileSync(compositeFile, grassSideCanvas.toBuffer("image/png"));
  fs.writeFileSync(compositeTilingFile, grassSideTiling.toBuffer("image/png"));
};

/**
 * @function generateTilingGrid
 * @name generateTilingGrid
 * @description Generates a 5×5 tiling grid image from a given texture canvas.
 * @param {Canvas} texture Input texture canvas.
 * @returns {Canvas} A new canvas containing a 5×5 grid of the texture.
 * @example
 * const tilingCanvas = generateTilingGrid(textureCanvas);
 */
function generateTilingGrid(texture: Canvas): Canvas {
  const gridSize = 5;
  const outputSize = gridSize * TILE_SIZE;
  const outputCanvas = createCanvas(outputSize, outputSize);
  const ctx = outputCanvas.getContext("2d");
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      ctx.drawImage(
        texture,
        col * TILE_SIZE,
        row * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE,
      );
    }
  }
  return outputCanvas;
}

ensureDir(OUTPUT_DIR);
const textureSeed = 88334; // Example seed

// ----- Example Blend Configuration -----
const exampleBlendConfig: BlendTextureConfig = {
  blendNoiseFrequency: 0.2,
  blendThreshold: 0.2,
  blendSmoothness: 0.9,
};

/**
 *
 * @param config
 * @param seed
 */
const GenerateSoil = (config: SoilTextureConfig, seed: number) => {
  const name = config.name;
  const soilTexture = generateSoilTexture(config, seed);
  const soilTiling = generateTilingGrid(soilTexture.colorCanvas);

  const soilFile = path.join(OUTPUT_DIR, `tex_soil_${name}_d.png`);
  const soilTilingFile = path.join(OUTPUT_DIR, `soil_${name}_tiling.png`);

  fs.writeFileSync(soilFile, soilTexture.colorCanvas.toBuffer("image/png"));
  fs.writeFileSync(soilTilingFile, soilTiling.toBuffer("image/png"));
};

/**
 *
 * @param config
 * @param seed
 */
const GenerateGrass = (config: GrassTextureConfig, seed: number) => {
  const name = config.name;
  const grassTexture = generateGrassTexture(config, seed);
  const grassTiling = generateTilingGrid(grassTexture.colorCanvas);

  const grassFile = path.join(OUTPUT_DIR, `tex_grass_${name}_d.png`);
  const grassTilingFile = path.join(OUTPUT_DIR, `grass_${name}_tiling.png`);

  fs.writeFileSync(grassFile, grassTexture.colorCanvas.toBuffer("image/png"));
  fs.writeFileSync(grassTilingFile, grassTiling.toBuffer("image/png"));
};

/**
 *
 * @param soilConfig
 * @param grassConfig
 * @param seed
 * @param blendConfig
 * @param blendIndex
 */

/**
 * Generates a blend texture by combining soil and grass textures based on a blend configuration.
 * @param {SoilTextureConfig} soilConfig The configuration for the soil texture.
 * @param {GrassTextureConfig} grassConfig The configuration for the grass texture.
 * @param {number} seed A numeric seed used for randomization.
 * @param {BlendTextureConfig} blendConfig The configuration for the blend texture.
 * @param {number} blendIndex A unique index representing the blend configuration variant.
 * @example
 * // Generate the first blend variant for a given soil/grass combination:
 * GenerateBlend(soilConfig, grassConfig, 42, blendConfig, 0);
 * @see {@link generateBlendTexture}
 */
const GenerateBlend = (
  soilConfig: SoilTextureConfig,
  grassConfig: GrassTextureConfig,
  seed: number,
  blendConfig: BlendTextureConfig,
  blendIndex: number,
) => {
  const soilName = soilConfig.name;
  const grassName = grassConfig.name;

  const soil = generateSoilTexture(soilConfig, seed);
  const grass = generateGrassTexture(grassConfig, seed);

  const soilTex = soil.colorCanvas;
  const grassTex = grass.colorCanvas;

  const blendTexture = generateBlendTexture(
    soilTex,
    grassTex,
    seed,
    blendConfig,
  );

  const blendTiling = generateTilingGrid(blendTexture);

  // Updated file names now include the blendIndex to differentiate each blend variant.
  const blendFile = path.join(
    OUTPUT_DIR,
    `tex_blend_${soilName}_${grassName}_blend${blendIndex}_d.png`,
  );
  const blendTilingFile = path.join(
    OUTPUT_DIR,
    `blend_${soilName}_${grassName}_blend${blendIndex}_tiling.png`,
  );

  fs.writeFileSync(blendFile, blendTexture.toBuffer("image/png"));
  fs.writeFileSync(blendTilingFile, blendTiling.toBuffer("image/png"));
};

const allSoilConfigs = [
  regularSoilConfig,
  slagSoilConfig,
  peatySoilConfig,
  peatyMudstoneSoilConfig,
  ashSoilConfig,
  mudSoilConfig,
  loamySoilConfig,
  richLoamySoilConfig,
  sandySoilConfig,
  redSandySoilConfig,
  blossomSoilConfig,
  cursedSoilConfig,
  crackedEarthSoilConfig,
  humusSoilConfig,
  manaInfusedSoilConfig,
  forestSoilConfig,
  leafMulchSoilConfig,
  verdantSoilConfig,
  claySoilConfig,
  mossySoilConfig,
  sporeSoilConfig,
  lamprophyreSoilConfig,
  myceliumSoilConfig,
  adobeSoilConfig,
  swampSoilConfig,
  volcanicSoilConfig,
  glacialSoilConfig,
  tarSoilConfig,
  limestoneSoilConfig,
  weatheredSoilConfig,
  calicheSoilConfig,
  ferruginousSoilConfig,
  alluvialSoilConfig,
];
const allGrassConfigs = [
  regularGrassConfig,
  duneGrassConfig,
  blazegrassConfig,
  blossomGrassConfig,
  wildGrassConfig,
  cloverGrassConfig,
  mossyGrassConfig,
  greenGrassConfig,
  frostbiteGrassConfig,
  blueFescueGrassConfig,
  lemongrassConfig,
  humidifernGrassConfig,
  jungleGrassConfig,
  bogGrassConfig,
  alpineGrassConfig,
  mudGrassConfig,
  myceliumGrassConfig,
  netherCrimsonGrassConfig,
  oasisGrassConfig,
  paleGrassConfig,
  rainforestGrassConfig,
  sandGrassConfig,
  redSandGrassConfig,
  heatherGrassConfig,
  sporeGrassConfig,
  adobeGrassConfig,
  peatyGrassConfig,
  swampGrassConfig,
  heathGrassConfig,
  tundraGrassConfig,
  savannaGrassConfig,
  fenGrassConfig,
  duskGrassConfig,
  prairieGrassConfig,
  bituminousGrassConfig,
  xericGrassConfig,
  stonyGrassConfig,
  rustgrassConfig,
  fluvialGrassConfig,
];
const grassSoilBlendConfigs: [SoilTextureConfig, GrassTextureConfig][] = [
  [regularSoilConfig, regularGrassConfig],
  [sandySoilConfig, duneGrassConfig],
  [sandySoilConfig, sandGrassConfig],
  [sandySoilConfig, oasisGrassConfig],
  [redSandySoilConfig, redSandGrassConfig],
  [adobeSoilConfig, adobeGrassConfig],
  [blossomSoilConfig, blossomGrassConfig],
  [claySoilConfig, regularGrassConfig],
  [claySoilConfig, cloverGrassConfig],
  [crackedEarthSoilConfig, duneGrassConfig],
  [crackedEarthSoilConfig, sandGrassConfig],
  [forestSoilConfig, wildGrassConfig],
  [forestSoilConfig, jungleGrassConfig],
  [humusSoilConfig, greenGrassConfig],
  [humusSoilConfig, cloverGrassConfig],
  [lamprophyreSoilConfig, blueFescueGrassConfig],
  [lamprophyreSoilConfig, heathGrassConfig],
  [leafMulchSoilConfig, heatherGrassConfig],
  [leafMulchSoilConfig, wildGrassConfig],
  [richLoamySoilConfig, rainforestGrassConfig],
  [richLoamySoilConfig, jungleGrassConfig],
  [loamySoilConfig, regularGrassConfig],
  [loamySoilConfig, wildGrassConfig],
  [manaInfusedSoilConfig, wildGrassConfig],
  [manaInfusedSoilConfig, blueFescueGrassConfig],
  [mossySoilConfig, regularGrassConfig],
  [mossySoilConfig, mossyGrassConfig],
  [mudSoilConfig, mudGrassConfig],
  [myceliumSoilConfig, myceliumGrassConfig],
  [peatySoilConfig, peatyGrassConfig],
  [peatyMudstoneSoilConfig, mudGrassConfig],
  [peatyMudstoneSoilConfig, peatyGrassConfig],
  [sporeSoilConfig, sporeGrassConfig],
  [swampSoilConfig, swampGrassConfig],
  [swampSoilConfig, bogGrassConfig],
  [verdantSoilConfig, jungleGrassConfig],
  [verdantSoilConfig, wildGrassConfig],
];

const blendConfig1: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.1,
  blendSmoothness: 0.95,
};
const blendConfig2: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.2,
  blendSmoothness: 0.95,
};
const blendConfig3: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.3,
  blendSmoothness: 0.95,
};
const blendConfig4: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.4,
  blendSmoothness: 0.95,
};
const blendConfig5: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.5,
  blendSmoothness: 0.95,
};
const blendConfig6: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.6,
  blendSmoothness: 0.95,
};
const blendConfig7: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.7,
  blendSmoothness: 0.95,
};
const blendConfig8: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.8,
  blendSmoothness: 0.95,
};
const blendConfig9: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.9,
  blendSmoothness: 0.95,
};
const blendConfig10: BlendTextureConfig = {
  blendNoiseFrequency: 0.1,
  blendThreshold: 0.95,
  blendSmoothness: 0.95,
};
const blendConfigs = [
  blendConfig1,
  blendConfig2,
  blendConfig3,
  blendConfig4,
  blendConfig5,
  blendConfig6,
  blendConfig7,
  blendConfig8,
  blendConfig9,
  blendConfig10,
];

/**
 * Generates all blend textures for each soil and grass configuration pair using the provided blend configurations.
 * @param {Array<[SoilTextureConfig, GrassTextureConfig]>} soilGrassBlendConfigs An array of pairs,
 * where each pair contains a soil texture configuration and a grass texture configuration.
 * @param {BlendTextureConfig[]} configs An array of blend texture configuration objects.
 * @param {number} seed A numeric seed used for generating both the soil and grass textures.
 * @example
 * // Generate all blend textures using a seed value of 42:
 * generateAllBlends(grassSoilBlendConfigs, blendConfigs, 42);
 * @see {@link GenerateBlend}
 */
export function generateAllBlends(
  soilGrassBlendConfigs: [SoilTextureConfig, GrassTextureConfig][],
  configs: BlendTextureConfig[],
  seed: number,
): void {
  for (const [soilConfig, grassConfig] of soilGrassBlendConfigs) {
    configs.forEach((config, index) => {
      // Pass the unique blend index to differentiate file names.
      GenerateBlend(soilConfig, grassConfig, seed, config, index);
    });
  }
}

/**
 * Helper function to generate textures for both soil and grass types from an array of configs.
 * @param {SoilTextureConfig[]} soilConfigs An array of soil texture configuration objects.
 * @param {GrassTextureConfig[]} grassConfigs An array of grass texture configuration objects.
 * @param {number} seed The seed value used for randomization during texture generation.
 * @example
 * // Generate textures using pre-defined configuration arrays and a seed value:
 * generateTextures(allSoilConfigs, allGrassConfigs, textureSeed);
 */
const generateTextures = (
  soilConfigs: SoilTextureConfig[],
  grassConfigs: GrassTextureConfig[],
  seed: number,
) => {
  // Generate soil textures for each config in the soilConfigs array.
  soilConfigs.forEach((config) => {
    GenerateSoil(config, seed);
  });

  // Generate grass textures for each config in the grassConfigs array.
  grassConfigs.forEach((config) => {
    GenerateGrass(config, seed);
  });

  // Generate all blend textures using the unique naming scheme.
  generateAllBlends(grassSoilBlendConfigs, blendConfigs, seed);

  console.log("Soil and grass textures generated successfully!");
};

// Execute texture generation using all available soil and grass configurations.
generateTextures(allSoilConfigs, allGrassConfigs, textureSeed);

// ---------------------------------------------------------
// New: Generate Grass Side Textures
// ---------------------------------------------------------

// Generate standalone grass side textures for each grass configuration.
allGrassConfigs.forEach((config) => {
  GenerateGrassSide(config, textureSeed);
});

// Generate composite grass side textures (grass band over soil) for each soil/grass pair.
grassSoilBlendConfigs.forEach(([soilConfig, grassConfig]) => {
  GenerateGrassSideComposite(soilConfig, grassConfig, textureSeed);
});

console.log("Grass side textures generated successfully!");
