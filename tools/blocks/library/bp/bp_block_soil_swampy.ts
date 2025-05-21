import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilSwampy
 * @description TODO: Add description for block badger:block_soil_swampy
 * @example
 * // Example usage:
 * import { blockSoilSwampy } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilSwampy = new BlockBuilder(
  "badger:block_soil_swampy",
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

blockRegistry.addBlock("badger:block_soil_swampy", blockSoilSwampy);

export { blockSoilSwampy };
