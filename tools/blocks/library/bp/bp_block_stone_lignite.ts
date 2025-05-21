import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneLignite
 * @description TODO: Add description for block badger:block_stone_lignite
 * @example
 * // Example usage:
 * import { blockStoneLignite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneLignite = new BlockBuilder(
  "badger:block_stone_lignite",
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

blockRegistry.addBlock("badger:block_stone_lignite", blockStoneLignite);

export { blockStoneLignite };
