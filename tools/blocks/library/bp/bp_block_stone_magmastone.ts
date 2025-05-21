import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMagmastone
 * @description TODO: Add description for block badger:block_stone_magmastone
 * @example
 * // Example usage:
 * import { blockStoneMagmastone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMagmastone = new BlockBuilder(
  "badger:block_stone_magmastone",
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

blockRegistry.addBlock("badger:block_stone_magmastone", blockStoneMagmastone);

export { blockStoneMagmastone };
