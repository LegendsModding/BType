import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockGrassPeaty
 * @description TODO: Add description for block badger:block_grass_peaty
 * @example
 * // Example usage:
 * import { grass } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockGrassPeaty = new BlockBuilder(
  "badger:block_grass_peaty",
  "badger_grass",
)
  .setDestroyTime(10)
  .setTerrainType("grass")
  .setBlockType(["grass"])
  .build();

blockRegistry.addBlock("badger:block_grass_peaty", blockGrassPeaty);

export { blockGrassPeaty };
