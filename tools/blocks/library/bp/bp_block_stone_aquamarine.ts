import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneAquamarine
 * @description TODO: Add description for block badger:block_stone_aquamarine
 * @example
 * // Example usage:
 * import { blockStoneAquamarine } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneAquamarine = new BlockBuilder(
  "badger:block_stone_aquamarine",
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

blockRegistry.addBlock("badger:block_stone_aquamarine", blockStoneAquamarine);

export { blockStoneAquamarine };
