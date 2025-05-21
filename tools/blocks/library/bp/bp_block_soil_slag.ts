import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilSlag
 * @description TODO: Add description for block badger:block_soil_slag
 * @example
 * // Example usage:
 * import { blockSoilSlag } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilSlag = new BlockBuilder("badger:block_soil_slag", "badger_dirt")
  .setBlockShape({
    shape: "cube",
    directionalTexture: true,
    directionalShape: true,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .build();

blockRegistry.addBlock("badger:block_soil_slag", blockSoilSlag);

export { blockSoilSlag };
