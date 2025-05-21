import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePahoehoe
 * @description TODO: Add description for block badger:block_stone_pahoehoe
 * @example
 * // Example usage:
 * import { blockStonePahoehoe } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePahoehoe = new BlockBuilder(
  "badger:block_stone_pahoehoe",
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

blockRegistry.addBlock("badger:block_stone_pahoehoe", blockStonePahoehoe);

export { blockStonePahoehoe };
