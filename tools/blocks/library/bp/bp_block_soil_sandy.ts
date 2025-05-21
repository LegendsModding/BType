import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilSandy
 * @description TODO: Add description for block badger:block_soil_sandy
 * @example
 * // Example usage:
 * import { blockSoilSandy } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilSandy = new BlockBuilder(
  "badger:block_soil_sandy",
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

blockRegistry.addBlock("badger:block_soil_sandy", blockSoilSandy);

export { blockSoilSandy };
