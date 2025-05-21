import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePumice
 * @description TODO: Add description for block badger:block_stone_pumice
 * @example
 * // Example usage:
 * import { blockStonePumice } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePumice = new BlockBuilder(
  "badger:block_stone_pumice",
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

blockRegistry.addBlock("badger:block_stone_pumice", blockStonePumice);

export { blockStonePumice };
