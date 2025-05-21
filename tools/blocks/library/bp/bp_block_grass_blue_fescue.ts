import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockGrassBlueFescue
 * @description TODO: Add description for block badger:block_grass_blue_fescue
 * @example
 * // Example usage:
 * import { grass } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockGrassBlueFescue = new BlockBuilder(
  "badger:block_grass_blue_fescue",
  "badger_grass",
)
  .setDestroyTime(10)
  .setTerrainType("grass")
  .setBlockType(["grass"])
  .build();

blockRegistry.addBlock("badger:block_grass_blue_fescue", blockGrassBlueFescue);

export { blockGrassBlueFescue };
