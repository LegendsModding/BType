import fs from "fs";
import path from "path";

import { createCanvas, Canvas } from "canvas";

import { agateConfig } from "./configs/stone/agate.ts";
import { alabasterConfig } from "./configs/stone/alabaster.ts";
import { amethystConfig } from "./configs/stone/amethyst.ts";
import { amphiboliteConfig } from "./configs/stone/amphibolite.ts";
import { andesiteConfig } from "./configs/stone/andesite.ts";
import { andraditeConfig } from "./configs/stone/andradite.ts";
import { anorthositeConfig } from "./configs/stone/anorthosite.ts";
import { anthraciteConfig } from "./configs/stone/anthracite.ts";
import { aquamarineConfig } from "./configs/stone/aquamarine.ts";
import { argilliteConfig } from "./configs/stone/argillite.ts";
import { arkoseConfig } from "./configs/stone/arkose.ts";
import { bambooConfig } from "./configs/stone/bamboo.ts";
import { basaltConfig } from "./configs/stone/basalt.ts";
import { brecciaConfig } from "./configs/stone/breccia.ts";
import { brecciaVolcanicConfig } from "./configs/stone/brecciaVolcanic.ts";
import { carbonatiteConfig } from "./configs/stone/carbonatite.ts";
import { chalkConfig } from "./configs/stone/chalk.ts";
import { charnockiteConfig } from "./configs/stone/charnockite.ts";
import { chertConfig } from "./configs/stone/chert.ts";
import { chloriteConfig } from "./configs/stone/chlorite.ts";
import { citrineConfig } from "./configs/stone/citrine.ts";
import { coquinaConfig } from "./configs/stone/coquina.ts";
import { cryoliteConfig } from "./configs/stone/cryolite.ts";
import { cupriteConfig } from "./configs/stone/cuprite.ts";
import { daciteConfig } from "./configs/stone/dacite.ts";
import { diamondConfig } from "./configs/stone/diamond.ts";
import { diatomiteConfig } from "./configs/stone/diatomite.ts";
import { dioriteConfig } from "./configs/stone/diorite.ts";
import { dioriteQuartzConfig } from "./configs/stone/dioriteQuartz.ts";
import { dolomiteConfig } from "./configs/stone/dolomite.ts";
import { eclogiteConfig } from "./configs/stone/eclogite.ts";
import { emeraldConfig } from "./configs/stone/emerald.ts";
import { felsiteConfig } from "./configs/stone/felsite.ts";
import { flintConfig } from "./configs/stone/flint.ts";
import { frostMarbleConfig } from "./configs/stone/frostMarble.ts";
import { frostoneConfig } from "./configs/stone/frostone.ts";
import { frozenQuartziteConfig } from "./configs/stone/frozenQuartzite.ts";
import { gabbroConfig } from "./configs/stone/gabbro.ts";
import { garnetConfig } from "./configs/stone/garnet.ts";
import { glacialErraticConfig } from "./configs/stone/glacialErratic.ts";
import { gneissConfig } from "./configs/stone/gneiss.ts";
import { gneissMaficConfig } from "./configs/stone/gneissMafic.ts";
import { gossanConfig } from "./configs/stone/gossan.ts";
import { graniteConfig } from "./configs/stone/granite.ts";
import { granuliteConfig } from "./configs/stone/granulite.ts";
import { greywackeConfig } from "./configs/stone/greywacke.ts";
import { gypsumConfig } from "./configs/stone/gypsum.ts";
import { hornfelsConfig } from "./configs/stone/hornfels.ts";
import { huntstoneConfig } from "./configs/stone/huntstone.ts";
import { icestoneConfig } from "./configs/stone/icestone.ts";
import { ignimbriteConfig } from "./configs/stone/ignimbrite.ts";
import { jadeiteConfig } from "./configs/stone/jadeite.ts";
import { jasperMookaiteConfig } from "./configs/stone/jasperMookaite.ts";
import { jasperRedConfig } from "./configs/stone/jasperRed.ts";
import { jetConfig } from "./configs/stone/jet.ts";
import { komatiiteConfig } from "./configs/stone/komatiite.ts";
import { kyaniteConfig } from "./configs/stone/kyanite.ts";
import { labradoriteConfig } from "./configs/stone/labradorite.ts";
import { lamprophyreConfig } from "./configs/stone/lamprophyre.ts";
import { lapisConfig } from "./configs/stone/lapis.ts";
import { larvikiteConfig } from "./configs/stone/larvikite.ts";
import { ligniteConfig } from "./configs/stone/lignite.ts";
import { limestoneConfig } from "./configs/stone/limestone.ts";
import { limestoneFossiliferousConfig } from "./configs/stone/limestoneFossiliferous.ts";
import { limestoneOoliticConfig } from "./configs/stone/limestoneOolitic.ts";
import { magmastoneConfig } from "./configs/stone/magmastone.ts";
import { marbleConfig } from "./configs/stone/marble.ts";
import { marcasiteConfig } from "./configs/stone/marcasite.ts";
import { maripositeConfig } from "./configs/stone/mariposite.ts";
import { micaConfig } from "./configs/stone/mica.ts";
import { micaChloriteConfig } from "./configs/stone/micaChlorite.ts";
import { migmatiteConfig } from "./configs/stone/migmatite.ts";
import { monzoniteConfig } from "./configs/stone/monzonite.ts";
import { moonstoneConfig } from "./configs/stone/moonstone.ts";
import { mudstoneConfig } from "./configs/stone/mudstone.ts";
import { netheriteConfig } from "./configs/stone/netherite.ts";
import { obsidianConfig } from "./configs/stone/obsidian.ts";
import { olivineConfig } from "./configs/stone/olivine.ts";
import { opalConfig } from "./configs/stone/opal.ts";
import { pahoehoeConfig } from "./configs/stone/pahoehoe.ts";
import { pegmatiteConfig } from "./configs/stone/pegmatite.ts";
import { peridotConfig } from "./configs/stone/peridot.ts";
import { peridotiteConfig } from "./configs/stone/peridotite.ts";
import { perliteConfig } from "./configs/stone/perlite.ts";
import { permafrostConfig } from "./configs/stone/permafrost.ts";
import { phonoliteConfig } from "./configs/stone/phonolite.ts";
import { phylliteConfig } from "./configs/stone/phyllite.ts";
import { porphyryConfig } from "./configs/stone/porphyry.ts";
import { pumiceConfig } from "./configs/stone/pumice.ts";
import { pyroclastConfig } from "./configs/stone/pyroclast.ts";
import { quartzConfig } from "./configs/stone/quartz.ts";
import { quartziteConfig } from "./configs/stone/quartzite.ts";
import { quartzRedConfig } from "./configs/stone/quartzRed.ts";
import { rhyodaciteConfig } from "./configs/stone/rhyodacite.ts";
import { rhyoliteConfig } from "./configs/stone/rhyolite.ts";
import { rubyConfig } from "./configs/stone/ruby.ts";
import { sandstoneConfig } from "./configs/stone/sandstone.ts";
import { sapphireConfig } from "./configs/stone/sapphire.ts";
import { schistConfig } from "./configs/stone/schist.ts";
import { schistBiotiteConfig } from "./configs/stone/schistBiotite.ts";
import { schistBlueConfig } from "./configs/stone/schistBlue.ts";
import { schistChloriteConfig } from "./configs/stone/schistChlorite.ts";
import { schistGraphiteConfig } from "./configs/stone/schistGraphite.ts";
import { schistMuscoviteConfig } from "./configs/stone/schistMuscovite.ts";
import { scoriaRedConfig } from "./configs/stone/scoriaRed.ts";
import { serpentineConfig } from "./configs/stone/serpentine.ts";
import { shaleConfig } from "./configs/stone/shale.ts";
import { shaleBlackConfig } from "./configs/stone/shaleBlack.ts";
import { shaleOilConfig } from "./configs/stone/shaleOil.ts";
import { shungiteConfig } from "./configs/stone/shungite.ts";
import { siltstoneConfig } from "./configs/stone/siltstone.ts";
import { slateConfig } from "./configs/stone/slate.ts";
import { slateGlacisConfig } from "./configs/stone/slateGlacis.ts";
import { sleetstoneConfig } from "./configs/stone/sleetstone.ts";
import { snowstoneConfig } from "./configs/stone/snowstone.ts";
import { soapstoneConfig } from "./configs/stone/soapstone.ts";
import { spellSlateConfig } from "./configs/stone/spellslate.ts";
import { spinelConfig } from "./configs/stone/spinel.ts";
import { steatiteConfig } from "./configs/stone/steatite.ts";
import { sulphurConfig } from "./configs/stone/sulphur.ts";
import { syeniteConfig } from "./configs/stone/syenite.ts";
import { talcConfig } from "./configs/stone/talc.ts";
import { tephraConfig } from "./configs/stone/tephra.ts";
import { tonalitePorphyriticConfig } from "./configs/stone/tonalitePorphyritic.ts";
import { topazConfig } from "./configs/stone/topaz.ts";
import { tourmalineConfig } from "./configs/stone/tourmaline.ts";
import { trachyteConfig } from "./configs/stone/trachyte.ts";
import { travertineConfig } from "./configs/stone/travertine.ts";
import { tremoliteConfig } from "./configs/stone/tremolite.ts";
import { tuffConfig } from "./configs/stone/tuff.ts";
import { turquoiseConfig } from "./configs/stone/turquoise.ts";
import { vitrophyreConfig } from "./configs/stone/vitrophyre.ts";
import { volcanicSlagConfig } from "./configs/stone/volcanicSlag.ts";
import { zirconConfig } from "./configs/stone/zircon.ts";

