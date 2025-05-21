import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSleetstone
 * @description TODO: Add description for block badger:block_stone_sleetstone
 * @example
 * // Example usage:
 * import { blockStoneSleetstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSleetstone = new BlockBuilder(
  "badger:block_stone_sleetstone",
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

blockRegistry.addBlock("badger:block_stone_sleetstone", blockStoneSleetstone);

export { blockStoneSleetstone };
