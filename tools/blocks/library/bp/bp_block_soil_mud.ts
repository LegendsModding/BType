import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilMud
 * @description TODO: Add description for block badger:block_soil_mud
 * @example
 * // Example usage:
 * import { blockSoilMud } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilMud = new BlockBuilder("badger:block_soil_mud", "badger_dirt")
  .setBlockShape({
    shape: "cube",
    directionalTexture: true,
    directionalShape: true,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .build();

blockRegistry.addBlock("badger:block_soil_mud", blockSoilMud);

export { blockSoilMud };
