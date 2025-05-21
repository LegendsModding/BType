import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGlacialErratic
 * @description TODO: Add description for block badger:block_stone_glacial_erratic
 * @example
 * // Example usage:
 * import { blockStoneGlacialErratic } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGlacialErratic = new BlockBuilder(
  "badger:block_stone_glacial_erratic",
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
  "badger:block_stone_glacial_erratic",
  blockStoneGlacialErratic,
);

export { blockStoneGlacialErratic };
