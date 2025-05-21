import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneChalk
 * @description TODO: Add description for block badger:block_stone_chalk
 * @example
 * // Example usage:
 * import { blockStoneChalk } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneChalk = new BlockBuilder(
  "badger:block_stone_chalk",
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

blockRegistry.addBlock("badger:block_stone_chalk", blockStoneChalk);

export { blockStoneChalk };
