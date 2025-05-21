import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneLimestoneOolitic
 * @description TODO: Add description for block badger:block_stone_limestone_oolitic
 * @example
 * // Example usage:
 * import { blockStoneLimestoneOolitic } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneLimestoneOolitic = new BlockBuilder(
  "badger:block_stone_limestone_oolitic",
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
  "badger:block_stone_limestone_oolitic",
  blockStoneLimestoneOolitic,
);

export { blockStoneLimestoneOolitic };
