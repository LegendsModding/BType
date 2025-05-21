import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilAsh
 * @description TODO: Add description for block badger:block_soil_ash
 * @example
 * // Example usage:
 * import { blockSoilAsh } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilAsh = new BlockBuilder("badger:block_soil_ash", "badger_dirt")
  .setBlockShape({
    shape: "cube",
    directionalTexture: true,
    directionalShape: true,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .build();

blockRegistry.addBlock("badger:block_soil_ash", blockSoilAsh);

export { blockSoilAsh };
