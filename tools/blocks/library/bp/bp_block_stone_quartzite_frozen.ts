import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneQuartziteFrozen
 * @description TODO: Add description for block badger:block_stone_quartzite_frozen
 * @example
 * // Example usage:
 * import { blockStoneQuartziteFrozen } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneQuartziteFrozen = new BlockBuilder(
  "badger:block_stone_quartzite_frozen",
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

blockRegistry.addBlock(
  "badger:block_stone_quartzite_frozen",
  blockStoneQuartziteFrozen,
);

export { blockStoneQuartziteFrozen };
