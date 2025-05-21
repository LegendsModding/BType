import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneLapis
 * @description TODO: Add description for block badger:block_stone_lapis
 * @example
 * // Example usage:
 * import { blockStoneLapis } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneLapis = new BlockBuilder(
  "badger:block_stone_lapis",
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

blockRegistry.addBlock("badger:block_stone_lapis", blockStoneLapis);

export { blockStoneLapis };
