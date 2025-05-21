import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneOpal
 * @description TODO: Add description for block badger:block_stone_opal
 * @example
 * // Example usage:
 * import { blockStoneOpal } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneOpal = new BlockBuilder(
  "badger:block_stone_opal",
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

blockRegistry.addBlock("badger:block_stone_opal", blockStoneOpal);

export { blockStoneOpal };
