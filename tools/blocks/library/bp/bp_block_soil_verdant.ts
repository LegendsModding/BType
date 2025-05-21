import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilVerdant
 * @description TODO: Add description for block badger:block_soil_verdant
 * @example
 * // Example usage:
 * import { blockSoilVerdant } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilVerdant = new BlockBuilder(
  "badger:block_soil_verdant",
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

blockRegistry.addBlock("badger:block_soil_verdant", blockSoilVerdant);

export { blockSoilVerdant };
