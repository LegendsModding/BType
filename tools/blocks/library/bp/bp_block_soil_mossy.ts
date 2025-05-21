import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilMossy
 * @description TODO: Add description for block badger:block_soil_mossy
 * @example
 * // Example usage:
 * import { blockSoilMossy } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilMossy = new BlockBuilder(
  "badger:block_soil_mossy",
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

blockRegistry.addBlock("badger:block_soil_mossy", blockSoilMossy);

export { blockSoilMossy };
