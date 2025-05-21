import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneIgnimbrite
 * @description TODO: Add description for block badger:block_stone_ignimbrite
 * @example
 * // Example usage:
 * import { blockStoneIgnimbrite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneIgnimbrite = new BlockBuilder(
  "badger:block_stone_ignimbrite",
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

blockRegistry.addBlock("badger:block_stone_ignimbrite", blockStoneIgnimbrite);

export { blockStoneIgnimbrite };
