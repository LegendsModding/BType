import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilClay
 * @description TODO: Add description for block badger:block_soil_clay
 * @example
 * // Example usage:
 * import { blockSoilClay } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilClay = new BlockBuilder("badger:block_soil_clay", "badger_dirt")
  .setBlockShape({
    shape: "cube",
    directionalTexture: true,
    directionalShape: true,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .build();

blockRegistry.addBlock("badger:block_soil_clay", blockSoilClay);

export { blockSoilClay };
