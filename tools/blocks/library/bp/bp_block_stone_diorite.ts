import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneDiorite
 * @description TODO: Add description for block badger:block_stone_diorite
 * @example
 * // Example usage:
 * import { blockStoneDiorite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneDiorite = new BlockBuilder(
  "badger:block_stone_diorite",
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

blockRegistry.addBlock("badger:block_stone_diorite", blockStoneDiorite);

export { blockStoneDiorite };
