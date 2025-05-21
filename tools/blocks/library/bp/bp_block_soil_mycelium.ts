import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilMycelium
 * @description TODO: Add description for block badger:block_soil_mycelium
 * @example
 * // Example usage:
 * import { blockSoilMycelium } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilMycelium = new BlockBuilder(
  "badger:block_soil_mycelium",
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

blockRegistry.addBlock("badger:block_soil_mycelium", blockSoilMycelium);

export { blockSoilMycelium };