const TILE_SIZE = 16; // 16x16 pixels per texture tile
const OUTPUT_DIR = "output/stone"; // Base output directory

// ==========================================================
// Utility Functions
// ==========================================================

/**
 * Ensures that the given directory exists.
 * @param dirPath The directory path.
 */
function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

// ==========================================================
// Noise and Texture Generation Functions
// ==========================================================

/**
 * Generates wrapped Voronoi-like pattern for crystals.
 * @param x X coordinate.
 * @param y Y coordinate.
 * @param config Noise configuration.
 * @param prng Seeded random generator.
 * @returns Crystal pattern value (0-1).
 */
function crystallinePattern(
  x: number,
  y: number,
  config: StoneConfig["noise"],
  prng: () => number,
): number {
  if (!config.crystalline) return 1;
  const { density, size, sharpness } = config.crystalline;

  // Generate crystal seed points in a 3x3 wrapped grid using seeded PRNG.
  const points: [number, number][] = [];
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      for (let i = 0; i < density; i++) {
        points.push([
          x + dx * TILE_SIZE + prng() * TILE_SIZE,
          y + dy * TILE_SIZE + prng() * TILE_SIZE,
        ]);
      }
    }
  }

  // Find closest point (wrapped distance).
  let minDist = Infinity;
  points.forEach(([px, py]) => {
    const dx = wrapCoord(x - px);
    const dy = wrapCoord(y - py);
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < minDist) minDist = dist;
  });

  const normalizedDist = Math.min(minDist / (TILE_SIZE * size), 1);
  return Math.pow(1 - normalizedDist, sharpness);
}

