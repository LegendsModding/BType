import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";
import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";

/**
 * @name blockSoilPeatyMudstone
 * @description TODO: Add description for block badger:block_soil_peaty_mudstone
 * @example
 * // Example usage:
 * import { blockSoilPeatyMudstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockSoilPeatyMudstone = new BlockBuilder(
  "badger:block_soil_peaty_mudstone",
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

blockRegistry.addBlock(
  "badger:block_soil_peaty_mudstone",
  blockSoilPeatyMudstone,
);

export { blockSoilPeatyMudstone };
