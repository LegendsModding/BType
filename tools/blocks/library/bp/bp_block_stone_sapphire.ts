import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSapphire
 * @description TODO: Add description for block badger:block_stone_sapphire
 * @example
 * // Example usage:
 * import { blockStoneSapphire } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSapphire = new BlockBuilder(
  "badger:block_stone_sapphire",
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

blockRegistry.addBlock("badger:block_stone_sapphire", blockStoneSapphire);

export { blockStoneSapphire };
