import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilLoamy
 * @description TODO: Add description for block badger:block_soil_loamy
 * @example
 * // Example usage:
 * import { blockSoilLoamy } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilLoamy = new BlockBuilder(
  "badger:block_soil_loamy",
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

blockRegistry.addBlock("badger:block_soil_loamy", blockSoilLoamy);

export { blockSoilLoamy };
