import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneDiamond
 * @description TODO: Add description for block badger:block_stone_diamond
 * @example
 * // Example usage:
 * import { blockStoneDiamond } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneDiamond = new BlockBuilder(
  "badger:block_stone_diamond",
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

blockRegistry.addBlock("badger:block_stone_diamond", blockStoneDiamond);

export { blockStoneDiamond };
