import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilPeaty
 * @description TODO: Add description for block badger:block_soil_peaty
 * @example
 * // Example usage:
 * import { blockSoilPeaty } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilPeaty = new BlockBuilder(
  "badger:block_soil_peaty",
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

blockRegistry.addBlock("badger:block_soil_peaty", blockSoilPeaty);

export { blockSoilPeaty };
