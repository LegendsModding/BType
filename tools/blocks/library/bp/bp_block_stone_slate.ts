import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSlate
 * @description TODO: Add description for block badger:block_stone_slate
 * @example
 * // Example usage:
 * import { blockStoneSlate } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSlate = new BlockBuilder(
  "badger:block_stone_slate",
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

blockRegistry.addBlock("badger:block_stone_slate", blockStoneSlate);

export { blockStoneSlate };
