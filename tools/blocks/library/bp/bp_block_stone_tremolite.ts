import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTremolite
 * @description TODO: Add description for block badger:block_stone_tremolite
 * @example
 * // Example usage:
 * import { blockStoneTremolite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTremolite = new BlockBuilder(
  "badger:block_stone_tremolite",
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

blockRegistry.addBlock("badger:block_stone_tremolite", blockStoneTremolite);

export { blockStoneTremolite };
