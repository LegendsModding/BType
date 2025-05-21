import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneOlivine
 * @description TODO: Add description for block badger:block_stone_olivine
 * @example
 * // Example usage:
 * import { blockStoneOlivine } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneOlivine = new BlockBuilder(
  "badger:block_stone_olivine",
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

blockRegistry.addBlock("badger:block_stone_olivine", blockStoneOlivine);

export { blockStoneOlivine };
