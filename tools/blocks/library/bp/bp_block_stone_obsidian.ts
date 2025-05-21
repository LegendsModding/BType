import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneObsidian
 * @description TODO: Add description for block badger:block_stone_obsidian
 * @example
 * // Example usage:
 * import { blockStoneObsidian } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneObsidian = new BlockBuilder(
  "badger:block_stone_obsidian",
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

blockRegistry.addBlock("badger:block_stone_obsidian", blockStoneObsidian);

export { blockStoneObsidian };
