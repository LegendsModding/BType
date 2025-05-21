import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGranite
 * @description TODO: Add description for block badger:block_stone_granite
 * @example
 * // Example usage:
 * import { blockStoneGranite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGranite = new BlockBuilder(
  "badger:block_stone_granite",
  "badger_stone",
)
  .setBlockShape({
    shape: "cube",
    directionalTexture: false,
    directionalShape: false,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .setTerrainType("stone")
  .setBlockType(["stone"])
  .build();

blockRegistry.addBlock("badger:block_stone_granite", blockStoneGranite);

export { blockStoneGranite };
