import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSandstone
 * @description TODO: Add description for block badger:block_stone_sandstone
 * @example
 * // Example usage:
 * import { blockStoneSandstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSandstone = new BlockBuilder(
  "badger:block_stone_sandstone",
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

blockRegistry.addBlock("badger:block_stone_sandstone", blockStoneSandstone);

export { blockStoneSandstone };
