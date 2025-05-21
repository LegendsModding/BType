import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockGrassAlpine
 * @description TODO: Add description for block badger:block_grass_alpine
 * @example
 * // Example usage:
 * import { grass } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockGrassAlpine = new BlockBuilder(
  "badger:block_grass_alpine",
  "badger_grass",
)
  .setDestroyTime(10)
  .setTerrainType("grass")
  .setBlockType(["grass"])
  .build();

blockRegistry.addBlock("badger:block_grass_alpine", blockGrassAlpine);

export { blockGrassAlpine };
