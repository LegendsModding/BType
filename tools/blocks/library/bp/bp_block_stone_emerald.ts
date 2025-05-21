import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneEmerald
 * @description TODO: Add description for block badger:block_stone_emerald
 * @example
 * // Example usage:
 * import { blockStoneEmerald } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneEmerald = new BlockBuilder(
  "badger:block_stone_emerald",
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

blockRegistry.addBlock("badger:block_stone_emerald", blockStoneEmerald);

export { blockStoneEmerald };
