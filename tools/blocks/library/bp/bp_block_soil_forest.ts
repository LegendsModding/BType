import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilForest
 * @description TODO: Add description for block badger:block_soil_forest
 * @example
 * // Example usage:
 * import { blockSoilForest } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilForest = new BlockBuilder(
  "badger:block_soil_forest",
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

blockRegistry.addBlock("badger:block_soil_forest", blockSoilForest);

export { blockSoilForest };
