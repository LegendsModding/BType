import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePermafrost
 * @description TODO: Add description for block badger:block_stone_permafrost
 * @example
 * // Example usage:
 * import { blockStonePermafrost } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePermafrost = new BlockBuilder(
  "badger:block_stone_permafrost",
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

blockRegistry.addBlock("badger:block_stone_permafrost", blockStonePermafrost);

export { blockStonePermafrost };
