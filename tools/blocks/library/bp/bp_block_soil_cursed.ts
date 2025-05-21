import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilCursed
 * @description TODO: Add description for block badger:block_soil_cursed
 * @example
 * // Example usage:
 * import { blockSoilCursed } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilCursed = new BlockBuilder(
  "badger:block_soil_cursed",
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

blockRegistry.addBlock("badger:block_soil_cursed", blockSoilCursed);

export { blockSoilCursed };
