import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSlateGlacis
 * @description TODO: Add description for block badger:block_stone_slate_glacis
 * @example
 * // Example usage:
 * import { blockStoneSlateGlacis } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSlateGlacis = new BlockBuilder(
  "badger:block_stone_slate_glacis",
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
  "badger:block_stone_slate_glacis",
  blockStoneSlateGlacis,
);

export { blockStoneSlateGlacis };
