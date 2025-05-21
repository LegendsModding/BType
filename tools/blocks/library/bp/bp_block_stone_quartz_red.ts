import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneQuartzRed
 * @description TODO: Add description for block badger:block_stone_quartz_red
 * @example
 * // Example usage:
 * import { blockStoneQuartzRed } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneQuartzRed = new BlockBuilder(
  "badger:block_stone_quartz_red",
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

blockRegistry.addBlock("badger:block_stone_quartz_red", blockStoneQuartzRed);

export { blockStoneQuartzRed };
