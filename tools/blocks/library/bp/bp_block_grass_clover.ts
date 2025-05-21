import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockGrassClover
 * @description TODO: Add description for block badger:block_grass_clover
 * @example
 * // Example usage:
 * import { grass } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockGrassClover = new BlockBuilder(
  "badger:block_grass_clover",
  "badger_grass",
)
  .setDestroyTime(10)
  .setTerrainType("grass")
  .setBlockType(["grass"])
  .build();

blockRegistry.addBlock("badger:block_grass_clover", blockGrassClover);

export { blockGrassClover };
