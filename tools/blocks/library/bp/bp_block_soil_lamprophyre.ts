import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilLamprophyre
 * @description TODO: Add description for block badger:block_soil_lamprophyre
 * @example
 * // Example usage:
 * import { blockSoilLamprophyre } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilLamprophyre = new BlockBuilder(
  "badger:block_soil_lamprophyre",
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

blockRegistry.addBlock("badger:block_soil_lamprophyre", blockSoilLamprophyre);

export { blockSoilLamprophyre };
