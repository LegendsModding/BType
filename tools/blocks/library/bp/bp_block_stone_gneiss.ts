import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGneiss
 * @description TODO: Add description for block badger:block_stone_gneiss
 * @example
 * // Example usage:
 * import { blockStoneGneiss } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGneiss = new BlockBuilder(
  "badger:block_stone_gneiss",
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

blockRegistry.addBlock("badger:block_stone_gneiss", blockStoneGneiss);

export { blockStoneGneiss };
