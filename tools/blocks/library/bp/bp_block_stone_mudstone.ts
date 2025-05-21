import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMudstone
 * @description TODO: Add description for block badger:block_stone_mudstone
 * @example
 * // Example usage:
 * import { blockStoneMudstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMudstone = new BlockBuilder(
  "badger:block_stone_mudstone",
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

blockRegistry.addBlock("badger:block_stone_mudstone", blockStoneMudstone);

export { blockStoneMudstone };
