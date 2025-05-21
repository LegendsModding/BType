import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneLimestoneFossiliferous
 * @description TODO: Add description for block badger:block_stone_limestone_fossiliferous
 * @example
 * // Example usage:
 * import { blockStoneLimestoneFossiliferous } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneLimestoneFossiliferous = new BlockBuilder(
  "badger:block_stone_limestone_fossiliferous",
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
  "badger:block_stone_limestone_fossiliferous",
  blockStoneLimestoneFossiliferous,
);

export { blockStoneLimestoneFossiliferous };
