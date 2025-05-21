import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTalc
 * @description TODO: Add description for block badger:block_stone_talc
 * @example
 * // Example usage:
 * import { blockStoneTalc } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTalc = new BlockBuilder(
  "badger:block_stone_talc",
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

blockRegistry.addBlock("badger:block_stone_talc", blockStoneTalc);

export { blockStoneTalc };
