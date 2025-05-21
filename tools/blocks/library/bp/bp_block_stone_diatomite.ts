import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneDiatomite
 * @description TODO: Add description for block badger:block_stone_diatomite
 * @example
 * // Example usage:
 * import { blockStoneDiatomite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneDiatomite = new BlockBuilder(
  "badger:block_stone_diatomite",
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

blockRegistry.addBlock("badger:block_stone_diatomite", blockStoneDiatomite);

export { blockStoneDiatomite };
