import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockGrassHeath
 * @description TODO: Add description for block badger:block_grass_heath
 * @example
 * // Example usage:
 * import { grass } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockGrassHeath = new BlockBuilder(
  "badger:block_grass_heath",
  "badger_grass",
)
  .setDestroyTime(10)
  .setTerrainType("grass")
  .setBlockType(["grass"])
  .build();

blockRegistry.addBlock("badger:block_grass_heath", blockGrassHeath);

export { blockGrassHeath };
