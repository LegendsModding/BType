import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSerpentine
 * @description TODO: Add description for block badger:block_stone_serpentine
 * @example
 * // Example usage:
 * import { blockStoneSerpentine } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSerpentine = new BlockBuilder(
  "badger:block_stone_serpentine",
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

blockRegistry.addBlock("badger:block_stone_serpentine", blockStoneSerpentine);

export { blockStoneSerpentine };
