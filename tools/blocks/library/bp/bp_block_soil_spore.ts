import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilSpore
 * @description TODO: Add description for block badger:block_soil_spore
 * @example
 * // Example usage:
 * import { blockSoilSpore } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilSpore = new BlockBuilder(
  "badger:block_soil_spore",
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

blockRegistry.addBlock("badger:block_soil_spore", blockSoilSpore);

export { blockSoilSpore };
