import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilSandyRed
 * @description TODO: Add description for block badger:block_soil_sandy_red
 * @example
 * // Example usage:
 * import { blockSoilSandyRed } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilSandyRed = new BlockBuilder(
  "badger:block_soil_sandy_red",
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

blockRegistry.addBlock("badger:block_soil_sandy_red", blockSoilSandyRed);

export { blockSoilSandyRed };
