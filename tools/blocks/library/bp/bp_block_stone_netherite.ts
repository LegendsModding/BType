import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneNetherite
 * @description TODO: Add description for block badger:block_stone_netherite
 * @example
 * // Example usage:
 * import { blockStoneNetherite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneNetherite = new BlockBuilder(
  "badger:block_stone_netherite",
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

blockRegistry.addBlock("badger:block_stone_netherite", blockStoneNetherite);

export { blockStoneNetherite };
