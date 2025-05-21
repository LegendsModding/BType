import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePeridot
 * @description TODO: Add description for block badger:block_stone_peridot
 * @example
 * // Example usage:
 * import { blockStonePeridot } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePeridot = new BlockBuilder(
  "badger:block_stone_peridot",
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

blockRegistry.addBlock("badger:block_stone_peridot", blockStonePeridot);

export { blockStonePeridot };
