import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilHumus
 * @description TODO: Add description for block badger:block_soil_humus
 * @example
 * // Example usage:
 * import { blockSoilHumus } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilHumus = new BlockBuilder(
  "badger:block_soil_humus",
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

blockRegistry.addBlock("badger:block_soil_humus", blockSoilHumus);

export { blockSoilHumus };
