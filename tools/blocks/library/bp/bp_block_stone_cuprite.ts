import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneCuprite
 * @description TODO: Add description for block badger:block_stone_cuprite
 * @example
 * // Example usage:
 * import { blockStoneCuprite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneCuprite = new BlockBuilder(
  "badger:block_stone_cuprite",
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

blockRegistry.addBlock("badger:block_stone_cuprite", blockStoneCuprite);

export { blockStoneCuprite };
