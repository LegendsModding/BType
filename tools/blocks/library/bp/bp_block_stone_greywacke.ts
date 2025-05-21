import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGreywacke
 * @description TODO: Add description for block badger:block_stone_greywacke
 * @example
 * // Example usage:
 * import { blockStoneGreywacke } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGreywacke = new BlockBuilder(
  "badger:block_stone_greywacke",
  "badger_stone",
)
  .setBlockShape({
    shape: "cube",
    directionalTexture: false,
    directionalShape: false,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .setTerrainType("stone")
  .setBlockType(["stone"])
  .build();

blockRegistry.addBlock("badger:block_stone_greywacke", blockStoneGreywacke);

export { blockStoneGreywacke };
