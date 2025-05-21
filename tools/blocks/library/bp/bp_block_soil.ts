import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoil
 * @description TODO: Add description for block badger:block_soil
 * @example
 * // Example usage:
 * import { blockSoil } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoil = new BlockBuilder("badger:block_soil", "badger_dirt")
  .setBlockShape({
    shape: "cube",
    directionalTexture: true,
    directionalShape: true,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .build();

blockRegistry.addBlock("badger:block_soil", blockSoil);

export { blockSoil };
