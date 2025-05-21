import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneFrostone
 * @description TODO: Add description for block badger:block_stone_frostone
 * @example
 * // Example usage:
 * import { blockStoneFrostone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneFrostone = new BlockBuilder(
  "badger:block_stone_frostone",
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

blockRegistry.addBlock("badger:block_stone_frostone", blockStoneFrostone);

export { blockStoneFrostone };
