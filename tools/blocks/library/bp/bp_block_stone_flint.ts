import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneFlint
 * @description TODO: Add description for block badger:block_stone_flint
 * @example
 * // Example usage:
 * import { blockStoneFlint } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneFlint = new BlockBuilder(
  "badger:block_stone_flint",
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

blockRegistry.addBlock("badger:block_stone_flint", blockStoneFlint);

export { blockStoneFlint };
