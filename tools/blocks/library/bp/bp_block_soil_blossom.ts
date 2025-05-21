import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilBlossom
 * @description TODO: Add description for block badger:block_soil_blossom
 * @example
 * // Example usage:
 * import { blockSoilBlossom } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilBlossom = new BlockBuilder(
  "badger:block_soil_blossom",
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

blockRegistry.addBlock("badger:block_soil_blossom", blockSoilBlossom);

export { blockSoilBlossom };