/**
 * Applies stratified layering effect.
 * @param y Y coordinate.
 * @param x X coordinate.
 * @param config Noise configuration.
 * @returns Layered noise value.
 */
function stratify(y: number, x: number, config: StoneConfig["noise"]): number {
  if (!config.stratification) return 0;
  const { strength, layerFrequency, layerWarp } = config.stratification;
  const layerY =
    y + tileableNoise(x, y, layerFrequency) * TILE_SIZE * layerWarp;
  const layers = Math.sin((layerY / TILE_SIZE) * Math.PI * 2 * layerFrequency);
  return layers * strength;
}

/**
 * Applies directional foliation.
 * @param x X coordinate.
 * @param y Y coordinate.
 * @param config Noise configuration.
 * @returns Foliation noise value.
 */
function applyFoliation(
  x: number,
  y: number,
  config: StoneConfig["noise"],
): number {
  if (!config.foliation) return 0;
  const { angle, frequency, contrast } = config.foliation;
  const rad = (angle * Math.PI) / 180;
  const dirX = Math.cos(rad);
  const dirY = Math.sin(rad);
  const projection = (x * dirX + y * dirY) / TILE_SIZE;
  const bands = Math.sin(projection * Math.PI * 2 * frequency);
  return Math.pow(Math.abs(bands), contrast);
}

/**
 * Wraps a coordinate to a given period.
 * @param n The coordinate value.
 * @param period The wrapping period.
 * @returns The wrapped coordinate.
 */
function wrapCoord(n: number, period: number = TILE_SIZE): number {
  return ((n % period) + period) % period;
}

/**
 * Generates a tileable noise value.
 * @param x The noise X coordinate.
 * @param y The noise Y coordinate.
 * @param frequency Frequency multiplier.
 * @param phaseX Phase offset for sine (default 0).
 * @param phaseY Phase offset for cosine (default 0).
 * @param period The period for tiling (default TILE_SIZE).
 * @returns Noise value between 0 and 1.
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
 * Creates a normal map canvas from a height map.
 * @param heightMap 2D array of height values (0-1).
 * @returns Canvas with the normal map.
 */
