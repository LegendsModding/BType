import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTuff
 * @description TODO: Add description for block badger:block_stone_tuff
 * @example
 * // Example usage:
 * import { blockStoneTuff } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTuff = new BlockBuilder(
  "badger:block_stone_tuff",
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

blockRegistry.addBlock("badger:block_stone_tuff", blockStoneTuff);

export { blockStoneTuff };
