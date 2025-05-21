import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneDolomite
 * @description TODO: Add description for block badger:block_stone_dolomite
 * @example
 * // Example usage:
 * import { blockStoneDolomite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneDolomite = new BlockBuilder(
  "badger:block_stone_dolomite",
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

blockRegistry.addBlock("badger:block_stone_dolomite", blockStoneDolomite);

export { blockStoneDolomite };