function createNormalMap(heightMap: number[][]): Canvas {
  const canvas = createCanvas(TILE_SIZE, TILE_SIZE);
  const ctx = canvas.getContext("2d");
  const strength = 0.2;
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const xPrev = wrapCoord(x - 1);
      const xNext = wrapCoord(x + 1);
      const yPrev = wrapCoord(y - 1);
      const yNext = wrapCoord(y + 1);
      const dx = heightMap[y][xNext] - heightMap[y][xPrev];
      const dy = heightMap[yNext][x] - heightMap[yPrev][x];
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
 * Creates an MR (metalness/roughness) map canvas from a height map.
 * @param heightMap 2D array of noise values.
 * @param config Stone configuration.
 * @returns Canvas with the MR map.
 */
function createMRMap(heightMap: number[][], config: StoneConfig): Canvas {
  const canvas = createCanvas(TILE_SIZE, TILE_SIZE);
  const ctx = canvas.getContext("2d");
  const roughnessRange = config.noise.roughnessRange ?? [0, 255];
  const metalnessRange = config.noise.metalnessRange ?? [0, 255];
  const f0 = 128;
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const noiseVal = heightMap[y][x];
      const roughness = Math.round(
        noiseVal * (roughnessRange[1] - roughnessRange[0]) + roughnessRange[0],
      );
      const metalness = Math.round(
        noiseVal * (metalnessRange[1] - metalnessRange[0]) + metalnessRange[0],
      );
      ctx.fillStyle = `rgb(${roughness}, ${metalness}, ${f0})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  return canvas;
}

/**
 * Generates layered tileable noise for a stone configuration.
 * @param x X coordinate (pixel space).
 * @param y Y coordinate (pixel space).
 * @param config Noise configuration.
 * @param seed Random seed.
 * @returns Combined noise value between 0 and 1.
 */
function generateTileableNoise(
  x: number,
  y: number,
  config: StoneConfig["noise"],
  seed: number,
): number {
  const prng = mulberry32(seed);

  if (config.warp && config.warp !== 0) {
    const warpFrequency = 2.0;
    const warpX = tileableNoise(x, y, warpFrequency, 0, 0, TILE_SIZE);
    const warpY = tileableNoise(
      x,
      y,
      warpFrequency,
      Math.PI / 2,
      Math.PI / 2,
      TILE_SIZE,
    );
    x = x + config.warp * (warpX - 0.5);
    y = y + config.warp * (warpY - 0.5);
  }

  const effectivePeriod = TILE_SIZE / (config.scale || 1.0);
  const scaledX = x / (config.scale || 1.0);
  const scaledY = y / (config.scale || 1.0);
  let baseAmplitude = 1;
  let baseMaxAmplitude = 0;
  let baseNoise = 0;
  for (let i = 0; i < (config.octaves || 1); i++) {
    const frequency = Math.pow(config.lacunarity ?? 2.0, i);
    const phaseX = prng() * Math.PI * 2;
    const phaseY = prng() * Math.PI * 2;
    let noiseValue = tileableNoise(
      scaledX,
      scaledY,
      frequency,
      phaseX,
      phaseY,
      effectivePeriod,
    );
    noiseValue = Math.pow(noiseValue, config.roughness ?? 0.5);
    baseNoise += noiseValue * baseAmplitude;
    baseMaxAmplitude += baseAmplitude;
    baseAmplitude *= config.persistence;
  }
  baseNoise /= baseMaxAmplitude;

  let layeredNoise = 0;
  let layeredTotalWeight = 0;
  if (config.layers && config.layers.length > 0) {
    for (const layer of config.layers) {
      const layerEffectivePeriod = TILE_SIZE / layer.scale;
      const layerScaledX = x / layer.scale;
      const layerScaledY = y / layer.scale;
      let layerAmplitude = 1;
      let layerMaxAmplitude = 0;
      let currentLayerNoise = 0;
      for (let i = 0; i < layer.octaves; i++) {
        const frequency = Math.pow(config.lacunarity ?? 2.0, i);
        const phaseX = prng() * Math.PI * 2;
        const phaseY = prng() * Math.PI * 2;
        let noiseValue = tileableNoise(
          layerScaledX,
          layerScaledY,
          frequency,
          phaseX,
          phaseY,
          layerEffectivePeriod,
        );
        noiseValue = Math.pow(noiseValue, layer.roughness);
        currentLayerNoise += noiseValue * layerAmplitude;
        layerMaxAmplitude += layerAmplitude;
        layerAmplitude *= layer.persistence;
      }
      currentLayerNoise /= layerMaxAmplitude;
      layeredNoise += currentLayerNoise * layer.weight;
      layeredTotalWeight += layer.weight;
    }
    layeredNoise /= layeredTotalWeight;
  } else {
    layeredNoise = baseNoise;
  }

  let combinedNoise = (baseNoise + layeredNoise) / 2;

  if (config.crystalline) {
    const crystal = crystallinePattern(x, y, config, prng);
    combinedNoise *= crystal;
  }

  if (config.ridge) {
    combinedNoise = 2 * (0.5 - Math.abs(0.5 - combinedNoise));
  }

  if (config.stratification) {
    const strata = stratify(y, x, config);
    combinedNoise =
      combinedNoise * (1 - config.stratification.strength) + strata;
  }

  if (config.displacement && config.displacement > 0) {
    const dispEffectivePeriod = TILE_SIZE / (config.scale || 1.0);
    const dispScaledX = x / (config.scale || 1.0);
    const dispScaledY = y / (config.scale || 1.0);
    const phaseDispX = prng() * Math.PI * 2;
    const phaseDispY = prng() * Math.PI * 2;
    combinedNoise +=
      config.displacement *
      tileableNoise(
        dispScaledX,
        dispScaledY,
        1.0,
        phaseDispX,
        phaseDispY,
        dispEffectivePeriod,
      );
  }

  if (config.frequencyMod) {
    combinedNoise = Math.sin(combinedNoise * Math.PI * config.frequencyMod);
  }

  if (config.gradientStrength) {
    const wrappedX = wrapCoord(x, TILE_SIZE);
    const wrappedY = wrapCoord(y, TILE_SIZE);
    const gradientX = wrappedX / TILE_SIZE;
    const gradientY = wrappedY / TILE_SIZE;
    const gradient = (gradientX + gradientY) % 1;
    combinedNoise =
      combinedNoise * (1 - config.gradientStrength) +
      gradient * config.gradientStrength;
  }

  if (config.edgeSharpness) {
    combinedNoise = Math.pow(
      Math.max(combinedNoise, 0.01),
      config.edgeSharpness,
    );
  }

  if (config.contrast !== undefined) {
    combinedNoise = 0.5 + config.contrast * (combinedNoise - 0.5);
  }

  if (config.foliation) {
    const foliation = applyFoliation(x, y, config);
    combinedNoise = combinedNoise * (1 - config.foliation.contrast) + foliation;
  }

  if (config.bias !== undefined) {
    combinedNoise += config.bias;
  }
  combinedNoise = Math.max(0, Math.min(1, combinedNoise));

  return combinedNoise;
}

/**
 * Converts a noise value to a color based on a stone configuration.
 * @param noiseVal The noise value (0-1).
 * @param config The stone configuration.
 * @returns Hexadecimal color string.
 */
function computeColorFromNoise(noiseVal: number, config: StoneConfig): string {
  /**
   *
   * @param color
   * @returns {number}
   */
  const parseColor = (color: string): number => parseInt(color.slice(1), 16);

  /**
   *
   * @param a
   * @param b
   * @param t
   * @returns {number}
   */
  const blend = (a: number, b: number, t: number): number =>
    Math.max(0, Math.min(255, Math.floor(a * t + b * (1 - t))));
  const main = parseColor(config.colors.main);
  const secondary = parseColor(config.colors.secondary);
  const tertiary = config.colors.tertiary
    ? parseColor(config.colors.tertiary)
    : null;
  const quaternary = config.colors.quaternary
    ? parseColor(config.colors.quaternary)
    : null;
  const blendFactor = Math.pow(noiseVal, config.noise.colorBlendPower ?? 1.0);
  let r = blend((main >> 16) & 0xff, (secondary >> 16) & 0xff, blendFactor);
  let g = blend((main >> 8) & 0xff, (secondary >> 8) & 0xff, blendFactor);
  let b = blend(main & 0xff, secondary & 0xff, blendFactor);
  if (tertiary !== null) {
    const tertiaryWeight = Math.max(
      0,
      Math.min(1, Math.sin(noiseVal * Math.PI)),
    );
    r = blend(r, (tertiary >> 16) & 0xff, tertiaryWeight);
    g = blend(g, (tertiary >> 8) & 0xff, tertiaryWeight);
    b = blend(b, tertiary & 0xff, tertiaryWeight);
  }
  if (quaternary !== null) {
    const quaternaryWeight = Math.max(
      0,
      Math.cos((noiseVal - 0.5) * Math.PI * 2),
    );
    r = blend(r, (quaternary >> 16) & 0xff, quaternaryWeight);
    g = blend(g, (quaternary >> 8) & 0xff, quaternaryWeight);
    b = blend(b, quaternary & 0xff, quaternaryWeight);
  }
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/**
 * Generates tileable color, normal, and MR maps from a stone configuration.
 * @param config Stone configuration.
 * @param seed Random seed.
 * @returns Object containing canvases.
 */
function generateTexture(
  config: StoneConfig,
  seed: number,
): { colorCanvas: Canvas; normalCanvas: Canvas; mrCanvas: Canvas } {
  const heightMap: number[][] = [];
  for (let y = 0; y < TILE_SIZE; y++) {
    heightMap[y] = [];
    for (let x = 0; x < TILE_SIZE; x++) {
      heightMap[y][x] = generateTileableNoise(x, y, config.noise, seed);
    }
  }
  const colorCanvas = createCanvas(TILE_SIZE, TILE_SIZE);
  const colorCtx = colorCanvas.getContext("2d");
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      const noiseVal = heightMap[y][x];
      colorCtx.fillStyle = computeColorFromNoise(noiseVal, config);
      colorCtx.fillRect(x, y, 1, 1);
    }
  }
  const normalCanvas = createNormalMap(heightMap);
  const mrCanvas = createMRMap(heightMap, config);
  return { colorCanvas, normalCanvas, mrCanvas };
}

/**
 * Generates a 5x5 tiling grid of a texture.
 * @param texture Input texture (Canvas).
 * @returns Canvas with a 5x5 grid.
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

/**
 * Generates a texture atlas from an array of canvases.
 * Arranges the canvases in a grid.
 * @param textures Array of canvases.
 * @returns Atlas canvas.
 */
function generateAtlas(textures: Canvas[]): Canvas {
  const count = textures.length;
  const columns = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / columns);
  const atlasCanvas = createCanvas(columns * TILE_SIZE, rows * TILE_SIZE);
  const ctx = atlasCanvas.getContext("2d");
  textures.forEach((texture, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    ctx.drawImage(
      texture,
      col * TILE_SIZE,
      row * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE,
    );
  });
  return atlasCanvas;
}

/**
 * Mulberry32 PRNG.
 * @param initialSeed The initial seed value.
 * @returns Function that returns a pseudorandom number in [0.5, 1.5).
 */
function mulberry32(initialSeed: number): () => number {
  let t = initialSeed + 0x6d2b79f5;
  return () => {
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t = (t + Math.imul(t ^ (t >>> 7), t | 61)) ^ t;
    return (t >>> 0) / 4294967296 + 0.5;
  };
}

// ==========================================================
// Main Texture Generation with Custom Output Directories and Atlas
// ==========================================================

const stoneConfigs: { name: string; config: StoneConfig }[] = [
  { name: "agate", config: agateConfig },
  { name: "alabaster", config: alabasterConfig },
  { name: "amethyst", config: amethystConfig },
  { name: "amphibolite", config: amphiboliteConfig },
  { name: "andesite", config: andesiteConfig },
  { name: "andradite", config: andraditeConfig },
  { name: "anorthosite", config: anorthositeConfig },
  { name: "anthracite", config: anthraciteConfig },
  { name: "aquamarine", config: aquamarineConfig },
  { name: "argillite", config: argilliteConfig },
  { name: "arkose", config: arkoseConfig },
  { name: "bamboo", config: bambooConfig },
  { name: "basalt", config: basaltConfig },
  { name: "breccia", config: brecciaConfig },
  { name: "breccia_volcanic", config: brecciaVolcanicConfig },
  { name: "carbonatite", config: carbonatiteConfig },
  { name: "chalk", config: chalkConfig },
  { name: "charnockite", config: charnockiteConfig },
  { name: "chert", config: chertConfig },
  { name: "chlorite", config: chloriteConfig },
  { name: "citrine", config: citrineConfig },
  { name: "coquina", config: coquinaConfig },
  { name: "cryolite", config: cryoliteConfig },
  { name: "cuprite", config: cupriteConfig },
  { name: "dacite", config: daciteConfig },
  { name: "diamond", config: diamondConfig },
  { name: "diatomite", config: diatomiteConfig },
  { name: "diorite", config: dioriteConfig },
  { name: "diorite_quartz", config: dioriteQuartzConfig },
  { name: "dolomite", config: dolomiteConfig },
  { name: "eclogite", config: eclogiteConfig },
  { name: "emerald", config: emeraldConfig },
  { name: "felsite", config: felsiteConfig },
  { name: "flint", config: flintConfig },
  { name: "frost_marble", config: frostMarbleConfig },
  { name: "frostone", config: frostoneConfig },
  { name: "frozen_quartzite", config: frozenQuartziteConfig },
  { name: "garnet", config: garnetConfig },
  { name: "gabbro", config: gabbroConfig },
  { name: "glacial_erratic", config: glacialErraticConfig },
  { name: "gneiss", config: gneissConfig },
  { name: "gneiss_mafic", config: gneissMaficConfig },
  { name: "gossan", config: gossanConfig },
  { name: "granite", config: graniteConfig },
  { name: "granulite", config: granuliteConfig },
  { name: "greywacke", config: greywackeConfig },
  { name: "gypsum", config: gypsumConfig },
  { name: "hornfels", config: hornfelsConfig },
  { name: "huntstone", config: huntstoneConfig },
  { name: "icestone", config: icestoneConfig },
  { name: "ignimbrite", config: ignimbriteConfig },
  { name: "jadeite", config: jadeiteConfig },
  { name: "jasper_mookaite", config: jasperMookaiteConfig },
  { name: "jasper_red", config: jasperRedConfig },
  { name: "jet", config: jetConfig },
  { name: "komatiite", config: komatiiteConfig },
  { name: "kyanite", config: kyaniteConfig },
  { name: "labradorite", config: labradoriteConfig },
  { name: "lamprophyre", config: lamprophyreConfig },
  { name: "lapis", config: lapisConfig },
  { name: "larvikite", config: larvikiteConfig },
  { name: "lignite", config: ligniteConfig },
  { name: "limestone", config: limestoneConfig },
  { name: "limestone_fossiliferous", config: limestoneFossiliferousConfig },
  { name: "limestone_oolitic", config: limestoneOoliticConfig },
  { name: "magmastone", config: magmastoneConfig },
  { name: "marble", config: marbleConfig },
  { name: "marcasite", config: marcasiteConfig },
  { name: "mariposite", config: maripositeConfig },
  { name: "mica", config: micaConfig },
  { name: "mica_chlorite", config: micaChloriteConfig },
  { name: "migmatite", config: migmatiteConfig },
  { name: "monzonite", config: monzoniteConfig },
  { name: "moonstone", config: moonstoneConfig },
  { name: "mudstone", config: mudstoneConfig },
  { name: "netherite", config: netheriteConfig },
  { name: "obsidian", config: obsidianConfig },
  { name: "olivine", config: olivineConfig },
  { name: "opal", config: opalConfig },
  { name: "pahoehoe", config: pahoehoeConfig },
  { name: "pegmatite", config: pegmatiteConfig },
  { name: "peridot", config: peridotConfig },
  { name: "peridotite", config: peridotiteConfig },
  { name: "perlite", config: perliteConfig },
  { name: "permafrost", config: permafrostConfig },
  { name: "phonolite", config: phonoliteConfig },
  { name: "phyllite", config: phylliteConfig },
  { name: "porphyry", config: porphyryConfig },
  { name: "pumice", config: pumiceConfig },
  { name: "pyroclast", config: pyroclastConfig },
  { name: "quartz", config: quartzConfig },
  { name: "quartzite", config: quartziteConfig },
  { name: "quartz_red", config: quartzRedConfig },
  { name: "rhyodacite", config: rhyodaciteConfig },
  { name: "rhyolite", config: rhyoliteConfig },
  { name: "ruby", config: rubyConfig },
  { name: "sandstone", config: sandstoneConfig },
  { name: "sapphire", config: sapphireConfig },
  { name: "schist", config: schistConfig },
  { name: "schistBiotite", config: schistBiotiteConfig },
  { name: "schistBlue", config: schistBlueConfig },
  { name: "schistChlorite", config: schistChloriteConfig },
  { name: "schistGraphite", config: schistGraphiteConfig },
  { name: "schistMuscovite", config: schistMuscoviteConfig },
  { name: "scoria_red", config: scoriaRedConfig },
  { name: "serpentine", config: serpentineConfig },
  { name: "shale", config: shaleConfig },
  { name: "shale_black", config: shaleBlackConfig },
  { name: "shale_oil", config: shaleOilConfig },
  { name: "shungite", config: shungiteConfig },
  { name: "siltstone", config: siltstoneConfig },
  { name: "slate", config: slateConfig },
  { name: "slate_glacis", config: slateGlacisConfig },
  { name: "sleetstone", config: sleetstoneConfig },
  { name: "snowstone", config: snowstoneConfig },
  { name: "soapstone", config: soapstoneConfig },
  { name: "spell_slate", config: spellSlateConfig },
  { name: "spinel", config: spinelConfig },
  { name: "steatite", config: steatiteConfig },
  { name: "sulphur", config: sulphurConfig },
  { name: "syenite", config: syeniteConfig },
  { name: "talc", config: talcConfig },
  { name: "tephra", config: tephraConfig },
  { name: "tonalite_porphyritic", config: tonalitePorphyriticConfig },
  { name: "topaz", config: topazConfig },
  { name: "tourmaline", config: tourmalineConfig },
  { name: "trachyte", config: trachyteConfig },
  { name: "travertine", config: travertineConfig },
  { name: "tremolite", config: tremoliteConfig },
  { name: "tuff", config: tuffConfig },
  { name: "turquoise", config: turquoiseConfig },
  { name: "vitrophyre", config: vitrophyreConfig },
  { name: "volcanic_slag", config: volcanicSlagConfig },
  { name: "zircon", config: zirconConfig },
];

const seeds = [12345, 67890, 54321, 98765];

ensureDir(OUTPUT_DIR);
const atlasDir = path.join(OUTPUT_DIR, "atlas");
ensureDir(atlasDir);

seeds.forEach((seed) => {
  // Arrays to collect atlases for color, normal, and MR maps.
  const atlasColorTextures: Canvas[] = [];
  const atlasNormalTextures: Canvas[] = [];
  const atlasMRTextures: Canvas[] = [];

  stoneConfigs.forEach(({ name, config }) => {
    // Create output sub-folder: output/<stoneName>/seed_<seed>/
    const stoneFolder = path.join(OUTPUT_DIR, name, `seed_${seed}`);
    ensureDir(stoneFolder);

    const { colorCanvas, normalCanvas, mrCanvas } = generateTexture(
      config,
      seed,
    );
    atlasColorTextures.push(colorCanvas);
    atlasNormalTextures.push(normalCanvas);
    atlasMRTextures.push(mrCanvas);

    // Generate tiling images.
    const colorTiling = generateTilingGrid(colorCanvas);
    const normalTiling = generateTilingGrid(normalCanvas);
    const mrTiling = generateTilingGrid(mrCanvas);

    // Define file names.
    const colorFile = path.join(OUTPUT_DIR, `tex_block_stone_${name}_d.png`);
    const colorTilingFile = path.join(
      stoneFolder,
      `${name}_texture_seed_${seed}_tiling.png`,
    );
    const normalFile = path.join(OUTPUT_DIR, `tex_block_stone_${name}_n.png`);
    const normalTilingFile = path.join(
      stoneFolder,
      `${name}_normal_seed_${seed}_tiling.png`,
    );
    const mrFile = path.join(OUTPUT_DIR, `tex_block_stone_${name}_mr.png`);
    const mrTilingFile = path.join(
      stoneFolder,
      `${name}_mr_seed_${seed}_tiling.png`,
    );

    // Write image files.
    fs.writeFileSync(colorFile, colorCanvas.toBuffer("image/png"));
    fs.writeFileSync(colorTilingFile, colorTiling.toBuffer("image/png"));
    fs.writeFileSync(normalFile, normalCanvas.toBuffer("image/png"));
    fs.writeFileSync(normalTilingFile, normalTiling.toBuffer("image/png"));
    fs.writeFileSync(mrFile, mrCanvas.toBuffer("image/png"));
    fs.writeFileSync(mrTilingFile, mrTiling.toBuffer("image/png"));

    // Write metadata.
    const metadata = {
      stone: name,
      seed,
      outputFiles: {
        color: colorFile,
        colorTiling: colorTilingFile,
        normal: normalFile,
        normalTiling: normalTilingFile,
        mr: mrFile,
        mrTiling: mrTilingFile,
      },
      config: config,
    };
    const metadataFile = path.join(stoneFolder, `metadata_seed_${seed}.tson`);
    fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
  });

  // Generate atlases for this seed.
  const atlasColorCanvas = generateAtlas(atlasColorTextures);
  const atlasNormalCanvas = generateAtlas(atlasNormalTextures);
  const atlasMRCanvas = generateAtlas(atlasMRTextures);

  const atlasColorTiling = generateTilingGrid(atlasColorCanvas);
  const atlasNormalTiling = generateTilingGrid(atlasNormalCanvas);
  const atlasMRTiling = generateTilingGrid(atlasMRCanvas);

  // Save atlas images.
  const atlasColorFile = path.join(atlasDir, `atlas_color_seed_${seed}.png`);
  const atlasColorTilingFile = path.join(
    atlasDir,
    `atlas_color_seed_${seed}_tiling.png`,
  );
  const atlasNormalFile = path.join(atlasDir, `atlas_normal_seed_${seed}.png`);
  const atlasNormalTilingFile = path.join(
    atlasDir,
    `atlas_normal_seed_${seed}_tiling.png`,
  );
  const atlasMRFile = path.join(atlasDir, `atlas_mr_seed_${seed}.png`);
  const atlasMRTilingFile = path.join(
    atlasDir,
    `atlas_mr_seed_${seed}_tiling.png`,
  );

  fs.writeFileSync(atlasColorFile, atlasColorCanvas.toBuffer("image/png"));
  fs.writeFileSync(
    atlasColorTilingFile,
    atlasColorTiling.toBuffer("image/png"),
  );
  fs.writeFileSync(atlasNormalFile, atlasNormalCanvas.toBuffer("image/png"));
  fs.writeFileSync(
    atlasNormalTilingFile,
    atlasNormalTiling.toBuffer("image/png"),
  );
  fs.writeFileSync(atlasMRFile, atlasMRCanvas.toBuffer("image/png"));
  fs.writeFileSync(atlasMRTilingFile, atlasMRTiling.toBuffer("image/png"));
});
