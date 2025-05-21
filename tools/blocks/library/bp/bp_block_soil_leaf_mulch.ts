import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilLeafMulch
 * @description TODO: Add description for block badger:block_soil_leaf_mulch
 * @example
 * // Example usage:
 * import { blockSoilLeafMulch } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilLeafMulch = new BlockBuilder(
  "badger:block_soil_leaf_mulch",
  "badger_dirt",
)
  .setBlockShape({
    shape: "cube",
    directionalTexture: true,
    directionalShape: true,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .build();

blockRegistry.addBlock("badger:block_soil_leaf_mulch", blockSoilLeafMulch);

export { blockSoilLeafMulch };
