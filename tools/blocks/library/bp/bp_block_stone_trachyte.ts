import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTrachyte
 * @description TODO: Add description for block badger:block_stone_trachyte
 * @example
 * // Example usage:
 * import { blockStoneTrachyte } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTrachyte = new BlockBuilder(
  "badger:block_stone_trachyte",
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

blockRegistry.addBlock("badger:block_stone_trachyte", blockStoneTrachyte);

export { blockStoneTrachyte };
