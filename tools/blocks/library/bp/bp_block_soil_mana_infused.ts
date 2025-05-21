import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilManaInfused
 * @description TODO: Add description for block badger:block_soil_mana_infused
 * @example
 * // Example usage:
 * import { blockSoilManaInfused } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilManaInfused = new BlockBuilder(
  "badger:block_soil_mana_infused",
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

blockRegistry.addBlock("badger:block_soil_mana_infused", blockSoilManaInfused);

export { blockSoilManaInfused };
