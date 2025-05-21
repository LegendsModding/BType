import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneDioriteQuartz
 * @description TODO: Add description for block badger:block_stone_diorite_quartz
 * @example
 * // Example usage:
 * import { blockStoneDioriteQuartz } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneDioriteQuartz = new BlockBuilder(
  "badger:block_stone_diorite_quartz",
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

blockRegistry.addBlock(
  "badger:block_stone_diorite_quartz",
  blockStoneDioriteQuartz,
);

export { blockStoneDioriteQuartz };
