import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTurquoise
 * @description TODO: Add description for block badger:block_stone_turquoise
 * @example
 * // Example usage:
 * import { blockStoneTurquoise } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTurquoise = new BlockBuilder(
  "badger:block_stone_turquoise",
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

blockRegistry.addBlock("badger:block_stone_turquoise", blockStoneTurquoise);

export { blockStoneTurquoise };
