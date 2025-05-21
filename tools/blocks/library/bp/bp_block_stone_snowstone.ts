import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSnowstone
 * @description TODO: Add description for block badger:block_stone_snowstone
 * @example
 * // Example usage:
 * import { blockStoneSnowstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSnowstone = new BlockBuilder(
  "badger:block_stone_snowstone",
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

blockRegistry.addBlock("badger:block_stone_snowstone", blockStoneSnowstone);

export { blockStoneSnowstone };
