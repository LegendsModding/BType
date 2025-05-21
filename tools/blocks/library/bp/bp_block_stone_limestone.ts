import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneLimestone
 * @description TODO: Add description for block badger:block_stone_limestone
 * @example
 * // Example usage:
 * import { blockStoneLimestone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneLimestone = new BlockBuilder(
  "badger:block_stone_limestone",
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

blockRegistry.addBlock("badger:block_stone_limestone", blockStoneLimestone);

export { blockStoneLimestone };
