import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilCrackedEarth
 * @description TODO: Add description for block badger:block_soil_cracked_earth
 * @example
 * // Example usage:
 * import { blockSoilCrackedEarth } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilCrackedEarth = new BlockBuilder(
  "badger:block_soil_cracked_earth",
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

blockRegistry.addBlock(
  "badger:block_soil_cracked_earth",
  blockSoilCrackedEarth,
);

export { blockSoilCrackedEarth };
