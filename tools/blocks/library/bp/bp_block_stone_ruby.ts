import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneRuby
 * @description TODO: Add description for block badger:block_stone_ruby
 * @example
 * // Example usage:
 * import { blockStoneRuby } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneRuby = new BlockBuilder(
  "badger:block_stone_ruby",
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

blockRegistry.addBlock("badger:block_stone_ruby", blockStoneRuby);

export { blockStoneRuby };
