import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneQuartz
 * @description TODO: Add description for block badger:block_stone_quartz
 * @example
 * // Example usage:
 * import { blockStoneQuartz } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneQuartz = new BlockBuilder(
  "badger:block_stone_quartz",
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

blockRegistry.addBlock("badger:block_stone_quartz", blockStoneQuartz);

export { blockStoneQuartz };
