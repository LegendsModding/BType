import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneQuartzite
 * @description TODO: Add description for block badger:block_stone_quartzite
 * @example
 * // Example usage:
 * import { blockStoneQuartzite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneQuartzite = new BlockBuilder(
  "badger:block_stone_quartzite",
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

blockRegistry.addBlock("badger:block_stone_quartzite", blockStoneQuartzite);

export { blockStoneQuartzite };
