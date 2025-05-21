import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockGrassLemon
 * @description TODO: Add description for block badger:block_grass_lemon
 * @example
 * // Example usage:
 * import { grass } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockGrassLemon = new BlockBuilder(
  "badger:block_grass_lemon",
  "badger_grass",
)
  .setDestroyTime(10)
  .setTerrainType("grass")
  .setBlockType(["grass"])
  .build();

blockRegistry.addBlock("badger:block_grass_lemon", blockGrassLemon);

export { blockGrassLemon };
