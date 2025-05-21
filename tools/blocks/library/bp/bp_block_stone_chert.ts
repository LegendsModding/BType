import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneChert
 * @description TODO: Add description for block badger:block_stone_chert
 * @example
 * // Example usage:
 * import { blockStoneChert } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneChert = new BlockBuilder(
  "badger:block_stone_chert",
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

blockRegistry.addBlock("badger:block_stone_chert", blockStoneChert);

export { blockStoneChert };
