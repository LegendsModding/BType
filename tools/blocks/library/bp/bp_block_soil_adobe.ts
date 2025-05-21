import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilAdobe
 * @description TODO: Add description for block badger:block_soil_adobe
 * @example
 * // Example usage:
 * import { blockSoilAdobe } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilAdobe = new BlockBuilder(
  "badger:block_soil_adobe",
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

blockRegistry.addBlock("badger:block_soil_adobe", blockSoilAdobe);

export { blockSoilAdobe };
